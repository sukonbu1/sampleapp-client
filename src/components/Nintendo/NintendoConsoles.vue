<template>
  <div class="container mt-4">
    <h2>Nintendo Consoles</h2>
    <div v-if="consoles && consoles.length">
      <div class="row">
        <div class="col-lg-3 mb-4" v-for="console in consoles" :key="console._id">
          <router-link :to="'/product-detail/' + console._id" class="card-link">
            <div class="card">
              <img :src="console.images[0]" class="card-img-top" alt="Console Image">
              <div class="card-body">
                <h5 class="item-title">{{ console.name }}</h5>
                <p class="item-category">{{ console.category }}</p>
                <p class="card-text-price">{{ console.price }} USD</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div v-else>
      <p>No Nintendo consoles available at the moment.</p>
    </div>
  </div>
</template>


<script>
import { fetchProductsByCategory } from '../../helpers/api'; // Adjust path if needed

export default {
  name: 'NintendoConsoles',
  data() {
    return {
      consoles: []
    };
  },
  async mounted() {
    try {
      this.consoles = await fetchProductsByCategory('Nintendo', 'Consoles');
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
};
</script>

<style scoped>

</style>
