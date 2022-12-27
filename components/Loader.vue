<template>
  <div class="center">
    <i class="fa-solid fa-circle-notch fa-spin"></i>
    <p class="text" v-if="isText">
      {{ $t("loading") }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Loader",
  props: {
    isText: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss"></style>
