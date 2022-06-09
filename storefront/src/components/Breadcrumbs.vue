<template>
  <SfBreadcrumbs :breadcrumbs="breadcrumbs" />
</template>

<script>
import { SfBreadcrumbs } from '@storefront-ui/vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Breadcrumbs',
  components: { SfBreadcrumbs },
  props: {
    breadcrumbs: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
