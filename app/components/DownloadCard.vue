<script setup lang="ts">
import { defineProps, computed } from 'vue'

const { userAgent, isMacOS, isWindows } = useDevice()

type OS = 'windows' | 'macos' | 'linux' | 'unknown'

const detectedOS = computed(() => {
  if (isWindows) return 'windows'
  else if (isMacOS) return 'macos'
  else if (userAgent.indexOf('linux') !== -1) return 'linux'
  return 'unknown'
})

const props = defineProps<{
  os: OS
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  assets: Array<any>
}>()

const isDetected = computed(() => props.os === detectedOS.value)

const getAssetUrl = (assetName: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (props.assets.find((asset: any) => asset.name.includes(assetName))?.browser_download_url as string) || ''
}

const osAssetTypes = [
  {
    os: 'macos',
    assets: [
      { url: getAssetUrl('_aarch64.dmg'), label: 'Apple Silicon' },
      { url: getAssetUrl('_x64.dmg'), label: 'Intel' },
    ],
  },
  {
    os: 'windows',
    assets: [
      { url: getAssetUrl('_x64.exe'), label: '.exe' },
    ],
  },
  {
    os: 'linux',
    assets: [
      { url: getAssetUrl('_x64.AppImage'), label: 'AppImage' },
      { url: getAssetUrl('_x64.deb'), label: '.deb' },
      { url: getAssetUrl('_x64.rpm'), label: '.rpm' },
    ],
  },
]

const title = computed(() => {
  if (props.os === 'windows') return 'Windows'
  else if (props.os === 'macos') return 'macOS'
  else if (props.os === 'linux') return 'Linux'
  return ''
})

const osData = computed(() => {
  return osAssetTypes.find(a => a.os === props.os)
})

const hasAssets = computed(() => osData.value && osData.value.assets.length > 0 && osData.value.assets.some(asset => asset.url))
</script>

<template>
  <Card :class="{ 'border-primary': isDetected }">
    <CardHeader>
      <div class="flex items-center gap-4">
        <LucideMonitor
          v-if="os === 'windows'"
          class="w-5 h-5"
        />
        <LucideApple
          v-if="os === 'macos'"
          class="w-5 h-5"
        />
        <LucideTerminal
          v-if="os === 'linux'"
          class="w-5  h-5"
        />
        <CardTitle>{{ title }}</CardTitle>
      </div>
    </CardHeader>
    <CardContent class="flex flex-row gap-2">
      <template v-if="hasAssets && osData">
        <Button
          v-for="asset in osData?.assets"
          :key="asset.url"
          class="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
          :class="{ 'bg-primary/70': !isDetected && detectedOS !== 'unknown' }"
          as-child
        >
          <a :href="asset.url"><LucideDownload class="w-5 h-5" />{{ asset.label }}</a>
        </Button>
      </template>
      <Button
        v-else
        class="bg-primary text-primary-foreground hover:bg-primary/90"
        disabled
      >
        Coming Soon
      </Button>
    </CardContent>
  </Card>
</template>
