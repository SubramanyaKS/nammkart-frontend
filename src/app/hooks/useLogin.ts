import { useRouter } from 'next/navigation';
import React, { useContext, useState} from 'react';
import { UserLogin } from '../utils/types';
import { login } from '../utils/api';
import Cookies from "js-cookie";
import { useAuth } from '../context/authContext';
// import {useSession,signIn} from 'next-auth/react';
// import { isValidEmail, isValidPassword } from '../utils/validate';

export const useLogin=()=>{
  const {dispatch} = useAuth();
  const [data,setData] = useState<UserLogin>({email:"",password:""});
  const [error,setError] = useState('');
  const router = useRouter();

//   useEffect(() => {
//     if(session?.status==='authenticated'){
//       router.replace('/generation');
//     }},[router,session])

    const handleChange =  async (event:any) => {
      const { name,value} = event.target;
      setData({ ...data, [name]: value });
    };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
    if(!data.email || !data.password){
      setError("All Fields are required");
    }

    try {
      
      const access_token = await login(data);
      dispatch({ type: "LOGIN", payload: access_token });
      localStorage.setItem("user", JSON.stringify(access_token));
      // Cookies.set("access_token", access_token, { secure: true, sameSite: "Strict" });
      // console.log(access_token);
      router.push('/products');
      
    } catch (error:any) {
      alert("Called Error"+error.message);
      // console.error("Error",error.message)
      
    }

    }
      return {data,handleChange,handleSubmit,error};
}