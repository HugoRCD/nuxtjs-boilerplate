<script setup>
import { useI18n } from "vue-i18n";
import { useLocalStorage } from "~/composables/useLocalStorage";

const { locale } = useI18n();

useHead({
  title: "Nuxt3 Starter",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "description", content: "Home page" },
    { name: "keywords", content: "Home" },
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ],
});

const theme = useLocalStorage().get("theme");
const userLocale = useLocalStorage().get("locale");
const accessToken = useLocalStorage().get("accessToken");

// theme ? document.documentElement.setAttribute("data-theme", theme) : null;
userLocale ? (locale.value = userLocale) : (locale.value = "en");
accessToken ? useUserStore().setAccessToken(accessToken) : null;
</script>

<template>
  <Html data-theme="dark">
    <Body class="bg-primary m-0 p-0 text-primary overflow-x-hidden">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
