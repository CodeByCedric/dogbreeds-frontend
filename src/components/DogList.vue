<template>
  <DogFilter @filter="handleFilterChange"></DogFilter>
  <main>
    <div class="dogs">
      <RouterLink v-if="$route.path === '/dashboard'" :to="{ name: 'add-dog' }">
        <p class="dog-card" id="create-dog">+</p>
      </RouterLink>
      <DogCard v-for="dog in dogs" :key="dog.id" :dog="dog" :showIcons="showIcons"></DogCard>
    </div>
  </main>
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
  props: {
    showIcons: {
      type: Boolean,
      default: false,
    },
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
    handleFilterChange(filterData) {
      this.dogs = this.dogCache[this.$i18n.locale].filter((dog) => {
        return this.filterDog(dog, filterData);
      });
    },
    filterDog(dog, filter) {
      const levels = {
        'very high': 9,
        high: 7,
        moderate: 5,
        low: 2,
        'very low': 1,
      };
      console.log(filter);

      if (filter.exercise !== 'all' && dog.exercise_needs < levels[filter.exercise]) {
        return false;
      }
      if (filter.trainability !== 'all' && dog.trainability < levels[filter.trainability]) {
        return false;
      }
      if (filter.grooming !== 'all' && dog.grooming_requirements < levels[filter.grooming]) {
        return false;
      }

      return true;
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
  justify-content: center;
  align-items: center;
  font-size: 5rem;
}

#create-dog:hover {
  color: #fcba03;
}
</style>
