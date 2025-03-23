import { MessageCircleMore, UserRound, } from 'lucide-react'
import React from 'react'

const TopbarMobile = () => {
  return (
    <div className=' fixed top-0 z-10  w-full h-[64px] shadow-t-64  bg-white flex shadow-t-14  '>
    <div className=' flex text-black  w-full justify-between items-center gap-4 px-6   '>
    <div className='w-[100px] h-[24px] hover:bg-amber-200 bg-gray-400'>
        
              </div>
        <div className=' flex justify-center items-center gap-2'>
        <div>
        <MessageCircleMore />
        </div>
        <div>
        <UserRound />
        </div>
        </div>
   
    </div>
</div>
  )
}

export default TopbarMobile