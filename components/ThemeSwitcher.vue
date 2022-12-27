<template>
  <div class="theme-switcher" @click="changeTheme">
    <Icon v-if="theme === 'light'" name="moon" size="sm" />
    <Icon v-else name="sun" size="sm" />
  </div>
</template>

<script>
export default {
  name: "theme-switcher",
  data() {
    return {
      theme: "dark",
    };
  },
  created() {
    if (process.browser) {
      this.theme = localStorage.getItem("theme") || "dark";
    } else {
      this.theme = "dark";
    }
  },
  methods: {
    changeTheme() {
      if (document.documentElement.getAttribute("data-theme") === "dark") {
        document.documentElement.setAttribute("data-theme", "light");
        if (process.browser) {
          localStorage.setItem("theme", "light");
        } else {
          this.theme = "light";
        }
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        if (process.browser) {
          localStorage.setItem("theme", "dark");
        } else {
          this.theme = "dark";
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
.theme-switcher {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
