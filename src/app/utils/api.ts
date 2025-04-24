import axios from 'axios';
import { Product, User, UserLogin } from './types';
import { backendurl } from './constant';

// const API_URL = 'https://yourapi.com/products';

export const updateProduct = async (product: Product) => {
  const response = await axios.put(`${backendurl}/api/products/${product.id}`, product);
  return response.data;
};

export const searchProduct = async (searchTerm:string)=>{
      const response = await fetch(`${backendurl}/api/products/search?name=${searchTerm}`);
      const data = await response.json();
      return data;
}

export const getReviewByProductId = async (productId:string)=>{
  try {
    const response = await axios.get(`${backendurl}/api/products/${productId}/reviews`);
    return response.data;
  } catch (error:any) {
    throw new Error(error)
  }
}

export const login = async(user:UserLogin)=>{
  try {
    const response = await axios.post(`${backendurl}/api/auth/users/login`,user);
  const data = await response.data;
  return data;
    
  } catch (error:any) {
    throw new Error(error);
  }
}

export const register = async(user:User)=>{
  try {
    const response= await axios.post(`${backendurl}/api/auth/users/register`,user);
    const data=await response.data;
    return data;
    
  } catch (error:any) {
    throw new Error(error);
    
  }
  
}

export const searchProductByCategory = async (searchCategory:string)=>{
  const response = await fetch(`${backendurl}/api/products/category?category=${searchCategory}`);
  const data = await response.json();
  return data;
}

export const deleteProduct =(productId:string)=>{
  try {
      axios.delete(`${backendurl}/api/products/${productId}`).then(()=>console.log("Deleted")).catch(()=>console.log("Error"))
      
  } catch (error:any) {
      console.error(error.response?.data || error.message);
      
  }
}

export const getStoredCart = () => {
  var storedCart=null
  if (typeof window !== "undefined") {
    storedCart = localStorage.getItem("cart");
    // Use storedCart if needed
  }
  return storedCart ? JSON.parse(storedCart) : [];
};