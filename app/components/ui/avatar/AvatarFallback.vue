<template>
  <AvatarFallback :class="cn('flex h-full w-full items-center justify-center rounded-full bg-muted', props.class)">
    <slot />
  </AvatarFallback>
</template>

<script setup lang="ts">
import { AvatarFallback } from 'reka-ui'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: string
}>()
</script>
