<?php
/**
 * Shortcode class file
 *
 * PHP version 8.0
 *
 * @package WP_Vue_Form
 **/

namespace WPVueForm\BaseClasses;

use WPVueForm\BaseClasses\Init;

defined( 'ABSPATH' ) || die( 'Something went wrong' );


/**
 * Class Shortcode.
 *
 * Init plugin shortcode.
 */
class Shortcode extends Init {
	
	/**
	 * Constructor for the Shortcode class.
	 */
	public function __construct() {

        add_shortcode( 'wpvueformbuilder', array( self::class, 'form_shortcode' ) );
        add_action( 'wp_enqueue_scripts', array( self::class, 'register_script' ),-9999 );
	}


    public static function form_shortcode( $attr ){
        ob_start();
        if( empty($attr['form_id'])){
            return __("Form id required","wp-vue-form");
        }
        $attr = wp_vue_form_recursive_sanitize_array($attr);
        $attr['form_id'] = (int)$attr['form_id'];
        wp_enqueue_script('wp-vue-form-frontend');
        wp_enqueue_style('wp-vue-form-frontend');
        $form_data = wp_vue_form_elements_and_style( $attr['form_id'] );

        ?>
        <style>
            <?php echo $form_data['style']; ?>
            .wpVueForm.loading{
                position:relative;
                height:100px;
                margin-bottom:2rem;
            }
            .vl-overlay {
				bottom: 0;
				left: 0;
				position: absolute;
				right: 0;
				top: 0;
				align-items: center;
				display: flex;
				justify-content: center;
				overflow: hidden;
				z-index: 9999;
			}
            .vl-overlay svg{
                height: 64px;
                width: 64px;
                stroke: #6200ee;
            }
			.vl-overlay .vl-icon {
				position: relative;
			}
        </style>
        <div class="wpVueForm loading" id="wpVueFormFrontend-<?php echo $attr['form_id']; ?>">
            <?php echo wp_kses( wp_vue_form_loader_element( $attr['form_id'] ), wp_vue_form_loader_allowed_tags() ); ?>	
            <div data-form-id="<?php echo $attr['form_id']; ?>" class="wpVueFormFrontend" :edit="false" ></div>
        </div>
        <script>
            if( ! window['wp_vue_form_data']){
                window['wp_vue_form_data'] = [];
            }
            window['wp_vue_form_data'][<?php echo esc_attr( $attr['form_id'] ) ?>] = <?php echo json_encode( $form_data['form_elements'] ) ?>; 
        </script>
        <?php
        return ob_get_clean();

    }

    public static function register_script(){
		wp_register_script( 'wp-vue-form-frontend', wp_vue_form_script_url('frontend/js/index.js'), array(), WP_VUE_FORM_VERSION, true );
        wp_vue_form_add_localize_script('wp-vue-form-frontend');
		wp_register_style( 'wp-vue-form-frontend', wp_vue_form_script_url('frontend/css/index.css') );
    }

}
