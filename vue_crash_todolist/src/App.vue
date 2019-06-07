<template>
  <div id="app">
    <Header/>
    <AddTodo v-on:add-todo="addTodo"/>
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
  </div>
</template>

<script>
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import axios from "axios";

export default {
  name: "app",
  components: {
    Header,
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: [],
      loading: true
    };
  },
  methods: {
    deleteTodo(id) {
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((this.todos = this.todos.filter(todo => todo.id !== id))) // filter() method creates a new array with all elements that pass the test implemented by the provided function. // array.filter (callback[, thisObject]); // return element !== id
        .catch(err => console.log(err));
    },
    addTodo(newTodo) {
      const { title, completed } = newTodo;

      axios.post("https://jsonplaceholder.typicode.com/todos", {
          title,
          completed
        })
        .then(res => (this.todos = [...this.todos, res.data])) // Create new array from existing array + more element (Spread Operator)
        .catch(err => console.log(err));
    }
  },
  created() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5") // get and display data from the API using axios, based on the HTTP client's promise
      .then(res => (this.todos = res.data))
      .catch(err => console.log(err))
      .finally(() => (this.loading = false));
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #667;
}
</style>
