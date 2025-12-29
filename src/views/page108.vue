 <script setup>
const pop = message => alert(message);
const test = () => alert('test!');
 </script>
 
 <template>
 <h3>page108</h3>
 <button v-on:click="pop('Hello1111')">Hello</button>
 <button @click="pop('Hi')">Hi</button>
 <button @click="test">test</button>
 <button @click="pop">undefiend</button>
 </template>
 
 <style scoped>
 
 </style>