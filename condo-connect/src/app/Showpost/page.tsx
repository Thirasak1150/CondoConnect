
import { Flag, Heart, Image, MessageCircle, ThumbsUp, Video } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className=" h-full w-full px-10 py-14 mt-10 overflow-auto mb-16  flex flex-col gap-4   bg-gray-200">
      <div className="bg-purple-200 rounded-2xl px-4  w-full h-[180px]">
        <div className=" flex justify-center gap-2 items-center 
         w-full border-b-2 border-pink-400 px-4 pt-6 pb-4">
          <div className="w-[60px] rounded-full h-[50px] bg-gray-400"></div>
          
          <div className=" w-full">
            <input className=" w-full bg-gray-300 rounded-2xl text-gray-800 border-none h-[40px] text-center" type="text"
             placeholder="คุณคิดอะไรอยู่..." /></div>
        </div>

        <div className="  flex justify-center gap-16 items-center pt-4">
          <div className="flex gap-2 justify-center items-center    text-purple-500">
          <Video  size={50}/>
          <p className=" text-black">วิดีโอ</p>
          </div>
          <div className="flex gap-2 justify-center items-center    text-purple-500">
          <Image  size={50}/>
          <p className=" text-black">รูปภาพ</p>
          </div>
        </div>
      </div>
      <div className=" bg-gray-300 text-black rounded-2xl mb-16 px-2s  py-6 ">
          <div className=" flex justify-start items-center gap-2 px-4">
          <div className="w-[40px] rounded-full h-[40px] bg-gray-400"></div>
          <div>
            <p className=" font-bold">numsod</p>
            <p>14:50</p>
          </div>
          </div>

          <div className=" w-full px-4 py-4" >
            <p className=" text-black text-sm mb-2  whitespace-pre-wrap">Lorem ipsum dolor </p>
            <div className=" w-full h-[350px] bg-blue-950 mt-2">

            </div>
            <div className=" flex gap-2 mt-2 border-b-2 border-gray-400 pb-4 ">
            <Heart className=" text-pink-600 cursor-pointer hover:text-pink-700 "  />
            <p>100</p>
            </div>
            <div className=" flex justify-between items-center gap-2 mt-2 text-[12px]">
              <div className=" flex justify-center items-center gap-2">
              <ThumbsUp />
              <p>ถูกใจ</p>
              </div>
              <div className=" flex justify-center items-center gap-2">
              <MessageCircle />
              <p className="">เเสดงความคิดเห็น</p>
              </div>
              <div className=" flex justify-center items-center gap-2">
              <Flag />
              <p>รายงาน</p>
              </div>
            </div>
            
         

  
          </div>
      </div>
    </div>
  );
};

export default page;
