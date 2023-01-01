<script setup>
import { useI18n } from "vue-i18n";
import { useLocalStorage } from "~/composables/useLocalStorage";
const { locale } = useI18n();

const theme = useLocalStorage().get("theme");
const userLocale = useLocalStorage().get("locale");
const accessToken = useLocalStorage().get("accessToken");

theme ? document.documentElement.setAttribute("data-theme", theme) : null;
userLocale ? (locale.value = userLocale) : (locale.value = "en");
accessToken ? useUserStore().setAccessToken(accessToken) : null;
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
