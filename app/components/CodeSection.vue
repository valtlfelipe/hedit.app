<script setup>
const hostEntries = [
    { ip: "127.0.0.1", hostname: "localhost", comment: "# Default localhost entry" },
    { ip: "127.0.0.1", hostname: "dev.myapp.com", comment: "# Development environment" },
    { ip: "192.168.1.100", hostname: "staging.myapp.com", comment: "# Staging server" },
    { ip: "", hostname: "", comment: "" }
];

const features = [
    "Syntax highlighting with error detection",
    "Shortcuts for common actions",
    "Privacy-focused design",
    "Lightweight and fast",
    "Cross-platform support"
];
</script>

<template>
    <section class="py-24 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl md:text-5xl font-bold mb-6">
              User
              <span class="bg-gradient-primary bg-clip-text text-transparent">
                friendly
              </span>
            </h2>
            <p class="text-xl text-muted-foreground mb-8">
              Clean interface, powerful features.
            </p>

            <div class="space-y-4">
                <div v-for="(feature, index) in features" :key="index" class="flex items-center gap-3">
                    <LucideCheckCircle class="w-5 h-5 text-primary flex-shrink-0" />
                    <span class="text-foreground">{{feature}}</span>
                </div>
            </div>
          </div>

          <div class="relative">
            <Card class="bg-code-bg border-border shadow-elegant overflow-hidden p-0">
              <div class="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-border">
                <div class="flex gap-2">
                  <div class="w-3 h-3 rounded-full bg-red-500" />
                  <div class="w-3 h-3 rounded-full bg-yellow-500" />
                  <div class="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div class="flex-1 text-center">
                  <span class="text-sm text-muted-foreground">Hedit - /etc/hosts</span>
                </div>
              </div>

              <CardContent class="p-0 -mt-6">
                <div class="font-mono text-sm">
                  <div class="flex">
                    <div class="bg-muted/50 px-4 py-2 text-muted-foreground select-none">
                      <div class="leading-6">1</div>
                      <div class="leading-6">2</div>
                      <div class="leading-6">3</div>
                      <div class="leading-6">4</div>
                      <div class="leading-6">5</div>
                      <div class="leading-6">6</div>
                    </div>

                    <div class="flex-1 px-4 py-2 space-y-1">
                      <div class="text-code-comment leading-6">
                        ## Host Database
                      </div>
                      <div class="text-code-comment leading-6">
                        ##
                      </div>
                      <div v-for="(entry, index) in hostEntries" :key="index" class="leading-6">
                        <span class="text-code-number">{{entry.ip}}</span>
                        <span class="text-foreground ml-4">{{entry.hostname}}</span>
                        <span class="text-code-comment ml-4">{{entry.comment}}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div class="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg p-3 shadow-glow">
              <div class="flex items-center gap-2 text-sm">
                <LucideCheckCircle class="w-4 h-4 text-green-500" />
                <span class="text-foreground">File saved successfully</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>