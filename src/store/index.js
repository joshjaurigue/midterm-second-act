import { createStore } from 'vuex'

export default createStore({
  state: {
    products: []
  },
  getters: {
  },
  mutations: {
    addProduct(state, newProduct) {
      state.products.push(newProduct);
      console.log(state.products);
    },
    deleteProduct(state, index) {
      state.products.splice(index, 1);
    },
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
