<template>
  <div class="container">
    <h1>New Product</h1>
    <form @submit.prevent="onSubmit">
      <div class="ui labeled input fluid">
        <div class="ui label" >Name</div>
        <input type="text" required v-model="product.name" />
      </div>
      <br />
      <div class="ui labeled input fluid">
        <div class="ui label" >Price</div>
        <input type="text" required v-model="product.price" />
      </div>
      <br />
      <div class="ui labeled input fluid">
        <div class="ui label">Description</div>
        <input type="text" required v-model="product.description" />
      </div>
      <br />
      <div class="ui labeled input fluid">
        <div class="ui label">Category</div>
        <select v-model="product.category" @change="handleCategoryChange" class="input-select" required>
          <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
        </select>
      </div>
      <br />
      <div class="ui labeled input fluid">
        <div class="ui label">Sub Category</div>
        <select v-model="product.subCategory" :disabled="isSubCategoryDisabled" class="input-select" required>
          <option v-if="!isSubCategoryDisabled" v-for="subCat in subCategories" :key="subCat" :value="subCat">{{ subCat }}</option>
        </select>
      </div>
      <br />
      <div class="ui labeled input fluid">
        <div class="ui label" >Stock</div>
        <input type="text" required v-model="product.stock" />
      </div>
      <br />
      <div class="ui labeled input fluid" v-for="(image, index) in images" :key="index">
        <div class="ui label" >Image Source {{ index + 1 }}</div>
        <input type="text" v-model="images[index]" required />
      </div>
      <button class="ui primary button" @click.prevent="addImageField">Add Image Field</button>
      <br />
      <button class="ui primary button" style="margin-top: 10px;">Add</button>
    </form>
  </div>
</template>

<script>
import { AddAProduct } from '../helpers/api';

export default {
  name: "NewProduct",
  data() {
    return {
      product: {},
      images: [''],
      categories: ['Nintendo', 'PlayStation', 'Xbox', 'Others'], 
      subCategories: ['Consoles', 'Games', 'Accessories' ], 
    };
  },
  computed: {
    isSubCategoryDisabled() {
      return this.product.category === 'Others';
    }
  },
  methods: {
    addImageField() {
      this.images.push('');
    },
    async onSubmit() {
      await AddAProduct({ ...this.product, images: this.images });
      this.flash('New product added successfully', 'success');
      this.$router.push({ name: "Products" });
    },
    handleCategoryChange() {
      if (this.product.category === 'Others') {
        this.product.subCategory = 'N/A';
      }
    },
  },
};
</script>


<style scoped>
/* Ensure consistency with Semantic UI styles */
.ui.labeled.input.fluid {
  margin-bottom: 20px; /* Adjust spacing as needed */
}

.image-field {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.ui.input {
  flex: 1;
  margin-right: 10px;
}

.ui.button.red {
  background-color: #db2828;
  color: #fff;
}
</style>
