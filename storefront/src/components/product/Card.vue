<template>
  <SfProductCard
    :image="product.image"
    :colors="product.colors"
    :title="product.title"
    :regular-price="product.price.regular"
    :special-price="product.price.special"
    :score-rating="product.rating.score"
    :max-rating="product.rating.max"
    :is-in-wishlist="product.isInWishlist"
    :show-add-to-cart-button="true"
    :reviews-count="product.reviews"
    :badge-label="product.badgeLabel"
    :badge-color="product.badgeColor"
    :image-width="216"
    :image-height="326"
    image-tag="nuxt-img"
    :link="`/products/${product.id}`"
    :nuxt-img-config="{
            format: 'webp',
            fit: 'cover',
          }"
    @click:wishlist="toggleWishlist(index)"
    @click:colors="handleSelectedColor($event, index)"
  />
</template>

<script>
import { SfProductCard } from '@storefront-ui/vue'
export default {
  name: 'ProductCard',
  components: { SfProductCard },
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
