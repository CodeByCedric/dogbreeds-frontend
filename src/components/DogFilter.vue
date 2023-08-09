<template>
  <div id="filter">
    <select name="exercise" id="exercise">
      <option disabled value="placeholder" selected>{{$t("exercise_needs")}}</option>
      <option value="all">{{$t("all")}}</option>
      <option value="very high">{{$t("ex_very_high")}}</option>
      <option value="high">{{$t("ex_high")}}</option>
      <option value="moderate">{{$t("ex_moderate")}}</option>
      <option value="low">{{$t("ex_low")}}</option>
      <option value="very-low">{{$t("ex_very_low")}}</option>
      
    </select>
    <select name="trainability" id="trainability">
      <option disabled value="placeholder" selected>{{$t("trainability")}}</option>
      <option value="all">{{$t("all")}}</option>
      <option value="very high">{{$t("tr_very_high")}}</option>
      <option value="high">{{$t("tr_high")}}</option>
      <option value="moderate">{{$t("tr_moderate")}}</option>
      <option value="low">{{$t("tr_low")}}</option>
      <option value="very-low">{{$t("tr_very_low")}}</option>
    </select>

    <select name="grooming" id="grooming">
      <option disabled value="placeholder" selected>{{$t("grooming_requirements")}}</option>
      <option value="all">{{$t("all")}}</option>
      <option value="very high">{{$t("gr_very_high")}}</option>
      <option value="high">{{$t("gr_high")}}</option>
      <option value="moderate">{{$t("gr_moderate")}}</option>
      <option value="low">{{$t("gr_low")}}</option>
      <option value="very-low">{{$t("gr_very_low")}}</option>
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
