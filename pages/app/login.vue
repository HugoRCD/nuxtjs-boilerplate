<script setup>
import { GoogleLogin } from "vue3-google-login";
import { useAxios } from "~/composables/useApi";

definePageMeta({
  name: "Login",
  title: "Login",
  description: "Login to your account",
});

const loading = computed(() => useGlobalStore().isLoading);

const credentials = reactive({
  login: "",
  password: "",
});

const login = async () => {
  const response = await useAxios("auth/login", "POST", credentials);
  if (response) {
    useUserStore().setAccessToken(response.accessToken);
    useRouter().push({ name: "Profile" });
  }
};

const googleLogin = async (googleUser) => {
  console.log(googleUser);
  const response = await useAxios("auth/google", "POST", {
    token: googleUser.credential,
  });
  if (response) {
    useUserStore().setAccessToken(response.accessToken);
    useRouter().push({ name: "Profile" });
  }
};
</script>

<template>
  <div class="flex min-h-full flex-col justify-center py-12 px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        class="mx-auto h-12 w-auto"
        src="../../assets/media/logo.png"
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
      <form class="space-y-6" @submit.prevent="login" v-else>
        <div>
          <div class="mt-1">
            <input
              id="login"
              name="login"
              autocomplete="email"
              required
              placeholder="Login"
              class="input"
              v-model="credentials.login"
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
              v-model="credentials.password"
            />
          </div>
        </div>
        <div class="flex items-center justify-end">
          <div class="text-sm">
            <router-link
              :to="{ name: 'PasswordForgot' }"
              class="font-medium text-accent hover:text-accent-hover"
              >Forgot your password?</router-link
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
      <div class="flex justify-center my-12">
        <GoogleLogin :callback="googleLogin" />
      </div>
      <div class="flex justify-center my-12">
        <GoogleLogin :callback="googleLogin" popup-type="TOKEN">
          <div class="btn-secondary mt-6">This button dont work</div>
        </GoogleLogin>
      </div>
    </div>
  </div>
</template>
