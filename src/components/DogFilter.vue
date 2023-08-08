<template>
  <div id="filter">
    <select name="exercise" id="exercise">
      <option disabled value="placeholder" selected>Exercise Needs</option>
      <option value="all">All</option>
      <option value="very high">Perpetual, never ending exercise</option>
      <option value="high">High</option>
      <option value="moderate">Moderate</option>
      <option value="low">No exercise for me or my dog</option>
    </select>
    <select name="trainability" id="trainability">
      <option disabled value="placeholder" selected>Trainability</option>
      <option value="all">All</option>
      <option value="very high">I will learn everything</option>
      <option value="high">High</option>
      <option value="moderate">Moderate</option>
      <option value="low">Low</option>
      <option value="very-low">You will teach me nothing</option>
    </select>

    <select name="grooming" id="grooming">
      <option disabled value="placeholder" selected>Grooming Requirements</option>
      <option value="all">All</option>
      <option value="very high">Primped and Pampered Pooches</option>
      <option value="high">High-Maintenance Hairdos</option>
      <option value="moderate">Routine Rinsers</option>
      <option value="low">Basic Brushers</option>
      <option value="very-low">No-Fuss Natural</option>
    </select>
  </div>
</template>

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