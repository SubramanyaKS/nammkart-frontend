import axios from 'axios';
import { Product, User, UserLogin } from './types';
import { backendurl } from './constant';
import { AxiosError } from 'axios';

// const API_URL = 'https://yourapi.com/products';

export const updateProduct = async (product: Product) => {
  try{
  const response = await axios.put(`${backendurl}/api/products/${product.id}`, product);
  return response.data;
  } catch (error: unknown) {
  if (error instanceof AxiosError) {
    console.error(error.response?.data);
  } else if (error instanceof Error) {
    console.error(error.message);
  }
}
};

export const searchProduct = async (searchTerm: string) => {
  try {
    const response = await fetch(`${backendurl}/api/products/search?name=${searchTerm}`);
    const data = await response.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data);
    } else if (error instanceof Error) {
      console.error(error.message);
    }
  }
}

export const getReviewByProductId = async (productId: string) => {
  try {
    const response = await axios.get(`${backendurl}/api/products/${productId}/reviews`);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data);
    } else if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}

export const logout = async () => {
  try {
    const response = await axios.get(`${backendurl}/api/users/auth/logout`, {
      withCredentials: true
    });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data);
    } else if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}

export const getUserProfile = async () => {
  try {
    axios.defaults.withCredentials = true; // Ensure credentials are sent with requests
    const response = await axios.get(`${backendurl}/api/users/auth/user/email`, {
      headers: {
        'withCredentials': 'true',
        'Content-Type': 'application/json',
      }
    });
    console.log('Profile data:', response.data);
    return response.data;
  } catch (error: unknown) {  
    if (error instanceof AxiosError) {
      console.error(error.response?.data);
    } else if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}


export const login = async (user: UserLogin) => {
   console.log("User inside login function",user);
  try {
   
    const response = await axios.post(`${backendurl}/api/users/auth/login`, user, {
      withCredentials: true
    });
    const data = await response.data;
    console.log(data)
    return data;

  } catch (error:unknown) {
    if (error instanceof AxiosError) {
      console.error("Axios error",error.response?.data?.message);
      throw new Error(error.response?.data?.message || "An error occurred during login");
    } else if (error instanceof Error) {
      console.error("instance",error.message);
      throw new Error(error.message);
    }
    else{
      console.error("An unknown error occurred",error);
    }
  }
}

export const register = async (user: User) => {
  try {
    const response = await axios.post(`${backendurl}/api/users/auth/register`, user);
    const data = await response.data;
    return data;

  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data);
    } else if (error instanceof Error) {
      throw new Error(error.message);
    }
  }

}

export const searchProductByCategory = async (searchCategory: string) => {
  try {
    const response = await fetch(`${backendurl}/api/products/category?category=${searchCategory}`);
    const data = await response.json();
    return data;

  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data);
    } else if (error instanceof Error) {
      throw new Error(error.message);
    }
  }

}

export const deleteProduct = (productId: string) => {
  try {
    axios.delete(`${backendurl}/api/products/${productId}`).then(() => console.log("Deleted")).catch(() => console.log("Error"))

  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data);
    } else if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}

export const getStoredCart = () => {
  let storedCart = null
  if (typeof window !== "undefined") {
    storedCart = localStorage.getItem("cart");
    // Use storedCart if needed
  }
  console.log("Stored Cart:", storedCart);
  return storedCart ? JSON.parse(storedCart) : [];
};