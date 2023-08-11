<template>
  <h1>Create New Dog Entry</h1>
  <div class="language-dependent-fields">
    <form @submit.prevent="handleSubmit" class="english-field-forms">
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

    <form @submit.prevent="handleSubmit" class="dutch-field-forms">
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

  <div class="language-independent-fields">
    <!-- TODO: ranges are limited when setting with buttons, but not when typed, add validation -->
    <label
      >{{ $t('exercise_needs.title') }}:
      <input v-model.number="dog.exercise_needs" type="number" min="1" max="10" required />
    </label>
    <label
      >{{ $t('trainability.title') }}:
      <input v-model.number="dog.trainability" type="number" min="1" max="10" required />
    </label>
    <label
      >{{ $t('grooming_requirements.title') }}:
      <input v-model.number="dog.grooming_requirements" type="number" min="1" max="10" required />
    </label>
    <label
      >{{ $t('protectiveness.title') }}:
      <input v-model.number="dog.protectiveness" type="number" min="1" max="10" required />
    </label>
  </div>

  <input class="button" type="submit" :value="$t('add_dog')" @click="handleSubmit" />
</template>

<script>
import DogService from '../services/DogService.js';
export default {
  data() {
    return {
      dog: {
        exercise_needs: 1,
        grooming_requirements: 1,
        trainability: 1,
        protectiveness: 1,
        dogbreed_english: '',
        description_english: '',
        dogbreed_dutch: '',
        description_dutch: '',
      },
    };
  },
  methods: {
    validateData() {},
    async handleSubmit() {
      if (
        !this.dog.dogbreed_english ||
        !this.dog.dogbreed_dutch ||
        !this.dog.description_english ||
        !this.dog.description_dutch
      ) {
        alert('Please fill in all required fields.');
        return;
      }
      this.validateData();
      const dogData = {
        exercise_needs: this.dog.exercise_needs,
        grooming_requirements: this.dog.grooming_requirements,
        trainability: this.dog.trainability,
        protectiveness: this.dog.protectiveness,
        name: [this.dog.dogbreed_english, this.dog.dogbreed_dutch],
        description: [this.dog.description_english, this.dog.description_dutch],
        languages: ['en', 'nl'],
      };
      try {
        console.log(dogData);
        const response = await DogService.createDog(dogData);
        const newDogId = response.data.id;
        console.log(newDogId);

        this.$router.push({ name: 'dashboard' });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
* {
  text-align: center;
}

h2 {
  padding-bottom: 0.5rem;
}

.language-dependent-fields {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-left: 5rem;
  padding-right: 5rem;
  gap: 5rem;
}

.english-field-forms,
.dutch-field-forms {
  flex: 1;
}

.language-independent-fields {
  padding: 1rem 0;
  margin-left: 5rem;
  margin-right: 5rem;
}

label {
  display: block;
  margin-bottom: 1rem;
}

input[type='text'],
input[type='number'],
textarea {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.25rem;
  border: 1px solid #ccc;
}

textarea {
  resize: vertical;
  min-height: 20rem;
}

.button {
  display: block;
  margin: 2rem auto 0;
  padding: 0.5rem 1rem;
  background-color: #2c3e50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.button:hover {
  background-color: #fcba03;
}
</style>
