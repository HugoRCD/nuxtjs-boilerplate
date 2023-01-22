<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
  name: "Profile",
  title: "Profile",
  description: "Profile",
  layout: "app",
});

const user = useSupabaseUser();
const supabase = useSupabaseClient();

const email = ref("");
const fullname = ref("");

if (user.value) {
  email.value = user.value.email || "";
  fullname.value = user.value.user_metadata.full_name || "";
}

const updateProfile = async () => {
  const { error } = await supabase.auth.updateUser({
    email: email.value,
    data: {
      full_name: fullname.value,
    }
  });
  if (error) console.log("Error updating user: ", error);
};

const whoAmI = async () => {
  const { data } = await useFetch("/api/currentUser");
  if (data) console.log(data.value);
};
</script>

<template>
  <div>
    <div class="bg-secondary mb-5 px-4 py-5 shadow rounded-lg sm:p-6">
      <h3 class="text-lg font-medium leading-6 text-primary">
        Personal Information
      </h3>
      <p class="mt-1 text-sm text-muted">
        Use a permanent address where you can receive mail.
      </p>
      <div class="flex flex-row mt-10 gap-5">
        <div class="w-1/2">
          <label for="firstname" class="block text-sm font-medium text-muted"
            >Full name</label
          >
          <input
            type="text"
            name="firstname"
            id="firstname"
            autocomplete="firstname"
            v-model="fullname"
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
          v-model="email"
          class="input mt-1"
        />
      </div>
    </div>

    <div class="flex justify-end">
      <button
        @click="whoAmI"
        type="button"
        class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Test Self Endpoint (see console)
      </button>
      <button
        @click="updateProfile"
        class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Save changes
      </button>
    </div>
  </div>
</template>
