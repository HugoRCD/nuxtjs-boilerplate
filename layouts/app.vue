<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid";

const navigation = [{ name: "Profile" }, { name: "Settings" }, { name: "Admin"}];

const sidebarOpen = ref(false);
</script>

<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-40 md:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel
              class="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pt-5 pb-4"
            >
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div class="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div
                class="bg-secondary border-b-2 border-gray-700 justify-center flex flex-shrink-0 items-center px-4 justify-center"
              >
                <img
                  class="h-8 mb-4 w-auto"
                  src="../assets/media/logo.svg"
                  alt="Your Company"
                />
              </div>
              <div class="mt-5 h-0 flex-1 overflow-y-auto">
                <nav class="space-y-1 px-2">
                  <NuxtLink
                    v-for="item in navigation"
                    :to="{ name: item.name }"
                    :key="item.name"
                    :class="[
                      item.name === $route.name
                        ? 'bg-accent-faded text-accent'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-primary font-medium',
                    ]"
                    :aria-current="item.current ? 'page' : undefined"
                  >
                    {{ $t("navigation." + item.name.toLowerCase()) }}
                  </NuxtLink>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
          <div class="w-14 flex-shrink-0" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex min-h-0 flex-1 flex-col bg-gray-800">
        <div
          class="bg-secondary justify-center flex h-16 flex-shrink-0 items-center px-4 justify-center border-b-2 border-gray-700"
        >
          <img
            class="h-8 w-auto"
            src="../assets/media/logo.svg"
            alt="Your Company"
          />
        </div>
        <div class="flex flex-1 flex-col overflow-y-auto">
          <nav class="flex-1 space-y-1 px-2 py-4">
            <NuxtLink
              v-for="item in navigation"
              :to="{ name: item.name }"
              :key="item.name"
              :class="[
                item.name === $route.name
                  ? 'bg-accent-faded text-accent'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block px-3 py-2 rounded-md text-primary font-medium',
              ]"
              :aria-current="item.current ? 'page' : undefined"
            >
              {{ $t("navigation." + item.name.toLowerCase()) }}
            </NuxtLink>
          </nav>
        </div>
      </div>
    </div>
    <div class="flex flex-col md:pl-64">
      <div class="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-primary shadow">
        <button
          type="button"
          class="border-r border-gray-700 px-4 text-gray-500 focus:outline-none border-b-2 border-gray-700 md:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <Bars3BottomLeftIcon class="h-6 w-6" aria-hidden="true" />
        </button>
        <div
          class="flex flex-1 justify-between px-4 border-b-2 border-gray-700"
        >
          <div class="flex flex-1">
            <form
              class="flex w-full bg-primary md:ml-0"
              action="#"
              method="GET"
            >
              <label for="search-field" class="sr-only">Search</label>
              <div
                class="relative w-full text-gray-400 focus-within:text-gray-600"
              >
                <div
                  class="pointer-events-none absolute inset-y-0 left-0 flex items-center"
                >
                  <MagnifyingGlassIcon class="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="search-field"
                  class="bg-primary block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                  placeholder="Search"
                  type="search"
                  name="search"
                />
              </div>
            </form>
          </div>
          <div class="ml-4 flex items-center md:ml-6">
            <Tools />
            <ProfilTool />
          </div>
        </div>
      </div>

      <main class="flex-1">
        <div class="py-6">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <slot />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
