<template>
	<div>
		<Menubar :model="items" class="!rounded-none">
			<template #start>
				<div class="hidden md:block">
					<img src="https://builder.vueform.com/images/logo-horizontal.svg" width="150"
						class="mr-3 h-6 sm:h-9 dark:hidden" alt="App Logo" />
					<img src="https://builder.vueform.com/images/logo-horizontal-dark.svg" width="150"
						class="mr-3 h-6 sm:h-9 hidden dark:block" alt="App Logo" />
				</div>
			</template>
			<template #item="{ item, props }">
				<router-link v-if="item.route" :to="item.route"
					class="flex items-center relative  py-3 px-5 leading-none select-none cursor-pointer no-underline overflow-hidden">
					<span :class="item.icon"> </span>
					<span class="ml-2 font-semibold ">{{ item.label }}</span>
				</router-link>
				<a v-else v-ripple class="flex items-center" v-bind="props.action">
					<span :class="item.icon"> </span>
					<span class="ml-2 font-semibold ">{{ item.label }}</span>
				</a>
			</template>
			<template #end>
				<div class="flex items-center gap-2">
				<div class="block md:hidden">
					<img src="https://builder.vueform.com/images/logo-horizontal.svg" width="150"
						class="h-6 sm:h-9 dark:hidden" alt="App Logo" />
					<img src="https://builder.vueform.com/images/logo-horizontal-dark.svg" width="150"
						class="h-6 sm:h-9 hidden dark:block" alt="App Logo" />
				</div>
					<div
						class="h-6 w-12  rounded-full flex items-center bg-gray-200 dark:bg-gray-600 justify-start dark:justify-end"
						@click="toggleThemeMod">
						<div class="dark:hidden rounded-full bg-gray-100">
							<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24"
								class="vt-switch-appearance-sun h-4 m-1">
								<path
									d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z">
								</path>
								<path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path>
								<path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path>
								<path
									d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z">
								</path>
								<path
									d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z">
								</path>
								<path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path>
								<path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path>
								<path
									d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z">
								</path>
								<path
									d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z">
								</path>
							</svg>
						</div>
						<div class=" hidden dark:block rounded-full bg-gray-400 ">
							<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24"
								class="vt-switch-appearance-moon h-4 m-1 ">
								<path
									d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z">
								</path>
							</svg>
						</div>
					</div>
					<Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
				</div>
			</template>
		</Menubar>
	</div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import Menubar from 'primevue/menubar';
import Avatar from 'primevue/avatar';
const themeMod = ref('');

onMounted(() => {
	// Check localStorage and prefers-color-scheme to determine the initial theme
	if ('theme' in localStorage) {
		themeMod.value = localStorage.theme === 'dark' ? 'dark' : 'light';
	} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		themeMod.value = 'dark';
	}
	updateThemeModeClass();
})


// Function to toggle between light and dark theme
const toggleThemeMod = () => {
	themeMod.value = themeMod.value === 'light' ? 'dark' : 'light';
	localStorage.theme = themeMod.value; // Corrected assignment
	updateThemeModeClass();
};

const updateThemeModeClass = () => {
	document.documentElement.classList.remove('dark');
	if (themeMod.value === 'dark') {
		document.documentElement.classList.add('dark');
	}
}

const items = ref([
	{
		label: 'Dashboard',
		icon: 'pi pi-home',
		route: { name: 'dashboard' }
	},
	{
		label: 'Form',
		icon: 'pi pi-table',
		route: { name: 'form' }
	},
	{
		label: 'Create Form',
		icon: 'pi pi-plus',
		route: { name: 'form-create' }
	},
	{
		label: 'Setting',
		icon: 'pi pi-cog',
		route: { name: 'setting' }
	}

]);
</script>