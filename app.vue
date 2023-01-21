<script setup>
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
  script: [
    {
      src: "https://kit.fontawesome.com/b3fb3aef7b.js",
      crossorigin: "anonymous",
    },
  ],
});

const theme = ref("dark");

onMounted(() => {
  const userLocale = useLocalStorage().get("locale");
  const userTheme = useLocalStorage().get("theme");
  const accessToken = useLocalStorage().get("accessToken");

  userTheme ? (theme.value = userTheme) : "dark";
  accessToken ? useUserStore().setAccessToken(accessToken) : null;
  userLocale ? (locale.value = userLocale) : (locale.value = "en");
});
</script>

<template>
  <Html :data-theme="theme">
    <Body class="bg-primary m-0 p-0 text-primary overflow-x-hidden">
      <EnvChecker />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
