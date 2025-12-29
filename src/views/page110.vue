 <script setup>
import {ref} from 'vue'; //반응형 상태를 만드는 방법: ref, reactive 사용
let pushUp = 0;
let sitUp = 0;
const refPushUp = ref(0);
const refSitUp = ref(0);
const increasePushUp = () => {
    console.log(`pushUp: ${++pushUp}, refPushUp: ${++refPushUp.value}`)
}
const increaseSitUp = () => {
    console.log(`sitUp: ${++sitUp}, refSitUp: ${++refSitUp.value}`);
}
</script>
<template>
<h3>page110</h3>
<h3>체력 검사</h3>
<br>
<hr>
<ul>
    <li id="pushUp">팔 굽혀 펴기: {{ pushUp }}, {{ refPushUp }}</li>
    <li id="sitUp">윗몸 일으키기: {{ sitUp }}, {{ refSitUp }}</li>
</ul>
<hr>
<br>
<button @click="increasePushUp">팔 굽혀 펴기 증가</button>
<button @click="increaseSitUp">윗몸 일으키기 증가</button>
</template>
<style scoped>
</style>