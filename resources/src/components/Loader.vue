<template>
  <div class='vl-overlay'>
    <div class='relative'>
      <svg viewBox='0 0 38 38' xmlns='http://www.w3.org/2000/svg' height="64" width="64" :stroke="color">
        <g fill='none' fill-rule='evenodd'>
          <g transform='translate(1 1)' stroke-width='2'>
            <circle stroke-opacity='.25' cx='18' cy='18' r='18'></circle>
            <path d='M36 18c0-9.94-8.06-18-18-18'>
              <animateTransform attributeName='transform' type='rotate' from='0 18 18' to='360 18 18' dur='0.8s'
                repeatCount='indefinite'>
              </animateTransform>
            </path>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>
<script setup>

  import { defineProps } from 'vue';
  const props = defineProps({
    color: { type: String, required: true }
  }) 
</script>
<style scoped>
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
</style>