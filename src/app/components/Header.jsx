"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Logo from "./Logo";
import { Search } from "./Input";
import { GrNotification } from "react-icons/gr";
import {useAuth} from "../context/AuthContext"

const Header = () => {
  const {user} = useAuth()

  const returned_users = localStorage.getItem("user")
  const users = JSON.parse(returned_users)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const Submit = (data) => {
    console.log(data);
  };
  return (
    <section className="flex justify-between py-1 px-4 shadow">
      <Logo />
      <div className="flex items-center justify-between gap-6 w-1/2">
        <div className="flex items-center gap-2 w-full ">
          <Search
            placeholder="search for anything"
            name="search"
            register={register}
            error={errors}
            className="w-full"
          />
          <GrNotification size="20" />
        </div>
        <div className="text-right text-[14px]">
          <p className="font-bold whitespace-nowrap">
            {users.firstName} {users.lastName}
          </p>
          <p className=" text-[14px]">{users.emailAddress}</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
