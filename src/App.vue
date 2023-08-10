<template>
  <div id="layout">
    <header>
      <nav>
        <div class="nav-left">
          <span title="English" @click="changeLocale('en')">EN</span>
          <span>|</span>
          <span title="Nederlands" @click="changeLocale('nl')">NL</span>
          <RouterLink :to="{ name: 'home' }">{{ $t('home') }}</RouterLink>
        </div>
        <div class="nav-right">
          <RouterLink v-if="isLoggedIn" :to="{ name: 'dashboard' }">{{
            $t('dashboard')
          }}</RouterLink>
          <RouterLink v-show="!isLoggedIn" :to="{ name: 'login' }">{{ $t('login') }}</RouterLink>
          <a v-show="isLoggedIn" @click="onLogout" href="#">{{ $t('logout') }}</a>
          <RouterLink v-if="!isLoggedIn" :to="{ name: 'register' }">{{
            $t('register')
          }}</RouterLink>
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
    activeLocale() {
      let locale = this.$i18n.locale;
      console.log(locale);
      return locale;
    },
    changeLocale(locale) {
      this.$i18n.locale = locale;
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
nav a,
nav span {
  font-weight: bold;
  color: #2c3e50;
  margin-left: 1rem;
  margin-right: 1rem;
}

nav span {
  margin-left: 0;
  margin-right: 0.5rem;
}

nav a:hover,
nav span:hover {
  cursor: pointer;
  color: #fcba03;
}

nan span:first-child {
  margin-left: 0;
}

nav a:last-child {
  margin-right: 0;
}

.router-link-active {
  color: #fcba03;
}

</style>
