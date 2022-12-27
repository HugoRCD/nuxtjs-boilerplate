<script setup>
const { locale } = useI18n();

const setLocale = (locale) => {
  if (process.client) {
    localStorage.setItem("locale", locale);
  }
};
</script>

<template>
  <select
    class="bg-transparent text-primary border-none focus:outline-none"
    v-model="locale"
    :value="locale"
    @change="setLocale($event.target.value)"
  >
    <option value="en">EN</option>
    <option value="fr">FR</option>
  </select>
</template>

<style scoped lang="scss"></style>
