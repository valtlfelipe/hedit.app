<script setup>

useSeoMeta({
  title: 'Made by Human',
  description: 'Hedit is a fully indie project, and every license helps keep it that way. Your feedback is always welcome and appreciated.',
  ogDescription: 'Hedit is a fully indie project, and every license helps keep it that way. Your feedback is always welcome and appreciated.',
})

useHead({
  title: 'Made by Human',
})
</script>

<template>
    <div class="min-h-screen bg-background">
            <Header />
            <main class="flex flex-col items-center justify-center py-24 sm:py-32">
                <div class="max-w-4xl w-full p-4">
                    <h1 class="text-3xl font-bold mb-4 text-center">Made by Human</h1>
                    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                        <div class="mx-auto max-w-screen-sm">
                            <p class=" text-md leading-relaxed mb-6">
                                Hedit is a small, independent product run by a passionate
                                individual. I am not a big corporation, nor am I backed by venture capital. I'm just
                                someone who loves building products and helping others.
                            </p>
                            <p class=" text-md leading-relaxed mb-6">
                                I created Hedit because I was using an older application to edit my hosts file, which had no support for Apple Silicon, and I wanted to create a modern, user-friendly alternative that works seamlessly.
                            </p>
                            <p class=" text-md leading-relaxed mb-6">
                                I am not perfect. I make mistakes. I am learning and
                                growing, always looking to improve every day. Your feedback is always welcome and appreciated.
                            </p>
                            <p class=" text-md leading-relaxed mb-6">
                                Hedit is a fully indie project, and every license helps keep it that way. I want to sincerely thank you for supporting me.
                            </p>

                            <p class=" text-md leading-relaxed mb-6">
                                Felipe Valtl de Mello<br ><small>FVM Tec.</small>
                            </p>

                            <hr class="mb-6" >
                            <p class=" text-sm leading-relaxed mb-6">
                                This page is inspired by <a
                                    target="_blank"
                                    href="https://www.useplunk.com/made-by-humans"
                                    class="underline hover:no-underline"
                                >Dries from Plunk</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
</template>