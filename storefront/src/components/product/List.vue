<template>
  <div class="products">
    <transition-group
      appear
      name="products__slide"
      tag="div"
      class="products__grid"
    >
      <product-card v-for="(product, index) in products" :key="index" :product="product" />
    </transition-group>
  </div>
</template>

<script>
import ProductCard from '@/components/product/Card'
export default {
  name: 'ProductList',
  components: { ProductCard },
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
.products {
  box-sizing: border-box;
  flex: 1;
  margin: 0;
&__grid,
&__list {
   display: flex;
   flex-wrap: wrap;
 }
&__grid {
   justify-content: center;
@include for-desktop {
  justify-content: space-between;
}
}
&__product-card {
   --product-card-max-width: 11rem;
   --product-card-title-margin: var(--spacer-2xs) 0 0 0;
   --price-regular-font-line-height: 1;
   margin-bottom: var(--spacer-sm);
::v-deep .sf-product-card__price {
  margin: var(--spacer-2xs) 0 var(--spacer-xs);
}
flex: 1 1 50%;
@include for-desktop {
  margin-bottom: 0;
  --product-card-max-width: 50%;
  --product-card-title-margin: var(--spacer-base) 0 0 0;
}
}
&__product-card-horizontal {
   margin-bottom: var(--spacer-sm);
   flex: 0 0 100%;
::v-deep .sf-product-card-horizontal__wishlist-icon {
.sf-icon {
  width: 1.5rem;
  height: 1.5rem;
}
}
}
&__slide-enter {
   opacity: 0;
   transform: scale(0.5);
 }
&__slide-enter-active {
   transition: all 0.2s ease;
   transition-delay: calc(0.1s * var(--index));
 }
&__pagination {
   display: flex;
   justify-content: center;
   margin: var(--spacer-base) 0;
 }
@include for-desktop {
  margin: var(--spacer-sm) 0 0 var(--spacer-sm);
&__pagination {
   justify-content: flex-start;
   margin: var(--spacer-xl) 0 0 0;
 }
&__product-card-horizontal {
   margin: var(--spacer-lg) 0;
 }
&__product-card {
   flex: 1 1 25%;
 }
&__list {
   margin: 0 0 0 var(--spacer-sm);
 }
}
&__show-on-page {
   display: flex;
   justify-content: flex-end;
   align-items: baseline;
&__label {
   font-family: var(--font-family--secondary);
   font-size: var(--font-size--sm);
 }
}
}
</style>
