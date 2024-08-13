<template>
  <div class="container mt-5">
    <h1>Checkout</h1>
    <div class="checkout-summary">
      <h3>Your Cart</h3>
      <div v-for="item in cartItems" :key="item.id" class="checkout-item">
        <h4>{{ item.name }} (x{{ item.quantity }})</h4>
        <p>{{ formatPrice(item.price * item.quantity) }} USD</p>
      </div>
      <hr>
      <h3>Total: {{ formatPrice(totalPrice) }} USD</h3>
      <button @click="checkoutcart" class="btn btn-primary">Confirm Purchase</button>
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/eventBus';
import { updateProductQuantities } from '../helpers/api';

export default {
  name: 'Checkout',
  data() {
    return {
      cartItems: JSON.parse(localStorage.getItem('cart')) || []
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
  },
  methods: {
    formatPrice(value) {
      return value.toFixed(2);
    },
    async checkoutcart() {
      const cartItems = this.cartItems.map(item => ({
        id: item.id,
        quantity: item.quantity

      }));
      try {
        const response = await updateProductQuantities(cartItems);
        
        // Clear the cart from localStorage
        localStorage.removeItem('cart');
        
        // Provide feedback to the user
        this.flash('Purchase successful!', 'success');
        EventBus.$emit('cart-updated', []);
                
        this.$router.push('/');

      } catch (error) {
        this.flash('Purchase failed. Please try again later.', 'error');
        console.error('Checkout failed:', error);
      }
    }
  }
};
</script>

<style scoped>
.checkout-summary {
  max-width: 600px;
  margin: 0 auto;
}
.checkout-item {
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}
</style>
