<?php
/**
 * Main database connection class.
 * Catches and logs all PDO Exceptions and throws DBExceptions in case of errors

 * @copyright 2007-2021 Julian Bogdani
 * @license AGPL-3.0; see LICENSE
 */

namespace DB;

use DB\DBInterface;
use DB\DBException;
use Monolog\Logger;

class DB implements DBInterface
{

	/**
	 *
	 * Database instance
	 * @var object
	 */
	private $pdo;
	private $db_engine;
	private $app;
	private $log;

	private $path_to_root;

	/**
	 *
	 * Load connection info and starts PDO object
	 * @param string $app	application to work with
	 * @param array $custom_connection
	 * 		db_engine
	 * 		db_path, for sqlite
	 * 		db_name, for mysql and pgsql
	 * 		db_username, for mysql and pgsql
	 * 		db_password, for mysql and pgsql
	 * 		db_host, for mysql and pgsql
	 * 		db_port, for mysql and pgsql, optional
	 * @throws DBException
	 */
	public function __construct(string $app = null, array $custom_connection = null)
	{
		$this->path_to_root = __DIR__ . '/../../';
		$this->app = $app;

		if (!$this->app){
			throw new DBException("No valid app provided: cannot start database object");
		}
		if ($custom_connection){
			$cfg = $custom_connection;
		} else if ($this->app){
			$cfg = $this->getConnectionDataFromCfg($this->app);
		} else {
			throw new DBException("Cannot resolve DB connection information");
		}

		list ($db_engine, $dsn, $username, $password) = $this->validateParseConnectionData($cfg);

		$this->initializePDO($db_engine, $dsn, $username, $password);
	}

	public function setLog(Logger $log)
	{
		$this->log = $log;
	}

	/**
	 * returns current app name
	 */
	public function getApp(): string
	{
		return $this->app;
	}

	/**
	 *
	 * Returns current database engine
	 */
	public function getEngine(): string
	{
		return $this->db_engine;
	}

	public function execInTransaction(string $sql): bool
	{
		$ret = false;
		try {
			$this->pdo->beginTransaction();
			$ret = $this->pdo->exec($sql);
			$this->pdo->commit();
		} catch (DBException $th) {
			$this->pdo->rollBack();
			$this->log->error($th);
			// Already logged
		} catch (\Throwable $th) {
			$this->pdo->rollBack();
			$this->log->error($th);
		}
		return ($ret !== false);
	}

	public function exec(string $sql): bool
	{
		try {
			return $this->pdo->exec($sql) !== false;
		} catch (\PDOException $e) {
			if ($this->log){
				$this->log->error($e, [$sql]);
			}
			throw new DBException($e);
		}
	}

	public function backupBeforeEdit ( string $table, int $id, string $query, array $values = []): void
	{
		try {
			// Get record from database
			$rows = $this->query( 'SELECT * FROM ' . $table . ' WHERE id = ?', [ $id ] );
		  
			if(!is_array($rows)) {
				$rows = [];
			}
		
			foreach ($rows as $r) {
				$dt = new \DateTime();

				$insertSQL = "INSERT INTO " . PREFIX . "versions ( userid, time, tb, rowid, content, editsql, editvalues ) VALUES (?, ?, ?, ?, ?, ? ,?)";
				$insertValues = [
					$_SESSION['user']['id'],
					$dt->format('U'),
					$table,
					($r['id'] ?: ''),
					json_encode($r),
					$query,
					json_encode($values)
				];
				$this->query($insertSQL, $insertValues);
			}
		} catch (DBException $e) {
			// Already logged!
		} catch (\Throwable $th) {
			if ($this->log){
				$this->log->error($th);
			}
		}
	}

	/**
	 *
	 * Prepares and runs a query statement and returns, dependin on $type:
	 * 		array with output if read or false
	 * 		last inserted id id id
	 * 		boolean if boolean
	 * Uses prepare and execute statement.
	 * @param string $query			query string
	 * @param array $values			values to use with query string
	 * @param string $type			one of read (default value) | id | boolean | affected, integer, or false
	 * @param boolean $fetch_style	if false an associative array will be returned else a numeric array
	 */
	public function query(string $query, array $values = null, string $type = null, bool $fetch_style = false )
	{
		try {

			$query = trim($query);

			$sql = $this->pdo->prepare($query);

			if ( !$values ) $values = [];

			$flag = $sql->execute($values);


			if (is_int($type)) {
				return $sql->fetchColumn($type);
			}

			switch ($type) {
				case 'boolean':
					return $flag;
					break;

				case 'read':
				case false:
				default:
					$fetch_style  = $fetch_style ? \PDO::FETCH_NUM : \PDO::FETCH_ASSOC;
					return $sql->fetchAll($fetch_style);
					break;

				case 'id':
					return $this->pdo->lastInsertId();
					break;

				case 'affected':
					return $sql->rowCount();
					break;
			}
		} catch (\PDOException $e) {
            if ($this->log) {
                $this->log->error($e, [$query, $values, $type, $fetch_style]);
            }
			throw new DBException( \tr::get('db_generic_error') );
		}
	}

	/**
	 *
	 * Starts a transaction
	 */
	public function beginTransaction()
	{
		$this->pdo->beginTransaction();
	}

	/**
	 * commits a started transaction
	 */
	public function commit()
	{
		$this->pdo->commit();
	}

	/**
	 *
	 * Rolls back a started transaction
	 */
	public function rollBack()
	{
		$this->pdo->rollBack();
	}


	private function validateParseConnectionData(array $cfg): array
	{        
        if (!$cfg['db_engine']){
            throw new DBException(\tr::get('missing_db_engine'));
        }
        
        if( !in_array($cfg['db_engine'], ['sqlite', 'mysql', 'pgsql'])) {
            throw new DBException(\tr::get('db_engine_not_supported', [$cfg['db_engine']]));
        }
        
        // Set DSN for sqlite
        if ( $cfg['db_engine'] === 'sqlite') {
            if (!$cfg['db_path']){
                throw new DBException( \tr::get('missing_sqlite_file'));
            }
            $dsn = "{$cfg['db_engine']}:{$cfg['db_path']}";
        }
        
        if (!$dsn) {
            
            if (!$cfg['db_name']){
                throw new DBException( \tr::get('missing_db_name') );
            }
            
            if (!$cfg['db_username']){
                throw new DBException( \tr::get('missing_db_username') );
            }
            
            if (!$cfg['db_password']){
                throw new DBException( \tr::get('missing_db_password'));
            }
            
            if (!$cfg['db_host']){
                $cfg['db_host'] = '127.0.0.1';
            }
            
            $dsn = "{$cfg['db_engine']}:host={$cfg['db_host']};dbname={$cfg['db_name']};" .
                ($cfg['db_port'] ?  "port={$cfg['db_port']};" : '') .
                "options='--client_encoding=UTF8'";
                // "charset=utf8";
		}

		if (!$cfg['db_engine'] || !$dsn){
			throw new DBException('Not found any connection data');
		}

        return [
            $cfg['db_engine'],
            $dsn,
            $cfg['db_username'],
            $cfg['db_password']
        ];
	}

	private function getConnectionDataFromCfg(string $app): array
	{
		$cfg = [];
		$file = $this->path_to_root . "projects/{$app}/cfg/app_data.json";
        
        if (!file_exists($file) ) {
			throw new \Exception("Missing configuration file $file");
		}

		$cfg = json_decode(file_get_contents($file), true);
		
		if (!is_array($cfg)){
			echo $app;
			throw new \Exception(\tr::get('invalid_configuration_file', [$file]) );
		}
		if ( null !== $cfg['db_engine'] && file_exists($this->path_to_root . "projects/{$app}/db/bdus.sqlite") ) {
			$cfg['db_engine'] = 'sqlite';
			file_put_contents( $file, json_encode($cfg, JSON_PRETTY_PRINT));
		}

        if (file_exists($this->path_to_root . "projects/{$app}/db/bdus.sqlite")) {
            $cfg['db_path'] = $this->path_to_root . "projects/{$app}/db/bdus.sqlite";
        }
        
        return $cfg;
	}

	/**
	 * Parses conncetion data and starts PDO
	 * @param array $connection_data
	 * @throws DBException
	 */
	private function initializePDO(string $db_engine, string $dsn, string $user = null, string $password = null)
	{
		try {
			$this->db_engine = $db_engine;

			/**
			 *  Check if MYSQL_ATTR_INIT_COMMAND method exists (for systems without MySQL)
			 *  http://stackoverflow.com/questions/2424343/undefined-class-constant-mysql-attr-init-command-with-pdo
			 */

			$dbOptions = [
				\PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
				\PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC,
				\PDO::ATTR_EMULATE_PREPARES   => false
			];

			$this->pdo = new \PDO( $dsn, $user, $password, $dbOptions );

			
			if ($this->db_engine == 'sqlite') {
				$this->pdo->query('PRAGMA encoding = "UTF-8"');
				$this->pdo->query('PRAGMA foreign_keys = ON;');
			}

		} catch (\PDOException $e) {

			throw new DBException($e);

		}
	}

	/**
	 * Checks is spatial extension is available
	 *
	 * @return boolean
	 */
	public function hasSpatialExtension(): bool
	{
		try {
			$this->pdo->query("SELECT ST_GeomFromText('POINT(0 0)')");
			return true;
		} catch (\PDOException $e) {
			return false;
		}
		
	}


}
?>
