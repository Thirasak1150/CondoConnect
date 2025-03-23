"use client"
import React from "react";
import "./globals.css";
import { useRouter } from "next/navigation";

interface formLoginData {
  username: string;
  password: string;
}

const Page = () => {
  const router = useRouter();
  
  const handlelogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const data: formLoginData = {
      username: formData.get('username') as string,
      password: formData.get('password') as string,
    };
    try {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.error || 'เข้าสู่ระบบล้มเหลว');
      }
      else{
        router.push('/Showpost');
      }


    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('An unexpected error occurred');
      }
    }
  }

  return (
    <div className="h-screen flex md:flex-row flex-col  bg-[#160430]">
      <div className=" md:h-full h-[50%] w-full md:w-[60%]  opacity-100 bg-cover bg-center bgdt"></div>

      <div className="flex flex-col justify-start md:justify-center items-start md:items-center md:h-full h-[50%]  w-full md:w-[40%] text-white">
        <div className="hidden  md:flex flex-col justify-start w-full px-10 ">
          <h1 className="  md:text-[40px] lg:text-[80px] font-bold">LOG IN</h1>
          <p className="hidden  lg:flex">กรุณากรอกชื่อผู้ใช้เเละรหัสผ่านเพื่อเข้าสู่ระบบ</p>
        </div>
        <form onSubmit={handlelogin} className="flex flex-col gap-4  md:mt-5 w-full justify-center items-start px-10 pr-16">
          <input
            type="text"
            name="username"
            placeholder="username"
            className="w-full h-[50px] caret-purple-700  py-2 px-4 input  focus:outline-none focus:input-primary rounded-xl bg-[#261046]"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            className="w-full h-[50px]  caret-purple-700 py-2 px-4 input  focus:outline-none focus:input-primary rounded-xl bg-[#261046]"
          />

          <button type="submit" className="px-4 py-2 w-full mt-4 text-white h-[50px] rounded-2xl font-bold  bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
