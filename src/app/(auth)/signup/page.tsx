'use client'
import InputFeild from '@/app/component/inputField';
import Submitbutton from '@/app/component/submitButton';
import { useSignup } from '@/app/hooks/useSignUp';
import Link from 'next/link';
import React from 'react';

const page = () => {
  const {data,handleChange,handleSubmit,error} = useSignup(); 

  return (
    <div>
        <h2 className="text-2xl text-blue-700 font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <InputFeild value={data.username} name="username" title="User Name"  OnChange={handleChange} id="username" type="text"/>
          <InputFeild value={data.email} name="email" title="Email"  OnChange={handleChange} id="email" type="email"/>
          <InputFeild value={data.phoneno} name="phoneno" title="Phone Number"  OnChange={handleChange} id="phoneno" type="text"/>
          <InputFeild value={data.password} name="password" title="Password"  OnChange={handleChange} id="password" type="password"/>
          <Submitbutton title="Signup"/>
          <p className='text-black text-center mt-2'>Already have account? <Link className='text-blue-700 font-semibold' href="/login"><b>Login</b></Link></p>
        {error?<div className='text-red-700 text-center'><p>{error}</p></div>:null}
        </form>
      </div>
  )
}

export default page