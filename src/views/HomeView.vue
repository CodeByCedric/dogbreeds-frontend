<template>
  <DogFilter></DogFilter>
  <main>
    <div class="dogs">
      <DogCard v-for="dog in dogs" :key="dog.id" :dog="dog"></DogCard>
    </div>
  </main>
</template>

<script>
import DogService from '../services/DogService.js';
import DogCard from '../components/DogCard.vue';
import DogFilter from '../components/DogFilter.vue';

export default {
  components: {
    DogCard,
    DogFilter
  },
  data() {
    return {
      dogs: null
    };
  },
  created() { // this replaces the onMounted from the Composition API
    DogService.getDogs()
      .then((response) => {
        this.dogs = response.data.map((dog) => {
          dog.selectedExercise = true;
          dog.selectedTrainability = true;
          dog.selectedGrooming = true;
          return dog;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
</script>

<style scoped>
.dogs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
