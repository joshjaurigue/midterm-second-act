<template>
  <div class="product-list-container">
    <h1 class="product-heading">Product List</h1>
   
    <div class="table-container">
      <table class="product-table">
        <thead>
          <tr>
            <th class="table-header">Product Name</th>
            <th class="table-header">Description</th>
            <th class="table-header">Price</th>
            <th class="table-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          <transition-group name="fade">
            <tr v-for="(product, index) in products" :key="product.id">
              <td>{{ product.name }}</td>
              <td>{{ product.description }}</td>
              <td>Php {{ product.price.toFixed(2) }}</td>
              <td>
                <button @click="editProduct(index)" class="btn btn-edit">Edit</button>
                <button @click="deleteProduct(index)" class="btn btn-delete">Delete</button>
              </td>
            </tr>
          </transition-group>
        </tbody>
      </table>
    </div>

    <transition name="fade" appear>
      <div v-if="products.length === 0" class="no-products">
        No products existing yet!
      </div>
    </transition>

    <div v-if="showConfirmation" class="modal">
      <div class="modal-content">
        <p>Are you sure you want to delete this product?</p>
        <button @click="cancelDelete" class="btn btn-cancel">Cancel</button>
        <button @click="deleteConfirmed" class="btn btn-confirm">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      productToDeleteIndex: null,
      showConfirmation: false
    };
  },
  created() {
    this.products = this.$store.state.products;
  },
  methods: {
    editProduct(index) {
      this.$router.push(`/edit-product/${index}`);
    },
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
.product-list-container {
  padding: 20px;
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
}

.product-heading {
  margin-bottom: 30px;
  font-size: 50px;
  color: #333;
  font-weight: 700;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 1px;
  font-family: 'Poppins', sans-serif;
}

.table-container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
}

.product-table {
  width: 100%;
  border-collapse: collapse;
}

.table-header {
  padding: 18px 20px;
  background-color: #048791;
  color: #fff;
  font-weight: 700;
  text-align: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: 0 4px 6px rgba(226, 7, 7, 0.1);
  font-family: 'Poppins', sans-serif;
}

.product-table td {
  padding: 16px 20px;
  text-align: center;
  background-color: #d1cccc;
  color: #333;
  border-bottom: 1px solid #e0e0e0;
  font-family: 'Roboto', sans-serif;
}

.btn {
  padding: 10px 22px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Roboto', sans-serif;
  letter-spacing: 1px;
}

.btn-edit {
  background-color: #007bff;
  color: #fff;
}

.btn-delete {
  background-color: #dc3545;
  color: #fff;
}

.btn-cancel {
  background-color: #6c757d;
  color: #fff;
}

.btn-confirm {
  background-color: #28a745;
  color: #fff;
}

.no-products {
  margin-top: 50px;
  text-align: center;
  font-style: italic;
  color: #888;
  font-size: 18px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  font-family: 'Roboto', sans-serif;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  max-width: 420px;
  font-family: 'Roboto', sans-serif;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
