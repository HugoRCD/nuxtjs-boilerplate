<script setup lang="ts">
const theme = useLocalStorage("theme", "dark");

const setTheme = (newTheme) => {
  theme.value = newTheme;
  document.documentElement.setAttribute("data-theme", newTheme);
};

const toggleTheme = () => {
  theme.value === "dark" ? setTheme("light") : setTheme("dark");
};
</script>

<template>
  <div class="flex cursor-pointer" @click="toggleTheme">
    <Icon
      v-if="theme === 'light'"
      name="grommet-icons:sun"
      size="1.5em"
      class="text-primary"
    />
    <Icon v-else name="ph:moon-stars-bold" size="1.5em" class="text-primary" />
  </div>
</template>
