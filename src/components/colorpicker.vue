<script setup>
import { onMounted, onBeforeUnmount, ref, defineEmits } from 'vue'
const emits = defineEmits(['colorupdate']);

var complete = ref(null)

let allcolor = ["#3b82f6","#f59e0b","#10b981","#ef4444","#6366f1"]

if(localStorage.getItem("color") == null){
} else {
  let color = JSON.parse(localStorage.getItem("color"))
  console.log(color)
  color.forEach((div, index) => {
    allcolor.push(color[index].hex)
  });
}
function changeColor(color, event) {
  let allDivs = complete.value.querySelectorAll(".color");
  allDivs.forEach((div) => {
    div.style.border = "none";
  });
  event.target.style.border = "2px solid white";
  emits('colorupdate', color);
}
</script>

<template>
<div class="color-selector" ref="complete">
  <div class="color"  v-for="color in allcolor" :style="{backgroundColor: color}" @click="changeColor(color, $event)"></div>
</div>
</template>

<style scoped>
.color-selector {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  margin-top: 20px;
}

.color {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 10px;
  cursor: pointer;
}
</style>