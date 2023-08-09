import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { I18n } from './i18n';


init();

function init() {
  registerServiceWorker();
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('src/sw/ServiceWorker.js')
      .then((res) => console.log('Succesfully registered serviceworker with scope', res.scope))
      .catch((err) => console.log('Error registering serviceworker'));
  } else {
    console.log('Serviceworker not supported');
  }
}

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(I18n);

app.mount('#app');
