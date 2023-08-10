<template>
  <DogList :showIcons="true"></DogList>
</template>

<script>
import DogList from '../components/DogList.vue';

export default {
  components: {
    DogList,
  },
};
</script>

<style scoped></style>