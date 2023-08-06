<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink> | 
          <RouterLink to="/about">About</RouterLink> | 
          <RouterLink to="/login">Login</RouterLink> | 
          <RouterLink to="/register">Register</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style>
  #layout {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
  }
  nav {
    padding: 2rem;
  }
  nav a {
    font-weight: bold;
    color: #2c3e50
  }
  nav a.router-link-exact-active {
    color: #328da8;
  }
</style>
