import { BellRing } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className='h-full w-full px-10 py-14 mt-10 overflow-auto mb-16  flex flex-col gap-4  text-stone-950  bg-gray-200'>
    <div className=' bg-white h-[84px] w-full flex items-center gap-2 px-4'>
      <div className=' h-10 w-10 bg-gray-500 rounded-full '>

      </div>
      <div className='w-full flex justify-between items-center'>
        <p className=' font-bold'>นมสดกดไลค์คุณ</p>
        <p className=' font-bold'>12:00 AM.</p>
      </div>
    </div>

    <div className=' bg-white h-[84px] w-full flex items-center gap-2 px-4'>
      <div className=' h-10 w-10  rounded-full px-2 py-2 '>
      <BellRing className='text-red-600' />
      </div>
      <div className='w-full flex justify-between items-center overflow-hidden'>
        <div className='w-[70%]  whitespace-nowrap overflow-hidden'>
        <p className=' font-bold '>นิติบุลคลประกาศ</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius labore in officia, adipisci quisquam at dolore mollitia molestiae, consequatur aperiam, provident nobis illum vero nesciunt exercitationem ad voluptatibus impedit? Quod!</p>
        </div>

        <p className=' font-bold'>12:00 AM.</p>
      </div>
    </div>


  </div>
  )
}

export default page