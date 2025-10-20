<template>
  <TabsRoot v-bind="forwarded">
    <slot />
  </TabsRoot>
</template>

<script setup lang="ts">
import { TabsRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<{
  defaultValue?: string
  modelValue?: string
}>()

const emits = defineEmits<{
  'update:modelValue': [value: string]
}>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
