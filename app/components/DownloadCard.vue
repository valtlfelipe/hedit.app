<script setup lang="ts">
import { defineProps, computed } from 'vue';
const { userAgent, isMacOS, isWindows } = useDevice()

type OS = 'windows' | 'macos' | 'linux' | 'unknown';

const detectedOS = computed(() => {
    if (isWindows) return 'windows';
    else if (isMacOS) return 'macos';
    else if (userAgent.indexOf("linux") !== -1) return 'linux';
    return 'unknown';
});

const props = defineProps<{
    title: string;
    os: OS;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    assets: Array<any>
}>();

const isDetected = computed(() => props.os === detectedOS.value);
const isApple = computed(() => props.os === 'macos');

const assetUrl = (assetName: string) => {
    if (!isApple.value) return '';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (props.assets.find((asset: any) => asset.name.includes(assetName))?.browser_download_url as string) || '';
};

</script>

<template>
    <Card :class="{'border-primary': isDetected}">
        <CardHeader>
          <div class="flex items-center gap-4">
            <LucideMonitor v-if="os === 'windows'" class="w-5 h-5" />
            <LucideApple v-if="isApple" class="w-5 h-5" />
            <LucideTerminal v-if="os === 'linux'" class="w-5  h-5" />
            <CardTitle>{{ title }}</CardTitle>
          </div>
        </CardHeader>
        <CardContent class="flex flex-row gap-4">
            <Button v-if="isApple" class="bg-primary text-primary-foreground hover:bg-primary/90" as-child><a :href="assetUrl('_aarch64.dmg')"><LucideDownload class="w-5 h-5" />Apple Silicon</a></Button>
            <Button v-if="isApple" class="bg-primary text-primary-foreground hover:bg-primary/90" as-child><a :href="assetUrl('_x64.dmg')"><LucideDownload class="w-5 h-5" />Intel</a></Button>
            <Button v-if="!isApple" class="bg-primary text-primary-foreground hover:bg-primary/90" disabled>Coming Soon</Button>
        </CardContent>
      </Card>
</template>