<template>
  <h2>Login</h2>
  <form @submit.prevent="onLogin">
    <div class="form-group">
      <label for="email">{{ $t('email') }}</label>
      <input type="email" id="email" v-model="email" />
    </div>

    <div class="form-group">
      <label for="password">{{ $t('password') }}</label>
      <input type="password" id="password" v-model="password" />
    </div>

    <input v-bind:disabled="disabled" class="button" type="submit" :value="$t('login')" />
  </form>
</template>

<script>
import UserService from '../services/UserService.js';

export default {
  name: 'LoginView',
  emits: ['login'],
  data() {
    return {
      disabled: false,
      email: '',
      password: '',
    };
  },
  methods: {
    onLogin() {
      let user = {
        email: this.email,
        password: this.password,
      };
      UserService.loginUser(user)
        .then((response) => {
          this.email = '';
          this.password = '';
          this.$emit('login');
          this.$router.push({ name: 'home' });
        })
        .catch((error) => {
          console.log('login error', error);
          alert('login failed');
        });
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
