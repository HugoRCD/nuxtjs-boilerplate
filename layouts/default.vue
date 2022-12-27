<script>
import {defineComponent} from "vue";
import Navbar from "~/components/layout/Navbar.vue";

export default defineComponent({
  components: {Navbar}
})

</script>

<template>
  <div>
    <Navbar />
    <slot />
  </div>
</template>

<style scoped></style>
