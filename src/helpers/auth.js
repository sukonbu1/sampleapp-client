import { jwtDecode } from 'jwt-decode';

export function requireAdmin(to, from, next) {
  const token = sessionStorage.getItem('token');
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      if (decodedToken.role === 'admin') {
        next();
      } else {
        next('/404'); // Redirect if the user is not an admin
      }
    } catch (error) {
      console.error("Invalid token", error);
      next('/login'); 
    }
  } else {
    next('/login'); 
  }
}

export function requireLogin(to, from, next) {
  const token = sessionStorage.getItem('token');
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      if (decodedToken.role === 'customer' || decodedToken.role === 'admin') {
        next();
      } else {
        next('/404'); 
      }
    } catch (error) {
      console.error("Invalid token", error);
      next('/login'); 
    }
  } else {
    next('/login'); 
  }
}

export function requireLogout(to, from, next) {
  const token = sessionStorage.getItem('token');
  if (token) {
    next('/404');
  } else {
    next();
  }
}