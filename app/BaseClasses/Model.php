<?php
/**
 * Model class file
 *
 * PHP version 8.0
 *
 * @package WP_Vue_Form
 **/

namespace WPVueForm\BaseClasses;

use WPVueForm\BaseClasses\Init;
use Exception;

defined( 'ABSPATH' ) || die( 'Something went wrong' );


/**
 * Class Model.
 *
 * Init plugin.
 */
abstract class Model extends Init {
	/**
	 * The current table name.
	 *
	 * @var string
	 */
	protected $table_name;

	/**
	 * Constructor for the database class to inject the table name.
	 *
	 * @param String $table_name - The current table name.
	 */
	public function __construct( $table_name ) {
		$this->table_name = self::$db->prefix . WP_VUE_FORM_PREFIX . $table_name;
	}


	/**
	 * Insert data into the current data.
	 *
	 * @param  array $data - Data to enter into the database table.
	 *
	 * @return bool|int false or inserted row id.
	 */
	public function insert( array $data ): bool|int {

		if ( empty( $data ) ) {
			return false;
		}

		self::$db->insert( $this->table_name, $data );

		return self::$db->insert_id;
	}

	/**
	 * Update a table record in the database.
	 *
	 * @param array $data - Array of data to be updated.
	 * @param array $condition_value - Key value pair for the where clause of the query.
	 *
	 * @return bool|int Num rows updated.
	 */
	public function update( array $data, array $condition_value ): bool|int {

		if ( empty( $data ) ) {
			return false;
		}

		return self::$db->update( $this->table_name, $data, $condition_value );
	}


	/**
	 * Delete row on the database table.
	 *
	 * @param  array $condition_value - Key value pair for the where clause of the query.
	 *
	 * @return Int - Num rows deleted.
	 */
	public function delete( array $condition_value ): int {

		return self::$db->delete( $this->table_name, $condition_value );
	}

	/**
	 * Retrieve data from the tabke based on specified conditions.
	 *
	 * @param array  $conditions           An array of conditions in field => value format.
	 * @param string $column               The columns to select. Defaults to '*'.
	 * @param string $condition_operator   The operator to use for conditions. Defaults to '='.
	 * @param string $return_type          The type of result to return ('results', 'row', 'var', 'col'). Defaults to 'results'.
	 * @param string $selected_query_output The selected output format for the query results.
	 * @param array  $order_by             An array containing 'field' and 'type' for ORDER BY clause.
	 * @param int    $offset               The offset for pagination. Defaults to 0.
	 * @param int    $limit                The maximum number of rows to return. Defaults to -1 (no limit).
	 *
	 * @return mixed                      The query result based on the specified return type.
	 *
	 * @throws Exception If class or method not found.
	 */
	public function result(
		array $conditions,
		string $column = '*',
		string $condition_operator = '=',
		string $return_type = 'results',
		string $selected_query_output = '',
		array $order_by = array(),
		int $offset = 0,
		int $limit = -1
	): mixed {
		$selected_query_output = $this->query_return_type( $selected_query_output );

		try {
			$sql             = self::$db->prepare( 'SELECT %i FROM %i WHERE ', $column, $this->table_name );
			$condition_query = array();

			foreach ( $conditions as $field => $value ) {
				switch ( strtolower( $condition_operator ) ) {
					case 'in':
						if ( ! is_array( $value ) || empty( $value ) ) {
							throw new Exception( __( 'Values for IN query must be an array.', 'wp-vue-form' ) );
						}
						$condition_query[] = self::$db->prepare( ' %i IN (%s) ', $field, implode( ',', array_map( 'esc_sql', $value ) ) );
						break;
					case 'like':
						$condition_query[] = self::$db->prepare( '%i LIKE %s ', $field, '%' . esc_sql( $value ) . '%' );
						break;
					default:
						$condition_query[] = self::$db->prepare( '%i ' . $condition_operator . ' %s ', $field, esc_sql( $value ) );
						break;
				}
			}

			// Build the SQL query.
			$sql .= self::$db->prepare( implode( ' AND ', $condition_query ) );

			// Add ORDER BY clause if provided.
			if ( ! empty( $order_by['field'] ) && ! empty( $order_by['type'] ) && in_array( $order_by['type'], array( 'DESC', 'ASC' ), true ) ) {
				$sql .= self::$db->prepare( ' ORDER BY %i %i', esc_sql( $order_by['field'] ), esc_sql( $order_by['type'] ) );
			}

			// Add OFFSET clause if provided.
			if ( ! empty( $offset ) && $offset > 0 ) {
				$sql .= self::$db->prepare( ' OFFSET %d ', (int) $offset );
			}

			// Set $limit to 1 if $return_type is 'var' or 'row'.
			if ( in_array( $return_type, array( 'var', 'row' ), true ) ) {
				$limit = 1;
			}

			// Add LIMIT clause if provided.
			if ( ! empty( $limit ) && $limit > 0 ) {
				$sql .= self::$db->prepare( ' LIMIT %d ', (int) $limit );
			}

			// Execute query based on $return_type.
			switch ( $return_type ) {
				case 'results':
					return self::$db->get_results( $sql, $selected_query_output );
				case 'row':
					$sql .= ' LIMIT 1';
					return self::$db->get_row( $sql, $selected_query_output );
				case 'var':
					$sql .= ' LIMIT 1';
					return self::$db->get_var( $sql, $selected_query_output );
				case 'col':
					return self::$db->get_col( $sql, $selected_query_output );
				default:
					return false;
			}
		} catch ( Exception $ex ) {
			// Handle exceptions here, you might want to log or display them.
			return false;
		}
	}


	/**
	 * Determines the return type for the database query results.
	 *
	 * @param string $selected_query_output The selected query output format.
	 *
	 * @return string                      The query output format.
	 */
	public function query_return_type( $selected_query_output ): string {

		$supported_query_output = array( ARRAY_A, ARRAY_N, OBJECT, OBJECT_K );
		// Check if the selected query output format is supported.
		if ( in_array( $selected_query_output, $supported_query_output, true ) ) {
			return $selected_query_output;
		}

		// If the selected query output format is not supported, return the default value.
		return OBJECT;
	}
}
