import { Bell, House, PhoneIncoming, ReceiptText, Settings } from 'lucide-react'
import React from 'react'

const BottombarMobile = () => {
  return (
    <div className=' fixed bottom-0 z-10  w-full h-[64px] shadow-t-64  bg-white flex shadow-t-14  '>
        <div className=' flex text-black  w-full justify-between items-center gap-4 px-6   '>
            <div>
               <House />
            </div>
            <div>
            <ReceiptText />
            <div>
              <p className=' text-red-400'>2</p>
            </div>
            </div>
            <div>
            <PhoneIncoming />
            </div>
            <div>
            <Bell />
            </div>
            <div>
            <Settings />
            </div>
        </div>
    </div>
  )
}

export default BottombarMobile