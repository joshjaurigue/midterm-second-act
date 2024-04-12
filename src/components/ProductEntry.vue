<template>
    <div class="product">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <p>Price: {{ product.price }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: {
        type: Object,
        required: true
      }
    }
  }
  </script>