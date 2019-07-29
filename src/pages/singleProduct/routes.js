export default [
  {
    name: 'singleProduct',
    path: '/singleproduct/:id',
    component: () => import(/* webpackChunkName: "addProduct" */ './singleProduct')
  }
]
