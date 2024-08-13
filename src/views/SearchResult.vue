<template>
    <div class="container mt-4">
      <h2>Search Results for "{{ searchQuery }}"</h2>
      <div v-if="products.length">
        <div class="row">
          <div class="col-lg-3 mb-4" v-for="product in products" :key="product.id">
            <div class="card">
              <img :src="product.images[0]" class="card-img-top" alt="Product Image">
              <div class="card-body">
                <h5 class="item-title">{{ product.name }}</h5>
                <p class="item.category">{{ product.category }}</p>
                <p class="card-text-price">{{ product.price }} USD</p>
                <router-link :to="'/product/' + product.id" class="btn btn-primary">View Details</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>No products found.</p>
      </div>
    </div>
  </template>
<style>
.card img {
    aspect-ratio: 1/1;
    object-fit: cover;
    width: 100%;
}.item-title{
    font-size: 1.5rem;
    font-weight: bold;
    height: 50px;
}.item-category{
    font-size: 1rem;
    font-weight: lighter;
    height: 35px;
    color: #555;
}
</style>
  <script>  
  import { fetchProductsByName } from '../helpers/api'; 

  export default {
    data() {
      return {
        products: [], // Ensure products are initialized as an empty array
        searchQuery: '' // Initialize searchQuery

      };
    },
    methods: {
      async fetchProducts() {
        try {
          const products = await fetchProductsByName(this.$route.query.name);
          this.products = products;
          this.searchQuery = this.$route.query.name || '';
          console.log('Products:', this.products);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      }
    },
    watch: {
    '$route.query.name': 'fetchProducts' 
  },
  created() {
    this.fetchProducts(); 
  }
  }
  </script>
  