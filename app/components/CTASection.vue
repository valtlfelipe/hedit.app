<template>
  <section class="py-24 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <div class="relative">
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
        </div>
      </div>
    </div>
  </section>
</template>
