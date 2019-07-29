import { routes as home } from '../pages/home'
import { routes as auth } from '../modules/auth'
import { routes as single } from '../pages/singleProduct'
import { routes as add } from '../pages/addProduct'
import { routes as edit } from '../pages/editProduct'

export default [
  ...auth,
  ...home,
  ...single,
  ...add,
  ...edit
]
