<template>
  <div class="language-selector" @click="changeLocale">
    <div v-if="$i18n.locale === 'en'"><span>EN</span></div>
    <div v-else><span>FR</span></div>
  </div>
</template>

<script>
export default {
  name: "LanguageSelector",
  data() {
    return {
      theme: "dark",
    };
  },
  methods: {
    changeLocale() {
      if (this.$i18n.locale === "fr") {
        this.$i18n.locale = "en";
      } else {
        this.$i18n.locale = "fr";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.language-selector {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  div {
    border-radius: 0.25rem;
    color: var(--font-color);
    font-weight: 600;
    font-size: 0.75rem;
  }
}
</style>
