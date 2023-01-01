<script setup>
const theme = ref("dark");

const toggleTheme = () => {
  if (theme.value === "dark") {
    theme.value = "light";
  } else {
    theme.value = "dark";
  }
  if (process.client)
    document.documentElement.setAttribute("data-theme", theme.value);
  if (process.client) {
    localStorage.setItem("theme", theme.value);
  }
};
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
