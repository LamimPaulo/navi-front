<template>
  <div class="single-product">
  	<div>
	   	<h3> # Navi CRUD</h3>
	   	<div class="card">
	      <div class="card-header">
          Informações do produto
	      </div>
	      <div class="card-body">
	      	<p><b>Id</b>: <i>{{ product.id }}</i> </p>
	      	<p><b>Nome</b>: <i>{{ product.name }}</i> </p>
	        <p><b>Preço</b>: <i>{{ product.price }}</i></p>
	        <p><b>Quantidade</b>: <i>{{ product.quantity }}</i></p>
	        <router-link :to="'/'" class="btn btn-primary"> Back </router-link>
	      </div>
		</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'singleProduct',
  data() {
    return {
      product: ''
    }
  },
  methods: {
    fetchSingleProduct(id) {
      this.$http.get('products/' + id)
        .then(function(response){
          this.product = response.body
          console.log(response)
        })
    },
  },
  created: function() {
    this.fetchSingleProduct(this.$route.params.id)
  }

}
</script>

<style scoped>
h3{
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
}
</style>
