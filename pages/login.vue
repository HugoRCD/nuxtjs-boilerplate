<script setup lang="ts">
definePageMeta({
  name: "Login",
  title: "Login",
  description: "Login to your account",
});

const login = ref("");
const password = ref("");

const { auth } = useSupabaseAuthClient();
const user = useSupabaseUser();

watchEffect(async () => {
  if (user.value) {
    await navigateTo("/app/profile");
  }
});

const loading = ref(false);

const signin = async () => {
  loading.value = true;
  const { error } = await auth.signInWithPassword({
    email: login.value,
    password: password.value,
  });
  if (error) console.log(error);
  loading.value = false;
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

const signWithGoogle = async () => {
  const { error, } = await auth.signInWithOAuth({
    provider: "google",
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
        Sign in to your account
      </h2>
    </div>
    <div class="sm:mx-auto sm:w-full sm:max-w-md mt-12">
      <Loader v-if="loading" />
      <form class="space-y-6" @submit.prevent="signin" v-else>
        <div>
          <div class="mt-1">
            <input
              id="login"
              name="login"
              autocomplete="email"
              required
              placeholder="Login"
              class="input"
              v-model="login"
            />
          </div>
        </div>
        <div>
          <div class="mt-1">
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
          </div>
        </div>
        <div class="flex items-center justify-end">
          <div class="text-sm">
            <NuxtLink
              :to="{ name: 'ForgotPassword' }"
              class="font-medium text-accent hover:text-accent-hover"
            >Forgot your password?
            </NuxtLink
            >
          </div>
        </div>

        <div>
          <button type="submit" class="btn-primary">Sign in</button>
        </div>
      </form>
      <NuxtLink :to="{ name: 'Signup' }" class="btn-secondary mt-6">
        Don't have an account ? Sign up
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
