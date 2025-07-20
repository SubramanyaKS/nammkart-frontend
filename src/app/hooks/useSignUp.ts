import { useRouter } from "next/navigation";
import React, { useState } from "react"
import { register } from "../utils/api";

export const useSignup = () => {
  const [data, setData] = useState({ username: "", email: "", password: "" ,phoneNumber:""});
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
    if (!data.username || !data.email || !data.password|| !data.phoneNumber) {
      setError('All Fields are required');
    }

    
      try {

        const response=await register(data);
        console.log(response.ok);
          if (response) {
            // alert('Registration successful');
            router.push('/login');
            setData({ username: "", email: "", password: "",phoneNumber:"" })

          } else {
            setError('Registration failed');
          }



      } catch (error) {
        setError(`Something gone wrong ${error}`);

      }


  };
  return { data, handleChange, handleSubmit, error };
}