
<template>
  <div>
    
    <h1>Product List</h1>

    <ul>
      <li v-for="(product, index) in products" :key="product.id">
        <div>
          <h3>Product Name: {{ product.name }}</h3>
          <p>Product Description: {{ product.description }}</p>
          <p>Product Price: {{ product.price }}</p>
          <button @click="editProduct(index)">Edit</button>
          <button @click="deleteProduct(index)">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
      editProduct(index) {
          this.$router.push(`/edit/${index}`);
      },
      deleteProduct(index) {
      this.$store.dispatch('deleteProduct', index);
    }
  }
};
</script>

