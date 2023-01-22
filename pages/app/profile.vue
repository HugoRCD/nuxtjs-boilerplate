<script setup lang="ts">
definePageMeta({
  // middleware: ["auth"],
  name: "Profile",
  title: "Profile",
  description: "Profile",
  layout: "app",
});

const loading = computed(() => useGlobalStore().isLoading);

// const user = await useAxios("user", "GET");
const user = ref({
  username: "John_doe",
  firstname: "John",
  lastname: "Doe",
  email: "johndoe@contact.com",
});
</script>

<template>
  <div>
    <Loader v-if="loading" class="text-gray-700 text-center" />
    <div v-else class="bg-secondary mb-5 px-4 py-5 shadow rounded-lg sm:p-6">
      <h3 class="text-lg font-medium leading-6 text-primary">
        Personal Information
      </h3>
      <p class="mt-1 text-sm text-muted">
        Use a permanent address where you can receive mail.
      </p>
      <div class="flex flex-row mt-10 gap-5">
        <div>
          <label for="firstname" class="block text-sm font-medium text-muted"
            >Firstname</label
          >
          <input
            type="text"
            name="firstname"
            id="firstname"
            autocomplete="firstname"
            v-model="user.firstname"
            class="input mt-1"
          />
        </div>
        <div>
          <label for="lastname" class="block text-sm font-medium text-muted"
            >Lastname</label
          >
          <input
            type="text"
            name="lastname"
            id="lastname"
            autocomplete="lastname"
            v-model="user.lastname"
            class="input mt-1"
          />
        </div>
      </div>
      <div class="mt-6 w-1/2">
        <label for="email" class="block text-sm font-medium text-muted"
          >Email address</label
        >
        <input
          id="email"
          name="email"
          type="email"
          autocomplete="email"
          v-model="user.email"
          class="input mt-1"
        />
      </div>
    </div>

    <div class="flex justify-end">
      <button
        type="button"
        class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Cancel
      </button>
      <button
        type="submit"
        class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Save
      </button>
    </div>
  </div>
</template>
