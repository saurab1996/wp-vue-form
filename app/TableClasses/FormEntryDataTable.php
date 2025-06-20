<?php
/**
 * Custom table file
 *
 * PHP version 8.0
 *
 * @package WP_Vue_Form
 */

namespace WPVueForm\TableClasses;

use WPVueForm\ModelClasses\FormEntryDataModel;

defined( 'ABSPATH' ) || die( 'Something went wrong' );

/**
 * Class FormEntryDataTable
 *
 * Table for form entry data.
 */
class FormEntryDataTable extends FormEntryDataModel {
		/**
		 * FormEntryDataTable constructor.
		 */
	public function __construct() {
			parent::__construct();
			$kc_charset_collate = self::$db->get_charset_collate();
			$query              = self::$db->prepare(
				"CREATE TABLE %i (
                    id bigint(20) NOT NULL AUTO_INCREMENT,    
                    form_id bigint(20) UNSIGNED NOT NULL,
                    user_id bigint(20) UNSIGNED NOT NULL,
                    entry_data longtext,
                    notification longtext,
                    extra_data longtext,
                    created_at datetime NOT NULL,
                    updated_at datetime NOT NULL,    
                    PRIMARY KEY  (id)
                ) {$kc_charset_collate};",
				$this->table_name
			);
			maybe_create_table( $this->table_name, $query );
	}
}
