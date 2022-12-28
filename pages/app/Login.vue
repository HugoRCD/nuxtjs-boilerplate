<script setup>
import { GoogleLogin } from "vue3-google-login";
import Loader from "@/components/Loader.vue";
import Tools from "@/components/Tools.vue";
import { useGlobalStore } from "~/store/globalStore";

definePageMeta({
  name: "Login",
  title: "Login",
  description: "Login to your account",
});

const credentials = reactive({
  login: null,
  password: null,
});

const loading = computed(() => {
  return useGlobalStore().isLoading;
});

const login = async () => {
  console.log("login");
};

const googleLogin = async (googleUser) => {
  console.log("googleLogin");
};
</script>

<template>
  <div class="flex h-screen">
    <div
      class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
    >
      <router-link to="/">
        <button
          class="flex items-center justify-center rounded-full w-8 h-8 bg-accent hover:bg-accent-hover"
        >
          <Icon
            name="material-symbols:arrow-left"
            class="w-4 h-4 text-inverted"
          >
          </Icon>
        </button>
      </router-link>
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <router-link to="/">
            <img
              class="h-12 w-auto mx-auto"
              src="../../assets/media/logo.png"
              alt="Your Company"
            />
          </router-link>
          <h2
            class="text-center mt-6 text-3xl font-bold tracking-tight text-primary"
          >
            Sign in to your account
          </h2>
        </div>

        <div class="mt-16">
          <form v-if="!loading" class="space-y-6" @submit.prevent="login">
            <div>
              <label for="login" class="block text-sm font-medium text-primary"
                >Login</label
              >
              <div class="mt-1">
                <input
                  id="login"
                  name="login"
                  type="text"
                  autocomplete="email"
                  required=""
                  v-model="credentials.login"
                  placeholder="John Doe"
                  class="block w-full text-gray-900 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-accent focus:outline-none focus:ring-accent sm:text-sm"
                />
              </div>
            </div>
            <div class="space-y-1">
              <label
                for="password"
                class="block text-sm font-medium text-primary"
                >Password</label
              >
              <div class="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required=""
                  v-model="credentials.password"
                  placeholder="123soleil"
                  class="block w-full text-gray-900 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-accent focus:outline-none focus:ring-accent sm:text-sm"
                />
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label for="remember-me" class="ml-2 block text-sm text-primary"
                  >Remember me</label
                >
              </div>

              <div class="text-sm">
                <router-link
                  to="/"
                  class="font-medium text-accent hover:text-accent-hover"
                  >Forgot your password?</router-link
                >
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md border border-transparent bg-accent py-2 px-4 text-sm font-medium text-inverted shadow-sm hover:bg-accent-hover focus:outline-none"
              >
                Sign in
              </button>
            </div>
            <div class="text-center">
              <GoogleLogin :callback="googleLogin" />
            </div>
          </form>
          <Loader v-else />
        </div>
      </div>
      <Tools class="mt-16" />
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
