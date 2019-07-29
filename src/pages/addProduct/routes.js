export default [
  {
    name: 'addProduct',
    path: '/addproduct',
    component: () => import(/* webpackChunkName: "addProduct" */ './addProduct')
  }
]
