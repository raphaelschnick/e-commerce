<template>
  <div id="home">
    <SfHero class="hero" :slider-options="{ autoplay: false }">
      <SfHeroItem
        v-for="(img, index) in heroes"
        :key="index"
        :image="img.image"
        :title="img.title"
        :subtitle="img.subtitle"
        :button-text="img.buttonText"
        :background="img.background"
        :class="img.className"
      />
    </SfHero>
    <product-list :products="products" />
    <newsletter class="mt-3" />
  </div>
</template>
<script>
import Newsletter from '@/components/Newsletter'
import { SfHero } from '@storefront-ui/vue'
import ProductList from '@/components/product/List'

export default {
  name: 'HomeView',
  components: {
    ProductList,
    SfHero,
    Newsletter
  },
  data () {
    return {
      heroes: [
        {
          title: 'Colorful summer dresses are already in store',
          subtitle: 'SUMMER COLLECTION 2020',
          buttonText: 'Learn more',
          background: 'rgb(236, 239, 241)',
          image: '/assets/storybook/Home/hero.png'
        },
        {
          title: 'Colorful summer dresses are already in store',
          subtitle: 'SUMMER COLLECTION 2020',
          buttonText: 'Learn more',
          background: 'rgb(239, 235, 233)',
          image: '/assets/storybook/Home/bannerHM.jpg',
          className:
            'sf-hero-item--position-bg-top-left sf-hero-item--align-right'
        },
        {
          title: 'Colorful summer dresses are already in store',
          subtitle: 'SUMMER COLLECTION 2020',
          buttonText: 'Learn more',
          background: 'rgb(236, 239, 241)',
          image: '/assets/storybook/Home/hero.png'
        }
      ],
      products: [
        {
          id: 1,
          title: 'Cream Beach Bag',
          image: 'assets/storybook/Home/productA.jpg',
          price: { regular: '$ 50.00 ' },
          rating: { max: 5, score: 4 },
          isInWishlist: true,
          reviews: 8,
          badgeLabel: '',
          badgeColor: 'color-primary',
          colors: [
            { label: 'Sand', value: 'sand', color: '#EDCBB9', selected: false },
            { label: 'Mint', value: 'mint', color: '#ABD9D8', selected: false },
            {
              label: 'Vivid rose',
              value: 'vivid rose',
              color: '#DB5593',
              selected: false
            },
            {
              label: 'Peach',
              value: 'peach',
              color: '#F59F93',
              selected: false
            }
          ]
        },
        {
          id: 2,
          title: 'Cream Beach Bag',
          image: 'assets/storybook/Home/productB.jpg',
          price: { regular: '$ 50.00 ', special: '$ 25.00 ' },
          rating: { max: 5, score: 4 },
          isInWishlist: true,
          reviews: 8,
          badgeLabel: '-50%',
          badgeColor: 'color-primary',
          colors: [
            {
              label: 'Green',
              value: 'green',
              color: '#AAAA00',
              selected: false
            },
            { label: 'Blue', value: 'blue', color: '#0099AA', selected: false },
            {
              label: 'Vivid red',
              value: 'vivid red',
              color: '#aa1100',
              selected: false
            },
            {
              label: 'Peach',
              value: 'peach',
              color: '#F59F93',
              selected: false
            },
            {
              label: 'Citrus',
              value: 'citrus',
              color: '#FFEE97',
              selected: false
            }
          ]
        },
        {
          id: 3,
          title: 'Cream Beach Bag',
          image: 'assets/storybook/Home/productC.jpg',
          price: { regular: '$ 50.00 ' },
          rating: { max: 5, score: 4 },
          isInWishlist: false,
          reviews: 8,
          badgeLabel: '',
          badgeColor: 'color-primary',
          colors: [
            {
              label: 'Vivid rose',
              value: 'vivid rose',
              color: '#DB5593',
              selected: false
            },
            { label: 'Mint', value: 'mint', color: '#ABD9D8', selected: false },
            {
              label: 'Peach',
              value: 'peach',
              color: '#F59F93',
              selected: false
            },
            {
              label: 'Citrus',
              value: 'citrus',
              color: '#FFEE97',
              selected: false
            },
            { label: 'Sand', value: 'sand', color: '#EDCBB9', selected: false }
          ]
        },
        {
          id: 4,
          title: 'Cream Beach Bag',
          image: 'assets/storybook/Home/productA.jpg',
          price: { regular: '$ 50.00 ' },
          rating: { max: 5, score: 4 },
          isInWishlist: false,
          reviews: 8,
          badgeLabel: '',
          badgeColor: 'color-primary',
          colors: [
            {
              label: 'Peach',
              value: 'peach',
              color: '#F59F93',
              selected: false
            },
            {
              label: 'Citrus',
              value: 'citrus',
              color: '#FFEE97',
              selected: false
            },
            { label: 'Sand', value: 'sand', color: '#EDCBB9', selected: false },
            { label: 'Mint', value: 'mint', color: '#ABD9D8', selected: false },
            {
              label: 'Vivid rose',
              value: 'vivid rose',
              color: '#DB5593',
              selected: false
            }
          ]
        },
        {
          id: 5,
          title: 'Cream Beach Bag',
          image: 'assets/storybook/Home/productB.jpg',
          price: { regular: '$ 50.00 ', special: '$ 45.00' },
          rating: { max: 5, score: 4 },
          isInWishlist: false,
          reviews: 8,
          badgeLabel: '-10%',
          badgeColor: 'color-primary',
          colors: [
            { label: 'Sand', value: 'sand', color: '#EDCBB9', selected: false },
            { label: 'Mint', value: 'mint', color: '#ABD9D8', selected: false },
            {
              label: 'Vivid rose',
              value: 'vivid rose',
              color: '#DB5593',
              selected: false
            },
            {
              label: 'Peach',
              value: 'peach',
              color: '#F59F93',
              selected: false
            },
            {
              label: 'Citrus',
              value: 'citrus',
              color: '#FFEE97',
              selected: false
            }
          ]
        },
        {
          id: 6,
          title: 'Cream Beach Bag',
          image: 'assets/storybook/Home/productC.jpg',
          price: { regular: '$ 50.00 ' },
          rating: { max: 5, score: 4 },
          isInWishlist: false,
          reviews: 8,
          badgeLabel: '',
          badgeColor: 'color-primary',
          colors: [
            { label: 'Sand', value: 'sand', color: '#EDCBB9', selected: false },
            {
              label: 'Peach',
              value: 'peach',
              color: '#F59F93',
              selected: false
            },
            {
              label: 'Citrus',
              value: 'citrus',
              color: '#FFEE97',
              selected: false
            }
          ]
        },
        {
          id: 7,
          title: 'Cream Beach Bag',
          image: 'assets/storybook/Home/productA.jpg',
          price: { regular: '$ 50.00 ' },
          rating: { max: 5, score: 4 },
          isInWishlist: false,
          reviews: 8,
          badgeLabel: '',
          badgeColor: 'color-primary',
          colors: [
            { label: 'Sand', value: 'sand', color: '#EDCBB9', selected: false },
            { label: 'Mint', value: 'mint', color: '#ABD9D8', selected: false },
            {
              label: 'Vivid rose',
              value: 'vivid rose',
              color: '#DB5593',
              selected: false
            },
            {
              label: 'Peach',
              value: 'peach',
              color: '#F59F93',
              selected: false
            },
            {
              label: 'Citrus',
              value: 'citrus',
              color: '#FFEE97',
              selected: false
            }
          ]
        },
        {
          id: 8,
          title: 'Cream Beach Bag',
          image: 'assets/storybook/Home/productB.jpg',
          price: { regular: '$ 50.00 ' },
          rating: { max: 5, score: 4 },
          isInWishlist: false,
          reviews: 8,
          badgeLabel: '',
          badgeColor: 'color-primary',
          colors: [
            { label: 'Sand', value: 'sand', color: '#EDCBB9', selected: false },
            { label: 'Mint', value: 'mint', color: '#ABD9D8', selected: false },
            {
              label: 'Vivid rose',
              value: 'vivid rose',
              color: '#DB5593',
              selected: false
            },
            {
              label: 'Peach',
              value: 'peach',
              color: '#F59F93',
              selected: false
            },
            {
              label: 'Citrus',
              value: 'citrus',
              color: '#FFEE97',
              selected: false
            }
          ]
        }
      ]
    }
  },
  methods: {
    toggleWishlist (index) {
      return (this.products[index].isInWishlist =
        !this.products[index].isInWishlist)
    },
    handleSelectedColor (color, index) {
      // eslint-disable-next-line array-callback-return
      this.products[index].colors.map((el) => {
        el.selected = el.label === color.label ? !el.selected : false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
#home {
  box-sizing: border-box;
  padding: 0 var(--spacer-sm);
  @include for-desktop {
    padding: 0 var(--spacer-sm);
    max-width: 1272px;
    margin: 0 auto;
  }
}
.hero {
  --hero-item-background-position: center;
}
.match-with-it {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: var(--spacer-xl);
  font-size: var(--h3-font-size);
  font-family: var(--font-family--secondary);
  font-weight: var(--font-weight--bold);
  border-bottom: solid 1px var(--c-light);
  &__paragraph {
    margin-bottom: var(--spacer-xs);
  }
  @include for-desktop {
    border: none;
    justify-content: center;
    font-weight: var(--font-weight--semibold);
  }
}
.carousel {
  margin: 0 calc(-1 * var(--spacer-sm)) 0 0;
  @include for-desktop {
    margin: 0;
  }
  &__item {
    margin: 1.9375rem 0 2.4375rem 0;
  }
}
.banner-grid {
  margin: var(--spacer-base) 0;
  --banner-container-width: 50%;
  &__subtitle {
    font-weight: var(--font-weight--normal);
    font-size: var(--font-size--base);
    font-family: var(--font-family--secondary);
    color: var(--c-gray);
    text-transform: uppercase;
  }
  @include for-desktop {
    margin: var(--spacer-2xl) 0;
  }
}
.share-your-look {
  --heading-title-font-weight: var(--font-weight--semibold);
  @include for-desktop {
    --section-margin: var(--spacer-2xl) 0;
  }
}
.call-to-action {
  display: flex;
}
.instagram-grid {
  display: flex;
  max-height: 20.625rem;
  width: 100%;
  justify-content: center;
  margin: 0;
  @include for-desktop {
    max-height: 40.625rem;
    max-width: 60rem;
    margin: 0 auto;
  }
  &__row {
    display: flex;
    flex-direction: column;
  }
  .gap {
    margin-left: var(--spacer-xs);
    @include for-desktop {
      margin-left: var(--spacer-sm);
    }
  }
  &__col {
    width: 10rem;
    height: 10rem;
    @include for-desktop {
      &.small {
        height: 10rem;
      }
      width: 29.375rem;
      height: 29.375rem;
    }
    & + & {
      margin-top: var(--spacer-xs);
      @include for-desktop {
        margin-top: var(--spacer-sm);
      }
    }
  }
}
.app-banner {
  --banner-container-width: 100%;
  --banner-padding: 0 var(--spacer-2xl);
  --banner-subtitle-font-size: var(--font-size--xl);
  --banner-subtitle-font-weight: var(--font-weight--medium);
  --banner-subtitle-text-transform: capitalize;
  &__title {
    margin: var(--spacer-base) 0 var(--spacer-xl) 0;
    font-size: var(--h1-font-size);
    font-family: var(--font-family--secondary);
    font-weight: var(--font-weight--semibold);
    text-transform: capitalize;
  }
  display: block;
  min-height: 26.25rem;
  max-width: 65rem;
  margin: 0 auto;
  padding: 0 calc(25% + var(--spacer-2xl)) 0 var(--spacer-xl);
  &__call-to-action {
    --button-background: transparent;
    display: flex;
  }
  &__button {
    --image-width: 8.375rem;
    --image-height: 2.75rem;
    --button-padding: 0;
    & + & {
      margin: 0 0 0 calc(var(--spacer-xl) / 2);
    }
  }
}
</style>
