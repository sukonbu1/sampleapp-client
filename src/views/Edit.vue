<template>
  <div class="container">
    <h1>Edit product</h1>
    <form action="" @submit.prevent="onSubmit">
      <div class="ui labeled input fluid">
      <div class="ui label" >
        Name
      </div>
      <input type="text"  required v-model="product.name"/>
    </div>
    <br />
    <div class="ui labeled input fluid">
      <div class="ui label" >
        Price
      </div>
      <input type="text" v-model="product.price"/>
    </div>
    <br />
    <div class="ui labeled input fluid">
      <div class="ui label" >
        Description
      </div>
      <input type="text" v-model="product.description"/>
    </div>
    <br />
    <div class="ui labeled input fluid">
      <div class="ui label" >
        Category
      </div>
      <input type="text" v-model="product.category"/>
    </div>
    <br />
    <div class="ui labeled input fluid">
      <div class="ui label" >
        Sub Category
      </div>
      <input type="text" v-model="product.subCategory"/>
    </div>
    <br />
    <div class="ui labeled input fluid">
      <div class="ui label" >
        Promotion
      </div>
      <input type="text" v-model="product.promotion"/>
    </div>
    <br />
    <div class="ui labeled input fluid">
      <div class="ui label" >
        Stock
      </div>
      <input type="text" v-model="product.stock"/>
    </div>
      <br />
      <div class="ui labeled input fluid" v-for="(image, index) in product.images" :key="index">
          <div class="ui label" >
          Image sources {{ index + 1 }}
          </div>
          <input type="text" v-model="product.images[index]" required>
          <button class="ui primary button" @click.prevent="addImageField(index)">Add Image Field</button>
      </div> 
      <br />
      <button class="ui primary button">Update</button>
      </form>
  </div>
</template>
<script>
import { ViewProductById, UpdateAProduct } from '../helpers/api';
  export default {
      name: "edit-product",
      data() {
          return {
              product: {},
              images: [''],
          };
      },
      async mounted(){
          this.product = await ViewProductById(this.$route.params.id);
      },
      methods: {
          addImageField() {
              this.product.images.push('');
              },
          onSubmit: async function () {
              await UpdateAProduct(this.$route.params.id, this.product);
              
              this.flash('Product updated successfully', 'success');

              this.$router.push( "/products" );
          },
      },
  }
</script>