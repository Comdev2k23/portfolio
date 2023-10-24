import React from 'react'
import {MdEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import Rick from '../assets/rick.jpg'

const Info = () => {
  return (
    <div className="flex flex-col justify-center ">
     <div className="flex flex-col justify-center self-center mt-12"> 
     <img className=' object-center h-48 w-60 border rounded-lg ' src={Rick} />
     </div>
      <div className="flex flex-col justify-center text-center text-black">
        <h3 className='text-3xl font-bold 
        pt-4 font-poppins'>Jhon Mark Ariata</h3>
        <p className='text-sm font-semibold font-poppins'>Frontend Developer</p>
        <p className='text-xs pt-3 
        font-semibold font-poppins'>jmba@gmail.com</p>
      </div>
      <div className="flex flex-wrap flex-row justify-center 
      text-white gap-2 p-3">
        <button className='flex flex-wrap outline outline-1 outline-black bg-white text-black font-semibold 
        rounded-lg py-3 px-5 hover:opacity-70 
        font-poppins'>
         <MdEmail className='h-6 w-5 inline-block mr-2' />Email
        </button>
        <button className='flex flex-wrap  bg-sky-700 font-semibold 
        rounded-lg py-3 px-5 hover:opacity-70 
        font-poppins'>
          <BsLinkedin className='h-6 w-5 inline-block mr-2' />Linkedln</button>
      </div>
    </div>
  )
}

export default Info