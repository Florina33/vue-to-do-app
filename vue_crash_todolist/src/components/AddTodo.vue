<template>
  <div>
    <!-- <form @submit="addTodo"> -->
    <form>
      <div>
        <label for="title" class="label">Title</label>
        <input type="text" v-model="title" name="title" placeholder="..." />
      </div>
      <!-- <div>
        <label class="label">Description</label>
         <textarea class="" placeholder="" maxlength="1000" v-model=""></textarea>
      </div>-->

      <!-- <input type="submit" value="Save" class="btn btn_save" /> -->
      <input type="submit" value="Save" class="btn btn_save" @click="addTodo" />
    </form>
  </div>
</template>

<script>
// import uuid from 'uuid';

export default {
  name: "AddTodo",
  props: ["todo"], // проверять это Новый объект или это редактируемый старый

  data() {
    return {
      title: this.todo && this.todo.title
    };
  },

  methods: {
    addTodo(e) {
      e.preventDefault();
      const newTodo = {
        title: this.title, // from input  v-model="title"
        completed: false
      };
      // Send up to parent
      if (!this.todo) 
        this.$emit("add-todo", newTodo);
    }
  }
};
</script>

<style scoped>
form {
  display: block;
}

label {
  display: block;
  font-size: 17px;
  color: grey;
  margin-bottom: 5px;
}

input[type="text"],
textarea,
input[type="submit"] {
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;
  color: #252121;
  text-align: left;
  resize: none;
  background-color: #fff;
  border: 1px solid #cecece;
  border-radius: 6px;
  outline: none;
  padding: 10px 15px;
  margin-bottom: 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
input[type="text"] {
  width: 100%;
}

input[type="submit"] {
  display: block;
  border: none;
  background-color: #f37677;
  color: #fff;
  text-align: center;
  margin: 0 auto;
  font-weight: bold;
}
</style>
