<script setup>
import { ref } from 'vue'

defineProps({
  dog: {
    type: Object,
    required: true
  }
})

const truncateDescription = (text, length) => {
  return text.length > length ? text.substring(0, length) + "..." : text;
}

</script>

<template>
  <div class="dog-card">
    <!-- Display Dog Data -->
    <h2>{{ dog.name }}</h2>
    <p v-html="truncateDescription(dog.description, 100)"></p>

  </div>
</template>

<style scoped>
/* TODO change to own layout */
.dog-card {
  padding: 1.25rem;
  width: 15.5rem;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 1rem;
}
.dog-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
