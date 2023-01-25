<script setup lang="ts">
definePageMeta({
  name: "Admin",
  title: "Admin",
  description: "Admin",
});

const { data, pending } = await useLazyFetch("/api/user/listUsers", {
  method: "GET",
});
</script>

<template>
  <form class="space-y-6">
    <div class="bg-secondary px-4 py-5 shadow sm:rounded-lg sm:p-6">
      <Loader v-if="pending" />
      <UsersTable :users="data" v-else/>
    </div>
  </form>
</template>
