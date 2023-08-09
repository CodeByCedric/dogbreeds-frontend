<template>
  <div id="layout">
    <header>
      <nav>
        <div class="nav-left">
          <RouterLink :to="{ name: 'home' }">{{$t("home")}}</RouterLink>
        </div>
        <div class="nav-right">
          <RouterLink v-if="isLoggedIn" :to="{ name: 'login' }">{{$t("dasboard")}}</RouterLink>
          <RouterLink v-show="!isLoggedIn" :to="{ name: 'login' }">{{$t("login")}}</RouterLink>
          <a v-show="isLoggedIn" @click="onLogout" href="#">{{$t("logout")}}</a>
          <RouterLink v-if="!isLoggedIn" :to="{ name: 'register' }">{{$t("register")}}</RouterLink>
        </div>
      </nav>
    </header>
    <RouterView @login="handleLogin" />
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import UserService from '/src/services/UserService.js';

export default {
  name: 'App',
  data() {
    return {
      isLoggedIn: false,
    };
  },
  methods: {
    handleLogin() {
      this.isLoggedIn = true;
    },
    onLogout() {
      this.isLoggedIn = false;
      this.$router.push({ name: 'home' });
      UserService.logoutUser();
    },
  },
};
</script>

<style>
#layout {
  font-family: Arial, Helvetica, sans-serif;
}
nav {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 1rem;
}

nav a:hover {
  color: #fcba03;
}

nav a:last-child {
  margin-right: 0;
}
</style>
