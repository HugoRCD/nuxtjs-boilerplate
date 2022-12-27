<script setup>
const { locale } = useI18n();

if (process.client) {
  const theme = localStorage.getItem("theme");
  const userLocale = localStorage.getItem("locale");
  if (theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }
  if (userLocale) {
    locale.value = userLocale;
  }
} else {
  locale.value = "en";
}
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
