<template>
  <div id="home">
    <!-- <Header /> -->
    <!-- <router-view/> -->
    <!-- <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/login">Login</router-link>
    </nav>
    <router-view /> -->

    <!-- <router-view></router-view> -->

    <!-- <AddTodo v-on:add-todo="addTodo" /> -->
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />

     <div class="drawer-show" v-if="drawerShow">
         <Drawer />
    </div>
    <button v-on:click="addNewElem()" class="btn_add_item">+</button>
  </div>
</template>

<script>
import Header from "./layout/Header";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import Drawer from "./Drawer";
import axios from "axios";

// import router from './router'
// import store from './store'

export default {
  name: "home",
  components: {
    Header,
    Todos,
    AddTodo,
    Drawer
  },
  
  data() {
    return {
      todos: [],
      loading: true,
       drawerShow: false
    };
  },

  methods: {
    deleteTodo(id) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((this.todos = this.todos.filter(todo => todo.id !== id))) // filter() method creates a new array with all elements that pass the test implemented by the provided function. // array.filter (callback[, thisObject]); // return element !== id
        .catch(err => console.log(err));
    },
    addTodo(newTodo) {
      const { title, completed } = newTodo;

      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          title,
          completed
        })
        .then(res => (this.todos = [...this.todos, res.data])) // Create new array from existing array + more element (Spread Operator)
        .catch(err => console.log(err));
    },

    addNewElem(){
        this.drawerShow = true;
    }
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5") // get and display data from the API using axios, based on the HTTP client's promise
      .then(res => (this.todos = res.data))
      .catch(err => console.log(err))
      .finally(() => (this.loading = false));
  }
};
</script>

<style scoped>
  .btn_add_item {
    position: absolute;
    right: 35px;
    bottom: 35px;
    background: #f94747;
    border-radius: 50%;
    color: #fff;
    font-size: 40px;
    border: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: none;
    cursor: pointer;
    width: 50px;
    height: 50px;
  }
</style>
