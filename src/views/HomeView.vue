<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import DogCard from '../components/DogCard.vue';

const dogs = ref(null)

//commented link to switch out API call to my-json-server in case the local API is down
onMounted(() => {
  //   axios.get('https://my-json-server.typicode.com/cedricthegreat/dogsapi/dogs')
  axios.get('http://localhost/api/dogs')
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