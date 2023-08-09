<template>
  <RouterLink class="dog-card-link" :to="{ name: 'dog-details', params: { id: dog.id } }">
    <div class="dog-card">
      <h2>{{ dog.name }}</h2>
      <ul>
        <li>{{ $t('exercise_needs.title') }}: {{ dog.exercise_needs }}</li>
        <li>{{ $t('trainability.title') }}: {{ dog.trainability }}</li>
        <li>{{ $t('grooming_requirements.title') }}: {{ dog.grooming_requirements }}</li>
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
    },
  },
};
</script>

<style scoped></style>
