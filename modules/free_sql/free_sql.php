<?php
/**
 * @author			Julian Bogdani <jbogdani@gmail.com>
 * @copyright		BraDypUS, Julian Bogdani <jbogdani@gmail.com>
 * @license			See file LICENSE distributed with this code
 * @since			Jan 8, 2013
 */

class free_sql_ctrl extends Controller
{
	public function import()
	{
		$filename = $this->get['filename']; 
		$start = $this->get['start']; 
		$offset = $this->get['offset']; 
		$totalqueries = $this->get['totalqueries']; 

		try {
			$bigRestore = new bigRestore(new DB());
			
			$bigRestore->runImport($filename, $start, $offset, $totalqueries);
			
			echo $bigRestore->getResponse(true);

		} catch (Exception $e) {
			$this->returnJson([
				'status'=>'error', 
				'text'=>$e->getMessage()
			]);
		}
	}

	
	public function input()
	{
		if (utils::canUser('super_admin')) {
			$uid = uniqid('upload');
			
			echo '<div class="upload"></div>' .
					'<textarea style="width:97%; height: 220px" placeholder="Enter SQL code here"></textarea>' .
					'<div class="status" style="display:none">' .
						'<div class="progress progress-success">' .
							'<div class="bar" style="width: 0%"></div>' .
						'</div>' .
						'<div class="verbose"></div>' .
					'</div>'
			;
		} else {
			echo tr::get('not_enough_privilege');
		}
	}
	
	public function run()
	{
		$sql = $this->post['sql'];
		
		try {
			$db = new DB();
			$db->beginTransaction();
			$ret = $db->exec($sql);
			$db->commit();
			
			utils::response(tr::get('ok_free_sql_run_affected', [$ret ?: 0], 'success', true));
		} catch (myException $e) {
			$e->log();
			$db->rollBack();
			utils::response(
				tr::get(
					'error_free_sql_run_msg',
					[$e->getMessage()]
				), 
				'error', 
				true
			);
		}
	}
}