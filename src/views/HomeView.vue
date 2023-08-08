<script setup>
import { ref, onMounted } from 'vue';
import DogService from '../services/DogService.js';
import DogCard from '../components/DogCard.vue';
import DogFilter from '../components/DogFilter.vue';

const dogs = ref(null);

onMounted(() => {
  DogService.getDogs()
    .then((response) => {
      dogs.value = response.data.map((dog) => {
        dog.selectedExercise = true;
        dog.selectedTrainability = true;
        dog.selectedGrooming = true;
        return dog;
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

<template>
  <DogFilter></DogFilter>
  <main>
    <div class="dogs">
      <DogCard v-for="dog in dogs" :key="dog.id" :dog="dog"></DogCard>
    </div>
  </main>
</template>

<style scoped>
.dogs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
