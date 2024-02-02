
import React from "react";
import Logo from "../components/Logo";
import { Search } from "../components/Input";
import Link from "next/link"
import { GrNotification } from "react-icons/gr";
import { useForm } from "react-hook-form";
import Header from "../components/Header";

const layout = ({ children }) => {

 

  return (
    <main className="h-full">
      {/* MAINN HEADER */}
      <Header/>

      <section className="py-3 flex w-full h-screen">
        <div className="grid gap-3 px-2 py-5 w-[250px] shadow justify-center place-content-start ">
          <Link href="">Project</Link>
          <Link href="">Task</Link>
          <Link href="">Worklogs</Link>
          <Link href="">Performance</Link>
          <Link href="">Settings</Link>
        </div>
        <div className="bg-[#F0F6FF] px-3 overflow-auto w-full">{children}</div>
      </section>
    </main>
  );
};

export default layout;
