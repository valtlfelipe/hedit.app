<script setup>

useSeoMeta({
  title: 'Download',
  description: 'Download the latest version of Hedit.',
  ogDescription: 'Download the latest version of Hedit.',
})

useHead({
  title: 'Download',
})

const fetchLatestRelease = async () => {
    const response = await fetch(`https://api.github.com/repos/valtlfelipe/hedit/releases/latest`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

const { data: release, pending: isLoading, error: isError } = await useAsyncData('release', fetchLatestRelease);
</script>

<template>
    <div class="min-h-screen bg-background">
        <Header />
        <main class="flex flex-col items-center justify-center py-24 sm:py-32">
            <div class="text-center mb-8 px-4">
                <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">Download Hedit</h1>
                <p v-if="isLoading" class="mt-3 text-lg text-muted-foreground sm:mt-4">Fetching latest version...</p>
                <p v-if="isError" class="mt-3 text-lg text-red-500 sm:mt-4">Could not fetch release information. Please
                    try again later.</p>
                <p class="mt-3 text-lg text-muted-foreground sm:mt-4">
                    Latest Version: {{ release.tag_name }}
                </p>
                <!-- <p class="text-sm text-muted-foreground">Total Downloads: {totalDownloads}</p> -->
                <a
                    :href="release.html_url" target="_blank" rel="noopener noreferrer"
                    class="text-sm text-primary hover:underline mt-2 block">
                    View Changelog
                </a>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full p-4">
                <DownloadCard
                    v-for="os in ['windows', 'macos', 'linux']"
                    :key="os"
                    :title="os.charAt(0).toUpperCase() + os.slice(1)"
                    :os="os"
                    :assets="release?.assets"
                />
            </div>
            <!-- {/* <p class="text-xs text-muted-foreground mt-8">For macOS, please choose the correct version for your processor.</p> */} -->
        </main>
        <Footer />
    </div>
</template>