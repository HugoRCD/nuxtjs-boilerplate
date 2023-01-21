<script setup lang="ts">
const { locale } = useI18n();

const availableLocales = {
  en: {
    name: "English",
    iso: "en",
    flag: "🇺🇸",
  },
  fr: {
    name: "Français",
    iso: "fr",
    flag: "🇫🇷",
  },
};

watch(locale, (newLang) => {
  locale.value = newLang;
  useLocalStorage("locale", newLang);
});
</script>

<template>
  <select
    class="bg-transparent text-primary border-none focus:outline-none"
    v-model="locale"
  >
    <option
      v-for="(locale, key) in availableLocales"
      :key="key"
      :value="locale.iso"
    >
      {{ locale.flag }} {{ locale.name }}
    </option>
  </select>
</template>

<style scoped lang="scss"></style>
