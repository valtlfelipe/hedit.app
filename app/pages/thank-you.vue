<script setup>
useHead({
  title: 'Thank You',
})
</script>

<template>
  <div class="min-h-screen bg-background">
    <Header />
    <main class="flex flex-col items-center justify-center py-24 sm:py-32">
      <div class="text-center px-4 max-w-2xl">
        <div class="mb-8">
          <div class="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6">
            <LucideHeart class="w-12 h-12 text-primary-foreground" />
          </div>
          <h1 class="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Thank You for Your Support!
          </h1>
          <p class="text-lg text-muted-foreground mb-2">
            Your license purchase helps us continue improving Hedit.
          </p>
        </div>

        <div class="bg-card border border-primary/20 rounded-lg p-6 mb-8">
          <h2 class="text-2xl font-bold mb-4">
            Get Started with Hedit
          </h2>
          <p class="text-muted-foreground mb-6">
            Download the latest version of Hedit below and activate your license in the app.
          </p>
          <Button
            as-child
            size="lg"
            class="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg font-semibold"
          >
            <NuxtLink to="/download">
              <LucideDownload class="w-5 h-5 mr-2" />
              Download Hedit
            </NuxtLink>
          </Button>
        </div>

        <div class="text-sm text-muted-foreground">
          <p class="mb-2">
            Having trouble? <a
              href="mailto:hello@hedit.app"
              class="text-primary hover:underline"
            >Contact our support team</a>
          </p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>
