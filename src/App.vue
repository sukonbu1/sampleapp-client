<template>
  <div id="app">
    <Header @search="searchProducts" />
    <div style="background-color: #232f3e;">
      <ul class="nav justify-content-center">
        <li class="nav-item dropdown">
          <a class="nav-link text-white dropdown-toggle nav-item-color" href="#" id="navbarDropdownNintendo" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Nintendo
          </a>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownNintendo">
            <li><router-link class="dropdown-item" :to="{ path: '/nintendo/console' }">Console</router-link></li>
            <li><router-link class="dropdown-item" :to="{ path: '/nintendo/games' }">Games</router-link></li>
            <li><router-link class="dropdown-item" :to="{ path: '/nintendo/accessories' }">Accessories</router-link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link text-white dropdown-toggle nav-item-color" href="#" id="navbarDropdownSony" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PlayStation
          </a>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownSony">
            <li><router-link class="dropdown-item" :to="{ path: '/playstation/console' }">Console</router-link></li>
            <li><router-link class="dropdown-item" :to="{ path: '/playstation/games' }">Games</router-link></li>
            <li><router-link class="dropdown-item" :to="{ path: '/playstation/accessories' }">Accessories</router-link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link text-white dropdown-toggle nav-item-color" href="#" id="navbarDropdownMicrosoft" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Xbox
          </a>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMicrosoft">
            <li><router-link class="dropdown-item" :to="{ path: '/xbox/console' }">Console</router-link></li>
            <li><router-link class="dropdown-item" :to="{ path: '/xbox/games' }">Games</router-link></li>
            <li><router-link class="dropdown-item" :to="{ path: '/xbox/accessories' }">Accessories</router-link></li>
          </ul>
        </li>
        <router-link to="/other-products" class="nav-item nav-link text-white" exact>Other products</router-link>
        <router-link to="/about" class="nav-item nav-link text-white">About</router-link>
        <router-link to="/contact" class="nav-item nav-link text-white">Contact</router-link>
      </ul>
    </div>

    <flash-message class="myFlash" style="margin-bottom: 5%;"></flash-message>
    <div class="ui one column grid">
      <div class="column">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.centered {
  display: flex;
  justify-content: center;
}
.nav-link{
  font-size: large;
  font-family: 'Myriad Pro';
}
.navbar-custom .nav-link {
  color: white; /* Set the color of the nav-link text to white */
}
.navbar-custom {
  background-color: #232f3e;
}

.navbar-custom .nav-link {
  color: white;
}

.navbar-custom .dropdown-menu {
  background-color: #232f3e;
}

.navbar-custom .dropdown-item {
  color: white;
}

.navbar-custom .dropdown-item:hover {
  background-color: #1d2631; /* Optional: Darker color for hover effect */
}
</style>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  methods: {
    searchProducts(searchQuery) {
      this.$router.push({ path: '/search-result', query: { name: searchQuery } });
    }
  },
  components: {
    Header,
    Footer
  }
};
</script>