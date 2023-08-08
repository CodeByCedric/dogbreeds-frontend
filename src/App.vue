<template>
  <div id="layout">
    <header>
      <nav>
        <div class="nav-left">
          <RouterLink :to="{ name: 'home' }">Home</RouterLink>
        </div>
        <div class="nav-right">
          <RouterLink v-show="!isLoggedIn" :to="{ name: 'login' }">Login | </RouterLink>
          <a v-show="isLoggedIn" @click="onLogout" href="#">Logout | </a>
          <RouterLink :to="{ name: 'register' }">Register</RouterLink>
        </div>
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'App',
  data() {
    return {
      isLoggedIn: false
    };
  },
  methods: {
    onLogout() {
      this.isLoggedIn = false;
      this.$router.push({ name: 'home' });
    }
  }
}
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
}
nav a:hover {
  color: #fcba03;
}
</style>
