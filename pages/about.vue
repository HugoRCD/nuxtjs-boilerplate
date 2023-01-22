<script setup lang="ts">
definePageMeta({
  name: "About",
  title: "About",
  description: "About page",
  keywords: "about",
});

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
  },
  {
    question: "How do you make holy water?",
    answer:
      "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quas, laboriosam veniam.",
  },
  {
    question: "Why can't you hear a pterodactyl go to the bathroom?",
    answer:
      "Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, exercitationem.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod consequuntur voluptates.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod consequuntur voluptates.",
  },
];
</script>

<template>
  <div class="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
    <div class="lg:grid lg:grid-cols-3 lg:gap-8">
      <div>
        <h2 class="text-3xl font-bold tracking-tight text-primary">
          Frequently asked questions
        </h2>
        <p class="mt-4 text-lg text-muted">
          Can’t find the answer you’re looking for? Reach out to our
          <a href="#" class="font-medium text-accent hover:text-accent-hover"
            >customer support</a
          >
          team.
        </p>
      </div>
      <div class="mt-12 lg:col-span-2 lg:mt-0">
        <dl class="space-y-12">
          <div v-for="faq in faqs" :key="faq.question">
            <dt class="text-lg font-medium leading-6 text-primary">
              {{ faq.question }}
            </dt>
            <dd class="mt-2 text-muted">{{ faq.answer }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
