'use client'
import InputFeild from '@/app/component/inputField'
import Submitbutton from '@/app/component/submitButton'
import { useLogin } from '@/app/hooks/useLogin'
import Link from 'next/link'
import React from 'react'

function page() {
  const {data,handleChange,handleSubmit,error} = useLogin();
  return (
    <div>
    <h2 className="text-2xl text-blue-700 font-bold mb-6 text-center">Login</h2>
    <form onSubmit={handleSubmit}>
      <InputFeild value={data.username}  title="User Name" name="username"  OnChange={handleChange} id="username" type="text"/>
      <InputFeild value={data.password} title="Password" name="password"  OnChange={handleChange} id="password" type="password"/>
      <div className='text-white text-end mb-4'><Link href='/forgot-password'>forgot password?</Link></div>
      <Submitbutton title="Login"/>
      <p className='text-black text-center mt-2'>Don't have account? <Link className='text-blue-700 font-semibold' href="/signup">Register</Link></p>
      {error?<div className='text-red-700 text-center'><p>{error}</p></div>:null}
    </form>
  </div>
  )
}

export default page