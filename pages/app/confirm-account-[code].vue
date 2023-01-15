<script setup>
definePageMeta({
  name: "confirm-account",
  title: "Confirm account",
  description: "Confirm your account",
});

const loading = computed(() => useGlobalStore().isLoading);

const code = ref(useRoute().params.code);

const confirmAccount = async () => {
  const response = await useAxios("user/verify/" + code.value, "POST");
  if (response) {
    useRouter().push({ name: "Profile" });
  }
};

const resendCode = async () => {
  await useAxios("user/verify", "POST");
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
              src="../../assets/media/logo.svg"
              alt="Your Company"
            />
          </router-link>
          <h2
            class="text-center mt-6 text-3xl font-bold tracking-tight text-primary"
          >
            Confirm your account
          </h2>
          <p class="my-6 text-center text-sm text-muted">
            Please enter the code we sent to your email address.
          </p>
        </div>
        <Loader v-if="loading" />
        <form class="space-y-6" @submit.prevent="confirmAccount" v-else>
          <input
            id="code"
            name="code"
            required
            placeholder="14312"
            class="input"
            v-model="code"
          />
          <button type="submit" class="btn-primary">Confirm</button>
          <button type="button" class="btn-secondary" @click="resendCode">
            Resend code
          </button>
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
