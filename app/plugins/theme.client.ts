export default defineNuxtPlugin(() => {
    const html = document.documentElement
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    // Default to dark, remove if light preferred
    if (!prefersDark) {
        html.classList.remove('dark')
    }
    else {
        html.classList.add('dark')
    }

    // Listen for changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (e.matches) {
            html.classList.add('dark')
        }
        else {
            html.classList.remove('dark')
        }
    })
})
