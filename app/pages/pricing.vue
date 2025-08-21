<script setup>
useSeoMeta({
  title: 'Pricing',
  description: 'All features free for personal use. Support ongoing development with a commercial license.',
  ogDescription: 'All features free for personal use. Support ongoing development with a commercial license.',
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
          All features free for personal use.
        </p>
        <p class="mt-1 text-lg text-muted-foreground">
          Support ongoing development with a commercial license.
        </p>
      </div>

      <div class="max-w-4xl w-full mx-auto mb-8">
        <div class="relative rounded-2xl shadow-xl overflow-hidden border border-primary/30 bg-gradient-to-br from-primary/20 via-background to-secondary/30 px-8 py-7 flex items-center gap-6 backdrop-blur-md">
          <div class="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-tr from-primary to-secondary shadow-md">
            <span class="text-3xl">🎉</span>
          </div>
          <div class="flex-1">
            <div class="text-2xl font-extrabold text-primary mb-1 drop-shadow">
              Early Adopters Special
            </div>
            <div class="text-md text-muted-foreground mb-3">
              Support the development and get <span class="font-bold text-primary">50% off</span> your first year!
            </div>
            <div class="flex items-center gap-2">
              <span class="text-sm font-medium text-muted-foreground">Use coupon:</span>
              <span class="text-sm font-bold px-4 py-1 rounded-full bg-primary/80 text-white">HELAUNCH</span>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <Card class="flex flex-col bg-card">
          <CardHeader>
            <CardTitle>Personal</CardTitle>
            <CardDescription>For personal use</CardDescription>
          </CardHeader>
          <CardContent class="flex-grow">
            <div class="text-4xl font-bold mb-4">
              $0
            </div>
            <ul class="space-y-2">
              <li class="flex items-center">
                <LucideCheck class="h-5 w-5 text-green-500 mr-2" />
                <span>Personal use only</span>
              </li>
              <li class="flex items-center">
                <LucideCheck class="h-5 w-5 text-green-500 mr-2" />
                <span>Access all features</span>
              </li>
              <li class="flex items-center">
                <LucideCheck class="h-5 w-5 text-green-500 mr-2" />
                <span>Community support</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              class="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              as-child
            >
              <NuxtLink to="/download">Download Now</NuxtLink>
            </Button>
          </CardFooter>
        </Card>
        <Card class="flex flex-col bg-card border-primary">
          <CardHeader>
            <CardTitle>Commercial</CardTitle>
            <CardDescription>For professional and commercial use</CardDescription>
          </CardHeader>
          <CardContent class="flex-grow">
            <div class="text-4xl font-bold mb-4">
              $40<span class="text-lg font-normal text-muted-foreground">/user per year</span>
            </div>
            <ul class="space-y-2">
              <li class="flex items-center">
                <LucideCheck class="h-5 w-5 text-green-500 mr-2" />
                <span>Commercial use</span>
              </li>
              <li class="flex items-center">
                <LucideCheck class="h-5 w-5 text-green-500 mr-2" />
                <span>Email support</span>
              </li>
              <li class="flex items-center">
                <LucideCheck class="h-5 w-5 text-green-500 mr-2" />
                <span>Support indie developer</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              class="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              as-child
            >
              <a
                href="https://www.creem.io/payment/prod_7UiSIBPjvS5GxHahFnq2U2"
                @click="umTrackEvent('buy_now')"
              >Buy Now</a>
            </Button>
          </CardFooter>
        </Card>
      </div>
      <p class="mt-8 text-sm text-center text-muted-foreground max-w-2xl px-4">
        For bulk purchases and other inquiries, contact hello@hedit.app.
      </p>
    </main>
    <Footer />
  </div>
</template>
