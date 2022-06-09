<template>
  <SfHeader
    :logo="shopLogo"
    :logoHeight="35"
    :logoWidth="34"
    :title="shopName"
    :cartIcon="false"
    :wishlistIcon="false"
    :account-icon="false"
    searchPlaceholder="Search for items"
    searchValue=""
    :isSticky="true"
    :isNavVisible="false"
  />
</template>

<script>
import { SfHeader } from '@storefront-ui/vue'
export default {
  name: 'HeaderNavigation',
  components: { SfHeader },
  data () {
    return {
      shopLogo: '/assets/logo.svg',
      shopName: 'Storefront UI',
      shopRootCategories: ['women', 'man', 'kids']
    }
  }
}
</script>

<style scoped>

</style>
