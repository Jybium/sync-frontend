"use client";

import { useState, useEffect } from "react";
import { GrView } from "react-icons/gr";
import { GrHide } from "react-icons/gr";
import { GrSearch } from "react-icons/gr";
import React from "react";
import Link from "next/link";

export const Password = ({
  title,
  placeholder,
  register,
  error,
  required,
  name,
  classname,
}) => {
  const For = title?.toLowerCase().split("").join("");

  const [show, setShow] = useState(false);

  const style = ` placeholder:text-sm placeholder:font-regular font-regular text-slate-600 w-full text-sm border-black border-b-2 py-2 px-4 + ${classname}`;

  const showPassword = () => {
    setShow((prev) => !show);
  };
  return (
    <div className="w-full">
      <label htmlFor={For} className="grid text-left text-[12px] w-full">
        {title}
      </label>
      <div className="relative w-full">
        <input
          type={show ? "text" : "password"}
          name={For}
          {...register(name, {
            required: true,
            validate: {
              checkLength: (value) => value.length >= 8,
              matchPattern: (value) =>
                /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$*])/.test(value),
            },
          })}
          id={For}
          className={style}
          placeholder={placeholder}
        />
        <span onClick={showPassword} className="absolute right-2 bottom-3">
          {show ? <GrHide size="20" /> : <GrView size="20" />}
        </span>
      </div>
      <p className="text-gray-400 font-bold text-sm mt-1">
        Minimum of 8 characters.
      </p>
      {error[name] && error[name].type === "required" && (
        <p className="text-sm text-red-600 font-bold text-left">
          Password is required
        </p>
      )}
      {error[name] && error[name].type === "checkLength" && (
        <p className="text-sm text-red-600 font-bold text-left">
          Password is must be up to eight characters
        </p>
      )}
      {error[name] && error[name].type === "matchPattern" && (
        <p className="text-sm text-red-600 font-bold text-left">
          Password is must be contain at least a number, symbol, uppercase
          letter and lowercase letter
        </p>
      )}
    </div>
  );
};

export const PasswordLogin = ({
  title,
  placeholder,
  error,
  register,
  name,
  classname,
}) => {
  const For = title?.toLowerCase().split("").join("");
  const style = `mt-1 placeholder:text-sm placeholder:font-regular font-regular py-2 px-4 w-full border-b-2 border-black relative + ${classname}`;
  

  const [show, setShow] = useState(false);

  const showPassword = () => {
    setShow((prev) => !show);
  };
  return (
    <div className="w-full grid relative">
      <label htmlFor={For} className="grid text-sm font-bold w-full relative">
        {title}
      </label>
      <div className="relative w-full">
        <input
          type={show ? "text" : "password"}
          name={For}
          {...register(name, {
            required: true,
            validate: {
              checkLength: (value) => value.length >= 8,
              matchPattern: (value) =>
                /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$*])/.test(value),
            },
          })}
          id={For}
          className={style}
          placeholder={placeholder}
        />
        <span onClick={showPassword} className="absolute right-2 bottom-3">
          {show ? <GrHide size="20" /> : <GrView size="20" />}
        </span>
      </div>
      {error[name] && error[name].type === "required" && (
        <p className="text-sm text-red-600 font-bold text-left">
          Password is required
        </p>
      )}
      {error[name] && error[name].type === "checkLength" && (
        <p className="text-sm text-red-600 font-bold text-left">
          Password is must be up to eight characters
        </p>
      )}
      {error[name] && error[name].type === "matchPattern" && (
        <p className="text-sm text-red-600 font-bold text-left">
          Password is must be contain at least a number, symbol, uppercase
          letter and lowercase letter
        </p>
      )}
      <Link href="/forgot-password">
        <p className="text-black font-bold text-sm text-right mt-1">
          Forgot Password?
        </p>
      </Link>
    </div>
  );
};

export const Text = ({
  title,
  type,
  placeholder,
  register,
  error,
  name,
  required,
  classname,
}) => {
  const style = ` placeholder:text-sm placeholder:font-regular font-regular text-slate-600 w-full text-sm border-black border-b-2 py-2 px-4 + ${classname}`;
  return (
    <div className="w-full">
      <label htmlFor={name} className="grid text-left text-[12px] w-full">
        {title}
        <input
          type={type || "text"}
          {...register(name, { required: true })}
          name={name}
          id={name}
          className={style}
          placeholder={placeholder}
        />
      </label>
      {error[name] && error[name].type === "required" && (
        <p className="text-sm text-red-600 font-bold text-left">{`${name} is required.`}</p>
      )}
    </div>
  );
};

export const Search = ({
  title,
  type,
  placeholder,
  register,
  error,
  name,
  required,
  className,
}) => {
  const classes = `${className} + rounded placeholder:text-sm placeholder:font-regular font-regular text-slate-600 w-full text-sm border-black border-[1px] py-[7px] pl-9 pr-4`;
  return (
    <div className="w-full relative items-center flex gap-10">
      <div className="absolute left-2">
        <GrSearch />
      </div>
      <input
        type={type || "text"}
        {...register(name)}
        name={name}
        id={name}
        className={classes}
        placeholder={placeholder}
      />

      {/* {error[name] && error[name].type === "required" && (
        <p className="text-sm text-red-600 font-bold text-left">{`${title} is required.`}</p>
      )} */}
    </div>
  );
};

export const Select = ({
  title,
  register,
  error,
  classname,
  children,
  name,
  onclick,
}) => {
  const style = `rounded placeholder:text-sm placeholder:font-regular font-regular text-slate-600 w-full text-sm border-black border-[1px] py-2 px-4 pr-6 pr-3 + ${classname}`;

  return (
    <div className="w-full">
      <label htmlFor={name} className="grid text-left text-[12px] w-full">
        {title}
        <select
          name={name}
          id={name}
          {...register(name, { required: true })}
          className={style}
        >
          <option value="">Select role:</option>
          <option value="ADMIN">Admin</option>
          <option value="MEMBER">Team Member</option>
          <option value="MANAGER">Project Manager</option>
        </select>
      </label>
      <p
        className="font-black text-blue-500 text-sm cursor-pointer mt-1"
        onClick={() => onclick()}
      >
        {children}
      </p>
      {error[name] && error[name].type === "required" && (
        <p className="text-sm text-red-600 font-bold">{`${name} is required.`}</p>
      )}
    </div>
  );
};
