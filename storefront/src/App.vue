<template>
  <div id="default">
    <header-navigation />
    <bottom-navigation />
    <router-view />
    <footer-navigation />
  </div>
</template>
<script>
import BottomNavigation from '@/components/nagivation/Bottom'
import FooterNavigation from '@/components/nagivation/Footer'
import HeaderNavigation from '@/components/nagivation/Header'
export default {
  components: {
    HeaderNavigation,
    FooterNavigation,
    BottomNavigation
  }
}
</script>

<style lang="scss">
@import "~@storefront-ui/vue/styles";
#default {
}
html {
  --font-family--primary: 'Lato', sans-serif;
  --font-family--secondary: 'Lato', sans-serif;
}
</style>
