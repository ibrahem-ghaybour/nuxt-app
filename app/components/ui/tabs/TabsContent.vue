<template>
  <TabsContent 
    v-bind="props"
    :class="cn('mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2', props.class)"
  >
    <slot />
  </TabsContent>
</template>

<script setup lang="ts">
import { TabsContent } from 'reka-ui'
import { cn } from '@/lib/utils'

const props = defineProps<{
  value: string
  class?: string
}>()
</script>
