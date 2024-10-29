
import React from 'react'
import { assets } from '../assets/assets.js'

const Footer = () => {
  return (
    <div>
    <div className=' flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
   <div>
  <img src={assets.th22} className='mb-5 w-32' alt=''/>
  <p className='w-full md:w-2/3 text-gray-600'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aliquid molestias cumque quam, distinctio perferendis.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aliquid molestias cumque quam, distinctio perferendis?
  </p>
  </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
<li>Home</li>
<li>About us</li>
<li>Delivery</li>
<li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUGH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
         <li>+1-212-456-7890</li>
        <li> cotact@foreveryou.com</li>
            </ul>
        </div>

        </div>
         <div>
       <hr/>
       <p className='py-5 text-sm text-center'>Copyright 2024@ forev.com - All-Right-Resarved</p> 
    </div>
    </div>
  )
}

export default Footer