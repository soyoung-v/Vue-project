 <script setup>
import { onMounted, reactive } from 'vue'; //상수, 변수 함수가 넘어옴
import axios from 'axios'; // 객체 주소값 리턴

const state = reactive({
    imgList: []
})

onMounted(() => {
    console.log('onMounted');
    axios.get('https://picsum.photos/v2/list')
        .then(res => state.imgList = res.data );
});

const changeSizeUrl = item => {
    const width = parseInt(item.width * 0.1);
    const height = parseInt(item.height * 0.1);
    return `https://picsum.photos/id/${item.id}/${width}/${height}`;
}
 </script>
 
 <template>
 <h3>page126</h3>  
    <div v-for="item in state.imgList" :key="item.id">
    <img :src="changeSizeUrl(item)" :alt="item.author">
    <div>{{ item.author }}</div>
</div>
</template>

 <style scoped>
 
 </style>