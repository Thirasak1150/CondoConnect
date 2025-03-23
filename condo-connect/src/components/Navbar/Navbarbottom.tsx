import { Bell, House, PhoneIncoming, ReceiptText, Settings } from 'lucide-react'
import React from 'react'

const Navbarbottom = () => {
  return (
    <div className=' fixed bottom-0 z-10  w-full h-[64px] shadow-t-64  bg-white flex shadow-t-14  '>
    <div className=' flex text-black  w-full justify-between items-center gap-4 px-6   '>
        <div>
           <House />
        </div>
        <div className=' relative'>
            <ReceiptText />
            <div className=' absolute bottom-4 left-4 bg-red-400 p-1 text-white w-5 h-5 flex items-center justify-center rounded-full'>
              <p className=' text-white'>2</p>
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

export default Navbarbottom