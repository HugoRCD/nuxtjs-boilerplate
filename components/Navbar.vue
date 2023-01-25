<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

const navigation = [{ name: "Home" }, { name: "About" }, { name: "Pricing" }, { name: "Contact" }];

const user = useSupabaseUser();
</script>

<template>
  <Disclosure
    as="nav"
    class="backdrop-blur-lg bg-primary-opacity/40 sticky top-0 z-10"
    v-slot="{ open }"
  >
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-14 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
          >
            <span class="sr-only">Open main menu</span>
            <i class="fas fa-bars" v-if="!open"></i>
            <i class="fas fa-times" v-else></i>
          </DisclosureButton>
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center">
            <img
              class="block h-6 w-auto lg:hidden"
              src="../assets/media/logo.svg"
              alt="Your Company"
            />
            <img
              class="hidden h-6 w-auto lg:block"
              src="../assets/media/logo.svg"
              alt="Your Company"
            />
            <span class="text-md font-bold text-primary ml-2"
              >Nuxt3 Starter</span
            >
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <NuxtLink
                v-for="item in navigation"
                :to="{ name: item.name }"
                :key="item.name"
                class="text-primary font-medium transition duration-300 ease-in-out"
                :class="[
                  item.name === $route.name
                    ? 'bg-accent-faded text-accent hover:text-muted'
                    : 'text-primary hover:text-muted',
                  'px-4 py-1 rounded-md text-sm font-medium',
                ]"
                :aria-current="item.current ? 'page' : undefined"
              >
                {{ $t("navigation." + item.name.toLowerCase()) }}
              </NuxtLink>
            </div>
          </div>
        </div>
        <div
          class="absolute gap-5 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <Tools class="hidden md:flex" />
          <div
            class="hidden tablet:block h-6 w-px bg-accent-faded border-l border-gray-200 border-opacity-25"
          ></div>
          <client-only>
            <ProfilTool v-if="user" />
            <div v-else class="hidden tablet:flex gap-2">
              <NuxtLink
                :to="{ name: 'Login' }"
                class="text-primary hover:bg-gray-800 hover:text-white px-4 py-1 rounded-md text-sm font-medium"
              >
                {{ $t("navigation.login") }}
              </NuxtLink>
              <NuxtLink
                :to="{ name: 'Signup' }"
                class="text-inverted bg-accent hover:bg-accent-hover px-4 py-1 rounded-md text-sm font-medium"
              >
                {{ $t("navigation.signup") }}
              </NuxtLink>
            </div>
          </client-only>
        </div>
      </div>
    </div>
    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <NuxtLink
          v-for="item in navigation"
          :to="{ name: item.name }"
          :key="item.name"
          :class="[
            item.name === $route.name
              ? 'bg-accent-faded text-accent'
              : 'text-gray-300 hover:bg-gray-800 hover:text-white',
            'block px-4 py-1 rounded-md text-primary font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
        >
          {{ $t("navigation." + item.name.toLowerCase()) }}
        </NuxtLink>
      </div>
      <Tools class="my-4" />
      <client-only>
        <div
          class="py-5 border-t border-gray-800 items-center text-center"
          v-if="!user"
        >
          <NuxtLink
            :to="{ name: 'Login' }"
            class="text-primary hover:bg-gray-800 hover:text-white px-4 py-1 rounded-md text-sm font-medium"
          >
            {{ $t("navigation.login") }}
          </NuxtLink>
          <NuxtLink
            :to="{ name: 'Signup' }"
            class="text-inverted bg-accent hover:bg-accent-hover px-4 py-1 rounded-md text-sm font-medium"
          >
            {{ $t("navigation.signup") }}
          </NuxtLink>
        </div>
      </client-only>
    </DisclosurePanel>
  </Disclosure>
</template>
