<template>
  <div class="ui inverted segment header" style="padding-top: 15px; padding-bottom: 15px; margin-bottom: 0px; border-radius: 0px;">
    <div class="ui center aligned container">
      <div class="ui large secondary inverted pointing menu compact">
        <div class="item" style="padding-top: 0px; padding-bottom: 0px;">
          <router-link :to="{ name: 'Homepage' }" class="item" style="padding: 0;">
            <div class="logo-container">
              <img :src="require('@/assets/logo1.png')" alt="Logo" class="logo" style="width: 160px; height: max-content;">
            </div>
          </router-link>
        </div>
        <div class="item" style="padding-bottom: 0%;">
          <div class="ui icon input">
            <input 
              class="form-control" 
              type="text" 
              name="search-box" 
              placeholder="Search..." 
              v-model="searchQuery"
              @keyup.enter="performSearch"
            >
            <i class="bi bi-search" style="color: black"></i>
          </div>

          <button 
            class="btn btn-outline-secondary" 
            style="margin-left: 5px; padding-top: 7px; padding-bottom: 7px;" 
            type="button" 
            @click="performSearch"
          >
            Search
          </button>
        </div>
        <router-link to="/products" exact class="item" v-if="role === 'admin'">
          <i class="bi bi-gear"></i> Manage Products
        </router-link>
        <router-link to="/products/new" class="item" v-if="role === 'admin'">
          <i class="bi bi-plus-circle"></i> New Product
        </router-link>
        <div class="item" style="padding-bottom: 5px;">
            <router-link to="/cart" class="btn btn-secondary">
              <i class="bi bi-cart"></i>
              Cart
              <span class="cart-count">{{ cartItems.length }}</span>
            </router-link>
          </div>
        <div class="right menu">
          <router-link to="/users/login" class="item" v-if="!username">
            Login
          </router-link>
          <router-link to="/users/register" class="item" v-if="!username">
            Register
          </router-link>
          <button @click="logout" class="item" v-if="username">
            Logout
          </button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/eventBus';

export default {
  name: 'Header',
  data() {
    return {
      searchQuery: '',
      cartItems: [],
      username: sessionStorage.getItem('username'),
      role: sessionStorage.getItem('role')
    };
  },
  computed: {
    cartQuantity() {
      return this.cartItems.reduce((total, item) => total + item.quantity, 0);
      this.updateCart();
    },
  },
  created() {
    EventBus.$on('cart-updated', this.updateCart);
    this.updateCart();
  },
  methods: {
    performSearch() {
      if (this.searchQuery === this.previousSearchQuery) {
        console.log('This search is identical to the previous one.');
        return;
      }
      this.previousSearchQuery = this.searchQuery;
      if (this.searchQuery) {
        this.$router.push({ path: '/search-result', query: { name: this.searchQuery } });
      }
    },
    logout() {
      sessionStorage.clear();
      localStorage.removeItem('cart'); 
      EventBus.$emit('userLoggedOut');
      this.$router.push('/users/login'); 
    },
    updateUserData() {
      this.username = sessionStorage.getItem('username');
      this.role = sessionStorage.getItem('role');
    },
    showCart() {
      this.cartVisible = true;
    },
    hideCart() {
      this.cartVisible = false;
    },
    updateCart() {
      this.cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    },
    checkout() {
      if (this.userLoggedIn) {
        this.$router.push('/checkout');
      } else {
        this.$router.push('/login');
      }
    },
  },
  mounted() {
    this.cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    EventBus.$on('userLoggedIn', this.updateUserData);
    EventBus.$on('userLoggedOut', this.updateUserData);
    EventBus.$on('cart-updated', this.updateCart);
  },
  beforeDestroy() {
    EventBus.$off('userLoggedIn', this.updateUserData);
    EventBus.$off('userLoggedOut', this.updateUserData);
    eventBus.$off('cart-updated', this.updateCart);
  }
};
</script>

<style>
.item {
  font-family: 'Myriad Pro';
}
</style>

<style scoped>
html * {
   font-family: Myriad Pro !important;
}
.ui.icon.input {
  position: relative;
  display: inline-block;
}

.ui.icon.input .form-control {
  padding-right: 2.5rem; /* Adjust this value based on the icon size */
}

.ui.icon.input .bi-search {
  position: absolute;
  right: 0.5rem; /* Adjust spacing from the right edge */
  top: 50%;
  transform: translateY(-50%);
  color: black; /* Set icon color */
  pointer-events: none; /* Allow clicks to pass through to the input */
}
.cart-container {
  display: flex;
  align-items: center;
}
.cart-count {
  font-size: 16px; /* Adjust size as needed */
  color: #e3e2e2; /* Adjust color as needed */
}
</style>
