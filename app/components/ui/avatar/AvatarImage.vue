<template>
  <AvatarImage :class="cn('aspect-square h-full w-full', props.class)" v-bind="props">
    <slot />
  </AvatarImage>
</template>

<script setup lang="ts">
import { AvatarImage } from 'reka-ui'
import { cn } from '@/lib/utils'

const props = defineProps<{
  src?: string
  alt?: string
  class?: string
}>()
</script>
