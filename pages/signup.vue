<script setup lang="ts">
definePageMeta({
  name: "Signup",
  title: "Signup",
  description: "Sign up for your account",
});

const { auth } = useSupabaseAuthClient();
const user = useSupabaseUser();

const username = ref("");
const firstname = ref("");
const lastname = ref("");
const email = ref("");
const password = ref("");
const passwordConfirm = ref("");

const loading = ref(false);

watchEffect(async () => {
  if (user.value) {
    await navigateTo("/app/profile");
  }
});

const signup = async () => {
  loading.value = true;
  const { error } = await auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: {
        user_name: username.value,
        full_name: firstname.value + " " + lastname.value,
      },
    },
  });
  if (error) console.log(error);
  loading.value = false;
};

const signWithGoogle = async () => {
  const { error, } = await auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: window.location.origin + "/app/profile",
    },
  });
  if (error) console.log(error);
};

const signWithGithub = async () => {
  const { error } = await auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: window.location.origin + "/app/profile",
    },
  });
  if (error) console.log(error);
};
</script>

<template>
  <div class="flex min-h-full flex-col justify-center py-12 px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        class="mx-auto h-12 w-auto"
        src="../assets/media/logo.svg"
        alt="Your Company"
      />
      <h2
        class="mt-6 text-center text-3xl font-bold tracking-tight text-primary"
      >
        Sign up for your account
      </h2>
    </div>
    <div class="sm:mx-auto sm:w-full sm:max-w-md mt-12">
      <Loader v-if="loading" />
      <form class="space-y-6" @submit.prevent="signup" v-else>
        <input
          id="username"
          name="username"
          autocomplete="username"
          required
          placeholder="Username"
          class="input"
          v-model="username"
        />
        <div class="flex flex-row gap-2">
          <input
            id="firstname"
            name="firstname"
            autocomplete="firstname"
            required
            placeholder="Firstname"
            class="input"
            v-model="firstname"
          />
          <input
            id="lastname"
            name="lastname"
            autocomplete="lastname"
            required
            placeholder="Lastname"
            class="input"
            v-model="lastname"
          />
        </div>
        <input
          id="email"
          name="email"
          type="email"
          autocomplete="email"
          required
          placeholder="Email"
          class="input"
          v-model="email"
        />
        <input
          id="password"
          name="password"
          type="password"
          autocomplete="current-password"
          required
          placeholder="Password"
          class="input"
          v-model="password"
        />
        <input
          id="confirm-password"
          name="confirm-password"
          type="password"
          autocomplete="current-password"
          required
          placeholder="Confirm Password"
          class="input"
          v-model="passwordConfirm"
        />
        <div>
          <button type="submit" class="btn-primary">
            Sign up
          </button>
        </div>
      </form>
      <NuxtLink :to="{ name: 'Login' }" class="btn-secondary mt-6">
        Already have an account ? Login here
      </NuxtLink>
      <div class="mt-12">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-sm border-muted" />
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="bg-primary px-2 text-muted">Or continue with</span>
          </div>
        </div>
      </div>
      <div class="mt-6 grid grid-cols-2 gap-3">
        <div>
          <button type="button" class="btn-secondary" @click="signWithGoogle">
            <i class="fab fa-google mr-2"></i>
          </button>
        </div>
        <div>
          <button type="button" class="btn-secondary" @click="signWithGithub">
            <i class="fab fa-github mr-2"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
