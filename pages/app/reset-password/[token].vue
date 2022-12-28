<script>
definePageMeta({
  name: "reset-password",
  title: "Reset Password",
  description: "Reset Password",
});

export default {
  data() {
    return {
      password: "",
      password_confirmation: "",
    };
  },
  computed: {
    loading() {
      return useGlobalStore().isLoading;
    },
  },
  methods: {
    async resetPassword() {
      useGlobalStore().setLoading(true);
      const response = await useApi(
        "reset-password/" + useRoute().params.token,
        "POST",
        {
          password: this.password,
        },
      );
      if (response) {
        useRouter().push({ name: "Login" });
        useGlobalStore().setLoading(false);
      } else {
        useGlobalStore().setLoading(false);
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
              src="../../../assets/media/logo.png"
              alt="Your Company"
            />
          </router-link>
          <h2
            class="text-center mt-6 text-3xl font-bold tracking-tight text-primary"
          >
            Reset your password
          </h2>
          <p class="my-6 text-center text-sm text-muted">
            Enter your new password and confirm it.
          </p>
        </div>

        <form v-if="!loading" class="space-y-6" @submit.prevent="resetPassword">
          <div>
            <label for="email" class="block text-sm font-medium text-primary"
              >New password</label
            >
            <div class="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                required=""
                v-model="password"
                placeholder="123soleil"
                class="block w-full text-gray-900 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-accent focus:outline-none focus:ring-accent sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-primary"
              >Confirm password</label
            >
            <div class="mt-1">
              <input
                id="password_confirmation"
                name="password_confirmation"
                type="password"
                required=""
                v-model="password_confirmation"
                placeholder="123soleil"
                class="block w-full text-gray-900 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-accent focus:outline-none focus:ring-accent sm:text-sm"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md border border-transparent bg-accent py-2 px-4 text-sm font-medium text-inverted shadow-sm hover:bg-accent-hover focus:outline-none"
            >
              Change password
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

<style scoped lang="scss"></style>
