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
import { requireAdmin, requireLogin, requireLogout } from './helpers/auth';

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
      beforeEnter: requireAdmin

    },
    {
      path: '/products/new',
      name: 'new-product',
      component: New,
      beforeEnter: requireAdmin
    },
    {
      path: '/products/show/:id',
      name: 'show-product',
      component: Show,
      beforeEnter: requireAdmin
    },
    {
      path: '/products/edit/:id',
      name: 'edit-product',
      component: Edit,
      beforeEnter: requireAdmin
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
      component: Login,
      beforeEnter: requireLogout
    },
    {
      path: '/users/register',
      name: 'Register',
      component: Register,
      beforeEnter: requireLogout
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
      component: Checkout,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
      beforeEnter: (to, from, next) => {
        if (from.name) {
          next(false); // Prevent URL change
        } else {
          next(); // Allow navigation if directly accessing an unknown URL
        }
      }
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
