<template>
    <div>
        <h2>Add Product</h2>
    <form @submit.prevent="addProduct">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="newProduct.name" required>
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea id="description" v-model="newProduct.description" required></textarea>
      </div>
      <div>
        <label for="price">Price:</label>
        <input type="number" id="price" v-model.number="newProduct.price" required>
      </div>
      <button type="submit">Add Product</button>
    </form>
    </div>
</template>

<script>
    export default {
        data() {
    return {
      newProduct: {
        name: '',
        description: '',
        price: null
      }
    };
  },
  methods: {
    addProduct() {
      // Validate the form
      if (!this.newProduct.name || !this.newProduct.description || !this.newProduct.price) {
        alert('Please fill in all fields.');
        return;
      }

      // Save the new product
      this.$store.commit('addProduct', this.newProduct);

      // Clear the form fields
      this.newProduct = {
        name: '',
        description: '',
        price: null
      };

      // Apply animation (you can use Vue.js transition here)
      this.$refs.form.classList.add('animate-add-product');
    }
  }        
    };
</script>

<style scoped>

</style>