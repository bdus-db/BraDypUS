<?php
namespace DB\Validate;

class Validate
{
    private $db;
    private $resp;
    private $prefix;
    
    public function __construct(\DB\DB\DBInterface $db, string $prefix = null)
    {
        $this->db = $db;
        $this->resp = new Resp();
        $this->prefix = $prefix;
        /**
         * 1. each cfg-table must have db-table: OK
         * 2. each db-table must have cfg-table
         * 3. foreach table:
         *      3.1 each cfg-field must have db-column: OK
         *      3.2 each db-column must have cfg-field: OK
         * 4. system tables exist
         * 5. system tables have latest structure
         */

    }

    public function all(): array
    {   
        $this->resp->set('head', 'Main system information');
        Info::getInfo($this->resp);

        $db_cfg = new DbCfgAlign($this->resp, $this->db);
        $this->resp->set('head', 'Configuration and database tables alignement');
        $db_cfg->cfgHasDb();
        $this->resp->set('head', 'Configuration and database fields alignement');
        $db_cfg->cfgColsHasDb();

        $sys = new SystemTables($this->resp, $this->db, $this->prefix);
        $this->resp->set('head', 'Check if system tables are available');
        $sys->checkExist();
        $this->resp->set('head', 'Check if system tables structure is up-to-date');
        $sys->latestStructure();

        return $this->resp->get();
    }

}