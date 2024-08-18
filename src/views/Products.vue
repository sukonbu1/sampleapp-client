<template>
  <div class="container">
    <h1>This is product list page</h1>
    <div class="table-container">
      <table class="ui celled table">
        <thead>
          <tr>
            <th @click="sortTable('name')">Name 
              <i :class="getSortIcon('name')"></i>
            </th>
            <th @click="sortTable('price')">Price 
              <i :class="getSortIcon('price')"></i>
            </th>
            <th @click="sortTable('category')">Category 
              <i :class="getSortIcon('category')"></i>
            </th>
            <th @click="sortTable('subCategory')">Type 
              <i :class="getSortIcon('subCategory')"></i>
            </th>
            <th @click="sortTable('stock')">Stock 
              <i :class="getSortIcon('stock')"></i>
            </th>
            <th @click="sortTable('createdAt')">Created At 
              <i :class="getSortIcon('createdAt')"></i>
            </th>
            <th @click="sortTable('updatedAt')">Updated At 
              <i :class="getSortIcon('updatedAt')"></i>
            </th>
            <th colspan="3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, i) in sortedProducts" :key="i">
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.subCategory }}</td>
            <td>{{ product.stock }}</td>
            <td>{{ formatDate(product.createdAt) }}</td>
            <td>{{ formatDate(product.updatedAt) }}</td>
            <td>
              <router-link
                class="ui button green"
                :to="{ name: 'show-product', params: { id: product._id } }">
                Show
              </router-link>
            </td>
            <td>
              <router-link 
                class="ui button yellow"
                :to="{ name: 'edit-product', params: { id: product._id } }">
                Edit
              </router-link>
            </td>
            <td>
              <a href="" class="ui button red"
                @click.prevent="onDelete(product._id)">
                Delete
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import { ViewAllProducts, DeleteAProduct } from '../helpers/api'

export default {
  name: 'Products',
  data() {
    return {
      products: [],
      sortKey: '',
      sortOrders: {
        name: 1,
        price: 1,
        manufacturer: 1,
        category: 1,
        stock: 1,
        createdAt: 1,
        updatedAt: 1,
      },
    }
  },
  computed: {
    sortedProducts() {
      return this.products.slice().sort((a, b) => {
        let result = 0;
        if (this.sortKey === 'name' || this.sortKey === 'category' || this.sortKey === 'subCategory') {
          result = a[this.sortKey].localeCompare(b[this.sortKey]);
        } else if (this.sortKey === 'createdAt' || this.sortKey === 'updatedAt') {
          result = new Date(a[this.sortKey]) - new Date(b[this.sortKey]);
        } else {
          result = a[this.sortKey] - b[this.sortKey];
        }
        return result * this.sortOrders[this.sortKey];
      });
    },
  },
  async mounted() {
    this.products = await ViewAllProducts();
  },
  methods: {
    async onDelete(id) {
      const deleteConfirm = window.confirm('Are you sure you want to delete this product?');
      if (deleteConfirm) {
        await DeleteAProduct(id);
        this.products = this.products.filter(product => product._id !== id);
        // Display flash message
        this.flash('Delete product succeeded', 'success');
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString() + ' ' + date.toLocaleTimeString(); 
   },
    sortTable(key) {
      if (this.sortKey === key) {
        this.sortOrders[key] = -this.sortOrders[key];
      } else {
        this.sortKey = key;
        this.sortOrders[key] = 1;
      }
    },
    getSortIcon(key) {
      if (this.sortKey === key) {
        return this.sortOrders[key] > 0 ? 'bi bi-sort-down' : 'bi bi-sort-up';
      }
      return 'bi bi-sort';
    }
  },
}
</script>

<style>
.table-container {
  min-width: 1400px;
  max-height: 690px;
  overflow-y: auto;
  position: relative;
}

.table-container table {
  width: 100%;
  border-collapse: collapse;
}

.table-container thead {
  position: sticky;
  top: 0;
  background-color: white; /* or another background color */
  z-index: 10;
}

.table-container th, 
.table-container td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
</style>
