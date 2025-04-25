import { useRouter } from "next/navigation";
import React, { useState } from "react"
import { register } from "../utils/api";

export const useSignup = () => {
  const [data, setData] = useState({ username: "", email: "", password: "" ,phoneno:""});
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = async (event: any) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
    if (!data.username || !data.email || !data.password|| !data.phoneno) {
      setError('All Fields are required');
    }

    
      try {

        const response=await register(data);
        console.log(response);
          if (response.ok) {
            // alert('Registration successful');
            router.push('/login');
            setData({ username: "", email: "", password: "",phoneno:"" })

          } else {
            setError('Registration failed');
          }



      } catch (error) {
        setError("Something gone wrong");

      }


  };
  return { data, handleChange, handleSubmit, error };
}