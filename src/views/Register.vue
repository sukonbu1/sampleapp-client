<template>
  <div class="register-container">
    <div class="register-form">
      <h2 class="text-center">Register</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="username">Username</label>
          <input v-model="user.username" type="text" id="username" placeholder="Username" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input v-model="user.password" type="password" id="password" placeholder="Password" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Register</button>
        <p class="text-center mt-3">Already have an account? <router-link to="/users/login">Login here</router-link></p>
        <!-- Display the error message here -->
        <div v-if="error" class="alert alert-danger text-center mt-3">
          {{ error }}
        </div>
      </form>
    </div>
  </div>
</template>
  
<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
}

.register-form {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.register-form h2 {
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
import { register } from '../helpers/api';

export default {
  name: 'Register',
  data() {
    return {
      user: {
        username: "",
        password: "",
        role: "customer"
      },
      error: null
    };
  },
  methods: {
    async register() {
      try {
        const response = await register(this.user);
        this.$router.push('/users/login'); 
      } catch (error) {
        if (error.response) {
          this.error = error.response.data.message || 'Registration failed. Please try again later.';
        } else {
          this.error = 'An unexpected error occurred.';
        }
      }
    },
  },
};
</script>
