import { createRouter, createWebHashHistory } from 'vue-router'
import ProductList from '../views/ProductView.vue'

// for specific routes
const routes = [
  {
    path: '/',
    name: 'product-list',
    component: ProductList
  },
  {
    path: '/add-products',
    name: 'add-products',
    component: () => import('../views/AddProductView.vue')
  },
  {
    path: '/edit-product/:index',
    name: 'edit-product',
    component: () => import('../components/EditProduct.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
