<template>
  <div>
    <h2>Edit Product</h2>
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

    <!-- Animated success message -->
    <transition name="success-message" appear>
      <h3 v-if="showSuccess">The product was edited successfully!</h3>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        id: null,
        name: '',
        description: '',
        price: null
      },
      showSuccess: false
    };
  },
  mounted() {
    const productIndex = parseInt(this.$route.params.index);
    if (productIndex >= 0 && productIndex < this.$store.state.products.length) {
      this.product = this.$store.state.products[productIndex];
    }
  },
  methods: {
    submitForm() {
      this.$store.commit('editProduct', this.product);
      this.showSuccess = true;

      setTimeout(() => {
        this.showSuccess = false;
      }, 3000);

      setTimeout(() => {
        this.$router.push('/');
      }, 6000);
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
.success-message-leave-active {
  transition: opacity 0.5s;
}

.success-message-enter,
.success-message-leave-to {
  opacity: 0;
}
</style>