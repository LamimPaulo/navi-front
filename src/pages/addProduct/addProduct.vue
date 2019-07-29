<template>
  <div class="add-product">
  	<div>
	   	<h3># Navi CRUD </h3>
	   	<div class="card">
	      <div class="card-header">
          # Adicione o Produto
	      </div>
	      <div class="card-body">

	      	<form v-on:submit.prevent="addProduct">
      <div class="form-body">
          <div class="form-group row">
            <label class="col-form-label col-3">Nome do Produto</label>
            <div class="col-5">
              <input class="form-control" v-model="newProduct.name" required>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-form-label col-3">Preço</label>
            <div class="col-5">
              <input type="number" class="form-control" v-model="newProduct.price" required>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-form-label col-3">Quantidade</label>
            <div class="col-5">
              <input type="number" class="form-control" v-model="newProduct.quantity" required>
            </div>
          </div>
      </div>
      <router-link to="/">
        <button type="button" class="btn btn-secondary" >Voltar</button>
      </router-link>
        <button type="submit" class="btn btn-primary ">Salvar</button>
    </form>


      </div>
		</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'addProduct',
  data () {
    return {
      newProduct: {}
    }
  },
  methods: {
    addProduct () {
      if(!this.newProduct.name || !this.newProduct.price || !this.newProduct.quantity) {
        console.log('Preencha todos os campos!')
      } else {
        let newProductData = {
          name: this.newProduct.name,
          price: this.newProduct.price,
          quantity: this.newProduct.quantity
        }
          this.$http.post('products', newProductData)
          .then(function(response){
            window._Vue.$router.push({ path: '/login' })
          })

      }
    }
  }
}
</script>

-+
<style scoped>
h3{
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
}
</style>
