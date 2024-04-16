import { createStore } from 'vuex'

export default createStore({
  state: {
    // empty array to store products
    products: []
  },
  getters: {
  },
  mutations: {
    // for pushing products to the array
    addProduct(state, newProduct) {
      state.products.push(newProduct);
      console.log(state.products);
    },
    // for removing products in the array
    deleteProduct(state, index) {
      state.products.splice(index, 1);
    },
    // for editing products to the array
    editProduct(state, newDetails) {
      const index = state.products.findIndex(product => product.id === newDetails.id);

      if (index !== -1) {
        state.products[index] = { ...state.products[index], ...newDetails };
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
