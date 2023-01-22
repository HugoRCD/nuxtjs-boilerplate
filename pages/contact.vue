<script setup lang="ts">
import { Switch } from "@headlessui/vue";

definePageMeta({
  name: "Contact",
  title: "Contact",
  description: "Contact page",
  keywords: "contact",
});

const agreed = ref(false);
</script>

<template>
  <div class="overflow-hidden py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
    <div class="relative mx-auto max-w-xl">
      <svg
        class="absolute left-full translate-x-1/2 transform"
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="85737c0e-0916-41d7-917f-596dc7edfa27"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
        />
      </svg>
      <svg
        class="absolute right-full bottom-0 -translate-x-1/2 transform"
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="85737c0e-0916-41d7-917f-596dc7edfa27"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
        />
      </svg>
      <div class="text-center">
        <h2 class="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Contact sales
        </h2>
        <p class="mt-4 text-lg leading-6 text-muted">
          Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
          massa dictumst amet. Sapien tortor lacus arcu.
        </p>
      </div>
      <div class="mt-12">
        <form
          action="#"
          method="POST"
          class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        >
          <div>
            <label
              for="first-name"
              class="block text-sm font-medium text-primary"
              >First name</label
            >
            <div class="mt-1">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                placeholder="John"
                class="input"
              />
            </div>
          </div>
          <div>
            <label
              for="last-name"
              class="block text-sm font-medium text-primary"
              >Last name</label
            >
            <div class="mt-1">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autocomplete="family-name"
                placeholder="Doe"
                class="input"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="company" class="block text-sm font-medium text-primary"
              >Company</label
            >
            <div class="mt-1">
              <input
                type="text"
                name="company"
                id="company"
                autocomplete="organization"
                placeholder="My amazing company"
                class="input"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="email" class="block text-sm font-medium text-primary"
              >Email</label
            >
            <div class="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                placeholder="johndoe@contact.com"
                class="input"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="phone-number"
              class="block text-sm font-medium text-primary"
              >Phone Number</label
            >
            <div class="mt-1">
              <input
                type="text"
                name="phone-number"
                id="phone-number"
                autocomplete="tel"
                placeholder="+1 (555) 987-6543"
                class="input"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm font-medium text-primary"
              >Message</label
            >
            <div class="mt-1">
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="How can we help you?..."
                class="input"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <Switch
                  v-model="agreed"
                  :class="[
                    agreed ? 'bg-accent' : 'bg-gray-200',
                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none',
                  ]"
                >
                  <span class="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    :class="[
                      agreed ? 'translate-x-5' : 'translate-x-0',
                      'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                    ]"
                  />
                </Switch>
              </div>
              <div class="ml-3">
                <p class="text-primary text-muted">
                  By selecting this, you agree to the
                  {{ " " }}
                  <a href="#" class="font-medium text-primary underline"
                    >Privacy Policy</a
                  >
                  {{ " " }}
                  and
                  {{ " " }}
                  <a href="#" class="font-medium text-primary underline"
                    >Cookie Policy</a
                  >.
                </p>
              </div>
            </div>
          </div>
          <div class="sm:col-span-2">
            <button
              type="submit"
              class="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-accent px-6 py-3 text-primary font-medium text-inverted shadow-sm hover:bg-accent-hover focus:outline-none"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
