<template>
  <h1>Create New Dog Entry</h1>
  <div>
    <!-- English Fields Form -->
    <form @submit.prevent="handleSubmit">
      <h2>{{ $t('english') }}</h2>
      <label
        >{{ $t('dogbreed') }}:
        <input v-model="dog.dogbreed_english" type="text" required />
      </label>
      <label
        >{{ $t('description') }}:
        <textarea v-model="dog.description_english" required></textarea>
      </label>
    </form>

    <!-- Dutch Fields -->
    <form @submit.prevent="handleSubmit">
      <h2>{{ $t('dutch') }}</h2>
      <label
        >{{ $t('dogbreed') }}:
        <input v-model="dog.dogbreed_dutch" type="text" required />
      </label>
      <label
        >{{ $t('description') }}:
        <textarea v-model="dog.description_dutch" required></textarea>
      </label>
    </form>
  </div>

  <!-- Language-Independent Fields -->
  <div>
    <h2>Common Fields</h2>
    <label
      >{{ $t('exercise_needs.title') }}:
      <input v-model.number="dog.exerciseNeeds" type="number" min="1" max="10" required />
    </label>
    <label
      >{{ $t('trainability.title') }}:
      <input v-model.number="dog.trainability" type="number" min="1" max="10" required />
    </label>
    <label
      >{{ $t('grooming_requirements.title') }}:
      <input v-model.number="dog.groomingRequirements" type="number" min="1" max="10" required />
    </label>
  </div>

  <input v-bind:disabled="disabled" class="button" type="submit" :value="$t('add_dog')" />
</template>

<script>
export default {
  data() {
    return {
      dog: {
        dogbreed_english: '',
        description_english: '',
        dogbreed_dutch: '',
        description_dutch: '',
        exerciseNeeds: 1,
        trainability: 1,
        groomingRequirements: 1,
      },
    };
  },
  methods: {
    handleSubmit() {
      // Process and send data to the server
      console.log(this.dog);
    },
  },
};
</script>

<style scoped>
div {
  display: block;
  flex-direction: column;
  align-items: center;
}
</style>
