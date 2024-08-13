<template>
    <div class="about-container">
      <div class="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to our online store! We are a renowned console game shop based in Hanoi, Vietnam, with over 10 years of experience in the gaming industry. Our mission is to provide gamers with high-quality consoles, games, and accessories, ensuring that you get the best gaming experience possible.
        </p>
        <p>
          Since our establishment, we have been dedicated to offering a wide range of products from the latest gaming consoles to classic favorites. Our team is passionate about gaming and committed to delivering exceptional customer service.
        </p>
        <p>
          Whether you're a seasoned gamer or just starting out, we have something for everyone. Explore our collection and find your next favorite game or console. Thank you for choosing us as your go-to gaming store!
        </p>
        <h2>Our History</h2>
        <p>
          Founded over a decade ago in Hanoi, our shop has grown from a small local store to a well-known name in the gaming community. Our commitment to quality and customer satisfaction has helped us build a loyal customer base.
        </p>
        <h2>Contact Us</h2>
        <p>
          Have questions or need assistance? Feel free to <router-link to="/contact">contact us</router-link>, and our friendly team will be happy to help!
        </p>
      </div>
    </div>
  </template>
  
  <style scoped>
  .about-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background-color: #f7f7f7;
    min-height: 50vh;
  }
  
  .about-content {
    max-width: 800px;
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .about-content h1, h2 {
    margin-bottom: 1rem;
    color: #333;
  }
  
  .about-content p {
    margin-bottom: 1rem;
    line-height: 1.6;
    color: #555;
  }
  
  .about-content a {
    color: #007bff;
    text-decoration: none;
  }
  
  .about-content a:hover {
    text-decoration: underline;
  }
  </style>
  
<script>
export default {
    name: 'About',
}
</script>
