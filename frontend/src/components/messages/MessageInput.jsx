import React from 'react'
import { BiSend } from 'react-icons/bi'
export default function MessageInput() {
   
  return (
    <div>
        <form className='px-4 my-3' >
            <div className='w-full relative'>
                <input type="text" placeholder='enter message' className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white ' />
                <button className='absolute inset-y-0 end-0 flex items-center pe-3 text-white'>
                <BiSend/>
                </button>
            </div>

        </form>
    </div>
  )
}
