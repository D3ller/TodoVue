<script setup>
import { useRoute } from 'vue-router'
import {onMounted, ref} from "vue";

const route = useRoute()
const { id } = route.params
let list = ref([]);
let tasks = ref([]);

onMounted(() => {
  if (localStorage.getItem("list") !== null) {
    const storedList = JSON.parse(localStorage.getItem("list"));
    if (Array.isArray(storedList)) {
      list.value = storedList;
    }
  }

});

let find = JSON.parse(localStorage.getItem("list")).find((item) => item.title === id);
console.log(find)
tasks.value = find.tasks

if(find === undefined){
  window.location.href = "/"
}

function addTask(e) {
  if (e.key === "Enter" && e.target.value !== "") {
    let task = {
      title: e.target.value,
      completed: false,
    };
    find.tasks.push(task);

    let index = list.value.findIndex((item) => item.title === id);
    list.value[index] = find;
    localStorage.setItem("list", JSON.stringify(list.value));
    e.target.value = "";

    tasks.value = [...find.tasks];
    console.log(tasks.value);
  }
}

function remove(e) {
  find.tasks.splice(e, 1);
  let index = list.value.findIndex((item) => item.title === id);
  list.value[index] = find;
  localStorage.setItem("list", JSON.stringify(list.value));
  tasks.value = [...find.tasks];
  console.log(tasks.value);
}

function checked(e) {
  find.tasks[e].completed = !find.tasks[e].completed;
  console.log(find.tasks[e].completed);
  let index = list.value.findIndex((item) => item.title === id);
  list.value[index] = find;
  localStorage.setItem("list", JSON.stringify(list.value));
}

</script>

<template>
  <div class="flex">
<h1>{{find.emoji}}</h1>
  <h2 class="title">{{find.title}}</h2>
  </div>

  <input type="text" placeholder="Add a task" @keyup="addTask($event)" />

  <div class="column">
    <div class="task" v-for="(task, index) in tasks" :key="index">
      <div>
      <input @input="checked(index)" type="checkbox" v-model="task.completed" />
      <p>{{task.title}}</p>
      </div>
      <p @click="remove(index)">remove</p>
    </div>
    </div>
</template>

<style scoped>
body {
  background-color: #191919 !important;
}

h1 {
  color: white;
  font-size: 50px;
  font-weight: 600;
}

.flex {
  display: flex;
  align-items: center;
  gap: 20px;
}

.title {
  color: white;
  font-size: 30px;
  font-weight: 600;
}

input[type="text"] {
  width: 100%;
  height: 50px;
  border-radius: 20px;
  border: none;
  outline: none;
  padding: 0 20px;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background-color: #191919;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
}

.task {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  background: white;
  border-radius: 10px;
  padding: 20px;
  justify-content: space-between;
}

.task div {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
</style>