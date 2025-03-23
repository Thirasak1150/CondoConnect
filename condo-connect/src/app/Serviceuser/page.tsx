"use client"
import React, { useState, useRef } from "react";
import Image from "next/image";

const Page = () => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  console.log("setSelectedImages",selectedImages)
  console.log("previews",previews)
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setSelectedImages(prev => [...prev, ...files]);

    // Create preview URLs
    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviews(prev => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
    setPreviews(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="h-full w-full overflow-auto   mt-10   mb-32   text-stone-950  bg-[#160430]">
      <div className="w-full h-[25%] flex justify-center items-center text-white">
        <h1 className="text-2xl ">คุณต้องการนัดช่างตอนไหน ?</h1>
      </div>
      <div className="w-full h-[75%] overflow-auto  rounded-t-4xl  py-10 px-8 gap-4 bg-gray-200">
        <div className="w-full flex justify-center items-center gap-4 ">
          <div className="w-[50%]">
            <label>วันที่</label>
            <div className="mt-2">
              <input data-theme="cyberpunk" type="date" className="input" />
            </div>
          </div>

          <div className="w-[50%]">
            <label>เวลา</label>
            <div className="mt-2">
              <input data-theme="cyberpunk" type="time" className="input" />
            </div>
          </div>
        </div>
        <div className="w-full  mt-8 ">
          <div className="w-full bg-amber-800 mt-2">
            <textarea
              data-theme="cyberpunk"
              className="textarea w-full h-[150px] resize-none"
              placeholder="คุณกำลังเจอกับปัญหาอะไรบอกมาโดยละเอียดเพื่อให้ข่างวิเคาะห์ได้ถูกขึ้นเพื่อเตรียมอุปกรณ์"
            ></textarea>
          </div>
        </div>
        <div className="w-full  mt-8 ">
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
                {selectedImages.length < 3 ?    <button
                onClick={() => fileInputRef.current?.click()}
                className="btn btn-primary"
              >
                เพิ่มรูปภาพ
              </button>:   <button
         
                className="btn btn-warning"
              >
                เพิ่มได้สูงสุด 3 รูป
              </button>}
           
              <input
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={handleImageChange}
              />
              <span className="text-sm text-gray-600">
                {selectedImages.length > 0 
                  ? `${selectedImages.length} รูปที่เลือก`
                  : 'กรุณาเลือกรูปภาพประกรอบได้สูงสุด 3 รูป'}
              </span>
            </div>
            
            {previews.length > 0 && (
              <div className="flex justify-start items-center gap-1 mt-4">
                {previews.map((preview, index) => (
                  <div key={index} className="relative group">
                    <div className="h-40 w-40 relative overflow-hidden rounded-lg">
                      <Image
                        src={preview}
                        alt={`Preview ${index + 1}`}
                        fill
                        className=" object-cover "
                      />
                    </div>
                    <button
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="w-full  mt-16 mb-32">
          <div className="flex justify-center items-center gap-4">
            <div className="flex items-center gap-4 ">
              <button
                className="btn btn-success w-40"
              >
                บันทึก
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
