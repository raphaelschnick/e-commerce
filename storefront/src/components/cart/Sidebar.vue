<template>
  <SfSidebar
    title="My Cart"
    subtitle=""
    :headingLevel="3"
    button
    visible
    overlay
    :persistent="false"
    position="right"
  >
    Total items: 0
  </SfSidebar>
</template>

<script>
export default {
  name: 'CartSidebar'
}
</script>
