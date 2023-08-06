<script setup>

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
  <RouterLink
  class="dog-card-link" 
  :to="{ name: 'dog-details', params: {id: dog.id}}">
    <div class="dog-card">
      <h2>{{ dog.name }}</h2>
      <p v-html="truncateDescription(dog.description, 100)"></p>
    </div>
  </RouterLink> 
</template>

<style scoped>
.dog-card {
  padding: 1.25rem;
  width: 15.5rem;
  margin: 1rem;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 1rem;
}
.dog-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.dog-card-link {
  text-decoration: none;
  color: inherit;
}
</style>
