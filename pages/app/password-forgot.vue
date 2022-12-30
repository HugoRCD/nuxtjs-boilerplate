<script>
definePageMeta({
  name: "PasswordForgot",
  title: "Password Forgot",
  description: "Password Forgot",
});

export default {
  data() {
    return {
      email: "",
    };
  },
  computed: {
    loading() {
      return useGlobalStore().isLoading;
    },
  },
  methods: {
    async sendForgotPassword() {
      const response = await useAxios("reset-password", "POST", {
        email: this.email,
      });
      if (response) {
        useRouter().push({ name: "Login" });
      }
    },
  },
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
          <i class="fas fa-arrow-left fa-xs"></i>
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
            Password forgotten
          </h2>
          <p class="my-6 text-center text-sm text-muted">
            Enter your email address and we will send you a link to reset your
            password.
          </p>
        </div>

        <form
          v-if="!loading"
          class="space-y-6"
          @submit.prevent="sendForgotPassword"
        >
          <div>
            <label for="email" class="block text-sm font-medium text-primary"
              >Email</label
            >
            <div class="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                v-model="email"
                placeholder="johndoe@contact.com"
                class="block w-full text-gray-900 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-accent focus:outline-none focus:ring-accent sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md border border-transparent bg-accent py-2 px-4 text-sm font-medium text-inverted shadow-sm hover:bg-accent-hover focus:outline-none"
            >
              Send reset link
            </button>
          </div>
        </form>
        <Loader v-else />
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
