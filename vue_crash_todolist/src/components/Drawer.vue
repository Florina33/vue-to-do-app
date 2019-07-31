<template>
  <div>
    <!-- <div v-if="drawerShow" class="drawer-wrap" @click="$emit('hide-drawer', drawerShow)"> -->
    <div class="drawer-wrap" @click="$emit('hide-drawer', drawerShow)">
      
    </div>

      <div class="drawer">
        <AddTodo
          :todo="todo"
          v-on:add-todo="$emit('add-todo', $event)"
          v-on:edit-todo="$emit('edit-todo', $event)"
        />

        <button v-bind:class="['btn_drawer_close', { active: drawerShow }]" @click="hideDrawer()"></button>
      </div>
    
  </div>
</template>

<script>
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import axios from "axios";

export default {
  name: "drawer",
  // props: {
  //   drawerShow: Boolean
  // },
  components: {
    Todos,
    AddTodo
  },
  props: ["todo"],

  data() {
    return {
      //  todos: [],
      loading: true,
      drawerShow: false
    };
  },

  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5") // get and display data from the API using axios, based on the HTTP client's promise
      .then(res => (this.todos = res.data))
      .catch(err => console.log(err))
      .finally(() => (this.loading = false));
  },
  methods: {
    switchDrawer() {
      this.drawerShow = !this.drawerShow;
    },

    showDrawer() {
      this.drawerShow = true;
    },

    hideDrawer() {
      this.drawerShow = false;
    }
  }
};
</script>

<style scoped>
.drawer-wrap {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.4;
  cursor: pointer;
  z-index: 1;
}

.drawer {
  background: #eaeaea;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  opacity: 0.98;
  padding: 30px 2%;
  max-width: 500px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}

.btn_drawer_close {
  position: absolute;
  z-index: 15;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}
</style>

