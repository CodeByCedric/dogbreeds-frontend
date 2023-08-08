<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div id="layout">
    <header>
      <nav>
        <div class: nav-left>
          <RouterLink :to="{ name: 'home' }">Home</RouterLink>
        </div>
        <div class nav-right>
          <RouterLink :to="{ name: 'login' }">Login</RouterLink> |
          <RouterLink :to="{ name: 'register' }">Register</RouterLink>
        </div>

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
