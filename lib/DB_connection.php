<?php
/**
* Main database connection class
*
* @author			Julian Bogdani <jbogdani@gmail.com>
* @copyright		BraDypUS, Julian Bogdani <jbogdani@gmail.com>
* @license			See file LICENSE distributed with this code
* @since			31/mar/2011
*/

class DB_connection
{
    /**
    * Return aray with connection data such as:
    *   driver: sqlite|mysql|pgsql
    *   dns: string of data source name
    *   user: database username
    *   password: database password
    *
    * @param string $app		Application name, if missing session data will be used
    * @param string $custom_connection Path to custom configuration file
    * @return array Array with connection data: driver and dns are always supplied; user and password are supplied for mysql and pgsql
    */
    public static function getConnectionString(string $app, string $custom_connection = null)
    {
        /*
        * check for connection data
        * 1) proj data
        * 2) system data
        * 3) proj sqlite db
        */
        /**
        * Compatibility note:
        * From version 3.15 connection information is stored in the main cfg file
        * No more support for connect.ini is provided
        * Connection information is *always* based on project cfg file and is no more application related
        * (ie. no more MAIN_DIR . 'connect.ini' is supported)
        */
        $data = self::getData($app, $custom_connection);
        
        if (!$data['driver'] || !$data['dsn']){
            throw new \Exception('Not found any connection data');
        }
        
        return [
            'driver' => $data['driver'],
            'dsn' => $data['dsn'],
            'username' => $data['username'],
            'password' => $data['password']
        ];
        
        
    }
    
    /**
    * Connection options priority:
    * 1. custom_connection_file
    * 2a. PROJ_DIR . 'db/bdus.sqlite'
    * 2b. MAIN_DIR . "$app/db/bdus.sqlite"
    * 3a. PROJ_DIR . 'cfg/app_data.json'
    * 3b. MAIN_DIR . "projects/$app/cfg/app_data.json"
    *
    * @param string $app
    * @param string $custom_connection
    * @return array
    */
    private static function getData(string $app, string $custom_connection_file = null): array
    {	
        $cfg = [];
        
        if ($custom_connection_file and file_exists($custom_connection_file)) {
            
            $connection_file = $custom_connection_file;
            
        } else if ($app && file_exists(MAIN_DIR . "projects/{$app}cfg/app_data.json") ) {
            
            $connection_file = MAIN_DIR. "projects/{$app}cfg/app_data.json";
        }
        
        if ($app AND file_exists(MAIN_DIR . "projects/{$app}/db/bdus.sqlite")) {
            
            $cfg['db_path'] = MAIN_DIR . "projects/{$app}/db/bdus.sqlite";
        }
        
        if ($connection_file){
            
            $cfg_arr = json_decode(file_get_contents($connection_file), true);
            
            if (!is_array($cfg_arr)){
                throw new \Exception(tr::get('invalid_configuration_file', [$connection_file]) );
            }
            
            $cfg = array_merge($cfg, $cfg_arr);
        }
        
        return self::validateData($cfg);
    }
    
    
    private static function validateData($cfg)
    {
        // If no engine is availble but a valid path to sqlite is, set db_engine to sqlite
        if ( !$cfg['db_engine'] && $cfg['db_path']) {
            $cfg['db_engine'] = 'sqlite';
        }
        
        if (!$cfg['db_engine']){
            throw new \Exception(tr::get('missing_db_engine'));
        }
        
        if( !in_array($cfg['db_engine'], ['sqlite', 'mysql', 'pgsql'])) {
            throw new \Exception(tr::get('driver_not_supported', [$cfg['db_engine']]));
        }
        
        // Set DSN for sqlite
        if ( $cfg['db_engine'] === 'sqlite') {
            if (!$cfg['db_path']){
                throw new \Exception( tr::get('missing_sqlite_file'));
            }
            $dsn = "{$cfg['db_engine']}:{$cfg['db_path']}";
        }
        
        if (!$dsn) {
            
            if (!$cfg['db_name']){
                throw new \Exception( tr::get('missing_db_name') );
            }
            
            if (!$cfg['db_username']){
                throw new \Exception( tr::get('missing_db_username') );
            }
            
            if (!$cfg['db_password']){
                throw new \Exception(tr::get('missing_db_password'));
            }
            
            if (!$cfg['db_host']){
                $cfg['db_host'] = '127.0.0.1';
            }
            
            $dsn = "{$cfg['db_engine']}:host={$cfg['db_host']};dbname={$cfg['db_name']};" .
                ($cfg['db_port'] ?  "port={$cfg['db_port']};" : '') .
                "options='--client_encoding=UTF8'";
                // "charset=utf8";
        }
        return [
            'driver' => $cfg['db_engine'],
            'dsn' => $dsn,
            'username' => $cfg['db_username'],
            'password' => $cfg['db_password']
        ];
    }
}
?>
