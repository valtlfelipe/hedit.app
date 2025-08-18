<script setup lang="ts">
useSeoMeta({
  // title: 'Hedit - Modern Hosts File Editor',
  description: 'Fast and intuitive hosts file editor with syntax highlighting, backup, and validation. The modern tool for who care about their workflow.',
  ogDescription: 'Fast and intuitive hosts file editor with syntax highlighting, backup, and validation. The modern tool for who care about their workflow.',
})

useHead({
  // title: 'Hedit - Modern Hosts File Editor',
})

</script>

<template>
    <div class="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CodeSection />
        <!-- {/* <TestimonialsSection /> */} -->
        <CTASection />
      </main>
      <Footer />
    </div>
</template>