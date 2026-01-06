<script setup>
const props = defineProps({
    color: String
});
</script>

<template>
    <div :style="{ color: props.color, backgroundColor: 'black' }">{{ props.color || 'BLACK' }} TIRE</div> 
</template>