<template>
    <div>
        <h2>Add Product</h2>
        <form ref="form" @submit.prevent="addProduct">
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="newProduct.name" placeholder="Enter product name" required>
        </div>
        <div>
            <label for="description">Description:</label>
            <textarea id="description" v-model="newProduct.description" placeholder="Enter product description" required></textarea>
        </div>
        <div>
            <label for="price">Price:</label>
            <input type="number" id="price" v-model.number="newProduct.price" placeholder="Enter product price" required>
        </div>
        <button type="submit">Add Product</button>
        </form>

         <!-- Animated success message -->
        <transition name="success-message" appear>
        <h3 v-if="showSuccess">The product was added successfully!</h3>
        </transition>
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
      },
      showSuccess: false
    };
  },
  methods: {
    addProduct() {
      // Validate the form
      if (!this.newProduct.name || !this.newProduct.description || !this.newProduct.price) {
        alert('Please fill in all fields.');
        return;
      }

      // Generate the next ID
      const nextId = this.$store.state.products.length > 0 ? this.$store.state.products[this.$store.state.products.length - 1].id + 1 : 101;

        // Save the new product with the generated ID
        this.newProduct.id = nextId;
      // Save the new product
      this.$store.commit('addProduct', this.newProduct);

       // Show success message
       this.showSuccess = true;

    
        // Hide success message after a delay
        setTimeout(() => {
        this.showSuccess = false;
        }, 3000); // Adjust the delay as needed
        
        
      // Clear the form fields
      this.newProduct = {
        name: '',
        description: '',
        price: null
      };
    }
  },
     
    };
</script>

<style scoped>
/* Define the transition styles */
.success-message-enter-active, .success-message-leave-active {
  transition: opacity 0.5s;
}
.success-message-enter, .success-message-leave-to {
  opacity: 0;
}
</style>