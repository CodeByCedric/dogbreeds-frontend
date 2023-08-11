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
import DogService from '../services/DogService.js';

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
    async deleteDog() {
      try {
        const locales = Object.keys(this.$parent.dogCache);
        for (const locale of locales) {
          const dogIndex = this.$parent.dogCache[locale].findIndex((dog) => dog.id === this.dog.id);
          this.$parent.dogCache[locale].splice(dogIndex, 1);
        }
        this.$parent.dogs = this.$parent.dogCache[this.$i18n.locale]; //what does this line do?, sets the dogs data object in the parent to the updated cache
        await DogService.deleteDog(this.dog.id);
      } catch (error) {
        console.log(error);
        //TODO show error message
      }
    },
  },
};
</script>

<style scoped></style>
