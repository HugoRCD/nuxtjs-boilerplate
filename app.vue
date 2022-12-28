<script setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

if (process.client) {
  const theme = localStorage.getItem("theme");
  const userLocale = localStorage.getItem("locale");
  const accessToken = localStorage.getItem("accessToken");
  if (theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }
  if (userLocale) {
    locale.value = userLocale;
  }
  if (accessToken) {
    useUserStore().setAccessToken(accessToken);
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
