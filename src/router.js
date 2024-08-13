import Vue from 'vue';
import Router from 'vue-router';
import Homepage from './views/Homepage.vue';
import Products from './views/Products.vue';
import New from './views/New.vue';
import Show from './views/Show.vue';
import Edit from './views/Edit.vue';
import ProductDetail from './views/ProductDetail.vue';
import SearchResult from './views/SearchResult.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import About from './views/About.vue';
import Contact from './views/ContactPage.vue';
import NintendoConsoles from './components/Nintendo/NintendoConsoles.vue';
import NintendoGames from './components/Nintendo/NintendoGames.vue';
import NintendoAccessories from './components/Nintendo/NintendoAccessories.vue';
import PlayStationConsoles from './components/PlayStation/PlayStationConsoles.vue';
import PlayStationGames from './components/PlayStation/PlayStationGames.vue';
import PlayStationAccessories from './components/PlayStation/PlayStationAccessories.vue';
import XboxConsoles from './components/Xbox/XboxConsoles.vue';
import XboxGames from './components/Xbox/XboxGames.vue';
import XboxAccessories from './components/Xbox/XboxAccessories.vue';
import OtherProducts from './components/OtherProducts/OtherProducts.vue';
import Cart from './views/Cart.vue';
import Checkout from './views/Checkout.vue';
import NotFound from './components/NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/homepage'
    },
    {
      path: '/homepage',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
      beforeEnter: (to, from, next) => {
        if (sessionStorage.getItem('role') === 'admin') {
          next();
        } else {
          next('/404');
        }
      }
    },
    {
      path: '/products/new',
      name: 'new-product',
      component: New,
      beforeEnter: (to, from, next) => {
        if (sessionStorage.getItem('role') === 'admin') {
          next();
        } else {
          next('/404');
        }
      }
    },
    {
      path: '/products/show/:id',
      name: 'show-product',
      component: Show,
      beforeEnter: (to, from, next) => {
        if (sessionStorage.getItem('role') === 'admin') {
          next();
        } else {
          next('/404');
        }
      }
    },
    {
      path: '/products/edit/:id',
      name: 'edit-product',
      component: Edit,
      beforeEnter: (to, from, next) => {
        if (sessionStorage.getItem('role') === 'admin') {
          next();
        } else {
          next('/404');
        }
      }
    },
    {
      path: '/product-detail/:id',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/search-result',
      name: 'SearchResult',
      component: SearchResult
    },
    {
      path: '/nintendo/console',
      name: 'NintendoConsoles',
      component: NintendoConsoles
    },
    {
      path: '/nintendo/games',
      name: 'NintendoGames',
      component: NintendoGames
    },
    {
      path: '/nintendo/accessories',
      name: 'NintendoAccessories',
      component: NintendoAccessories
    },
    {
      path: '/playstation/console',
      name: 'PlayStationConsoles',
      component: PlayStationConsoles
    },
    {
      path: '/playstation/games',
      name: 'PlayStationGames',
      component: PlayStationGames
    },
    {
      path: '/playstation/accessories',
      name: 'PlayStationAccessories',
      component: PlayStationAccessories
    },
    {
      path: '/xbox/console',
      name: 'XboxConsoles',
      component: XboxConsoles
    },
    {
      path: '/xbox/games',
      name: 'XboxGames',
      component: XboxGames
    },
    {
      path: '/xbox/accessories',
      name: 'XboxAccessories',
      component: XboxAccessories
    },
    {
      path: '/other-products',
      name: 'OtherProducts',
      component: OtherProducts
    },
    {
      path: '/users/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/users/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contactpage',
      component: Contact
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound,
    },
  ]
});
