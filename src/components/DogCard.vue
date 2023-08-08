<template>
  <RouterLink class="dog-card-link" :to="{ name: 'dog-details', params: { id: dog.id } }">
    <div class="dog-card">
      <h2>{{ dog.name }}</h2>
      <ul>
        <li>Exercise Needs: {{ dog.exercise_needs }}</li>
        <li>Trainability: {{ dog.trainability }}</li>
        <li>Grooming Requirements: {{ dog.grooming_requirements }}</li>
      </ul>
      <p v-html="truncateDescription(dog.description, 100)"></p>
    </div>
  </RouterLink>
</template>

<script>
export default {
  props: {
    dog: {
      type: Object,
      required: true,
    },
  },
  methods: {
    truncateDescription(text, length) {
      return text.length > length ? text.substring(0, length) + '...' : text;
    }
  }
}
</script>


<style scoped>
.dog-card {
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  width: 15.5rem;
  height: 17.5rem;
  margin: 1rem;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 1rem;
}

.dog-card h2 {
  align-self: center;
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
