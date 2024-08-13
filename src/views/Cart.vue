<template>
    <div class="container mt-5">
      <h1 class="my-cart-title">My Cart</h1>
      <div v-if="cart.length" class="cart-items">
        <div v-for="(item, index) in cart" :key="item._id" class="cart-item">
          <div class="d-flex align-items-center">
            <img :src="item.images[0]" class="cart-item-img" alt="Product Image">
            <div class="cart-item-details ml-3">
              <h4 class="cart-item-name">{{ item.name }}</h4>
              <p class="cart-item-quantity">Quantity: {{ item.quantity }}</p>
              <p class="cart-item-price">{{ item.price * item.quantity }} USD</p>
            </div>
          </div>
          <button class="btn btn-danger btn-sm mt-2" @click="removeItem(index)" style="">Remove</button>
        </div>
      </div>
      <div v-else>
        <p>Your cart is empty.</p>
      </div>
      <h3 class="total-price">Total: {{ totalPrice }} USD</h3>
      <div class="cart-actions mt-3">
        <div v-if="cart.length" class="cart-items">
            <router-link to="/checkout" class="btn btn-secondary btn-lg">Checkout</router-link>
        </div>
        <div v-else>
            <router-link to="/homepage" class="btn btn-secondary btn-lg">Continue Shopping</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    import { EventBus } from '@/eventBus';
  export default {
    data() {
      return {
        cart: JSON.parse(localStorage.getItem('cart')) || []
      };
    },
    computed: {
      totalPrice() {
        const total = this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        return total.toFixed(2);
    }
    },
    methods: {
      removeItem(index) {
        this.cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(this.cart));
        EventBus.$emit('cart-updated', this.cart);
    }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: auto;
  }
  
  .my-cart-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .cart-items {
    border-top: 1px solid #ccc;
    padding-top: 20px;
  }
  
  .cart-item {
    border-bottom: 1px solid #eee;
    padding: 15px 0;
  }
  
  .cart-item-img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
  .cart-item-details {
  margin-left: 15px; /* Adjust as needed */
  text-align: right; /* Align text to the right */
  flex: 1; /* Allow this element to take up remaining space */
}
  .cart-item-name {
    font-size: 1.25rem;
    margin: 0;
  }
  
  .cart-item-quantity, .cart-item-price {
    margin: 5px 0;
  }
  
  .total-price {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 20px;
  }
  
  .cart-actions {
    text-align: right;
  }
  
  .btn-danger {
    background-color: #dc3545;
    border: none;
  }
  
  .btn-secondary {
    background-color: #6c757d;
    border: none;
  }
  </style>
  