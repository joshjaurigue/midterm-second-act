<template>
  <div>
    <!-- Heading for the Product List -->
    <h1>Product List</h1>
    
    <!-- Link to navigate to Add Product page -->
    <router-link to="/add">Add Product</router-link>
    
    <!-- Display message when no products are listed -->
    <div v-if="products.length === 0">
      No Product is Listed
    </div>
    
    <!-- Table to display the list of products -->
    <table v-else>
      <thead>
        <tr>
          <!-- Table headers -->
          <th>Product Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <!-- Loop through products and display each product -->
        <tr v-for="(product, index) in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
          <td>
            <!-- Edit and Delete buttons for each product -->
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
      // Initialize products data
      products: []
    };
  },
  created() {
    // Fetch products from Vuex store when the component is created
    this.products = this.$store.state.products;
  },
  methods: {
    // Navigate to Edit Product page
    editProduct(index) {
      this.$router.push(`/edit/${index}`);
    },
    // Delete product from the store
    deleteProduct(index) {
      this.$store.dispatch('deleteProduct', index);
    }
  }
};
</script>
