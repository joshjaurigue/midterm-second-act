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
    }

  },
  actions: {
  },
  modules: {
  }
})
