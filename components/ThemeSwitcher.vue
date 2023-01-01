<script setup>
import { useGlobalStore } from "~/store/globalStore";

const availableThemes = [
  {
    key: "light",
    name: "Light",
  },
  {
    key: "dark",
    name: "Dark",
  },
];

const theme = useGlobalStore().theme;
const onThemeChange = (theme) => {
  useGlobalStore().setTheme(theme);
  document.documentElement.setAttribute("data-theme", theme);
};
</script>

<template>
  <select
    class="bg-transparent text-primary border-none focus:outline-none"
    v-model="theme"
    @change="onThemeChange($event.target.value)"
  >
    <option
      v-for="theme in availableThemes"
      :value="theme.key"
      :key="theme.key"
    >
      {{ theme.name }}
    </option>
  </select>
</template>
