import React from 'react'

const page = () => {
  return (
    <div className='h-full w-full px-10 py-14 mt-10 overflow-auto mb-16  flex flex-col gap-4  text-stone-950  bg-gray-200'>
      <div className=' bg-white h-[84px] w-full flex items-center gap-2 px-4'>
        <div className=' h-10 w-10 bg-gray-500 rounded-full '>

        </div>
        <div>
          <p className=' font-bold'>ห้องแชทชั้น 6</p>
          <p className=' text-gray-400'>วันนี้กินอะไรดี</p>
        </div>
      </div>

      <div className=' bg-white h-[84px] w-full flex items-center gap-2 px-4'>
        <div className=' h-10 w-10 bg-gray-500 rounded-full '>

        </div>
        <div>
          <p className=' font-bold'>นิติบุคคล</p>
          <p className=' text-gray-400'>จ่ายบิลยังไง</p>
        </div>
      </div>


    </div>
  )
}

export default page