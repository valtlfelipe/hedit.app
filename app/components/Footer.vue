<template>
  <footer class="border-t border-border bg-background">
    <div class="max-w-6xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <NuxtImg
              src="/img/logo.webp"
              alt="Hedit"
              class="w-8 h-8"
            />
            <span class="text-xl font-bold text-foreground">Hedit</span>
          </div>
          <p class="text-muted-foreground">
            The modern hosts file editor for people who care about their tools.
          </p>
        </div>

        <div>
          <h4 class="font-semibold text-foreground mb-4">
            Product
          </h4>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li>
              <NuxtLink
                to="/download"
                class="hover:text-foreground transition-colors"
              >Download</NuxtLink>
            </li>
            <li>
              <a
                href="https://github.com/valtlfelipe/hedit/issues/new?template=bug.yml"
                target="_blank"
                class="hover:text-foreground transition-colors"
              >Bug Reports</a>
            </li>
            <li>
              <a
                href="https://github.com/valtlfelipe/hedit/issues/new?template=feature.yml"
                target="_blank"
                class="hover:text-foreground transition-colors"
              >Feature Requests</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-foreground mb-4">
            Company
          </h4>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li>
              <NuxtLink
                to="/human"
                class="hover:text-foreground transition-colors"
              >Build by Human</NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/terms"
                class="hover:text-foreground transition-colors"
              >Terms of Service</NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/privacy"
                class="hover:text-foreground transition-colors"
              >Privacy Policy</NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-foreground mb-4">
            Community
          </h4>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                href="https://github.com/valtlfelipe/hedit"
                target="_blank"
                class="hover:text-foreground transition-colors"
              >GitHub</a>
            </li>
            <li>
              <a
                href="https://x.com/valtlfelipe"
                target="_blank"
                class="hover:text-foreground transition-colors"
              >Twitter</a>
            </li>
            <li>
              <a
                href="https://bsky.app/profile/felipevm.dev"
                target="_blank"
                class="hover:text-foreground transition-colors"
              >BlueSky</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-center justify-between pt-8 mt-8 border-t border-border">
        <p class="text-sm text-muted-foreground">
          © 2025 Hedit - FVM Tec. All rights reserved.
        </p>

        <div class="flex items-center gap-4 mt-4 md:mt-0">
          <div class="flex items-center gap-2 text-sm text-muted-foreground">
            <LucideHeart class="w-4 h-4 text-red-500 fill-red-500" />
            <span>Made with love in 🇧🇷</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
