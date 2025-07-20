import { useRouter } from 'next/navigation';
import React, { useState} from 'react';
import { UserLogin } from '../utils/types';
import { login } from '../utils/api';
import { useAuth } from '../context/authContext';
// import {useSession,signIn} from 'next-auth/react';
// import { isValidEmail, isValidPassword } from '../utils/validate';

export const useLogin=()=>{
  const {dispatch} = useAuth();
  const [data,setData] = useState<UserLogin>({email:"",password:""});
  const [error,setError] = useState('');
  const router = useRouter();


    const handleChange =  async (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setData({ ...data, [name]: value });
    };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
    setError('');
    if(!data.email || !data.password){
      setError("All Fields are required");
    }


    try {
      
      const access_token = await login(data);
      console.log("Access Token",access_token);
      if(access_token!== undefined && access_token !== null){
      dispatch({ type: "LOGIN", payload: access_token });
      localStorage.setItem("user", JSON.stringify(access_token));
      // Cookies.set("access_token", access_token, { secure: true, sameSite: "Strict" });
      
      router.push('/products');
      }
      
    } catch (error: unknown) {
      let errorMessage = "An error occurred";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      alert("Called Error" + errorMessage);
      setError(errorMessage);
      // console.error("Error", errorMessage)
      
    }

    }
      return {data,handleChange,handleSubmit,error};
}