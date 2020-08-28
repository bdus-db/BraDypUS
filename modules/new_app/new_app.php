<?php


class new_app_ctrl extends Controller
{
    public function new_app_form()
    {
        $AvailableEngines = new \DB\Engines\AvailableEngines();
        $this->render('new_app', 'new_app_form', [
            "db_engines" => $AvailableEngines->getList()
        ]);
    }


    public function add_app()
    {
        $name           = $this->post['name'];
        $definition     = $this->post['definition'];
        $your_email     = $this->post['your_email'];
        $your_password  = $this->post['your_password'];
        $db_engine      = $this->post['db_engine'];
        $db_host        = $this->post['db_host'];
        $db_port        = $this->post['db_port'];
        $db_name        = $this->post['db_name'];
        $db_username    = $this->post['db_username'];
        $db_password    = $this->post['db_password'];

        try {
            
            $createApp = new \DB\System\CreateApp(
                $name, 
                $definition, 
                $your_email, 
                $your_password, 
                $db_engine,
                $db_host,
                $db_port,
                $db_name,
                $db_username,
                $db_password
            );
            $createApp->createAll();
            $log = $createApp->getLog();

            utils::response( 'ok_app_created', 'success', false, ["log" => $log] );


        } catch (\Exception $e) {
            utils::response( tr::get('error_app_not_created', [ $e->getMessage() ]), 'error', true );
            $this->log->error($e);
        }
    }


    
}