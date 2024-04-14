<template>
  <div>
    <!-- Importing and using AddProduct component correctly -->
    <ProductList/>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'ProductListView',
  components: {
   ProductList
  }
}
</script>
