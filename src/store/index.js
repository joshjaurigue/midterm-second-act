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
    }
  },
  actions: {
  },
  modules: {
  }
})
