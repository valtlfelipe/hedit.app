<script setup>
useSeoMeta({
  title: 'Pricing',
  description: 'Currently free. Pricing to be defined.',
  ogDescription: 'Currently free. Pricing to be defined.',
})

useHead({
  title: 'Pricing',
})
</script>

<template>
  <div class="min-h-screen bg-background">
    <Header />
    <main class="flex flex-col items-center justify-center py-24 sm:py-32">
      <div class="text-center mb-8 px-4">
        <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
          Pricing
        </h1>
        <p class="mt-3 text-lg text-muted-foreground sm:mt-4">
          Currently free.
        </p>
        <p class="mt-1 text-lg text-muted-foreground">
          Pricing to be defined.
        </p>
      </div>

      <Card class="max-w-2xl mx-auto bg-card">
        <CardContent class="pt-6">
          <div class="text-center">
            <LucideHeart class="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 class="text-2xl font-semibold mb-2">
              Free for Now
            </h2>
            <p class="text-muted-foreground">
              Enjoy all features for free while we work on defining our pricing model. Stay tuned for updates!
            </p>
          </div>
        </CardContent>
      </Card>
      <p class="mt-8 text-sm text-center text-muted-foreground max-w-2xl px-4">
        For inquiries, contact hello@hedit.app.
      </p>
    </main>
    <Footer />
  </div>
</template>
