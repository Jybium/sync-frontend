"use client"

import { PasswordLogin, Text } from '../../components/Input'
import Link from "next/link"
import Image from "next/image"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '../../components/Button'
import {useForm} from "react-hook-form"
import axios, { AxiosError } from "axios"
import { fetchData } from '../../../lib/fetch'
import {setCookie} from "../../../utils/cookies"
import { useAuth } from '../../context/AuthContext'



const Form = () => {
  const {user, setUser} = useAuth()
  const router = useRouter()
  const {register, handleSubmit, watch, formState:{errors}} = useForm()
  
  const Submit = async (data) =>{
    console.log(data)
    try{

      const result = await axios.post("http://localhost:5000/auth/login", data);
      const response = result.data
      setCookie(response.access_token)
      localStorage.setItem("user", JSON.stringify(response.user))
      setUser(response.user)
      console.log(data);
      console.log(response)
      console.log(response.access_token, response.user)
      if(response) router.push("/dashboard")
    }catch(e){
      const error = e 
      console.log(error)
    }
 

  }
  return (
    <section className='grid gap-3 w-1/2'>
       
        <div className='font-bold text-2xl text-center'>
            <p >Welcome back</p>
            <p className='font-semibold text-lg'>Welcome back, please enter your details below</p>
        </div>
      <form onSubmit={handleSubmit(Submit)} className='grid gap-5'>
        <div className='grid gap-3 my-2'>
          <Text
            placeholder="Email Address"
            type="email"
            classname="py-2"
            name="emailAddress"
            required={true}
             register={register}
            error={errors}
          />
          <PasswordLogin
            placeholder="Password"
            type="password"
            classname="py-2 "
            name="password"
            required={true}
             register={register}
            error={errors}
          />
        </div>
        <Button title="Login" classname="bg-black font-semibold text-white w-full"/>
      </form>
      <p className='text-center mt-3'>Don't have an account? <Link href="/auth/signup" className="underline">Sign up for free</Link></p>
    </section>
  );
}

export default Form