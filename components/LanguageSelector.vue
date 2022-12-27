<script setup>
const { locale } = useI18n();
</script>

<template>
  <select
    class="bg-transparent text-primary border-none focus:outline-none"
    v-model="locale"
    :value="locale"
  >
    <option value="en">EN</option>
    <option value="fr">FR</option>
  </select>
</template>

<style scoped lang="scss"></style>
