<template>
  <div class="todos-list">
    <div v-bind:key="todo.id" v-for="todo in todos" class="todos-item">
      <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)"  v-on:edit-todo="$emit('edit-todo', todo)" />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "Todos",
  components: {
    TodoItem
  },
  props: ["todos"]
};
</script>

<style scoped>
.todos-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  margin: 30px auto;
}

.todos-item {
  width: 33.33%;
  padding: 0 1% 20px 1%;
}
</style>

