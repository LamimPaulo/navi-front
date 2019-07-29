
<template>

<div id="app">
  <div class="container">
    <h2 class="text-center mb-4 mt-2"># Navi CRUD</h2>
    <div class="text">
      <a @click.prevent="signout" class="btn btn-outline-danger ">Sair</a>
      <a href="/addproduct" class="btn btn-outline-success float-sm-right">Adicionar</a>
    </div>
    </div>
    <table class="table mt-2">
      <thead>
        <tr>
          <th>id</th>
          <th>Nome</th>
          <th>preço</th>
          <th>Quantidade</th>
          <th>Editar</th>
          <th>Deletar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products.allProducts" v-bind:key="index">
          <td>{{ product.id }}</td>
          <td class="link"><u><a @click="singleProduct(product.id)"> {{ product.name }}</a></u></td>
          <td>{{ product.price }}</td>
          <td>{{ product.quantity }}</td>
          <td>
            <a href @click.prevent="edit(product.id)" class="btn btn-warning text-danger btn-sm">Editar</a>
          </td>
          <td>
            <button @click.prevent="deleteProduct(product.id, index)" class="btn btn-danger btn-sm">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
name: 'Home',
  data () {
    return {
    }
  },
  mounted () {
    this.ActionFindProducts()
  },
  methods: {
    ...mapActions('products', ['ActionFindProducts']),
    ...mapActions('products', ['ActionSignOut']),
    signout () {
      this.ActionSignOut()
      window._Vue.$router.push({ path: '/login' })
    },
    singleProduct (id) {
      window._Vue.$router.push({ name: 'singleProduct', params: { id: id }})
    },
    deleteProduct (id, index) {
      this.$http.delete('products/' + id)
        .then(this.products.allProducts.splice(index, 1)

        )
    },
    edit(id) {
      window._Vue.$router.push({ name: 'editproduct', params: { id: id }})
    }
  },
  computed: {
    ...mapState([
      'products'
    ])
  }
}
</script>

<style scoped>
.link {
  background: white;
  margin: auto;
  margin-top: 5%;
  max-width: 30%;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.link:hover {
  animation-name: example;
  animation-duration: 0.25s;
  border-left: 8px solid red;
}
.link {
  text-align: justify;
}

@keyframes example {
    0%   {border-left: 2px solid #ffffff;}
    25%  {border-left: 3px solid #ffe6e6;}
    50%  {border-left: 4px solid #ff8080;}
    100% {border-left: 5px solid #ff0000;}
}
a{
  cursor: pointer
}


</style>
