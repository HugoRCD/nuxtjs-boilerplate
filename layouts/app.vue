<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  Bars3Icon,
  CalendarIcon,
  HomeIcon,
  MagnifyingGlassCircleIcon,
  MapIcon,
  MegaphoneIcon,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";

const navigation = [
  { name: "Home" },
  { name: "Profile" },
  { name: "Settings" },
];

const sidebarOpen = ref(false);
</script>

<template>
  <div class="flex h-full">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-40 lg:hidden"
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
              class="relative flex w-full max-w-xs flex-1 flex-col backdrop-blur focus:outline-none"
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
              <div class="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                <div class="flex flex-shrink-0 items-center px-4">
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </div>
                <nav aria-label="Sidebar" class="mt-5">
                  <div class="space-y-1 px-2">
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
                  </div>
                </nav>
              </div>
              <div class="flex flex-shrink-0 border-t border-gray-600 p-4">
                <a href="#" class="group block flex-shrink-0">
                  <div class="flex items-center">
                    <div>
                      <img
                        class="inline-block h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div class="ml-3">
                      <p
                        class="text-base font-medium text-gray-700 group-hover:text-gray-900"
                      >
                        Whitney Francis
                      </p>
                      <p
                        class="text-sm font-medium text-gray-500 group-hover:text-gray-700"
                      >
                        View profile
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </DialogPanel>
          </TransitionChild>
          <div class="w-14 flex-shrink-0" aria-hidden="true">
            <!-- Force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:flex lg:flex-shrink-0">
      <div class="flex w-64 flex-col">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div
          class="flex min-h-0 flex-1 flex-col border-r border-gray-600 backdrop-blur"
        >
          <div class="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <div class="flex flex-shrink-0 items-center px-4">
              <img
                class="h-8 w-auto"
                src="../assets/media/logo.png"
                alt="Your Company"
              />
            </div>
            <nav class="mt-5 flex-1" aria-label="Sidebar">
              <div class="space-y-1 px-2">
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
              </div>
            </nav>
          </div>
          <Tools class="my-4" />
          <div
            class="flex flex-shrink-0 border-t backdrop-blur border-gray-600 p-4"
          >
            <a href="#" class="group block w-full flex-shrink-0">
              <div class="flex items-center">
                <div>
                  <img
                    class="inline-block h-9 w-9 rounded-full"
                    src="../assets/media/logo.png"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <p
                    class="text-sm font-medium text-gray-700 group-hover:text-gray-900"
                  >
                    Whitney Francis
                  </p>
                  <p
                    class="text-xs font-medium text-gray-500 group-hover:text-gray-700"
                  >
                    View profile
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="flex min-w-0 flex-1 flex-col overflow-hidden">
      <div class="lg:hidden">
        <div
          class="flex items-center justify-between border-b border-gray-600 backdrop-blur px-4 py-1.5"
        >
          <div>
            <img
              class="h-8 w-auto"
              src="../assets/media/logo.png"
              alt="Your Company"
            />
          </div>
          <div>
            <button
              type="button"
              class="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
              @click="sidebarOpen = true"
            >
              <span class="sr-only">Open sidebar</span>
              <Bars3Icon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <div class="relative z-0 flex flex-1 overflow-hidden">
        <main
          class="relative z-0 flex-1 p-10 overflow-y-auto focus:outline-none xl:order-last"
        >
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>
