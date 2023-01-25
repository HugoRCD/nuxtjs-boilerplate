<script setup lang="ts">
definePageMeta({
  name: "Profile",
  title: "Profile",
  description: "Profile",
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

const deleteAccount = async () => {
  await useDeleteAccount();
};

const whoAmI = async () => {
  const response = await useCurrentUser();
  console.log(response.value);
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

    <div class="flex justify-end gap-4">
      <form action="/api/stripe/subscribe" method="post">
        <button
          name="priceId"
          value="price_1MTtgFCk9AfBe7l2i8spjHK5"
          type="submit"
          class="rounded-md bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
        >
          S'abonner
        </button>
      </form>
      <button
        @click="whoAmI"
        type="button"
        class="rounded-md bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
      >
        Test Self Endpoint (see console)
      </button>
      <button
        @click="deleteAccount"
        type="button"
        class="rounded-md bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm"
      >
        Delete Account
      </button>
      <button
        @click="updateProfile"
        class="rounded-md border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
      >
        Save changes
      </button>
    </div>
  </div>
</template>
