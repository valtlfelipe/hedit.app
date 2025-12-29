<script setup>
const features = [
  {
    icon: 'Edit3',
    title: 'Fast and Intuitive',
    description: 'Edit your hosts file with syntax highlighting & validation.',
  },
  {
    icon: 'FileStack',
    title: 'Multiple Files',
    description: 'Manage multiple hosts files and activate them with a single click.',
  },
  {
    icon: 'Link',
    title: 'Remote Hosts',
    description: 'Import hosts files from remote URLs and keep them updated automatically.',
  },
  {
    icon: 'Combine',
    title: 'Combo Files',
    description: 'Combine multiple hosts files into one for easy management.',
  },
  {
    icon: 'FastForward',
    title: 'Easy Activation',
    description: 'Switch between different hosts files quickly and easily.',
  },
  {
    icon: 'Palette',
    title: 'Beautiful Interface',
    description: 'Modern, clean design that doesn\'t get in your way. Dark & light themes.',
  },
]
</script>

<template>
  <section class="py-24 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Take full control of your
          <span class="bg-gradient-primary bg-clip-text text-transparent">
            hosts file
          </span>
        </h2>
        <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
          Powerful, safe, and efficient hosts file management.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          v-for="(feature, index) in features"
          :key="index"
          class="bg-card border-border hover:shadow-card transition-all duration-300 hover:scale-105 group"
        >
          <CardContent>
            <div class="flex items-start gap-4">
              <div class="p-3 rounded-lg bg-gradient-primary text-primary-foreground group-hover:shadow-glow transition-all duration-300">
                <LucideEdit3
                  v-if="feature.icon === 'Edit3'"
                  class="w-6 h-6"
                />
                <LucideFileStack
                  v-if="feature.icon === 'FileStack'"
                  class="w-6 h-6"
                />
                <LucidePalette
                  v-if="feature.icon === 'Palette'"
                  class="w-6 h-6"
                />
                <LucideLink
                  v-if="feature.icon === 'Link'"
                  class="w-6 h-6"
                />
                <LucideCombine
                  v-if="feature.icon === 'Combine'"
                  class="w-6 h-6"
                />
                <LucideFastForward
                  v-if="feature.icon === 'FastForward'"
                  class="w-6 h-6"
                />
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold mb-2 text-foreground">
                  {{ feature.title }}
                </h3>
                <p class="text-muted-foreground leading-relaxed">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
