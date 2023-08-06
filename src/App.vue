<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div id="layout">
    <header>
      <nav>
        <RouterLink :to="{ name: 'home' }">Home</RouterLink> |
        <RouterLink :to="{ name: 'login' }">Login</RouterLink> |
        <RouterLink :to="{ name: 'register' }">Register</RouterLink>
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<style>
#layout {
  font-family: Arial, Helvetica, sans-serif;
}
nav {
  padding: 2rem;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a:hover {
  color: #fcba03;
}
</style>
