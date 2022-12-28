<template>
  <div class="text-center">
    <Icon name="line-md:loading-twotone-loop" size="2em" />
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
