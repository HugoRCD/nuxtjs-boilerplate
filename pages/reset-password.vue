<script setup lang="ts">
definePageMeta({
  name: "reset-password",
  title: "Reset Password",
  description: "Reset Password",
});

const { auth } = useSupabaseClient();

const password = ref("");
const passwordConfirmation = ref("");

const resetPassword = async () => {
  const { error } = await auth.updateUser({
    password: password.value,
  });
  if (!error) console.log("Error resetting password:", error);
};
</script>

<template>
  <div class="flex h-screen">
    <div
      class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
    >
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <router-link to="/">
            <img
              class="h-12 w-auto mx-auto"
              src="../assets/media/logo.svg"
              alt="Your Company"
            />
          </router-link>
          <h2
            class="text-center mt-6 text-3xl font-bold tracking-tight text-primary"
          >
            Reset Password
          </h2>
          <p class="my-6 text-center text-sm text-muted">
            Please enter your new password.
          </p>
        </div>
        <form class="space-y-6" @submit.prevent="resetPassword">
          <input
            id="password"
            name="password"
            required
            placeholder="Password"
            type="password"
            class="input"
            v-model="password"
          />
          <input
            id="password_confirmation"
            name="password_confirmation"
            required
            placeholder="Password Confirmation"
            type="password"
            class="input"
            v-model="passwordConfirmation"
          />
          <button type="submit" class="btn-primary">Send</button>
        </form>
      </div>
    </div>
    <div class="relative hidden w-0 flex-1 lg:block">
      <img
        class="absolute inset-0 h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
        alt=""
      />
    </div>
  </div>
</template>
