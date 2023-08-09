<!-- todo: make component out of ul -->
<template>
  <div v-if="dog" class="dog-details-page">
    <h1>{{ dog.name }}</h1>
    <ul>
      <li>{{ $t('exercise_needs.title') }}: {{ dog.exercise_needs }}</li>
      <li>{{ $t('trainability.title') }}: {{ dog.trainability }}</li>
      <li>{{ $t('grooming_requirements.title') }}: {{ dog.grooming_requirements }}</li>
    </ul>
    <p v-html="dog.description"></p>
  </div>
</template>

<script>
import DogService from '../services/DogService.js';

export default {
  props: {
    id: {
      required: true,
    },
  },
  data() {
    return {
      dog: null,
      dogDetailCache: {},
    };
  },
  watch: {
    '$i18n.locale': {
      immediate: true,
      handler(newLocale) {
        this.fetchDogDetails(newLocale);
      },
    },
  },
  methods: {
    fetchDogDetails(locale) {
      if (this.dogDetailCache[locale]) {
        this.dog = this.dogDetailCache[locale];
        return;
      } else {
        DogService.getDog(this.id, locale)
          .then((response) => {
            this.dog = response.data;
            this.dogDetailCache[locale] = this.dog;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style scoped>
.dog-details-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: start;
}

.dog-details-page p {
  max-width: 50rem;
}
</style>
