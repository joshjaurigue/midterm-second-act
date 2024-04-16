<template>
  <div>
    <h2>Edit Product</h2>
    <form ref="form" @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="product.name" placeholder="Enter product name" required>
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea id="description" v-model="product.description" placeholder="Enter product description"
          required></textarea>
      </div>
      <div>
        <label for="price">Price:</label>
        <input type="number" id="price" v-model.number="product.price" placeholder="Enter product price" required>
      </div>
      <button type="submit">Edit Product</button>
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
        this.$router.push('/');
      }, 3000);
    }
  },
};
</script>

<style scoped>
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