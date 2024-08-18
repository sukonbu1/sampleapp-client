import axios from 'axios';

const backEndUrl = 'https://sampleapp-server-1.onrender.com';

export const ViewAllProducts = async () => {
    try {
        let response = await axios.get(`${backEndUrl}/products`);
        return response.data;
    } catch (err) {
        console.error(err);
    }
};

export const AddAProduct = async (product) => {
    try {
        const token = sessionStorage.getItem('token');
        let response = await axios.post(`${backEndUrl}/products/`, product, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (err) {
        console.error(err);
    }
};

export const ViewProductById = async (id) => {
    try {
        let response = await axios.get(`${backEndUrl}/products/` + id);
        return response.data;
    } catch (err) {
        console.error(err);
    }
};

export const UpdateAProduct = async (id, product) => {
    try {
        const token = sessionStorage.getItem('token');
        let response = await axios.put(`${backEndUrl}/products/` + id, product, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (err) {
        console.error(err);
    }
};

export const DeleteAProduct = async (id) => {
    try {
        const token = sessionStorage.getItem('token');
        await axios.delete(`${backEndUrl}/products/` + id, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (err) {
        console.error(err);
    }
};

export const searchProducts = (query) => {
    return axios.get('/api/products/search', { params: query });
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
};



export const login = (user) => {
    return axios.post(`${backEndUrl}/users/login/`, user);
};

export const register = (user) => {
    return axios.post(`${backEndUrl}/users/register/`, user);
};
