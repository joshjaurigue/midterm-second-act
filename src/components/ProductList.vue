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
          <!-- Confirmation for delete -->
          <div v-if="showConfirmation" class="modal">
      <div class="modal-content">
        <p>Are you sure you want to delete this product?</p>
        <button @click="cancelDelete">Cancel</button>
        <button @click="deleteConfirmed">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Initialize products data
      products: [],
      productToDeleteIndex: null,
      showConfirmation: false
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
      this.productToDeleteIndex = index;
      this.showConfirmation = true;
    },
    cancelDelete() {
      this.showConfirmation = false;
    },
    deleteConfirmed() {
      this.$store.commit('deleteProduct', this.productToDeleteIndex);
      this.showConfirmation = false;
    }
  }
};
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}

.modal button {
  margin: 5px;
}
</style>

