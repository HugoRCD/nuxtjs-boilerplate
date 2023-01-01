<script setup>
import { useI18n } from "vue-i18n";
import { useLocalStorage } from "~/composables/useLocalStorage";
import { AppSetup } from "~/utils/app";
AppSetup();

const { locale } = useI18n();

useHead({
  title: "Nuxt 3 Template",
  titleTemplate: "%s - Nuxt 3 Template",
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

const userLocale = useLocalStorage().get("locale");

userLocale ? (locale.value = userLocale) : (locale.value = "en");
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
