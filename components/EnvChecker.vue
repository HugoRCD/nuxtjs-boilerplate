<template>
  <div
    class="env-checker center"
    v-bind:class="env"
    v-if="env !== 'production'"
  >
    {{ env }}
  </div>
</template>

<script>
export default {
  name: "EnvChecker",
  data() {
    return {
      env: process.env.VUE_APP_ENV,
    };
  },
};
</script>

<style scoped lang="scss">
.env-checker {
  position: fixed;
  bottom: 0;
  width: 100%;
  color: whitesmoke;
  font-size: var(--font-sm);
  user-select: none;

  &.development {
    background-color: forestgreen;
  }

  &.staging {
    background-color: gray;
  }
}
</style>
