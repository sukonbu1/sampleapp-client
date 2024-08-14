<template>
  <div class="login-container">
    <div class="login-form justify-content-center">
        <h1 class="text-center">Login</h1>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" v-model="user.username" required>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" v-model="user.password" required>
          </div>
          <!-- Display the error message here -->
          <div v-if="error" class="alert alert-danger">
            {{ error }}
          </div>
          <br>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
}

.login-form {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.login-form h2 {
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.btn {
  font-size: 1rem;
  padding: 0.75rem;
}

.btn-primary {
  background-color: #007bff;
  border: none;
  color: #fff;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.text-center {
  text-align: center;
}

.mt-3 {
  margin-top: 1rem;
}
</style>

<script>
import { login } from '../helpers/api.js';
import { EventBus } from '@/eventBus';  

export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      error: null
    };
  },
  methods: {
      async login() {
      try {
        const response = await login(this.user);
        sessionStorage.setItem('username', this.user.username);
        sessionStorage.setItem('role', response.data.user.role);
        EventBus.$emit('userLoggedIn');
        this.flash("Welcome, " + this.user.username, 'success');
        this.error = ''; 
        this.$router.push('/');
      } catch (error) {
          if (error.response.status === 401) {
            this.error = 'Invalid username or password';
          }else if(error.response.status === 404){
            this.error = 'User not found';
          } else {
          this.error = 'An error occurred. Please try again later';
        }
      }
    }
  }
};
</script>