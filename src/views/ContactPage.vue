<template>
  <div class="contact-container">
    <div class="contact-form">
      <h1>Contact Us</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name</label>
          <input v-model="form.name" type="text" id="name" placeholder="Your Name" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="form.email" type="email" id="email" placeholder="Your Email" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea v-model="form.message" id="message" placeholder="Your Message" class="form-control" rows="6" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Send Message</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log('Form Submitted', this.form);
      // You can add logic to send the form data to an API or email service here
      alert('Your message has been sent!');
      // Clear the form fields after submission
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #f7f7f7;
  min-height: 50vh;
}

.contact-form {
  max-width: 1200px; /* Increased width for the form */
  min-width: 800px; /* Minimum width for better responsiveness */
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.contact-form h1 {
  margin-bottom: 1rem;
  color: #333;
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
</style>
