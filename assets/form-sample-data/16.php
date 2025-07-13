<?php

$elements = array(
    'endpoint' => "http://localhost:8003/wp-json/wpvueform/v1/form/entry/16",
    'method' => "POST",
    'size' => 'md',
    'displayErrors' => false,
    'addClass' => 'vf-survey',
    'addID' => 'vf-survey',
    'schema' => [
        'page_title' => [
            'type' => 'static',
            'content' => 'Create account',
            'tag' => 'h1',
        ],
        'divider' => [
            'type' => 'static',
            'tag' => 'hr',
        ],
        'container' => [
            'type' => 'group',
            'schema' => [
                'first_name' => [
                    'type' => 'text',
                    'placeholder' => 'First name',
                    'columns' => [
                        'container' => 6,
                        'label' => 12,
                        'wrapper' => 12,
                    ],
                    'fieldName' => 'First name',
                    'rules' => [
                        'required',
                        'max:255',
                    ],
                ],
                'last_name' => [
                    'type' => 'text',
                    'placeholder' => 'Last name',
                    'columns' => [
                        'container' => 6,
                        'label' => 12,
                        'wrapper' => 12,
                    ],
                    'fieldName' => 'Last name',
                    'rules' => [
                        'required',
                        'max:255',
                    ],
                ],
            ],
            'description' => 'Make sure it matches your legal name',
        ],
        'birthday' => [
            'type' => 'date',
            'placeholder' => 'Birthday',
            'fieldName' => 'Birthday',
            'rules' => [
                'required',
            ],
            'description' => 'Your birthday is not visible others.',
            'displayFormat' => 'MMMM Do, YYYY',
        ],
        'country' => [
            'type' => 'select',
            'search' => true,
            'native' => false,
            'inputType' => 'search',
            'autocomplete' => 'disabled',
            'placeholder' => 'Country',
            'items' => '/json/countries.json',
        ],
        'state' => [
            'type' => 'select',
            'search' => true,
            'native' => false,
            'inputType' => 'search',
            'autocomplete' => 'disabled',
            'placeholder' => 'State',
            'items' => '/json/states.json',
            'conditions' => [
                ['country', 'in', ['US']],
            ],
        ],
        'phone' => [
            'type' => 'phone',
            'placeholder' => 'Phone',
            'rules' => [
                'required',
            ],
            'fieldName' => 'Phone',
            'allowIncomplete' => true,
            'unmask' => true,
        ],
        'email' => [
            'type' => 'text',
            'inputType' => 'email',
            'rules' => [
                'required',
                'max:255',
                'email',
            ],
            'placeholder' => 'Email',
            'fieldName' => 'Email',
            'description' => 'You will receive a confirmation letter to this email.',
        ],
        'password' => [
            'type' => 'text',
            'inputType' => 'password',
            'rules' => [
                'required',
                'min:8',
                'same:password_confirmation',
            ],
            'fieldName' => 'Password',
            'placeholder' => 'Password',
        ],
        'password_confirmation' => [
            'type' => 'text',
            'inputType' => 'password',
            'rules' => [
                'required',
            ],
            'fieldName' => 'Password confirmation',
            'placeholder' => 'Password again',
        ],
        'terms' => [
            'type' => 'checkbox',
            'text' => 'I accept the Terms & Conditions & Privacy Policy',
        ],
        'marketing_emails' => [
            'type' => 'checkbox',
            'text' => 'I want to recieve marketing emails',
        ],
        'divider_1' => [
            'type' => 'static',
            'tag' => 'hr',
        ],
        'register' => [
            'type' => 'button',
            'submits' => true,
            'buttonLabel' => 'Create account',
            'full' => true,
            'size' => 'lg',
        ],
    ],
);

$style = "
 :root{
    --vf-loader-primary: #6200ee;
  }
  .vfb-preview-wrapper {
    margin-bottom: 2rem;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    border-radius: .5rem;
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    padding: 2.5rem;
    --tw-shadow: 0px 0px 20px 0 rgba(0,0,0,.08);
    --tw-shadow-colored: 0px 0px 20px 0 var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);
    transition-property: all;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s
  }
  .vf-survey *,
  .vf-survey *:before,
  .vf-survey *:after,
  .vf-survey:root {
    --vf-primary: #6200ee;
    --vf-primary-darker: #5000cc;
    --vf-color-on-primary: #ffffff;
    --vf-danger: #b00020;
    --vf-danger-lighter: #f9e5e8;
    --vf-success: #4caf50;
    --vf-success-lighter: #e8f5e9;
    --vf-ring-width: 0px;
    --vf-ring-color: #673ab766;
    --vf-link-color: var(--vf-primary);
    --vf-link-decoration: inherit;
    --vf-gray-50: #fafafa;
    --vf-gray-100: #f5f5f5;
    --vf-gray-200: #eeeeee;
    --vf-gray-300: #e0e0e0;
    --vf-gray-400: #bdbdbd;
    --vf-gray-500: #9e9e9e;
    --vf-gray-600: #757575;
    --vf-gray-700: #616161;
    --vf-gray-800: #424242;
    --vf-gray-900: #212121;
    --vf-dark-50: #fafafa;
    --vf-dark-100: #f5f5f5;
    --vf-dark-200: #eeeeee;
    --vf-dark-300: #e0e0e0;
    --vf-dark-400: #bdbdbd;
    --vf-dark-500: #9e9e9e;
    --vf-dark-600: #757575;
    --vf-dark-700: #616161;
    --vf-dark-800: #424242;
    --vf-dark-900: #212121;
    --vf-font-size: 1rem;
    --vf-font-size-sm: 0.875rem;
    --vf-font-size-lg: 1rem;
    --vf-font-size-small: 0.875rem;
    --vf-font-size-small-sm: 0.75rem;
    --vf-font-size-small-lg: 0.875rem;
    --vf-font-size-h1: 2.125rem;
    --vf-font-size-h1-sm: 2.125rem;
    --vf-font-size-h1-lg: 2.125rem;
    --vf-font-size-h2: 1.875rem;
    --vf-font-size-h2-sm: 1.875rem;
    --vf-font-size-h2-lg: 1.875rem;
    --vf-font-size-h3: 1.5rem;
    --vf-font-size-h3-sm: 1.5rem;
    --vf-font-size-h3-lg: 1.5rem;
    --vf-font-size-h4: 1.25rem;
    --vf-font-size-h4-sm: 1.25rem;
    --vf-font-size-h4-lg: 1.25rem;
    --vf-font-size-h1-mobile: 1.5rem;
    --vf-font-size-h1-mobile-sm: 1.5rem;
    --vf-font-size-h1-mobile-lg: 1.5rem;
    --vf-font-size-h2-mobile: 1.25rem;
    --vf-font-size-h2-mobile-sm: 1.25rem;
    --vf-font-size-h2-mobile-lg: 1.25rem;
    --vf-font-size-h3-mobile: 1.125rem;
    --vf-font-size-h3-mobile-sm: 1.125rem;
    --vf-font-size-h3-mobile-lg: 1.125rem;
    --vf-font-size-h4-mobile: 1rem;
    --vf-font-size-h4-mobile-sm: 1rem;
    --vf-font-size-h4-mobile-lg: 1rem;
    --vf-font-size-blockquote: 1rem;
    --vf-font-size-blockquote-sm: 0.875rem;
    --vf-font-size-blockquote-lg: 1rem;
    --vf-line-height: 1.5rem;
    --vf-line-height-sm: 1.25rem;
    --vf-line-height-lg: 1.5rem;
    --vf-line-height-small: 1.25rem;
    --vf-line-height-small-sm: 1.125rem;
    --vf-line-height-small-lg: 1.25rem;
    --vf-line-height-headings: 1.2rem;
    --vf-line-height-headings-sm: 1.2rem;
    --vf-line-height-headings-lg: 1.2rem;
    --vf-line-height-blockquote: 1.5rem;
    --vf-line-height-blockquote-sm: 1.25rem;
    --vf-line-height-blockquote-lg: 1.5rem;
    --vf-letter-spacing: 0px;
    --vf-letter-spacing-sm: 0px;
    --vf-letter-spacing-lg: 0px;
    --vf-letter-spacing-small: 0px;
    --vf-letter-spacing-small-sm: 0px;
    --vf-letter-spacing-small-lg: 0px;
    --vf-letter-spacing-headings: 0px;
    --vf-letter-spacing-headings-sm: 0px;
    --vf-letter-spacing-headings-lg: 0px;
    --vf-letter-spacing-blockquote: 0px;
    --vf-letter-spacing-blockquote-sm: 0px;
    --vf-letter-spacing-blockquote-lg: 0px;
    --vf-gutter: 1rem;
    --vf-gutter-sm: 0.5rem;
    --vf-gutter-lg: 1rem;
    --vf-min-height-input: 3rem;
    --vf-min-height-input-sm: 2.125rem;
    --vf-min-height-input-lg: 3.5rem;
    --vf-py-input: 0.75rem;
    --vf-py-input-sm: 0.375rem;
    --vf-py-input-lg: 1rem;
    --vf-px-input: 1rem;
    --vf-px-input-sm: 0.625rem;
    --vf-px-input-lg: 1rem;
    --vf-py-btn: 0.375rem;
    --vf-py-btn-sm: 0.5rem;
    --vf-py-btn-lg: 0.5rem;
    --vf-px-btn: 1rem;
    --vf-px-btn-sm: 1rem;
    --vf-px-btn-lg: 1rem;
    --vf-py-btn-small: 0.28125rem;
    --vf-py-btn-small-sm: 0.375rem;
    --vf-py-btn-small-lg: 0.375rem;
    --vf-px-btn-small: 0.75rem;
    --vf-px-btn-small-sm: 0.75rem;
    --vf-px-btn-small-lg: 0.75rem;
    --vf-py-group-tabs: 0.75rem;
    --vf-py-group-tabs-sm: 0.375rem;
    --vf-py-group-tabs-lg: 1rem;
    --vf-px-group-tabs: 1rem;
    --vf-px-group-tabs-sm: 0.625rem;
    --vf-px-group-tabs-lg: 1rem;
    --vf-py-group-blocks: 1rem;
    --vf-py-group-blocks-sm: 0.75rem;
    --vf-py-group-blocks-lg: 1.25rem;
    --vf-px-group-blocks: 1.25rem;
    --vf-px-group-blocks-sm: 1rem;
    --vf-px-group-blocks-lg: 1.5rem;
    --vf-py-tag: 0.1875rem;
    --vf-py-tag-sm: 0.125rem;
    --vf-py-tag-lg: 0.1875rem;
    --vf-px-tag: 0.675rem;
    --vf-px-tag-sm: 0.5rem;
    --vf-px-tag-lg: 0.75rem;
    --vf-py-slider-tooltip: 0.25rem;
    --vf-py-slider-tooltip-sm: 0.1875rem;
    --vf-py-slider-tooltip-lg: 0.3125rem;
    --vf-px-slider-tooltip: 0.5rem;
    --vf-px-slider-tooltip-sm: 0.375rem;
    --vf-px-slider-tooltip-lg: 0.625rem;
    --vf-py-blockquote: 0.25rem;
    --vf-py-blockquote-sm: 0.25rem;
    --vf-py-blockquote-lg: 0.25rem;
    --vf-px-blockquote: 0.75rem;
    --vf-px-blockquote-sm: 0.75rem;
    --vf-px-blockquote-lg: 0.75rem;
    --vf-py-hr: 0.25rem;
    --vf-space-addon: 0px;
    --vf-space-addon-sm: 0px;
    --vf-space-addon-lg: 0px;
    --vf-space-checkbox: 0.5rem;
    --vf-space-checkbox-sm: 0.5rem;
    --vf-space-checkbox-lg: 0.625rem;
    --vf-space-tags: 0.1875rem;
    --vf-space-tags-sm: 0.1875rem;
    --vf-space-tags-lg: 0.1875rem;
    --vf-space-static-tag-1: 1rem;
    --vf-space-static-tag-2: 2rem;
    --vf-space-static-tag-3: 3rem;
    --vf-floating-top: 0.75rem;
    --vf-floating-top-sm: 0rem;
    --vf-floating-top-lg: 0.875rem;
    --vf-bg-input: var(--vf-gray-100);
    --vf-bg-input-hover: #ececec;
    --vf-bg-input-focus: #dcdcdc;
    --vf-bg-input-danger: var(--vf-gray-100);
    --vf-bg-input-success: var(--vf-gray-100);
    --vf-bg-checkbox: var(--vf-gray-100);
    --vf-bg-checkbox-hover: #ececec;
    --vf-bg-checkbox-focus: #dcdcdc;
    --vf-bg-checkbox-danger: var(--vf-gray-100);
    --vf-bg-checkbox-success: var(--vf-gray-100);
    --vf-bg-disabled: var(--vf-gray-50);
    --vf-bg-selected: #1118270d;
    --vf-bg-passive: var(--vf-gray-300);
    --vf-bg-icon: var(--vf-gray-700);
    --vf-bg-danger: var(--vf-danger-lighter);
    --vf-bg-success: var(--vf-success-lighter);
    --vf-bg-tag: var(--vf-primary);
    --vf-bg-slider-handle: var(--vf-primary);
    --vf-bg-toggle-handle: #ffffff;
    --vf-bg-date-head: var(--vf-gray-100);
    --vf-bg-addon: transparent;
    --vf-bg-btn: var(--vf-primary);
    --vf-bg-btn-danger: var(--vf-danger);
    --vf-bg-btn-secondary: var(--vf-gray-200);
    --vf-color-input: var(--vf-gray-900);
    --vf-color-input-focus: var(--vf-gray-900);
    --vf-color-input-hover: var(--vf-gray-900);
    --vf-color-input-danger: var(--vf-gray-900);
    --vf-color-input-success: var(--vf-gray-900);
    --vf-color-disabled: #afafaf;
    --vf-color-placeholder: #00000099;
    --vf-color-passive: var(--vf-gray-700);
    --vf-color-muted: #00000099;
    --vf-color-floating: #00000099;
    --vf-color-floating-focus: var(--vf-primary);
    --vf-color-floating-success: var(--vf-success);
    --vf-color-floating-danger: var(--vf-danger);
    --vf-color-danger: var(--vf-danger);
    --vf-color-success: var(--vf-success);
    --vf-color-tag: var(--vf-color-on-primary);
    --vf-color-addon: inherit;
    --vf-color-date-head: var(--vf-gray-700);
    --vf-color-btn: var(--vf-color-on-primary);
    --vf-color-btn-danger: #ffffff;
    --vf-color-btn-secondary: var(--vf-gray-700);
    --vf-border-color-input: var(--vf-gray-600);
    --vf-border-color-input-focus: var(--vf-primary);
    --vf-border-color-input-hover: var(--vf-gray-600);
    --vf-border-color-input-danger: var(--vf-danger);
    --vf-border-color-input-success: var(--vf-gray-600);
    --vf-border-color-checkbox: var(--vf-gray-600);
    --vf-border-color-checkbox-focus: var(--vf-primary);
    --vf-border-color-checkbox-hover: var(--vf-gray-600);
    --vf-border-color-checkbox-danger: var(--vf-danger);
    --vf-border-color-checkbox-success: var(--vf-gray-600);
    --vf-border-color-checked: var(--vf-primary);
    --vf-border-color-passive: var(--vf-gray-300);
    --vf-border-color-slider-tooltip: var(--vf-primary);
    --vf-border-color-tag: var(--vf-primary);
    --vf-border-color-btn: var(--vf-primary);
    --vf-border-color-btn-danger: var(--vf-danger);
    --vf-border-color-btn-secondary: var(--vf-gray-200);
    --vf-border-color-blockquote: var(--vf-gray-300);
    --vf-border-color-hr: var(--vf-gray-400);
    --vf-border-width-input-t: 0px;
    --vf-border-width-input-r: 0px;
    --vf-border-width-input-b: 1px;
    --vf-border-width-input-l: 0px;
    --vf-border-width-radio-t: 2px;
    --vf-border-width-radio-r: 2px;
    --vf-border-width-radio-b: 2px;
    --vf-border-width-radio-l: 2px;
    --vf-border-width-checkbox-t: 2px;
    --vf-border-width-checkbox-r: 2px;
    --vf-border-width-checkbox-b: 2px;
    --vf-border-width-checkbox-l: 2px;
    --vf-border-width-dropdown: 0px;
    --vf-border-width-toggle: 0.25rem;
    --vf-border-width-btn: 1px;
    --vf-border-width-tag: 1px;
    --vf-border-width-blockquote: 3px;
    --vf-shadow-input: 0px 0px 0px 0px rgba(0,0,0,0);
    --vf-shadow-input-hover: 0px 0px 0px 0px rgba(0,0,0,0);
    --vf-shadow-input-focus: 0px 0px 0px 0px rgba(0,0,0,0);
    --vf-shadow-handles: 0px 0px 0px 0px rgba(0,0,0,0);
    --vf-shadow-handles-hover: 0px 0px 0px 9px rgba(0,0,0,0.15);
    --vf-shadow-handles-focus: 0px 0px 0px 9px rgba(0,0,0,0.15);
    --vf-shadow-btn: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    --vf-shadow-dropdown: 0 4px 6px 0 rgb(32 33 36 / 28%);
    --vf-radius-input: 0.25rem 0.25rem 0rem 0rem;
    --vf-radius-input-sm: 0.25rem 0.25rem 0rem 0rem;
    --vf-radius-input-lg: 0.25rem 0.25rem 0rem 0rem;
    --vf-radius-btn: 0.25rem;
    --vf-radius-btn-sm: 0.25rem;
    --vf-radius-btn-lg: 0.25rem;
    --vf-radius-small: 0.125rem;
    --vf-radius-small-sm: 0.125rem;
    --vf-radius-small-lg: 0.125rem;
    --vf-radius-large: 0.5rem 0.5rem 0rem 0rem;
    --vf-radius-large-sm: 0.5rem 0.5rem 0rem 0rem;
    --vf-radius-large-lg: 0.5rem 0.5rem 0rem 0rem;
    --vf-radius-tag: 999px;
    --vf-radius-tag-sm: 999px;
    --vf-radius-tag-lg: 999px;
    --vf-radius-checkbox: 0.25rem;
    --vf-radius-checkbox-sm: 0.25rem;
    --vf-radius-checkbox-lg: 0.25rem;
    --vf-radius-slider: 1rem;
    --vf-radius-slider-sm: 1rem;
    --vf-radius-slider-lg: 1rem;
    --vf-radius-image: 0.25rem 0.25rem 0rem 0rem;
    --vf-radius-image-sm: 0.25rem 0.25rem 0rem 0rem;
    --vf-radius-image-lg: 0.25rem 0.25rem 0rem 0rem;
    --vf-radius-gallery: 0.25rem 0.25rem 0rem 0rem;
    --vf-radius-gallery-sm: 0.25rem 0.25rem 0rem 0rem;
    --vf-radius-gallery-lg: 0.25rem 0.25rem 0rem 0rem;
    --vf-checkbox-size: 1rem;
    --vf-checkbox-size-sm: 0.9375rem;
    --vf-checkbox-size-lg: 1.125rem;
    --vf-gallery-size: 6rem;
    --vf-gallery-size-sm: 5rem;
    --vf-gallery-size-lg: 7rem;
    --vf-toggle-width: 3rem;
    --vf-toggle-width-sm: 2.75rem;
    --vf-toggle-width-lg: 3rem;
    --vf-toggle-height: 1rem;
    --vf-toggle-height-sm: 1.125rem;
    --vf-toggle-height-lg: 1.25rem;
    --vf-slider-height: 0.375rem;
    --vf-slider-height-sm: 0.3125rem;
    --vf-slider-height-lg: 0.4375rem;
    --vf-slider-height-vertical: 20rem;
    --vf-slider-height-vertical-sm: 20rem;
    --vf-slider-height-vertical-lg: 20rem;
    --vf-slider-handle-size: 1.25rem;
    --vf-slider-handle-size-sm: 1.25rem;
    --vf-slider-handle-size-lg: 1.4375rem;
    --vf-slider-tooltip-distance: 0.625rem;
    --vf-slider-tooltip-distance-sm: 0.625rem;
    --vf-slider-tooltip-distance-lg: 0.625rem;
    --vf-slider-tooltip-arrow-size: 0.375rem;
    --vf-slider-tooltip-arrow-size-sm: 0.375rem;
    --vf-slider-tooltip-arrow-size-lg: 0.375rem;
    --vf-size: sm;}
"
?>
