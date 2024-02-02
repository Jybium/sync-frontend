import React from "react";
import Form from "./Form";
import Image from "next/image";
import View from "../../../../public/auth-page/auth.png";
import Logo from "@/app/components/Logo";

const page = () => {
  return (
    <main>
      <div className="flex justify-between items-center my-5 ">
        <div className="">
          <Logo />
          <Image src={View} alt="Login image" className="block w-full object-cover" />
        </div>
        <Form />
      </div>
    </main>
  );
};

export default page;
