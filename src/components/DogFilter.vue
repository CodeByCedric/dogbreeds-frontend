<template>
  <div id="filter">
    <select name="exercise" id="exercise" v-model="filter.exercise" @change="notifyParent">
      <option disabled>{{ $t('exercise_needs.title') }}</option>
      <option value="all">{{ $t('all') }}</option>
      <option value="very high">{{ $t('exercise_needs.very_high') }}</option>
      <option value="high">{{ $t('exercise_needs.high') }}</option>
      <option value="moderate">{{ $t('exercise_needs.moderate') }}</option>
      <option value="low">{{ $t('exercise_needs.low') }}</option>
      <option value="very-low">{{ $t('exercise_needs.very_low') }}</option>
    </select>
    <select name="trainability" id="trainability" v-model="filter.trainability" @change="notifyParent">
      <option disabled>{{ $t('trainability.title') }}</option>
      <option value="all">{{ $t('all') }}</option>
      <option value="very high">{{ $t('trainability.very_high') }}</option>
      <option value="high">{{ $t('trainability.high') }}</option>
      <option value="moderate">{{ $t('trainability.moderate') }}</option>
      <option value="low">{{ $t('trainability.low') }}</option>
      <option value="very-low">{{ $t('trainability.very_low') }}</option>
    </select>
    <select name="grooming" id="grooming" v-model="filter.grooming" @change="notifyParent">
      <option disabled>{{ $t('grooming_requirements.title') }}</option>
      <option value="all">{{ $t('all') }}</option>
      <option value="very high">{{ $t('grooming_requirements.very_high') }}</option>
      <option value="high">{{ $t('grooming_requirements.high') }}</option>
      <option value="moderate">{{ $t('grooming_requirements.moderate') }}</option>
      <option value="low">{{ $t('grooming_requirements.low') }}</option>
      <option value="very-low">{{ $t('grooming_requirements.very_low') }}</option>
    </select>
  </div>
</template>


<script>
export default {
  data() {
    return {
      filter: {
        exercise: '',
        trainability: '',
        grooming: '',
      }
    }
  },
  mounted() {
    this.filter.exercise = this.$t('exercise_needs.title');
    this.filter.trainability = this.$t('trainability.title');
    this.filter.grooming = this.$t('grooming_requirements.title');
  },
  watch: {
  '$i18n.locale': function() {
    this.filter.exercise = this.$t('exercise_needs.title');
    this.filter.trainability = this.$t('trainability.title');
    this.filter.grooming = this.$t('grooming_requirements.title');
    // updates the values when the language is changed, but defaults to the above set option (which is the default option). So selected filters get reset
  }
},
  methods: {
    notifyParent() {
      this.$emit('filter', this.filter);
    }
  }
}


</script>

<style scoped>
#filter {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

#filter select {
  margin: 0 1rem;
  padding: 0.25rem;
  border-radius: 0.25rem;
  border: 1px solid #39495c;
  font-size: 1rem;
  width: 15rem;
}
</style>
