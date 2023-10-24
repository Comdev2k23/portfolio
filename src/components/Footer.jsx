import React from 'react'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="flex flex-wrap text-3xl 
    justify-center pt-5 pb-4 gap-3 
    bg-slate-800 text-white">
      <FaTwitterSquare />
      <FaFacebookSquare />
      <FaInstagramSquare />
      <FaGithubSquare />
    </div>
  )
}

export default Footer