 <script setup>
let loading = false;

const fruit = ['apple', 'banana', 'pear'];
 </script>
 
 <template>
    <h3>page103.vue</h3>
    <div v-if="loading">로딩 중</div>
    <div v-else>로딩 완료</div>

    <div>{{ loading?'로딩 중':'로딩 완료' }}</div>

    <hr>
    <div v-show="loading">show 로딩 중</div>
    <div v-show="!loading">show 로딩 완료</div>
    <hr>
    
    <div v-for="(item,idx) in fruit" :key="idx">{{ idx+1 }}. {{ item }}</div>
 </template>
 
 <style scoped>
 
 </style>