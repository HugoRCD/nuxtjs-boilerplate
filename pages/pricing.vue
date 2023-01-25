<script setup lang="ts">
import { Plan } from "~/types/Pricing";
definePageMeta({
  name: "Pricing",
  title: "Pricing",
  description: "Pricing page",
});

const plans: Plan[] = [
  {
    id: "prod_NEMP9hBJdE3WNV",
    name: "Professional",
    price: 35,
    priceId: "price_1MTtgFCk9AfBe7l2i8spjHK5",
    description: "Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis.",
    features: [
      "Pariatur quod similique",
      "Sapiente libero doloribus modi nostrum",
      "Vel ipsa esse repudiandae excepturi",
      "Itaque cupiditate adipisci quibusdam",
    ],
  },
  {
    id: "prod_NEMP9hBJdE3WNV",
    name: "Premium",
    price: 95,
    priceId: "price_1MTtgFCk9AfBe7l2i8spjHK5",
    description: "Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis.",
    features: [
      "Pariatur quod similique",
      "Sapiente libero doloribus modi nostrum",
      "Vel ipsa esse repudiandae excepturi",
      "Itaque cupiditate adipisci quibusdam",
      "Sapiente libero doloribus modi nostrum",
    ],
  },
];
</script>

<template>
  <div class="bg-primary">
    <div class="relative overflow-hidden pt-32 pb-96 lg:pt-40">
      <div><img class="absolute bottom-0 left-1/2 w-[1440px] max-w-none -translate-x-1/2" src="https://tailwindui.com/img/component-images/grid-blur-purple-on-black.jpg" alt="" /></div>
      <div class="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 class="text-lg font-semibold leading-8 text-accent">Tarifs</h2>
          <p class="mt-2 text-4xl font-bold tracking-tight text-white">Lorem ipsum dolor sit</p>
          <p class="mt-6 text-lg leading-8 text-white/60">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus molestiae voluptatum.</p>
        </div>
      </div>
    </div>
    <div class="flow-root bg-primary pb-32 lg:pb-40">
      <div class="relative -mt-80">
        <div class="relative z-1 mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 lg:gap-8">
            <PlanPricing v-for="plan in plans" :key="plan.id" :subscription="plan" />
          </div>
        </div>
      </div>
      <div class="relative mx-auto mt-8 max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-md lg:max-w-4xl">
          <div class="flex flex-col gap-6 rounded-3xl p-8 bg-secondary sm:p-10 lg:flex-row lg:items-center lg:gap-8">
            <div class="lg:min-w-0 lg:flex-1">
              <h3 class="text-lg font-semibold leading-8 tracking-tight text-primary">Custom</h3>
              <div class="mt-2 text-base leading-7 text-gray-600">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
              </div>
            </div>
            <div>
              <NuxtLink :to="{ name: 'Contact' }" class="rounded-lg bg-accent px-4 py-2.5 text-center text-sm font-semibold leading-5 text-inverted hover:bg-accent-hover">Contact Us<span aria-hidden="true">&rarr;</span></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>