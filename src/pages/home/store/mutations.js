import * as types from './mutation-types'

export default {
  [types.GET_PRODUCTS] (state, payload) {
    state.allProducts = payload
  },

  [types.EDIT_PRODUCT] (state, newProduct) {
    var item = state.newProduct
    item.splice(item.indexOf(newProduct), 1)
    state.item = item
    state.newProduct = newProduct.body
  }
}
