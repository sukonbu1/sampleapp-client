<template>
  <div class="container">
    <h1 class="ui header">Welcome to Our Homepage</h1>
    <div class="row">
      <!-- Carousel -->
      <div id="carouselFeaturingProducts" class="carousel slide col-lg-9 col-sm-12 col-md-9" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselFeaturingProducts" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselFeaturingProducts" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselFeaturingProducts" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://bizweb.dktcdn.net/100/088/342/themes/110029/assets/slider-img1.jpg?1722750210340" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://bizweb.dktcdn.net/100/088/342/themes/110029/assets/slider-img3.jpg?1722750210340" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://bizweb.dktcdn.net/100/088/342/themes/110029/assets/slider-img6.jpg?1722750210340" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselFeaturingProducts" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselFeaturingProducts" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      
      <!-- Facebook Widget -->
      <span class="col-xs-12 col-sm-12 col-md-3" style="vertical-align: bottom; width: 320px; height: 331px;">
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSO3HANGMANH%3Fref%3Dembed_page&tabs=timeline&width=320&height=213&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="320" height="213" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>        
        <a href="https://shopee.vn/mc_game" target="_blank" rel="noopener noreferrer">
          <img src="https://i.ytimg.com/vi/uQiPUYOi5Ww/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gKigWMA8=&rs=AOn4CLByjNZKms17l9NFL9lupEDEOLT66Q" style="max-width: 320px ;" alt="Additional Image">
        </a>
      </span>

      <!-- New Arrivals -->
      <div v-if="promotions['New arrival'].length" class="promotion-rail-container">
        <h2 class="featured-title">New Arrivals</h2>
        <div class="ui divider"></div>
        <div class="product-rail">
          <div 
            class="product-item" 
            v-for="product in promotions['New arrival']" 
            :key="product._id"
          >
            <div class="card" style="width: 16rem;">
              <img class="card-img-top" :src="product.images[0]" alt="Product Image">
              <div class="card-body">
                <h3 class="item-title">{{ product.name }}</h3>
                <p class="card-text">{{ product.price }} USD</p>
              </div>
              <div class="card-footer">
                <p class="item-category">{{ product.category }}</p>
                <router-link class="btn btn-dark" :to="`/product-detail/${product._id}`">View Details</router-link> 
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sale -->
      <div v-if="promotions['Sale'].length" class="promotion-rail-container">
        <h2 class="featured-title">On Sale</h2>
        <div class="ui divider"></div>
        <div class="product-rail">
          <div 
            class="product-item" 
            v-for="product in promotions['Sale']" 
            :key="product._id"
          >
            <div class="card" style="width: 16rem;">
              <img class="card-img-top" :src="product.images[0]" alt="Product Image">
              <div class="card-body">
                <h3 class="item-title">{{ product.name }}</h3>
                <p class="card-text">{{ product.price }} USD</p>
              </div>
              <div class="card-footer">
                <p class="item-category">{{ product.category }}</p>
                <router-link class="btn btn-dark" :to="`/product-detail/${product._id}`">View Details</router-link> 
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Best Sellers -->
      <div v-if="promotions['Best seller'].length" class="promotion-rail-container">
        <h2 class="featured-title">Best Sellers</h2>
        <div class="ui divider"></div>
        <div class="product-rail">
          <div 
            class="product-item" 
            v-for="product in promotions['Best seller']" 
            :key="product._id"
          >
            <div class="card" style="width: 16rem;">
              <img class="card-img-top" :src="product.images[0]" alt="Product Image">
              <div class="card-body">
                <h3 class="item-title">{{ product.name }}</h3>
                <p class="card-text">{{ product.price }} USD</p>
              </div>
              <div class="card-footer">
                <p class="item-category">{{ product.category }}</p>
                <router-link class="btn btn-dark" :to="`/product-detail/${product._id}`">View Details</router-link> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
html * {
  font-family: Myriad Pro !important;
}
.featured-title {
  margin-top: 8px;
}
.promotion-rail-container {
  overflow-x: auto; /* Enables horizontal scrolling */
  padding: 20px;
}


.product-image {
  width: 100%;
  height: auto;
}

.product-item h3 {
  font-size: 1.2rem;
  margin: 10px 0;
}

.product-item p {
  color: #555;
}

.card img {
  aspect-ratio: 1/1;
  object-fit: cover;
  width: 100%;
}

.item-title {
  font-size: 1.5rem;
  font-weight: bold;
  height: 50px;
}

.item-category {
  font-size: 1rem;
  font-weight: lighter;
  height: 35px;
  color: #555;
}
</style>

<script>
import { ViewAllProducts } from '../helpers/api'

export default {
  name: 'Homepage',
  data() {
    return {
      products: []
    }
  },
  computed: {
    promotions() {
      const promotions = {
        'New arrival': [],
        'Sale': [],
        'Best seller': []
      };

      this.products.forEach(product => {
        const promotion = product.promotion || 'No Promotion';
        if (promotions[promotion]) {
          promotions[promotion].push(product);
        }
      });
      return promotions;
    }
  },
  async mounted() {
    this.products = await ViewAllProducts();
  }
};
</script>
