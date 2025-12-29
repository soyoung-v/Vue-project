<script setup>
import router from './router';


</script>

<template>
  <div>
    <nav>
      <router-link to="/component">컴포넌트</router-link>
      <router-link to="/page98">page98</router-link>
      <router-link to="/page103">page103</router-link>
    </nav>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style scoped>

</style>
