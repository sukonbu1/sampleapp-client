<template>
    <div class="container mt-4">
      <h2>Other products</h2>
      <div v-if="others && others.length">
        <div class="row">
          <div class="col-lg-3 mb-4" v-for="other in others" :key="other._id">
            <router-link :to="'/product-detail/' + other._id" class="card-link">
                <div class="card">
                    <img :src="other.images[0]" class="card-img-top" alt="Image">
                    <div class="card-body">
                        <h5 class="item-title">{{ other.name }}</h5>
                        <p class="card-text-price">{{ other.price }} USD</p>
                    </div>
                </div>
            </router-link>
          </div>
        </div>
      </div>
      <div v-else>
        <p>No Playstation accessories available at the moment.</p>
      </div>
    </div>
  </template>
  
  <script>
  import { fetchProductsByCategory } from '../../helpers/api'; // Adjust path if needed
  
  export default {
    name: 'OtherProducts',
    data() {
      return {
        others: []
      };
    },
    async mounted() {
      try {
        this.others = await fetchProductsByCategory('Others', ' ');
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any custom styles here if needed */
  </style>
  