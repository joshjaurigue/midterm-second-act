<template>
    <div>
        <!-- form for adding a product-->
        <h2>Add Product</h2>
        <form ref="form" @submit.prevent="addProduct">
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="newProduct.name" placeholder="Enter product name">
        </div>
        <div class="form-group">
            <label for="description">Description:</label>
            <textarea id="description" v-model="newProduct.description" placeholder="Enter product description" ></textarea>
        </div>
        <div class="form-group">
            <label for="price">Price:</label>
            <input type="number" id="price" v-model.number="newProduct.price" placeholder="Enter product price">
        </div>
        <button type="submit">Add Product</button>
        </form>

        <!-- success message after adding -->
        <transition name="success-message" appear>
          <h4 v-if="showSuccess" class="text-success mt-5">The product was added successfully!</h4>
        </transition>
        
        <!-- error message for duplicate product -->
        <transition name="error-message" appear>
          <h4 v-if="errorMessage" class="text-danger mt-5">{{ errorMessage }}</h4>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
    return {
      // array for collecting input from textfields
      newProduct: {
        name: '',
        description: '',
        price: null
      },
      showSuccess: false,
      errorMessage: '', // New data property for error message
      isEmpty: false
    };
  },
  methods: {
    // for adding the product
    addProduct() {
      
      //resetting isEmpty condition
      this.isEmpty = false;
      
      // checks if fields are empty
      if (!this.newProduct.name || !this.newProduct.description || !this.newProduct.price) {
        this.isEmpty = true;
      }

      if(this.isEmpty) {
        // for displaying error message
        this.errorMessage = 'Some/all required fields are empty. Please try again.';
        setTimeout(() => {
          this.errorMessage = '';
        }, 3000);
        return;
      }

      // checks for duplicate product name
      const isDuplicate = this.$store.state.products.some(product => product.name.toLowerCase() === this.newProduct.name.toLowerCase());
      if (isDuplicate) {
        // error message will be shown
        this.errorMessage = 'A product with the same name already exists.';
        setTimeout(() => {
          this.errorMessage = '';
        }, 3000);
        return;
      }
      
      // generates the next id for the next addition of product starting with 101
      const nextId = this.$store.state.products.length > 0 ? this.$store.state.products[this.$store.state.products.length - 1].id + 1 : 101;

      // assigns the product id with the generated id
      this.newProduct.id = nextId;

      // calls the addProduct mutation from tore
      this.$store.commit('addProduct', this.newProduct);

      // shows success message
      this.showSuccess = true;
  
      // hides success message after a delay
      setTimeout(() => {
        this.showSuccess = false;
      }, 3000); 
        
      // clears the form fields
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
.add-product-form {
  max-width: 400px;
  margin: auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"],
textarea,
input[type="number"] {
  width: calc(50% - 20px);
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}

/* Define the transition styles */
.success-message-enter-active, .success-message-leave-active {
  transition: opacity 0.5s;
}
.success-message-enter, .success-message-leave-to {
  opacity: 0;
}

/* Add styles for error message */
.text-danger {
  color: #dc3545; /* Bootstrap's danger color */
}

.error-message-enter-active, .error-message-leave-active {
  transition: opacity 0.5s;
}

.error-message-enter, .error-message-leave-to {
  opacity: 0;
}
</style>