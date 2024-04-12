<template>
    <div class="product-list">
      <Product v-for="product in products" :key="product.id" :product="product" />
    </div>
  </template>
  
  <script>
  import Product from './ProductEntry.vue';
  
  export default {
    components: {
      Product
    },
    data() {
      return {
        products: [
          { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 10 },
          { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 20 },
          { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 10 },
          { id: 4, name: 'Product 4', description: 'Description of Product 4', price: 20 },
          { id: 5, name: 'Product 5', description: 'Description of Product 5', price: 10 },
        ]
      }
    }
  }
  </script>