<?php
/**
 * Main database connection class
 *
 * @author			Julian Bogdani <jbogdani@gmail.com>
 * @copyright		BraDypUS, Julian Bogdani <jbogdani@gmail.com>
 * @license			See file LICENSE distributed with this code
 * @since			31/mar/2011
 * @uses			DB_connection
 */

class DB implements \DB\DB\DBInterface
{

	/**
	 *
	 * Database instance
	 * @var object
	 */
	private $db;
	private $db_engine;
	private $app;

	/**
	 *
	 * Load connection info and starts PDO object
	 * @param string $app	application to work with
	 * @param string $custom_connection
	 * @throws myException
	 */
	public function __construct($app = false, $custom_connection = false)
	{
		$this->app = $app ? $app : defined('APP') ? APP : false;

		$this->parseStart($this->app, $custom_connection);
	}

	/**
	 * Parses conncetion data and starts PDO
	 * @param string $app
	 * @param string $custom_connection
	 * @throws myException
	 */
	private function parseStart($app = false, $custom_connection = false)
	{
		try {

			$d = DB_connection::getConnectionString($app, $custom_connection);
			$driver = $d['driver'];
			$dsn = $d['dsn'];
			$user = $d['username'];
			$password = $d['password'];

			$this->db_engine = $driver;

			/**
			 *  Check if MYSQL_ATTR_INIT_COMMAND method exists (for systems without MySQL)
			 *  http://stackoverflow.com/questions/2424343/undefined-class-constant-mysql-attr-init-command-with-pdo
			 */

			$dbOptions = [
				PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
				PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
				PDO::ATTR_EMULATE_PREPARES   => false
			];

			$this->db = new PDO( $dsn, $user, $password, $dbOptions );

			
			if ($this->db_engine == 'sqlite') {
				$this->db->query('PRAGMA encoding = "UTF-8"');
				$this->db->query('PRAGMA foreign_keys = ON;');
			}
			return $this;

		} catch( myException $e ) {

			throw new myException($e);
			
		} catch (PDOException $e) {

			throw new myException($e);

		}
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

	public function execInTransaction($sql): bool
	{
		$ret = false;
		try {
			$this->db->beginTransaction();
			$ret = $this->db->exec($sql);
			$this->db->commit();
		} catch (\Throwable $th) {
			$this->db->rollBack();
			Meta::logException($th);
		}
		return ($ret !== false);
	}

	public function exec($sql): bool
	{
		try {
			return $this->db->exec($sql) !== false;
		} catch (PDOException $e) {
			throw new myException($e);
		}
	}

	public function backupBeforeEdit (string $table, int $id, $query, array $values = [])
	{
		try {
			Meta::addVersion($_SESSION['user']['id'], $table, $id, $query, $values);
		} catch (\Throwable $th) {
			error_log(json_encode($th, JSON_PRETTY_PRINT));
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
	public function query($query, $values = null, $type = null, $fetch_style = false )
	{
		try {

			$query = trim($query);

			$sql = $this->db->prepare($query);

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
					$fetch_style  = $fetch_style ? PDO::FETCH_NUM : PDO::FETCH_ASSOC;
					return $sql->fetchAll($fetch_style);
					break;

				case 'id':
					return $this->db->lastInsertId();
					break;

				case 'affected':
					return $sql->rowCount();
					break;
			}
		} catch (PDOException $e) {
			Meta::logException($e);
			throw new myException( tr::get('db_generic_error') );
		}
	}

	/**
	 *
	 * Starts a transaction
	 */
	public function beginTransaction()
	{
		$this->db->beginTransaction();
	}

	/**
	 * commits a started transaction
	 */
	public function commit()
	{
		$this->db->commit();
	}

	/**
	 *
	 * Rolls back a started transaction
	 */
	public function rollBack()
	{
		$this->db->rollBack();
	}

}
?>
