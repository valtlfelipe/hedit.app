<template>
  <section class="py-24 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="relative bg-muted/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12">
        <div class="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div class="relative">
            <div class="w-20 h-20 rounded-full bg-gradient-primary p-1">
              <NuxtImg
                src="/img/valtlfelipe.webp"
                alt="Profile Picture"
                class="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <div class="flex-1 text-center md:text-left">
            <div class="mb-2">
              <span class="text-xs font-medium text-primary uppercase tracking-wider">Creator</span>
            </div>
            <h3 class="text-xl font-semibold text-foreground mb-1">
              Felipe Valtl de Mello
            </h3>
            <p class="text-muted-foreground leading-relaxed mb-4">
              I created Hedit after using an outdated hosts file editor that didn't support Apple Silicon. I wanted a modern, user-friendly alternative that works seamlessly on today's systems.
            </p>
            <div class="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground">
              <LucideHeart class="w-4 h-4 text-red-500 fill-red-500" />
              <span>Made with love for the community</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
