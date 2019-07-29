import services from '@/http'
import * as types from './mutation-types'

export const ActionFindProducts = ({ commit }) => (
  services.home.findProducts().then(res => {
    commit(types.GET_PRODUCTS, res.data)
  })
)

export const ActionSignOut = ({ dispatch }) => {
  services.home.SignOut(localStorage.getItem('token')).then(res => {
    if (res.status === 200) {
      window._Vue.$router.go({ path: '/login' })
    } else {
      console.log(res.message)
    }
  })
}
