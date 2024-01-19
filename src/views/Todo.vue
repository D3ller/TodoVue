<script setup>
import EmojiPicker from "@/components/emoji-picker.vue";
import {onMounted, ref} from 'vue'
import Colorpicker from "@/components/colorpicker.vue";
let emoji = ref(false);
let myEmote = ref("😀");
let menu = ref('')
let pickerPosition = ref({ top: 0, left: 0 });
let list = ref([]);
let color = ref("")
let title = ref("")
let error = ref(false)
let errorText = ref("")



function toggleEmoji(event) {
  if (!emoji.value) {
    const rect = event.target.getBoundingClientRect();
    pickerPosition.value = { top: rect.bottom + window.scrollY + 20, left: rect.left + window.scrollX };
  }
  emoji.value = !emoji.value;

}

function untoggleEmoji() {
  emoji.value = false;
  console.log(emoji)
}

function emojiUpdate(e) {
myEmote.value = e;
}

function changeColor(newcolor) {
  console.log(color)
  color.value = newcolor;
}

onMounted(() => {
  if (localStorage.getItem("list") !== null) {
    const storedList = JSON.parse(localStorage.getItem("list"));
    if (Array.isArray(storedList)) {
      list.value = storedList;
    }
  }

  console.log(list.value)
});

function updateTitle(e) {
  title.value = e.target.value;
}


function Submittodo() {
  if (!Array.isArray(list.value)) {
    list.value = [];
  }

  if (title.value === "") {
    error.value = true;
    errorText.value = "Please enter a title"
    return;
  }

  var regex = /^[a-zA-Z0-9 ]*$/
  if (!regex.test(title.value)) {
    error.value = true;
    errorText.value = "Please enter a alphanumeric title"
    return;
  }

  if (color.value === "") {
    error.value = true;
    errorText.value = "Please select a color"
    return;
  }

  let found = list.value.find((element) => element.title === title.value);
  console.log(found)

  if (found !== undefined) {
    error.value = true;
    errorText.value = "This title is already taken"
    return;
  }

  let todo = {
    emoji: myEmote.value,
    title: title.value,
    color: color.value,
    tasks: [],
  };

  list.value.push(todo);
  localStorage.setItem("list", JSON.stringify(list.value));
}

</script>


<style scoped>
.main_card {
  width: 563px;
  height: auto;
  background: #191919;
  border-radius: 20px;
  padding: 20px;
}

.main_card h1 {
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  justify-items: center;
  height: 100vh;
  align-items: center;
}

.emoji-picker {
  width: 60px;
  height: 60px;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.emoji-picker p {
  font-size: 30px;
  margin: 0;
}

.input_title {
  width: 100%;
  height: 50px;
  border: none;
  outline: none;
  background: #262626;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
  color: white;
  font-size: 16px;
  font-weight: 600;
}

.pickers {
  position: absolute;

}

.final {
  width: 100%;
  height: 50px;
  background-color: #404040;
  color: white;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 15px;
  font-weight: 600;
  margin-top: 20px;
  transition: background-color 0.2s ease;
}

.error {
  width: 100%;
  height: 50px;
  background: #ef4444;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.error p {
  color: #ffffff;
  font-size: 16px;
  margin: 0;
  font-weight: 600;
}

.card {
  width: 180px;
  height: auto;
  padding: 20px;
  border-radius: 20px;
}

.sologrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

h2 {
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

a {
  text-decoration: none;
  color: white;
}

.card .emote {
  font-size: 30px;
  margin: 0;
}
</style>
<template>
  <main>
<div class="grid">
  <div class="main_card">
    <h1>Create your todo-list</h1>

    <div v-if="error" class="error">
      <p>{{errorText}}</p>
    </div>
    <div class="emoji-picker" @click="toggleEmoji($event)" >
    <p>{{myEmote}}</p>
  </div>
  <div v-if="emoji" :style="{ position: 'absolute', top: pickerPosition.top + 'px', left: pickerPosition.left + 'px' }">
    <emoji-picker ref="menu" class="pickers" @untoggle="untoggleEmoji" @eUpdate="emojiUpdate($event)"></emoji-picker>
  </div>

  <input @input="updateTitle($event)" type="text" placeholder="Title of your list" class="input_title">

    <Colorpicker @colorupdate="changeColor"></Colorpicker>

    <button :style="title.length > 0 ? {backgroundColor: '#3b82f6'} : {backgroundColor: '#404040'}" class="final" @click="Submittodo">Submit</button>

</div>

<div class="sologrid">
  <router-link
      class="card"
      :to="'/todo/' + todo.title"
      v-if="list.length > 0"
      v-for="todo in list"
      :key="todo.title"
      :style="todo.tasks.length === 0 ?
          { backgroundColor: todo.color } :
          (todo.tasks.filter(task => task.completed).length === todo.tasks.length ?
          { backgroundColor: todo.color, opacity: '0.5' } :
          { backgroundColor: todo.color })">
    <p class="emote">{{todo.emoji}}</p>
  <h2>{{todo.title}}</h2>

  <p>{{todo.tasks.filter((task) => task.completed).length}} of {{todo.tasks.length}}</p>

</router-link>
</div>

</div>
  </main>
</template>
