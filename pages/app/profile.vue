<script setup>
// import { useAxios } from "~/composables/useApi";

definePageMeta({
  name: "Profile",
  title: "Profile",
  description: "Profile",
  layout: "app",
});

/*const loading = computed(() => useGlobalStore().isLoading);

const user = await useAxios("user", "GET");*/
</script>

<template>
  <div class="bg-white mb-5 px-4 py-5 shadow sm:rounded-lg sm:p-6">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Profile</h3>
        <p class="mt-1 text-sm text-gray-500">
          This information will be displayed publicly so be careful what you
          share.
        </p>
      </div>
      <div class="mt-5 space-y-6 md:col-span-2 md:mt-0">
        <div class="grid grid-cols-3 gap-6">
          <div class="col-span-3 sm:col-span-2">
            <label
              for="company-website"
              class="block text-sm font-medium text-gray-700"
              >Website</label
            >
            <div class="mt-1 flex rounded-md shadow-sm">
              <span
                class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
                >http://</span
              >
              <input
                type="text"
                name="company-website"
                id="company-website"
                class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="www.example.com"
              />
            </div>
          </div>
        </div>

        <div>
          <label for="about" class="block text-sm font-medium text-gray-700"
            >About</label
          >
          <div class="mt-1">
            <textarea
              id="about"
              name="about"
              rows="3"
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>
          <p class="mt-2 text-sm text-gray-500">
            Brief description for your profile. URLs are hyperlinked.
          </p>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Photo</label>
          <div class="mt-1 flex items-center space-x-5">
            <span
              class="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100"
            >
              <svg
                class="h-full w-full text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </span>
            <button
              type="button"
              class="rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Change
            </button>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700"
            >Cover photo</label
          >
          <div
            class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"
          >
            <div class="space-y-1 text-center">
              <svg
                class="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div class="flex text-sm text-gray-600">
                <label
                  for="file-upload"
                  class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    class="sr-only"
                  />
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white mb-5 px-4 py-5 shadow sm:rounded-lg sm:p-6">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <h3 class="text-lg font-medium leading-6 text-gray-900">
          Personal Information
        </h3>
        <p class="mt-1 text-sm text-gray-500">
          Use a permanent address where you can receive mail.
        </p>
      </div>
      <div class="mt-5 md:col-span-2 md:mt-0">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 sm:col-span-3">
            <label
              for="first-name"
              class="block text-sm font-medium text-gray-700"
              >First name</label
            >
            <input
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label
              for="last-name"
              class="block text-sm font-medium text-gray-700"
              >Last name</label
            >
            <input
              type="text"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div class="col-span-6 sm:col-span-4">
            <label
              for="email-address"
              class="block text-sm font-medium text-gray-700"
              >Email address</label
            >
            <input
              type="text"
              name="email-address"
              id="email-address"
              autocomplete="email"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label for="country" class="block text-sm font-medium text-gray-700"
              >Country</label
            >
            <select
              id="country"
              name="country"
              autocomplete="country-name"
              class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>

          <div class="col-span-6">
            <label
              for="street-address"
              class="block text-sm font-medium text-gray-700"
              >Street address</label
            >
            <input
              type="text"
              name="street-address"
              id="street-address"
              autocomplete="street-address"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div class="col-span-6 sm:col-span-6 lg:col-span-2">
            <label for="city" class="block text-sm font-medium text-gray-700"
              >City</label
            >
            <input
              type="text"
              name="city"
              id="city"
              autocomplete="address-level2"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div class="col-span-6 sm:col-span-3 lg:col-span-2">
            <label for="region" class="block text-sm font-medium text-gray-700"
              >State / Province</label
            >
            <input
              type="text"
              name="region"
              id="region"
              autocomplete="address-level1"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div class="col-span-6 sm:col-span-3 lg:col-span-2">
            <label
              for="postal-code"
              class="block text-sm font-medium text-gray-700"
              >ZIP / Postal code</label
            >
            <input
              type="text"
              name="postal-code"
              id="postal-code"
              autocomplete="postal-code"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex justify-end">
    <button
      type="button"
      class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      Cancel
    </button>
    <button
      type="submit"
      class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      Save
    </button>
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
