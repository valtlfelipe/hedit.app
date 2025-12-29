<template>
  <Button
    variant="ghost"
    size="sm"
    class="w-9 h-9 p-0"
    @click="toggleTheme"
  >
    <LucideSun class="w-4 h-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    <LucideMoon class="absolute w-4 h-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>

<script setup>
const toggleTheme = () => {
  const html = document.documentElement
  html.classList.toggle('dark')
}
</script>
