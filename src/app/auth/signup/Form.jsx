"use client";

import { Password, Text, Select } from "../../components/Input";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import axios from "axios"
import notifySuccess from "../../../utils/notifySuccess";
import notifyError from "../../../utils/notifyError";

const Form = () => {
  const route = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const Submit = async (data) => {
    console.log(data);
    try {
      const result = await axios.post("http://localhost:5000/auth/signup", data);
      const response = result.data;
      console.log(data);
      console.log(response);
      if (response) route.push("/auth/login");

      notifySuccess(response.msg)
    } catch (e) {
      const error = e;
      console.log(error);
      notifyError("There is trouble trying to sign you up!")
    }
  };

  return (
    <section className="grid gap-3 w-1/2">
      <div className="font-bold text-2xl text-center">
        <p>It's good to have you!</p>
        
      </div>
      <form onSubmit={handleSubmit(Submit)} className="grid gap-5">
        <div className="grid gap-3 my-2">
          
            <Text
              placeholder="First Name"
              type="text"
              classname=""
              name="firstName"
              required={true}
              register={register}
              error={errors}
            />
            <Text
              placeholder="Last Name"
              type="text"
              classname=""
              name="lastName"
              required={true}
              register={register}
              error={errors}
            />
            <Text
              placeholder="Email Address"
              type="email"
              classname=""
              name="emailAddress"
              required={true}
              register={register}
              error={errors}
            />
            <Text
              placeholder="username"
              type="text"
              classname=""
              name="username"
              required={true}
              register={register}
              error={errors}
            />
            <Password
              placeholder="Password"
              type="password"
              classname=""
              name="password"
              required={true}
              register={register}
              error={errors}
            />
            <Select
              name="role"
              title="Select Role"
              register={register}
              error={errors}
            />
         
        </div>
        <Button
          title="Signup"
          classname="bg-black font-semibold text-white w-full"
        />
      </form>
      <p className="text-center mt-3">
        Do you already have an account?{" "}
        <Link href="/auth/login" className="underline">
          Login
        </Link>
      </p>
    </section>
  );
};

export default Form;
