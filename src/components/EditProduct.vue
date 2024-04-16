<template>
  <div>
    <h2>Edit Product</h2>

    <!--form for editing product details-->
    <form ref="form" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="product.name" placeholder="Enter product name" required>
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea id="description" v-model="product.description" placeholder="Enter product description"
          required></textarea>
      </div>
      <div class="form-group">
        <label for="price">Price:</label>
        <input type="number" id="price" v-model.number="product.price" placeholder="Enter product price" required>
      </div>
      <button type="submit">Edit Product</button>
    </form>

    <!-- shows success message -->
    <transition name="success-message" appear>
      <h3 v-if="showSuccess" class="text-success mt-5">The product was edited successfully!</h3>
    </transition>

    <transition name="error-message" appear>
      <h3 v-if="showError" class="text-danger mt-5">Product name already exists. Cannot edit!</h3>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // array for getting the details of selected product
      product: {
        id: null,
        name: '',
        description: '',
        price: null
      },
      // determines the displaying ofsuccess message
      showSuccess: false,
      showError: false
    };
  },
  mounted() {
    // gets the index of the selected product for routing
    const productIndex = parseInt(this.$route.params.index);

    // checks if index exists
    if (productIndex >= 0 && productIndex < this.$store.state.products.length) {
      // assigns the product details temporarily
      this.originalProduct = Object.assign({}, this.$store.state.products[productIndex]);
      this.product = Object.assign({}, this.$store.state.products[productIndex])
    }
  },
  methods: {
    // submits the edited details
    submitForm() {
      const isDuplicateName = this.$store.state.products.some((product, i) => i !== this.$route.params.index && product.name === this.product.name);

      this.showError = isDuplicateName;

      setTimeout(() => {
        this.showError = false;
      }, 3000);

      if (isDuplicateName) return;

      // editProduct mutation is called
      this.$store.commit('editProduct', this.product);

      this.product = {
        id: null,
        name: '',
        description: '',
        price: null
      };

      this.showSuccess = true;

      // transition for the success message
      setTimeout(() => {
        this.showSuccess = false;
      }, 3000);

      // redirection to product list 
      setTimeout(() => {
        this.$router.push('/');
      }, 4000);
    }
  },
};
</script>

<style scoped>
/* Define the transition styles */
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
.success-message-enter-active,
.success-message-leave-active,
.error-message-enter-active,
.error-message-leave-active {
  transition: opacity 0.5s;
}

.success-message-enter,
.success-message-leave-to,
.error-message-enter,
.error-message-leave-to {
  opacity: 0;
}
</style>