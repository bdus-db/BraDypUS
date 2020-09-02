<?php
/**
 * Search and replace controller class
 * @author			Julian Bogdani <jbogdani@gmail.com>
 * @copyright		BraDypUS, Julian Bogdani <jbogdani@gmail.com>
 * @license			See file LICENSE distributed with this code
 * @since			Aug 10, 2012
 */

class search_replace_ctrl extends Controller
{
	public function main_page()
	{
		$this->render('search_replace', 'main_page', [
			'tbs' => $this->cfg->get('tables.*.label', 'is_plugin', null)
		]);
	}

	/**
	 * Echoes json encoded array of available fields for $table
	 */
	public function getFld()
	{
		$tb = $this->get['tb'];

		echo json_encode($this->cfg->get("tables.$tb.fields.*.label"));
	}

	/**
	 * Executes search & replace query and returns no of affected rows
	 */
	public function replace()
	{
		$tb 		= $this->get['tb'];
		$fld 		= $this->get['fld'];
		$search 	= $this->get['search'];
		$replace 	= $this->get['replace'] ?? '';
		
		try {
			if (!$tb || !$fld || !$search || !$replace) {
				throw new \Exception('All fields are required');
			}

			$values = false;

			echo $this->db->query(
				"UPDATE {$tb} SET {$fld} = REPLACE ({$fld} , ?, ?)", 
				[ $search, $replace], 
				'affected'
			);
		} catch(\Exception $e) {
			$this->log->error($e);
			echo 'error';
		}
	}
}
