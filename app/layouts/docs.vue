<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('docs'), {
  transform: data => data.find(item => item.path === '/docs')?.children || [],
})

provide('navigation', navigation)

// const links = [{
//   label: 'Docs',
//   icon: 'i-lucide-book',
//   to: '/docs/getting-started',
// }, {
//   label: 'Pricing',
//   icon: 'i-lucide-credit-card',
//   to: '/pricing',
// }, {
//   label: 'Blog',
//   icon: 'i-lucide-pencil',
//   to: '/blog',
// }]

// const { data: files } = useLazyAsyncData('search', () => queryCollectionSearchSections('docs'), {
//   server: false,
// })
</script>

<template>
  <UApp>
    <Header />
    <main class="max-w-6xl mx-auto px-4 py-20">
      <UPage>
        <template #left>
          <UPageAside>
            <UContentNavigation
              :navigation="navigation"
              highlight
            />
          </UPageAside>
        </template>

        <slot />
      </UPage>
    </main>
    <Footer />
  </UApp>
</template>
