<template>
  <div>
    <!-- Heading for the Product List -->
    <h1>Product List</h1>
   
    <!-- Display message when no products are listed -->
    <div v-if="products.length === 0">
      No Product is Listed
    </div>
    
    <!-- Centered container for the table -->
    <div v-else class="table-container">
      <!-- Table to display the list of products -->
      <table class="product-table">
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
              <button @click="editProduct(index)" class="btn-edit">Edit</button>
              <button @click="deleteProduct(index)" class="btn-delete">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <!-- Confirmation for delete -->
    <div v-if="showConfirmation" class="modal">
      <div class="modal-content">
        <p>Are you sure you want to delete this product?</p>
        <button @click="cancelDelete" class="btn-cancel">Cancel</button>
        <button @click="deleteConfirmed" class="btn-confirm">Delete</button>
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
/* Center the table */
.table-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh; /* Adjust the height as needed */
}

/* Table styles */
.product-table {
  width: 100%;
  border-collapse: collapse;
}

.product-table th, .product-table td {
  padding: 12px 15px;
  text-align: center;
}

.product-table th {
  background-color: #ebd8d8;
}

/* Button styles */
.btn-edit, .btn-delete, .btn-cancel, .btn-confirm {
  padding: 10px 15px;
  margin: 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-edit {
  background-color: #007bff;
  color: #ffffff;
}

.btn-delete {
  background-color: #dc3545;
  color: #ffffff;
}

.btn-cancel {
  background-color: #6c757d;
  color: #ffffff;
}

.btn-confirm {
  background-color: #28a745;
  color: #ffffff;
}

/* Modal styles */
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
</style>
