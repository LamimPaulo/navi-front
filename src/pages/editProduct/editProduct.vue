<template>
  <div class="add-product">
  	<div>
	   	<h3># Navi CRUD </h3>
	   	<div class="card">
	      <div class="card-header">
          # Edite o Produto
	      </div>
	      <div class="card-body">

	      	<form v-on:submit.prevent="updateProduct">
      <div class="form-body">
          <div class="form-group row">
            <label class="col-form-label col-3">Nome do Produto</label>
            <div class="col-5">
              <input class="form-control" v-model="product.name" required>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-form-label col-3">Preço</label>
            <div class="col-5">
              <input type="number" class="form-control" v-model="product.price" required>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-form-label col-3">Quantidade</label>
            <div class="col-5">
              <input type="number" class="form-control" v-model="product.quantity" required>
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
    name: 'editProduct',
    data () {
        return {
        product: {},
        }
    },
    methods: {
        fetchProduct(id){
            this.$http.get('products/'+id)
            .then(function(response){
                this.product = response.body;
            });
        },
        updateProduct(){
            if(!this.product.name || !this.product.price || !this.product.quantity){
                console.log('Please fill in all required fields')
            } else {
                let updProduct = {
                    name: this.product.name,
                    price: this.product.price,
                    quantity: this.product.quantity,
                }
                this.$http.put('products/'+this.$route.params.id, updProduct)
                    .then(function(response){
                        window._Vue.$router.push({path: '/' });
                    });
            }
        }
    },
    created: function(){
        this.fetchProduct(this.$route.params.id);
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
