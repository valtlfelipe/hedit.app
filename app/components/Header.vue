<script setup lang="ts">
const isMobileMenuOpen = ref(false)

const umTrackEvent = (eventName: string) => {
  if (typeof window !== 'undefined' && (window as any).umami) {
    ;(window as any).umami.track(eventName)
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <header class="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
    <div class="max-w-6xl mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <NuxtLink
          to="/"
          class="flex items-center gap-3"
          @click="closeMobileMenu"
        >
          <NuxtImg
            src="/img/logo.webp"
            alt="Hedit"
            class="w-8 h-8"
          />
          <span class="text-xl font-bold text-foreground">Hedit</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-6">
          <NuxtLink
            to="/pricing"
            class="text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </NuxtLink>
          <NuxtLink
            to="/docs"
            class="text-muted-foreground hover:text-foreground transition-colors"
          >
            Docs
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

        <!-- Desktop Actions -->
        <div class="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            as-child
          >
            <a
              href="https://github.com/valtlfelipe/hedit"
              target="_blank"
              @click="umTrackEvent('github_click')"
            >
              <LucideGithub class="w-4 h-4" />
            </a>
          </Button>
          <Button
            as-child
            size="sm"
            class="bg-gradient-primary hover:opacity-90 transition-all duration-300 text-white"
          >
            <NuxtLink
              to="/download"
            >
              <LucideDownload class="w-4 h-4 mr-2" />
              Download
            </NuxtLink>
          </Button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            aria-label="Toggle menu"
            @click="toggleMobileMenu"
          >
            <LucideMenu
              v-if="!isMobileMenuOpen"
              class="w-5 h-5"
            />
            <LucideX
              v-else
              class="w-5 h-5"
            />
          </Button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-2 opacity-0"
    >
      <nav
        v-if="isMobileMenuOpen"
        class="md:hidden border-t border-border bg-background/95 backdrop-blur-md"
      >
        <div class="max-w-6xl mx-auto px-4 py-4 space-y-4">
          <NuxtLink
            to="/pricing"
            class="block text-muted-foreground hover:text-foreground transition-colors py-2"
            @click="closeMobileMenu"
          >
            Pricing
          </NuxtLink>
          <NuxtLink
            to="/docs"
            class="block text-muted-foreground hover:text-foreground transition-colors py-2"
            @click="closeMobileMenu"
          >
            Docs
          </NuxtLink>
          <a
            href="https://github.com/valtlfelipe/hedit/issues/new/choose"
            target="_blank"
            class="block text-muted-foreground hover:text-foreground transition-colors flex items-center py-2"
            @click="umTrackEvent('share_feedback')"
          >
            Feedback
            <LucideExternalLink class="w-4 h-4 ml-1" />
          </a>
          <div class="pt-4 border-t border-border space-y-3">
            <Button
              variant="ghost"
              size="sm"
              class="w-full justify-start"
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
              class="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 justify-start text-white"
            >
              <NuxtLink
                to="/download"
                @click="closeMobileMenu"
              >
                <LucideDownload class="w-4 h-4 mr-2" />
                Download
              </NuxtLink>
            </Button>
          </div>
        </div>
      </nav>
    </Transition>
  </header>
</template>
