export default defineCachedEventHandler(async (event) => {
  const response = await $fetch(`https://api.github.com/repos/valtlfelipe/hedit/releases/latest`)
  return response
}, {
  maxAge: 60 * 60, // 1 hour
  name: 'github_release',
  group: 'api',
  swr: true,
  base: 'kv',
})
