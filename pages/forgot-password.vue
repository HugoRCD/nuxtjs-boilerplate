<script setup lang="ts">
definePageMeta({
  name: "ForgotPassword",
  title: "Forgot Password",
  description: "Forgot Password",
});

const { auth } = useSupabaseClient();

const email = ref("");

const sendResetPasswordEmail = async () => {
  const { error } = await auth.resetPasswordForEmail(email.value);
  if (error) console.log("Error sending password reset email: ", error);
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
            Forgot Password
          </h2>
          <p class="my-6 text-center text-sm text-muted">
            Enter your email address and we will send you a link to reset your
            password.
          </p>
        </div>
        <form class="space-y-6" @submit.prevent="sendResetPasswordEmail">
          <input
            id="email"
            name="email"
            required
            placeholder="johndoe@contact.com"
            class="input"
            v-model="email"
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
