<template>
  <div class="container mt-5">
    <div class="row">
      <!-- Product Details Section -->
      <div class="col-md-6">
        <img v-if="product.images" :src="product.images[currentImageIndex]" class="img-fluid" alt="Product Image">
        <div class="d-flex justify-content-center mt-3">
          <img v-for="(img, index) in product.images" 
               :key="index"
               :src="img"
               alt="Product thumbnail"
               class="img-thumbnail"
               :class="{ 'border-primary': index === currentImageIndex }"
               @click="currentImageIndex = index"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="product-info-container">
          <h1 class="item-title">{{ product.name }}</h1>
          <h4 class="item-desc">{{ product.description }}</h4>
          <h4>Price: ${{ product.price }}</h4>
        </div>
        <!-- Cart -->
        <div class="d-flex align-self-end mt-3">
          <div class="quantity-container d-flex align-items-center">
            <button class="btn btn-outline-secondary btn-lg" @click="decreaseQuantity" :disabled="quantity <= 0">-</button>
            <input type="number" v-model.number="quantity" min="0" class="form-control mx-3 text-center quantity-input" readonly>
            <button class="btn btn-outline-secondary btn-lg" @click="increaseQuantity">+</button>
          </div>
          <button class="btn btn-secondary btn-lg ml-3" style="margin-left: 4px;" @click="addToCart(product)">Add to Cart</button>
        </div>
      </div>
    </div>
    
    <!-- Related Products Rail -->
    <div v-if="relatedProducts.length" class="promotion-rail-container mt-5">
      <h2 class="featured-title">Related Products</h2>
      <div class="ui divider"></div>
      <div class="product-rail">
        <div 
          class="product-item" 
          v-for="relatedproduct in relatedProducts" 
          :key="relatedproduct._id"
        >
          <div class="card" style="width: 16rem;">
            <img class="card-img-top" :src="relatedproduct.images[0]" alt="Product Image">
            <div class="card-body">
              <h3 class="item-title">{{ relatedproduct.name }}</h3>
              <p class="card-text">{{ relatedproduct.price }} USD</p>
            </div>
            <div class="card-footer">
              <p class="item-category">{{ relatedproduct.category }}</p>
              <a class="btn btn-dark" :href="`/product-detail/${relatedproduct._id}`" target="_blank">View Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ViewProductById, fetchProductsByCategory } from '../helpers/api';
import { EventBus } from '@/eventBus';

export default {
  name: "ProductDetail",
  data() {
    return {
      product: {},
      relatedProducts: [],
      currentImageIndex: 0,
      quantity: 1 // Initialize quantity to 1
    };
  },
  
  methods: {
    increaseQuantity() {
      this.quantity += 1;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity -= 1;
      }
    },
    addToCart(product) {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      let existingItem = cart.find(item => item._id === product._id);

      if (existingItem) {
        existingItem.quantity += this.quantity;
      } else {
        cart.push({ 
          _id: product._id, 
          name: product.name, 
          price: product.price, 
          images: product.images,
          category: product.category,
          quantity: this.quantity 
        });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      EventBus.$emit('cart-updated'); // Emit event to update cart in other components
      this.flash('Item added to cart', 'success');
    }
  },
  async mounted() {
    try {
      this.product = await ViewProductById(this.$route.params.id);
      this.relatedProducts = await fetchProductsByCategory(this.product.category, '');
    } catch (error) {
      console.error('Failed to load product:', error);
    }
  }
};
</script>

<style scoped>
.product-info-container {
  position: relative;
  padding-bottom: 30px; 
  min-height: 40vh; 
}
.product-item img {
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
.img-thumbnail {
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.img-thumbnail:hover {
  transform: scale(1.1);
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
