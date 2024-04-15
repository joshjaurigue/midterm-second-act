<template>
  <div>
    <h1>Product List</h1>
    <router-link to="/add">Add Product</router-link>
    
    <div v-if="products.length === 0">
      No Product is Listed
    </div>
    
    <table v-else>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
          <td>
            <button @click="editProduct(index)">Edit</button>
            <button @click="deleteProduct(index)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: []
    };
  },
  created() {
    this.products = this.$store.state.products;
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
