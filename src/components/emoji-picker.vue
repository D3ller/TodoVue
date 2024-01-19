<script setup>
import { onMounted, onBeforeUnmount, ref, defineEmits } from 'vue'

const emits = defineEmits(['colorupdate', 'eUpdate']);

const gridEmojiRef = ref(null);

function untoggle() {
  emits('untoggle');
}

function changeEmoji(e) {
  console.log(e.target.innerText)
  emits('eUpdate', e.target.innerText);
  emits('untoggle');
}

</script>

<template>
  <div class="emoji_header">    <div class="grid-emoji-title">Emoji picker</div><p class="close" @click="untoggle">x</p> </div>
  <div class="grid-emoji" ref="gridEmojiRef">
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😀
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😁
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😂
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      🤣
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😃
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😄
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😅
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😆
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😉
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😊
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😋
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😎
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😍
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😘
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      🥰
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😗
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😙
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😚
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      🤗
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      🤩
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      🤔
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      🤨
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😐
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😑
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😶
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      🙄
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😏
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😣
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😥
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😮
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      🤐
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😯
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😪
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😫
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😴
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😌
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😛
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😜
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😝
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      🤤
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😒
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😓
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😔
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😕
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      🙃
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      🤑
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😲
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      ☹️
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      🙁
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😖
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😞
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😟
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😤
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😢
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😭
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😦
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😧
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😨
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😩
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      🤯
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😬
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😰
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😱
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      🥵
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      🥶
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😳
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      🤪
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😵
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      🥴
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😠
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😡
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      🤬
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      🤢
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      🤮
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      🤧
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      😇
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      🥳
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      🥺
    </div>
    <div class="grid-emoji_item" @click="changeEmoji($event)">
      🤠
    </div>
</div>
</template>

<style scoped>
.grid-emoji-title {
  font-size: 16px;
  font-weight: bold;
  font-family: Poppins;
  margin: 0;
  text-transform: lowercase;
}

.close {
  font-size: 16px;
  font-weight: bold;
  font-family: Poppins;
  margin: 0;
  text-transform: lowercase;
  cursor: pointer;
  margin-right: 20px;
  color: red;
}

.grid-emoji {
  display: grid;
  grid-template-columns: repeat(5, 50px);
  grid-template-rows: repeat(6, 50px);
  grid-gap: 10px;
  justify-items: center;
  height: 310px;
  align-items: flex-start;
  background: white;
  padding: 10px;
  width: 330px;
  border-radius: 0 0 20px 20px;
  overflow-y: scroll;
  overflow-x: hidden
}

.emoji_header {
  width:330px;
  background: white;
  border-radius: 20px 20px 0px 0px;
  padding: 10px 10px 0 10px;
  display: flex;
  justify-content: space-between;
}

.grid-emoji_item {
  width: 50px;
  height: 50px;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
}
</style>