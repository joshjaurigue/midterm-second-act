<template>
  <div>
    <!-- Importing and using AddProduct component correctly -->
    <AddProduct/>
  </div>
</template>

<script>
import AddProduct from '@/components/AddProduct.vue';

export default {
  name: 'AddProductView',
  components: {
   AddProduct
  }
}
</script>
