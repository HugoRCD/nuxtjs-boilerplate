<template>
  <div class="flex justify-center flex-row gap-3">
    <ThemeSwitcher />
  </div>
</template>

<script>
import ThemeSwitcher from "./ThemeSwitcher.vue";

export default {
  name: "Tools",
  components: { ThemeSwitcher },
};
</script>

<style scoped lang="scss"></style>
