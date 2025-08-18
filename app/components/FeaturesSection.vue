<script setup>
const features = [
  {
    icon: 'Edit3',
    title: "Fast and Intuitive",
    description: "Edit your hosts file with syntax highlighting. No more struggling with terminal editors."
  },
  {
    icon: 'FileText',
    title: "File Management",
    description: "Easily manage multiple hosts files and activate them with a single click."
  },
  {
    icon: 'Palette',
    title: "Beautiful Interface",
    description: "Modern, clean design that doesn't get in your way. Dark & light mode support."
  }
];
</script>

<template>
    <section class="py-24 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Everything you need to manage
            <span class="bg-gradient-primary bg-clip-text text-transparent">
              hosts files
            </span>
          </h2>
          <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hedit provides all the tools you need to edit and manage your hosts files efficiently and safely.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              v-for="(feature, index) in features"
              :key="index"
              class="bg-card border-border hover:shadow-card transition-all duration-300 hover:scale-105 group"
            >
              <CardContent class="p-6">
                <div class="flex items-start gap-4">
                  <div class="p-3 rounded-lg bg-gradient-primary text-primary-foreground group-hover:shadow-glow transition-all duration-300">
                    <LucideEdit3 v-if="feature.icon === 'Edit3'" class="w-6 h-6" />
                    <LucideFileText v-if="feature.icon === 'FileText'" class="w-6 h-6" />
                    <LucidePalette v-if="feature.icon === 'Palette'" class="w-6 h-6" />
                  </div>
                  <div class="flex-1">
                    <h3 class="text-lg font-semibold mb-2 text-foreground">
                      {{feature.title}}
                    </h3>
                    <p class="text-muted-foreground leading-relaxed">
                      {{feature.description}}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
        </div>
      </div>
    </section>
</template>