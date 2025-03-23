import React from "react";
import "./style.css";
import { Pen, UserPen } from "lucide-react";
const page = () => {
  return (
    <div className="h-full w-full overflow-auto   py-14 mt-10   mb-32  flex flex-col gap-4  text-stone-950  bg-white">
      <div className=" w-full h-full mb-96  ">
        <div className=" flex items-center justify-center">
        <div className=" relative h-30 w-30 rounded-full bgProfile">
          <div className=" absolute bottom-1 right-3 bg-gray-200 px-2 py-2 shadow-md shadow-gray-600 rounded-full">
            <Pen size={10} />
          </div>
        </div>
        </div>
       
        <div className=" relative h-48  w-full bgName flex justify-center items-start mt-4">
            <div className=" ">
                <h1 className=" text-2xl font-bold">Thirasak Arreeram</h1>
            </div>
        </div>

        <div className=" w-full  mt-6 flex flex-col gap-4 ">
         <div className=" flex items-center justify-center text-2xl gap-2 py-4">
         <UserPen size={40} />
            <p className=" ">      ตั้งค่าโปรไฟล์</p>
      
         </div>
      
        </div>
        <div className=" w-full  mt-6 flex flex-col gap-4">
         <div className=" flex items-center justify-center text-2xl gap-2 py-4">
         <UserPen size={40} />
            <p className=" ">      ตั้งค่าโปรไฟล์</p>
      
         </div>
      
        </div>
             <div className=" w-full  mt-6 flex flex-col gap-4">
         <div className=" flex items-center justify-center text-2xl gap-2 py-4">
         <UserPen size={40} />
            <p className=" ">      Logout</p>
      
         </div>
      
        </div>
        <div className=" w-full  mt-6 flex flex-col gap-4 ">
         <div className=" flex items-center justify-center text-2xl gap-2 py-4">
         <UserPen size={40} />
            <p className=" ">      Logout</p>
      
         </div>
      
        </div>
        <div className=" w-full  mt-6 flex flex-col gap-4">
         <div className=" flex items-center justify-center text-2xl gap-2 py-4">
         <UserPen size={40} />
            <p className=" ">      Logout</p>
      
         </div>
      
        </div>
  
        <div className=" w-full  mt-6 flex flex-col gap-4 ">
         <div className=" flex items-center justify-center text-2xl gap-2 py-4">
         <UserPen size={40} />
            <p className=" text-gray-600">Logout</p>
      
         </div>
      
        </div>
    
      </div>
    </div>
  );
};

export default page;
