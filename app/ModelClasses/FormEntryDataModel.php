<?php
/**
 * Modal class file
 *
 * PHP version 8.0
 *
 * @package WP_Vue_Form
 **/

namespace WPVueForm\ModelClasses;

use WPVueForm\baseClasses\Model;

/**
 * Class FormEntryDataModel
 *
 * Model for encounter body chart data.
 */
class FormEntryDataModel extends Model {
	/**
	 * FormEntryDataModel constructor.
	 */
	public function __construct() {
		parent::__construct( 'entry_data' );
	}
}
