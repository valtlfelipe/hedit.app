<template>
  <section class="py-24 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <div class="relative">
        <div class="absolute inset-0 bg-gradient-glow rounded-3xl blur-3xl" />

        <div class="mt-12 pt-8">
          <div class="flex items-center justify-center gap-3 mb-4">
            <div class="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
              <NuxtImg
                src="/img/valtlfelipe.webp"
                alt="Profile Picture"
                class="w-12 h-12 rounded-full"
              />
            </div>
            <div class="text-left">
              <div class="font-semibold text-foreground">
                Hey, I'm the creator!
              </div>
              <div class="text-sm text-muted-foreground">
                Felipe Valtl de Mello
              </div>
            </div>
          </div>

          <p class="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I created Hedit after using an outdated hosts file editor that didn't support Apple Silicon. I wanted a modern, user-friendly alternative that works seamlessly on today's systems.
          </p>

          <div class="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
            <LucideHeart class="w-4 h-4 text-red-500 fill-red-500" />
            <span>Made with love for the community</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
