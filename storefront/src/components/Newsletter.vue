<template>
  <SfCallToAction
    class="call-to-action"
    title="Subscribe to Newsletters"
    description="Be aware of upcoming sales and events. Receive gifts and special offers!"
    button-text="subscribe"
    image="/assets/storybook/Home/newsletter.jpg"
  />
</template>

<script>
import { SfCallToAction } from '@storefront-ui/vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Newsletter',
  components: { SfCallToAction }
}
</script>

<style scoped>

</style>
