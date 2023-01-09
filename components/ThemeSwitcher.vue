<script setup>
const theme = ref("");

const setTheme = (newTheme) => {
  theme.value = newTheme;
  if (process.client) {
    document.documentElement.setAttribute("data-theme", newTheme);
    useLocalStorage().set("theme", newTheme);
  }
};

const toggleTheme = () => {
  theme.value === "dark" ? setTheme("light") : setTheme("dark");
};

onMounted(() => {
  const userTheme = useLocalStorage().get("theme");
  userTheme ? (theme.value = userTheme) : "dark";
});
</script>

<template>
  <div class="theme-switcher" @click="toggleTheme">
    <Icon
      v-if="theme === 'light'"
      name="grommet-icons:sun"
      size="1.5em"
      class="text-primary"
    />
    <Icon v-else name="ph:moon-stars-bold" size="1.5em" class="text-primary" />
  </div>
</template>

<style scoped lang="scss">
.theme-switcher {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
