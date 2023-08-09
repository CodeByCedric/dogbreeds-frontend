<template>
  <h2>Register</h2>
  <form @submit.prevent="onRegister">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="name" />
    </div>

    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" />
    </div>

    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" />
    </div>

    <input v-bind:disabled="disabled" class="button" type="submit" value="Register" />
  </form>
</template>

<script>
import UserService from '../services/UserService.js';

export default {
  name: 'RegisterView',
  emits: ['login'],
  data() {
    return {
      disabled: false,
      name: '',
      email: '',
      password: '',
    };
  },
  methods: {
    onRegister() {
      let user = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      UserService.registerUser(user)
        .then((response) => {
          console.log('register success', response);
          // TODO: user feedback (message, redirect, etc.)
        })
        .catch((error) => {
          console.log('register error', error);
        });
      this.name = '';
      this.email = '';
      this.password = '';
    },
  },
};
</script>

<style scoped>
h2 {
  padding-bottom: 1rem;
}

h2,
form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
}
.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
}

.form-group input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.button {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  background-color: #ddd;
  cursor: pointer;
  margin-left: auto;
}
</style>
