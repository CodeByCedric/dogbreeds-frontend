<template>
  <div class="dog-card" @click="navigateToDogDetails">
    <h2>{{ dog.name }}</h2>
    <ul>
      <li>{{ $t('exercise_needs.title') }}: {{ dog.exercise_needs }}</li>
      <li>{{ $t('trainability.title') }}: {{ dog.trainability }}</li>
      <li>{{ $t('grooming_requirements.title') }}: {{ dog.grooming_requirements }}</li>
    </ul>
    <p v-html="truncateDescription(dog.description, 100)"></p>
    <div class="icon-container" v-if="$route.path === '/dashboard'">
      <img
        class="icons"
        src="../assets/icons/edit.svg"
        alt="edit icon"
        @click.stop="navigateToEditDog"
      />
      <img
        class="icons"
        src="../assets/icons/delete.svg"
        alt="delete icon"
        @click.stop="deleteDog"
      />
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
  computed: {
    isDashboard() {
      return this.$route.path === '/dashboard';
    },
  },
  methods: {
    truncateDescription(text, length) {
      return text.length > length ? text.substring(0, length) + '...' : text;
    },
    navigateToDogDetails() {
      console.log(this.$route.path);
      if (this.isDashboard) return;
      else {
        this.$router.push({ name: 'dog-details', params: { id: this.dog.id } });
      }
    },
    navigateToEditDog() {
      this.$router.push({ name: 'edit-dog', params: { id: this.dog.id } });
    },
    deleteDog() {
      // delete the dog
    },
  },
};
</script>

<style scoped></style>
