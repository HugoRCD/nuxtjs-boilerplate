<template>
  <div class="flex justify-center flex-row gap-3">
    <ThemeSwitcher />
    <LanguageSelector />
  </div>
</template>

<script>
import LanguageSelector from "@/components/LanguageSelector.vue";
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";

export default {
  name: "Tools",
  components: { ThemeSwitcher, LanguageSelector },
};
</script>

<style scoped lang="scss"></style>
