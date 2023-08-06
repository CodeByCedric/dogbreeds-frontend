<template>
  <div v-if="dog" class="dog-details-page">
    <h1>{{ dog.name }}</h1>
    <ul>
      <li>Excercise Needs: {{ dog.exercise_needs }}</li>
      <li>Trainability: {{ dog.trainability }}</li>
      <li>Grooming Requirements: {{ dog.grooming_requirements }}</li>
    </ul>
    <p v-html="dog.description"></p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import DogService from '../services/DogService.js';

const props = defineProps({
  id: {
    required: true,
  },
});
const dog = ref(null);

onMounted(() => {
  DogService.getDog(props.id)
    .then((response) => {
      dog.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
});
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
