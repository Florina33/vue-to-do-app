<template>
  <div id="app">
    <!-- <router-view/> -->
    <Header />
    <nav>
      <!-- <router-link to="/">Home</router-link> -->
      <!-- <router-link to="/register">Register</router-link> -->
      <!-- <router-link to="/login">Login</router-link> -->
    </nav>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
import Header from "./components/layout/Header";
// import router from './router'
// import store from './store'

export default {
  name: "app",
  components: {
    Header
  },
  data() {
    return {
      loading: true
    };
  },
  methods: {},
  created() {
    this.$router.push("/login");
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
  font-size: 14px;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
  font-size: 15px;
}

.btn:hover {
  background: #667;
}

.drawer-show {
  /* display: inline-block;
    position: absolute;
    width: 50%;
    z-index: 100; */
}
</style>
