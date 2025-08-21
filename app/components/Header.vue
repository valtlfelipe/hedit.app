<template>
  <header class="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
    <div class="max-w-6xl mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <NuxtLink
          to="/"
          class="flex items-center gap-3"
        >
          <NuxtImg
            src="/img/logo.webp"
            alt="Hedit"
            class="w-8 h-8"
          />
          <span class="text-xl font-bold text-foreground">Hedit</span>
        </NuxtLink>

        <nav class="flex items-center gap-6">
          <!-- {/* <NuxtLink to="/#features" class="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </NuxtLink>
            */} -->
          <NuxtLink
            to="/pricing"
            class="text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </NuxtLink>
          <a
            href="https://github.com/valtlfelipe/hedit/issues/new/choose"
            target="_blank"
            class="text-muted-foreground hover:text-foreground transition-colors flex items-center"
            @click="umTrackEvent('share_feedback')"
          >
            Feedback
            <LucideExternalLink class="w-4 h-4 ml-1" />
          </a>
        </nav>

        <div class="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            class="hidden sm:flex"
            as-child
          >
            <a
              href="https://github.com/valtlfelipe/hedit"
              target="_blank"
              @click="umTrackEvent('github_click')"
            >
              <LucideGithub class="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
          <Button
            as-child
            size="sm"
            class="bg-gradient-primary hover:shadow-glow transition-all duration-300"
          >
            <NuxtLink to="/download">
              <LucideDownload class="w-4 h-4 mr-2" />
              Download
            </NuxtLink>
          </Button>
          <!-- {/* <Button variant="ghost" size="sm" class="md:hidden">
              <Menu class="w-4 h-4" />
            </Button> */} -->
        </div>
      </div>
    </div>
  </header>
</template>
