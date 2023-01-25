<script setup lang="ts">
import { PropType } from "@vue/runtime-core";
import { CheckIcon } from "@heroicons/vue/24/outline";
import { Plan } from "~/types/Pricing";

defineProps({
  subscription: {
    type: Object as PropType<Plan>,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col rounded-3xl bg-secondary shadow-xl ring-1 ring-black/10">
    <div class="p-8 sm:p-10">
      <h3 class="text-lg font-semibold leading-8 tracking-tight text-accent" :id="subscription.id">{{ subscription.name }}</h3>
      <div class="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-primary">
        ${{ subscription.price }}
        <span class="text-lg font-semibold leading-8 tracking-normal text-primary">/mois</span>
      </div>
      <p class="mt-6 text-base leading-7 text-muted">{{ subscription.description }}</p>
    </div>
    <div class="flex flex-1 flex-col p-2">
      <div class="flex flex-1 flex-col justify-between rounded-2xl bg-secondary p-6 sm:p-8">
        <ul role="list" class="space-y-6">
          <li v-for="feature in subscription.features" :key="feature" class="flex items-start">
            <div class="flex-shrink-0">
              <CheckIcon class="h-6 w-6 text-accent" aria-hidden="true" />
            </div>
            <p class="ml-3 text-sm leading-6 text-muted">{{ feature }}</p>
          </li>
        </ul>
        <form action="/api/stripe/subscribe" method="post" class="mt-8">
          <button
            type="submit"
            name="priceId"
            :value="subscription.priceId"
            class="btn-primary" :aria-describedby="subscription.id">S'inscrire</button>
        </form>
      </div>
    </div>
  </div>
</template>