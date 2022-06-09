<template>
  <SfBottomNavigation>
    <SfBottomNavigationItem
      @click="$router.push({ name: 'home' })"
      icon="home"
      :isActive="$route.name === 'home'"
      iconActive="home"
      label="Home"
    />
    <SfBottomNavigationItem
      @click="$router.push({ name: 'products' })"
      icon="menu"
      :isActive="$route.path.includes('product')"
      iconActive="menu"
      label="Products"
      iconSize="20px"
    />
    <SfBottomNavigationItem
      @click="$router.push({ name: 'favorite' })"
      icon="heart"
      :isActive="$route.path.includes('favorite')"
      iconActive="heart"
      label="Favorites"
      iconSize="20px"
    />
    <SfBottomNavigationItem
      @click="$router.push({ name: 'profile' })"
      icon="account"
      :isActive="$route.path.includes('profile')"
      iconActive="account"
      label="Profile"
      iconSize="20px"
    />
    <SfBottomNavigationItem @click="$router.push({ name: 'cart' })" icon="add_to_cart"
                            :isActive="$route.path.includes('cart')" label="Basket" isFloating/>
  </SfBottomNavigation>
</template>

<script>
import { SfBottomNavigation } from '@storefront-ui/vue'

export default {
  name: 'BottomNavigation',
  components: { SfBottomNavigation }
}
</script>

<style scoped>

</style>
