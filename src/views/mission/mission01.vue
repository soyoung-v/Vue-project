 <script setup>
 const students = [
  { name: '수영', present: true },
  { name: '준하', present: false },
  { name: '가은', present: true },
  { name: '수빈', present: true },
  { name: '예림', present: false },
  { name: '준이', present: true }
];
 </script>
 
 <template>
    <h3>mission01</h3>
    <div v-for="(item, idx) in students" :key="idx">
        {{ item.name }}
        <span v-if="item.present">출석</span>
    </div>


 </template>
 
 <style scoped>
 
 </style>