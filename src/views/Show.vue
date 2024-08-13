<template>
    <div class="container">
      <h1>Show product</h1>
      <div class="ui labeled input fluid">
        <div class="ui label" >
          Name
        </div>
        <input type="text" disabled :value="product.name"/>
      </div>
      <br />
      <div class="ui labeled input fluid">
        <div class="ui label" >
          Price
        </div>
        <input type="text" disabled :value="product.price"/>
      </div>
      <br />
      <div class="ui labeled input fluid">
        <div class="ui label" >
          Description
        </div>
        <input type="text" disabled :value="product.description"/>
      </div>
      <br />
      <div class="ui labeled input fluid">
        <div class="ui label" >
          Category
        </div>
        <input type="text" disabled :value="product.category"/>
      </div>
      <br />
      <div class="ui labeled input fluid">
        <div class="ui label" >
          Sub Category
        </div>
        <input type="text" disabled :value="product.subCategory"/>
      </div>
      <br />
      <div class="ui labeled input fluid">
        <div class="ui label" >
          Stock
        </div>
        <input type="text" disabled :value="product.stock"/>
      </div>
        <br />
        <div class="ui labeled input fluid" v-for="(image, index) in product.images" :key="index">
          <div class="ui label" >
            Image sources {{ index + 1 }} 
          </div>
          <input type="text" disabled :value="image"/>
      </div>
      <br>
      <div>
        <router-link 
          class="ui button yellow"
          :to="{ name: 'edit-product', params: { id: product._id } }">
              Edit product
        </router-link>
      </div>
    </div>
</template>
<style>
.ui{
    margin-bottom: 10px;
}
</style>
  <script>
  import { ViewProductById } from '../helpers/api';
  export default {
    name: "show-product",
    data() {
      return {
        product: "",
      };
    },
    async mounted() {
      this.product = await ViewProductById(this.$route.params.id);
    },
  };
  </script>