import { Droplet, Zap } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="h-full w-full px-8 py-14 mt-10 overflow-auto mb-16  flex flex-col gap-4  text-stone-950  bg-gray-200">
      <div className=" w-full  ">
        <div>
          <p className=" font-bold"> ชั้น 6 ห้อง 701</p>
        </div>

        <div className=" flex gap-2 bg-white mt-2 px-4 py-4 rounded-2xl w-full justify-between items-center">
          <div
            className=" text-2xl flex items-center py-2  justify-start 
        "
          >
            {" "}
            <Zap className=" text-yellow-400  mr-2" />
            <p className=" ">ค่าไฟ</p>
            <p className=" text-red-400 text-sm ml-2 mt-1">
              (เกินกำหนดชำระ)
            </p>
          </div>
          <div className=" flex gap-2">
            <h1 className=" text-red-300 text-2xl font-bold">5,000฿</h1>
            <button className=" bg-red-300 text-white px-4  rounded-2xl">
              จ่าย
            </button>
          </div>
        </div>
        <div className=" flex gap-2 bg-white mt-2 px-4 py-4 rounded-2xl w-full justify-between items-center">
          <div
            className=" text-2xl flex items-center py-2  justify-start 
        "
          >
            {" "}
            <Droplet className=" text-blue-500 mr-2" />
            <p className=" ">ค่าน้ำ</p>
            <p className=" text-gray-400 text-sm ml-2 mt-1">
              (ครบกำหนดชำระวันที่ 24/2/2568)
            </p>
          </div>
          <div className=" flex gap-2">
            <h1 className=" text-red-300 text-2xl font-bold">300฿</h1>
            <button className=" bg-red-300 text-white px-4  rounded-2xl">
              จ่าย
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
