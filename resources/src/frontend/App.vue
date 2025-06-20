<template>
	<div>
		<component is="style">
			{{ formStyle }}
		</component>
		<div class="vfb-preview-wrapper" :ref="'vueform-'+props.formId" v-show="!loader">
			<vueform v-bind="formData"></vueform>
		</div>
	</div>
</template>

<script setup lang="ts">
	// Import the defineProps function from 'vue' to define props
	import { defineProps, ref, onMounted } from 'vue';
	import { get } from "@/axios/index";


	const formData = ref({});
	const formStyle = ref({});
	const loader = ref(true)
	// Define props using the defineProps function
	onMounted(() => {
		if (window.wp_vue_form_data && window.wp_vue_form_data[props.formId]) {
			formData.value = window.wp_vue_form_data[props.formId];
			removeLoader();
		} else {
			get(`/form/${props.formId}`).then((response) => {
				if (response?.data?.form_elements) {
					formData.value = response.data.form_elements;
					formStyle.value = response.data.style;
				}
			}).catch((error) => {
				console.error(error)
			}).finally(() => {
				removeLoader()
			})
		}
	});

	const removeLoader = function () {
		loader.value = false;
		const loaderEle = document.querySelector(`#wpVueFormFrontend-${props.formId} .vl-overlay`);
		const parentLoaderEle = document.querySelector(`#wpVueFormFrontend-${props.formId}`);
		if (loaderEle && parentLoaderEle) {
			parentLoaderEle.classList.remove('loading');
			loaderEle.remove();
		}
	}

	const props = defineProps({
		formId:  { type: Number, required: true }
	} ) 

</script>

<style></style>