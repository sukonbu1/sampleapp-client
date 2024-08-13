import axios from 'axios';

const backEndUrl = 'https://sampleapp-server-1.onrender.com';

export const ViewAllProducts = async () => {
   try {
      let response = await axios.get(`${backEndUrl}/products`);
      return response.data;
   } catch (err) {
    console.error(err);    
    }
}

export const AddAProduct = async (product) => {
    try {
        let response = await axios.post(`${backEndUrl}/products`, product);
        return response.data;
    } catch (err) {
        console.error(err);    
     }
    }

export const DeleteAllProducts = async () => {
    try {
        let response = await axios.delete(`${backEndUrl}/products`);
        return response.data;
    } catch (err) {
        console.error(err);    
        }
    }

export const ViewProductById = async (id) => {
   try {
      let response = await axios.get(`${backEndUrl}/products/${id}`);
      return response.data;
   } catch (err) {
      console.error(err);    
    }
}

export const UpdateAProduct = async (id, product) => {
    try {
        let response = await axios.put(`${backEndUrl}/products/${id}`, product);
        return response.data;
    } catch (err) {
        console.error(err);    
     }
    }

export const DeleteAProduct = async (id) => {
    try {
        await axios.delete(`${backEndUrl}/products/${id}`);
        return response.data;
    } catch (err) {
        console.error(err);    
     }
    }

export const searchProducts = (query) => {
    return axios.get(`${backEndUrl}/products/search`, { params: query });
};

export const fetchProductsByName = async (name) => {
    try {
        const response = await axios.get(`${backEndUrl}/products/search`, {
            params: { name }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error; 
    }
};

export const fetchProductsByCategory = async (category, subCategory) => {
    try {
        let response = await axios.get(`${backEndUrl}/products/category/${category}/${subCategory}`);
        return response.data;
    } catch (err) {
        console.error(err);
    }
}

// Updated login and register URLs to use the cloud server
export const login = (user) => {
    return axios.post(`${backEndUrl}/users/login`, user);
}

export const register = (user) => {
    return axios.post(`${backEndUrl}/users/register`, user);
}

export const updateProductQuantities = async (cartItems) => {
  try {
    await Promise.all(cartItems.map(item =>
      axios.put(`${backEndUrl}/products/update-quantity`, {
        id: item._id,
        quantity: item.quantity
      })
    ));
  } catch (err) {
    console.error('Error updating product quantities:', err);
  }
};
