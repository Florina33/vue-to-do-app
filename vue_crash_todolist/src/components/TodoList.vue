<template>
  <div id="todo-list">
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" v-on:edit-todo="showDrawerForEdit" />

    <div class="drawer-show" v-if="drawerShow">
      <!-- <Drawer v-on:add-todo="addTodo" :todo="todoOnEdit"  v-on:edit-todo="$emit('hide-drawer', drawerShow)" :drawerShow="drawerShow" /> -->
      <Drawer v-on:add-todo="addTodo" :todo="todoOnEdit" :drawerShow="drawerShow" />
    </div>

    <button v-on:click="showDrawer()" class="btn_add_item">+</button>
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
  name: "todo-list",
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
      drawerShow: false,
      todoOnEdit: null
    };
  },

  methods: {
    showDrawer() {
      this.drawerShow = true;
    },

    switchDrawer() {
      this.drawerShow = !this.drawerShow;
    },

    deleteTodo(id) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((this.todos = this.todos.filter(todo => todo.id !== id))) // filter() method creates a new array with all elements that pass the test implemented by the provided function. // array.filter (callback[, thisObject]); // return element !== id
        .catch(err => console.log(err));
    },

    showDrawerForEdit(todo) {
      console.log(todo);
      console.log(this.drawerShow);
      this.todoOnEdit = todo;
      this.showDrawer();

      // $this.editTodo(todo);
    },

    editTodo(todo) {
      console.log(todo);

      axios
        .patch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo)
        .then(todo => {
          console.log(todo);

          this.switchDrawer();
        })
        .catch(err => console.log(err));
    },

    addTodo(newTodo) {
      // console.log("addTodo");
      const { title, completed } = newTodo;

      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          title,
          completed
        })
        .then(res => {
          console.log(res.data);
          this.todos = [...this.todos, res.data]; // Create new array from existing array + more element (Spread Operator)
          this.switchDrawer();
        })
        .catch(err => console.log(err));
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

<style scoped lang="scss">
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
