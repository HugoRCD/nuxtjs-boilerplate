<script setup>
import { GoogleLogin } from "vue3-google-login";
import { useAxios } from "~/composables/useApi";

definePageMeta({
  name: "Signup",
  title: "Signup",
  description: "Sign up for your account",
});

const loading = computed(() => useGlobalStore().isLoading);

const user = reactive({
  username: "",
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirm_password: "",
  avatar: "default",
});

const signup = async () => {
  const response = await useAxios("auth/register", "POST", user);
  if (response) {
    useRouter().push({ name: "Login" });
  }
};

const googleLogin = async (googleUser) => {
  const response = await useAxios("auth/google", "POST", {
    token: googleUser.access_token,
  });
  if (response) {
    useUserStore().setAccessToken(response.accessToken);
    useRouter().push({ name: "Profile" });
  }
};

const isActive = computed(() => {
  console.log(user);
  return !(user.password === user.confirm_password && user.password.length > 0);
});
</script>

<template>
  <div class="flex min-h-full flex-col justify-center py-12 px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        class="mx-auto h-12 w-auto"
        src="../../assets/media/logo.svg"
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
          v-model="user.username"
        />
        <div class="flex flex-row gap-2">
          <input
            id="firstname"
            name="firstname"
            autocomplete="firstname"
            required
            placeholder="Firstname"
            class="input"
            v-model="user.firstname"
          />
          <input
            id="lastname"
            name="lastname"
            autocomplete="lastname"
            required
            placeholder="Lastname"
            class="input"
            v-model="user.lastname"
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
          v-model="user.email"
        />
        <input
          id="password"
          name="password"
          type="password"
          autocomplete="current-password"
          required
          placeholder="Password"
          class="input"
          v-model="user.password"
        />
        <input
          id="confirm-password"
          name="confirm-password"
          type="password"
          autocomplete="current-password"
          required
          placeholder="Confirm Password"
          class="input"
          v-model="user.confirm_password"
        />
        <div>
          <button type="submit" class="btn-primary" :disabled="isActive">
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
          <GoogleLogin
            class="w-full"
            :callback="googleLogin"
            popup-type="TOKEN"
          >
            <button type="button" class="btn-secondary">
              <i class="fab fa-google mr-2"></i>
            </button>
          </GoogleLogin>
        </div>
        <div>
          <button type="button" class="btn-secondary">
            <i class="fab fa-github mr-2"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
