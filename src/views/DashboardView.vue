<template>
  <DogFilter></DogFilter>
  <div class="dogs">
    <RouterLink :to="{ name: 'add-dog' }"><p class="dog-card" id="create-dog">+</p></RouterLink>
    <DogCard v-for="dog in dogs" :key="dog.id" :dog="dog"></DogCard>
  </div>
</template>

<script>
import DogService from '../services/DogService.js';
import DogCard from '../components/DogCard.vue';
import DogFilter from '../components/DogFilter.vue';

export default {
  emits: ['login'],
  components: {
    DogCard,
    DogFilter,
  },
  watch: {
    '$i18n.locale': function (newLocale) {
      this.fetchDogs(newLocale);
    },
  },
  data() {
    return {
      dogs: null,
      dogCache: {},
    };
  },
  methods: {
    fetchDogs(locale) {
      if (this.dogCache[locale]) {
        this.dogs = this.dogCache[locale];
        return;
      } else {
        DogService.getDogs(locale)
          .then((response) => {
            const dogsForCache = response.data.map((dog) => {
              dog.selectedExercise = true;
              dog.selectedTrainability = true;
              dog.selectedGrooming = true;
              return dog;
            });
            this.dogCache[locale] = dogsForCache;
            this.dogs = dogsForCache;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  created() {
    let locale = this.$i18n.locale;
    this.fetchDogs(locale);
  },
};
</script>

<style scoped>
#create-dog {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  padding: 1.25rem;
  width: 15.5rem;
  height: 17.5rem;
  margin: 1rem;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 1rem;
  text-decoration: none;
}

#create-dog:hover {
  color: #fcba03;
}
</style>
