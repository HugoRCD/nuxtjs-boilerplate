<script setup lang="ts">
definePageMeta({
  name: "Admin",
  title: "Admin",
  description: "Admin",
});

const { data } = await useFetch("/api/user/listUsers", {
  method: "GET",
});

</script>

<template>
  <form class="space-y-6">
    <div class="bg-secondary px-4 py-5 shadow sm:rounded-lg sm:p-6">
      <UsersTable :users="data.users" />
    </div>
  </form>
</template>
