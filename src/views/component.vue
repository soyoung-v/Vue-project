<script setup>
import FrontWheel from '@/components/FrontWheel.vue';
import RearWheel from '@/components/RearWheel.vue';  
const message = 'There';
const message2 = {
  name: 'kim',
  age: 20
};
</script>

<template>
  <div>Hello {{ message2.name }}</div>
  <hr>
  <div>Hello {{ message2 }}</div>
  <div>
    <span>Hello </span>
    <span v-text="message2"></span>
  </div>
  <hr>
  <div>Hello {{ message }}</div>
  <div>
    <span>Hello </span>
    <span v-text="message"></span>
  </div>
  <front-wheel></front-wheel>
  <rear-wheel/>
</template>