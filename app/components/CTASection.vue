<template>
  <section class="py-24 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <div class="relative">
        <div class="absolute inset-0 bg-gradient-glow rounded-3xl blur-3xl" />

        <div class="relative bg-card border border-border rounded-3xl p-12 shadow-elegant">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Constantly
            <span class="bg-gradient-primary bg-clip-text text-transparent">
              improving
            </span>
          </h2>

          <p class="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Hedit is in active development. Your feedback is invaluable for shaping the future of Hedit.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              class="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg font-semibold"
              as-child
            >
              <NuxtLink to="/download">
                <LucideDownload class="w-5 h-5 mr-2" />
                Download Hedit
              </NuxtLink>
            </Button>

            <Button
              variant="outline"
              size="lg"
              class="border-border hover:bg-secondary px-8 py-6 text-lg"
              as-child
            >
              <a
                href="https://github.com/valtlfelipe/hedit/issues/new/choose"
                target="_blank"
                @click="umTrackEvent('share_feedback')"
              >
                <LucideHeartHandshake class="w-5 h-5 mr-2" />
                Share Feedback
              </a>
            </Button>
          </div>

          <div class="mt-12 pt-8 border-t border-border">
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
    </div>
  </section>
</template>
