<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('docs'), {
  transform: data => data.find(item => item.path === '/docs')?.children || [],
})

provide('navigation', navigation)
if (navigation.value) {
  prerenderRoutes(navigation.value.map(d => d.children ? d.children.map(c => c.path) : [d.path]).flat())
}

console.log(JSON.stringify(navigation.value))

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

// defineRouteRules({ prerender: true })

// const { data: posts } = await useFetch('/api/posts')

// // Tell Nuxt to pre-render all blog posts
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
