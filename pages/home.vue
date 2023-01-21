<script setup lang="ts">
definePageMeta({
  title: "Home",
  name: "Home",
  path: "/",
  description: "Home page",
  keywords: "Home",
});

const logos = [
  {
    name: "Transistor",
    url: "https://tailwindui.com/img/logos/transistor-logo-gray-400.svg",
  },
  {
    name: "Mirage",
    url: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
  },
  {
    name: "Tuple",
    url: "https://tailwindui.com/img/logos/tuple-logo-gray-400.svg",
  },
  {
    name: "Laravel",
    url: "https://tailwindui.com/img/logos/laravel-logo-gray-400.svg",
  },
  {
    name: "StaticKit",
    url: "https://tailwindui.com/img/logos/statickit-logo-gray-400.svg",
  },
  {
    name: "Workcation",
    url: "https://tailwindui.com/img/logos/workcation-logo-gray-400.svg",
  },
];
</script>

<template>
  <div>
    <main>
      <!-- Hero section -->
      <div class="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-48">
        <div
          class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8"
        >
          <div class="mt-10">
            <div>
              <div class="inline-flex space-x-4">
                <span
                  class="rounded bg-accent-faded px-2.5 py-1 text-sm font-semibold text-accent"
                  >What's new</span
                >
                <span
                  class="inline-flex items-center space-x-1 text-sm font-medium text-accent"
                >
                  <span class="mr-2">Just dropped version 0.1.0</span>
                  <span class="relative flex h-3 w-3">
                    <span
                      class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"
                    ></span>
                    <span
                      class="relative inline-flex rounded-full h-3 w-3 bg-accent"
                    ></span>
                  </span>
                </span>
              </div>
            </div>
            <div class="mt-6 sm:max-w-xl">
              <h1
                class="text-4xl font-bold tracking-tight text-primary sm:text-5xl"
              >
                A better way to create your next project.
              </h1>
              <p class="mt-6 text-xl text-muted">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo.
              </p>
            </div>
            <form action="#" class="mt-12 sm:flex sm:w-full sm:max-w-lg">
              <div class="min-w-0 flex-1">
                <label for="hero-email" class="sr-only">Email address</label>
                <input
                  id="hero-email"
                  type="email"
                  class="input"
                  placeholder="Enter your email"
                />
              </div>
              <div class="mt-4 sm:mt-0 sm:ml-3">
                <button
                  type="submit"
                  class="block w-full rounded-md border border-transparent bg-accent px-5 py-3 text-inverted font-medium shadow hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 sm:px-10"
                >
                  Notify me
                </button>
              </div>
            </form>
            <div class="mt-6">
              <div class="inline-flex items-center divide-x divide-gray-300">
                <div class="flex flex-shrink-0 pr-5"></div>
                <div
                  class="min-w-0 flex-1 py-1 pl-5 text-sm text-gray-500 sm:py-3"
                >
                  <span>
                    <i v-for="n in 5" :key="n" class="fas fa-star mr-1"></i>
                  </span>
                  <span class="ml-2 font-medium text-primary"
                    >Rated 5 stars</span
                  >
                  <span class="mx-1.5 text-muted">by over</span>
                  <span class="font-medium text-accent">100 beta users</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div
            class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
          >
            <div class="hidden sm:block">
              <div
                class="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-secondary lg:left-80 lg:right-0 lg:w-full"
              />
              <svg
                class="absolute top-8 right-1/2 -mr-3 lg:left-0 lg:m-0"
                width="404"
                height="392"
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="837c3e70-6c3a-44e6-8854-cc48c737b659"
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
                  height="392"
                  fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                />
              </svg>
            </div>
            <div
              class="relative -mr-40 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12"
            >
              <img
                class="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                src="https://tailwindui.com/img/component-images/task-app-rose.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <!-- Logo cloud section -->
      <div class="mt-32">
        <div
          class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <div class="lg:grid lg:grid-cols-2 lg:items-center lg:gap-24">
            <div>
              <h2
                class="text-3xl font-bold tracking-tight text-primary sm:text-4xl"
              >
                Backed by world-renowned investors
              </h2>
              <p class="mt-6 max-w-3xl text-lg leading-7 text-muted">
                Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque.
                Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc
                nisl netus morbi vel porttitor vitae ut. Amet vitae fames
                senectus vitae.
              </p>
              <div class="mt-6">
                <a href="#" class="font-medium text-accent"
                  >Meet our investors and advisors</a
                >
              </div>
            </div>
            <div
              class="mt-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2"
            >
              <div
                v-for="logo in logos"
                :key="logo.name"
                class="col-span-1 flex justify-center bg-gray-50 py-8 px-8"
              >
                <img class="max-h-12" :src="logo.url" :alt="logo.name" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA section -->
      <div class="relative mt-24 sm:mt-32 sm:py-16">
        <div aria-hidden="true" class="hidden sm:block">
          <div
            class="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl bg-secondary"
          />
          <svg
            class="absolute top-8 left-1/2 -ml-3"
            width="404"
            height="392"
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
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
              height="392"
              fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
            />
          </svg>
        </div>
        <div
          class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <div
            class="relative overflow-hidden rounded-2xl bg-accent px-6 py-10 shadow-xl sm:px-12 sm:py-20"
          >
            <div
              aria-hidden="true"
              class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
            >
              <svg
                class="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  class="text-accent-hover text-opacity-40"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                />
                <path
                  class="text-accent-hover text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                />
              </svg>
            </div>
            <div class="relative">
              <div class="sm:text-center">
                <h2
                  class="text-3xl font-bold tracking-tight text-inverted sm:text-4xl"
                >
                  Get notified when we&rsquo;re launching.
                </h2>
                <p class="mx-auto mt-6 max-w-2xl text-lg text-inverted">
                  Sagittis scelerisque nulla cursus in enim consectetur quam.
                  Dictum urna sed consectetur neque tristique pellentesque.
                </p>
              </div>
              <form action="#" class="mt-12 sm:mx-auto sm:flex sm:max-w-lg">
                <div class="min-w-0 flex-1">
                  <label for="cta-email" class="sr-only">Email address</label>
                  <input
                    id="cta-email"
                    type="email"
                    class="block w-full rounded-md border border-transparent px-5 py-3 text-primary text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div class="mt-4 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    class="block w-full rounded-md border border-transparent bg-gray-900 px-5 py-3 text-inverted font-medium shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10"
                  >
                    Notify me
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
