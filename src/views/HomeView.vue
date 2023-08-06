<script setup>
import { ref, onMounted } from 'vue';
import DogService from '../services/DogService.js';
import DogCard from '../components/DogCard.vue';

const dogs = ref(null)

onMounted(() => {
  DogService.getDogs()
      .then(response => {
      dogs.value = response.data
    })
    .catch(error => {
      console.log(error)
    })
})

</script>

<template>
  <main>
    <div class="dogs">
      <DogCard v-for="dog in dogs" :key="dog.id" :dog=dog></DogCard>
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