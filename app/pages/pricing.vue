<script setup>
import { Check, ChevronDown, Heart } from 'lucide-vue-next'

const LucideCheck = Check
const LucideChevronDown = ChevronDown
const LucideHeart = Heart

useSeoMeta({
  title: 'Pricing',
  description: 'Simple, fair pricing for Hedit. Choose the plan that fits your needs.',
  ogDescription: 'Simple, fair pricing for Hedit. Choose the plan that fits your needs.',
})

useHead({
  title: 'Pricing',
})

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Free for personal, non-commercial use',
    features: [
      { text: '1 file', included: true },
      { text: 'All features included', included: true },
      { text: 'Personal use only', included: true },
      // { text: 'No background sync', included: false },
      // { text: 'No feature updates', included: false },
    ],
    cta: 'Download',
    ctaLink: '/download',
    ctaHighlight: false,
  },
  {
    name: 'Pro',
    price: '$25',
    period: 'license',
    description: 'Personal & commercial use',
    features: [
      { text: 'Unlimited files', included: true },
      { text: 'Commercial use', included: true },
      { text: '1 year of updates', included: true },
      { text: 'Use forever', included: true },
    ],
    cta: 'Get Pro',
    ctaLink: 'https://www.creem.io/payment/prod_7UiSIBPjvS5GxHahFnq2U2',
    ctaHighlight: true,
  },
]

const faqs = [
  {
    question: 'Is there a free version?',
    answer: `Yes. The free version is available for personal, non-commercial use and is great for testing Hedit before committing to a purchase.`,
  },
  {
    question: 'Is this a subscription?',
    answer: `No. This is a one-time purchase.<br><br>
You pay once and can use the version you bought forever. The license includes 1 year of updates and support.`,
  },
  {
    question: 'What happens after the 1 year update period ends?',
    answer: `Nothing breaks.<br><br>
You can keep using the app indefinitely. If you want access to new features released after your update period ends, you can optionally renew your license with a 20% discount.`,
  },
  {
    question: 'Can I use the free version at work or in a company?',
    answer: `The free version is intended for personal, non-commercial use only.<br><br>
If you use the app as part of paid work or within a company, a Pro license is required.`,
  },
  {
    question: 'Do you offer refunds?',
    answer: `Yes. Refunds can be requested within 30 days of your initial payment.`,
  },
  {
    question: 'Is Hedit open source?',
    answer: `Hedit is open source under the MIT license. You can view, modify, and run the source code for both personal and commercial use. Licensing applies only to the prebuilt binaries.`,
  },
]

function scrollToPricing() {
  document.getElementById('pricing-table')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="min-h-screen bg-background">
    <Header />
    <main class="flex flex-col items-center justify-center py-24 sm:py-32">
      <div class="text-center mb-12 px-4">
        <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
          Pricing
        </h1>
        <p class="mt-4 text-lg text-muted-foreground">
          Simple, fair pricing. Choose the plan that fits your needs.
        </p>
      </div>

      <div
        id="pricing-table"
        class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4 w-full"
      >
        <Card
          v-for="plan in plans"
          :key="plan.name"
          class="relative bg-card transition-all duration-300 hover:shadow-lg flex flex-col"
        >
          <CardContent class="pt-6 flex-1 flex flex-col">
            <div class="text-center mb-6">
              <h2 class="text-2xl font-semibold mb-2">
                {{ plan.name }}
              </h2>
              <div class="flex items-baseline justify-center gap-1">
                <span class="text-4xl font-bold">{{ plan.price }}</span>
                <span class="text-muted-foreground">{{ plan.period !== 'forever' ? '/' + plan.period : '' }}</span>
              </div>
              <p class="mt-2 text-sm text-muted-foreground">
                {{ plan.description }}
              </p>
            </div>

            <ul class="space-y-3 mb-6 flex-1">
              <li
                v-for="feature in plan.features"
                :key="feature.text"
                class="flex items-start gap-3"
              >
                <LucideCheck
                  class="w-5 h-5 shrink-0 mt-0.5"
                  :class="feature.included ? 'text-green-500' : 'text-muted-foreground/50'"
                />
                <span :class="feature.included ? '' : 'text-muted-foreground/50'">
                  {{ feature.text }}
                </span>
              </li>
            </ul>

            <NuxtLink
              :to="plan.ctaLink"
              :external="plan.ctaLink.startsWith('http')"
              class="w-full mt-auto"
            >
              <Button
                class="w-full cursor-pointer"
                :variant="plan.ctaHighlight ? 'default' : 'outline'"
                :class="plan.ctaHighlight ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : ''"
              >
                {{ plan.cta }}
              </Button>
            </NuxtLink>
          </CardContent>
        </Card>
      </div>

      <p class="mt-12 text-sm text-center text-muted-foreground px-4">
        Need a team license or have questions? Contact us at <a
          href="mailto:hello@hedit.app"
          class="hover:underline"
        >hello@hedit.app</a>.
      </p>

      <hr class="mt-16 w-24 border-t border-muted-foreground/20">

      <div class="mt-16 max-w-4xl mx-auto px-4 w-full">
        <h2 class="text-3xl font-bold text-center mb-8">
          Pricing FAQ
        </h2>

        <div class="space-y-4">
          <details
            v-for="faq in faqs"
            :key="faq.question"
            class="group rounded-lg border bg-card p-4 cursor-pointer transition-all duration-200 hover:shadow-sm"
          >
            <summary class="flex items-center justify-between font-medium list-none">
              <span>{{ faq.question }}</span>
              <span class="transition-transform duration-200 group-open:rotate-180">
                <LucideChevronDown class="w-5 h-5" />
              </span>
            </summary>
            <div
              class="mt-4 text-muted-foreground leading-relaxed"
              v-html="faq.answer"
            />
          </details>
        </div>
      </div>

      <!-- Thanks for the support section -->
      <div class="mt-16 max-w-4xl mx-auto px-4 w-full">
        <div class="rounded-2xl bg-card border p-8 sm:p-10">
          <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div class="shrink-0">
              <NuxtImg
                src="/img/valtlfelipe.webp"
                alt="Felipe Valtl de Mello"
                class="w-20 h-20 rounded-full ring-2 ring-border"
              />
            </div>
            <div class="text-center sm:text-left">
              <h3 class="text-xl sm:text-2xl font-semibold mb-3">
                Thanks for your <span class="text-primary">support</span> 🫶🏻
              </h3>
              <p class="text-muted-foreground leading-relaxed mb-5">
                Hedit is a self funded, indie project.<br>
                <strong class="text-foreground">Every license purchased helps me continue improving Hedit.</strong>
              </p>
              <div class="flex flex-col sm:flex-row items-center sm:items-start gap-4 justify-center sm:justify-start">
                <a
                  href="#pricing-table"
                  @click.prevent="scrollToPricing"
                >
                  <Button
                    variant="outline"
                    class="gap-2 transition-all duration-200 hover:scale-105 hover:border-primary cursor-pointer"
                  >
                    <LucideHeart class="w-5 h-5" />
                    Buy a License
                  </Button>
                </a>
                <NuxtLink
                  to="https://github.com/sponsors/valtlfelipe"
                  target="_blank"
                  external
                >
                  <Button
                    variant="outline"
                    class="gap-2 transition-all duration-200 hover:scale-105 hover:border-primary cursor-pointer"
                  >
                    <LucideHeart class="w-5 h-5" />
                    Support on GitHub Sponsors
                  </Button>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>
