 <script setup>
let loading = true;
const perent = ['fruit','abc'];
const child = 'item';

const visible = { fruit: true };
const hidden = { fruit: false };

const rect = {
    backgroundColor: 'blue',
    width: '200px',
    height: '100px'
};
 </script>
 
 <template>
    <h3>Page98.vue</h3>
    <input type="text" placeholder="아이디" :readonly="loading">
    <input type="password" placeholder="비밀번호" :readonly="loading">
    <button :disabled="loading">로그인</button>
    <hr>
    <ul :class="perent" class="fruit">
        <li :class="child">사과</li>
        <li :class="child">바나나</li>
        <li :class="child">딸기</li>
        <li :class="child">배</li>
    </ul>
    <hr>
    <div :class="visible">사과</div>
    <div :class="hidden">오이</div>
    <div :class="{fruit: true}">배</div>
    <hr>
    <div :style="rect"></div>

 </template>
 
 <style scoped>
    .fruit {color: red;}
 </style>