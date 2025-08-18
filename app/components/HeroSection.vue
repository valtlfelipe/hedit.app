<template>
    <section class="px-4 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-secondary opacity-50" />

      <div class="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse" />
      <div class="absolute bottom-20 right-10 w-40 h-40 bg-gradient-primary rounded-full blur-3xl opacity-15 animate-pulse delay-1000" />

      <div class="relative z-10 text-center max-w-4xl mx-auto mt-40">
        <div class="mb-8 flex justify-center">
          <NuxtImg
            src="/img/logo.webp"
            alt="Hedit Logo"
            class="w-24 h-24 drop-shadow-lg hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 mb-8">
          <LucideStar class="w-4 h-4 text-primary fill-primary" />
          <span class="text-sm text-muted-foreground">The powerful hosts file editor</span>
        </div>

        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          The
          <span class="bg-gradient-primary bg-clip-text text-transparent">
            hosts file editor
          </span>
          for
          <span class="bg-gradient-primary bg-clip-text text-transparent">
            modern people
          </span>
        </h1>

        <p class="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Fast and intuitive hosts file management.
          Edit, manage, and organize your hosts entries with a beautiful and modern interface.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <Button
            size="lg"
            class="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg font-semibold"
            as-child
          >
            <NuxtLink to="/download">
              <LucideDownload class="w-5 h-5 mr-2" />
              Download Now
            </NuxtLink>
          </Button>
          <Button
            variant="outline"
            size="sm"
            class="border-border hover:bg-secondary px-6 py-6 text-lg"
            as-child
            >
            <a
              href="https://github.com/valtlfelipe/hedit"
              target="_blank"
            >
              <LucideGithub class="w-5 h-5 mr-2" />
              GitHub
            </a>
          </Button>
        </div>

        <!-- {/* <div class="flex justify-center items-center gap-8 text-sm text-muted-foreground">
          <div class="flex items-center gap-2">
            <LucideStar class="w-4 h-4 text-primary fill-primary" />
            <span>5.0 stars on GitHub</span>
          </div>
          <div>•</div>
          <div>10k+ downloads</div>
          <div>•</div>
          <div>Open source</div>
        </div> */} -->
        <div class="text-sm text-muted-foreground opacity-40">
          <em>Available for Mac. Soon available for Linux and Windows.</em>
        </div>

        <div class="inline-flex mt-12">
          <NuxtImg src="/img/hedit-screenshot.webp" alt="Hedit Screenshot" />
        </div>
      </div>
    </section>
</template>