export default [
  {
    name: 'editproduct',
    path: '/editproduct/:id',
    component: () => import(/* webpackChunkName: "home" */ './editProduct')
  }
]
