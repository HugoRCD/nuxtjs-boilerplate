<script setup>
import { useAxios } from "~/composables/useApi";

definePageMeta({
  name: "Profile",
  title: "Profile",
  description: "Profile",
});

const loading = computed(() => useGlobalStore().isLoading);

const user = await useAxios("user", "GET");
</script>

<template>
  <div class="profile container flex-column">
    <div class="profile-main-section flex-column">
      <div class="profile-header flex-column">
        <i class="fas fa-user-circle fa-5x"></i>
        <input
          class="custom-input title center"
          type="text"
          v-model="user.username"
        />
      </div>
      <div class="profile-tools flex-row pointer">
        <!--        <i class="fas fa-edit fa-md" @click="updateUser"></i>
        <i class="fas fa-sign-out-alt fa-md" @click="logout"></i>
        <i class="fas fa-trash-alt fa-md" @click="deleteUser"></i>-->
      </div>
    </div>
    <div class="profile-content" v-if="!loading">
      <div class="profile-content-item flex-row">
        <p>{{ $t("firstname") }}:</p>
        <input class="custom-input" type="text" v-model="user.firstname" />
      </div>
      <div class="profile-content-item flex-row">
        <p>{{ $t("lastname") }}:</p>
        <input class="custom-input" type="text" v-model="user.lastname" />
      </div>
      <div class="profile-content-item flex-row">
        <p>{{ $t("email") }}:</p>
        <input class="custom-input" type="text" v-model="user.email" />
      </div>
    </div>
    <Loader v-else />
  </div>
</template>

<style scoped lang="scss">
.profile {
  justify-content: center;
  gap: 3rem;
  color: var(--font-color);
}

.custom-input {
  border: none;
  background: none;
  outline: none;
  width: 100%;
  padding: 0;
}
</style>
