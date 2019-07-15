<template>
  <!-- if todo.completed == true add class 'is-complete' in this item -->
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
    <button @click="$emit('edit-todo', todo.id)" class="edit">
      <img src="../assets/icon_edit.png" alt="">
    </button>
    <!-- on click event "del-todo" type $emit -->
    <!-- <button @click="$emit('del-todo', todo.id)" class="del">x</button> -->
    <button @click="$emit('del-todo', todo.id)" class="del">
       <img src="../assets/icon_delete.png" alt="">
    </button>
    <input type="checkbox" v-on:change="markComplete" />
    <h3>{{todo.title}}</h3>
    <!-- <p>{{}}</p> -->
  </div>
</template>
 
<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
      console.log(this.todo.completed);
    }
  }
};
</script>

<style scoped>
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}

.is-complete {
  text-decoration: line-through;
}

.edit {
  /* background: url("../assets/icon_edit.png") no-repeat; */
  width: auto;
  height: 25px;
  /* background: #ff0000; */
  /* color: #fff; */
  background: none;
  border: none;
  padding: 5px 0 5px 5px;;
  /* border-radius: 50%; */
  cursor: pointer;
  float: right;
}


.del {
  /* background: url("../assets/icon_delete.png") no-repeat; */
  width: auto;
  height: 25px;
  background: none;
  /* background: #ff0000; */
  /* color: #fff; */
  /* border-radius: 50%; */
  border: none;
  padding: 5px 0 5px 5px;;

  cursor: pointer;
  float: right;
}

.edit img {
    width: auto;
  height: 25px;
}
.del img {
  width: auto;
  height: 17px;
}

</style>
