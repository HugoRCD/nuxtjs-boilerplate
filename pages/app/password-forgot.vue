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
      <div class="mx-auto max-w-sm lg:w-96">
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
        <Loader v-if="loading" />
        <form class="space-y-6" @submit.prevent="sendForgotPassword" v-else>
          <div>
            <div class="mt-1">
              <input
                id="email"
                name="email"
                autocomplete="email"
                required
                placeholder="Email"
                class="input"
                v-model="email"
              />
            </div>
          </div>
          <div>
            <button type="submit" class="btn-primary">Send</button>
          </div>
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
