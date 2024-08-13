import axios from 'axios'

const backEndUrl = 'http://localhost:8000/products/'

export const ViewAllProducts = async () => {
   try {
      let response = await axios.get(backEndUrl)
      return response.data
   } catch (err) {
    console.error(err)    
    }
}

export const AddAProduct = async (product) => {
    try {
        let response = await axios.post(backEndUrl, product)
        return response.data
    } catch (err) {
        console.error(err)    
     }
    }

export const DeleteAllProducts = async () => {
    try {
        let response = await axios.delete(backEndUrl)
        return response.data
    } catch (err) {
        console.error(err)    
        }
    }

export const ViewProductById = async (id) => {
   try {
      let response = await axios.get(backEndUrl + id)
      return response.data
   } catch (err) {
      console.error(err)    
    }
}

export const UpdateAProduct = async (id, product) => {
    try {
        let response = await axios.put(backEndUrl + id,product ) 
        return response.data
    } catch (err) {
        console.error(err)    
     }
    }

export const DeleteAProduct = async (id) => {
    try {
        await axios.delete(backEndUrl + id)
        return response.data
    } catch (err) {
        console.error(err)    
     }
    }
export const searchProducts = (query) => {
    return axios.get('/api/products/search', { params: query });
    };

export const fetchProductsByCategory = async (category, subCategory) => {
    try {
        let response = await axios.get(`http://localhost:8000/products/category/${category}/${subCategory}`); 
        return response.data;
    } catch (err) {
        console.error(err);
    }
}
    
    
export const login = (user) => {
    return axios.post('http://localhost:8000/users/login', user);
    }
    
export const register = (user) => {
    return axios.post('http://localhost:8000/users/register', user);
    };

export const updateProductQuantities = async (cartItems) => {
  try {
    await Promise.all(cartItems.map(item =>
      axios.put(`http://localhost:8000/products/update-quantity`, {
        id: item._id,
        quantity: item.quantity
      })
    ));
  } catch (err) {
    console.error('Error updating product quantities:', err);
  }
};


// export default api = {
//     ViewAllProducts,
//     ViewAProduct
//     }
