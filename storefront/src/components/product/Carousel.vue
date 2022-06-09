<template>
  <SfCarousel
    :settings="{ peek: 16, breakpoints: { 1023: { peek: 0, perView: 2 } } }"
    class="carousel"
  >
    <SfCarouselItem
      v-for="(product, index) in products"
      :key="index"
      class="carousel__item"
    >
      <product-card :product="product" />
    </SfCarouselItem>
  </SfCarousel>
</template>

<script>
import { SfCarousel } from '@storefront-ui/vue'
import ProductCard from '@/components/product/Card'
export default {
  name: 'ProductCarousel',
  components: { ProductCard, SfCarousel },
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
