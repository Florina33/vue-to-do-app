<template>
  <div class="form_wrap">
    <form @submit.prevent="formSubmit" class="login_form">
      <label>email:</label>
      <input
        v-model="email"
        type="text"
        :class="{ error: isEmailError }"
      />
      <div class="error_msg" v-if="isEmailError">Поле заполено неверно</div>
      <button type="submit" class="btn btn_submit">Отправить форму</button>
    </form>
  </div>
</template>

<script>

const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
// const emailCheckRegex = /^...Длинный RegExp для валидации Email...$/;

export default {
  data() {
    return {
      email: null,
      isEmailError: false
    };
  },

  computed: {
    isEmailValid() {
      return emailCheckRegex.test(this.email);
    }
  },

  methods: {
    formSubmit() {
        // debugger;

        if (!this.isEmailValid){
          this.isEmailError = true;
          return;
        }
        this.$router.push("/");
    }

    // isEmailValid: function (email) {
    //   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //   return re.test(email);
    // }
  }

};
</script>

<style scoped>
.form_wrap {
  width: 100%;
  margin: 20px auto;
  text-align: center;
}

.form_wrap .login_form {
  display: inline-block;
  max-width: 600px;
  width: 100%;
  border: 1px solid #e0dfdf;
  padding: 20px;
}

.btn_submit {
  display: block;
  text-align: center;
  margin: 20px auto;
  background: #f76251;
}

label {
  display: block;
  font-size: 15px;
  line-height: 2;
}

.error_msg {
  color: red;
  font-size: 17px;
}

</style>
