import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Checkout from '@/views/Checkout'
import ThankYou from '@/views/ThankYou'
import Profile from '@/views/Profile'
import Cart from '@/views/Cart'
import Products from '@/views/Products'
import Product from '@/views/Product'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/products/:id',
    name: 'product',
    component: Product
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/thanks',
    name: 'thanks',
    component: ThankYou
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
