<template>
  <div class="dog-card">
    <h2>{{ dog.name }}</h2>
    <ul>
      <li>{{ $t('exercise_needs.title') }}: {{ dog.exercise_needs }}</li>
      <li>{{ $t('trainability.title') }}: {{ dog.trainability }}</li>
      <li>{{ $t('grooming_requirements.title') }}: {{ dog.grooming_requirements }}</li>
    </ul>
    <p v-html="truncateDescription(dog.description, 100)"></p>
    <div class="icon-container">
      <img
        class="icons"
        src="../assets/icons/edit.svg"
        alt="edit icon"
        @click="navigateToEditDog"
      />
      <img class="icons" src="../assets/icons/delete.svg" alt="delete icon" @click="deleteDog" />
    </div>
  </div>
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
    navigateToDogDetails() {
      this.$router.push({ name: 'dog-details', params: { id: this.dog.id } });
    },
    navigateToEditDog() {
      this.$router.push({ name: 'edit-dog', params: { id: this.dog.id } });
    },
    deleteDog() {},
  },
};
</script>

<style scoped>
.icon-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: auto;
}

.icons {
  width: 24px;
  height: 24px;
  margin: 0 8px;
  transition: transform 0.3s ease;
}

.dog-card p {
  flex-grow: 1;
}

.icons:hover {
  transform: scale(1.2);
}
</style>
