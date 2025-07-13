import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
        <a href="#top" className="py-2.5">Raja Fulara</a>
        <div className='w-max flex items-center gap-2 mx-auto'>
        <Image src={isDarkMode? assets.mail_icon_dark: assets.mail_icon} alt='mail_icon' className='w-6'/>
        rajafulara.rf@gmail.com
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
          <p>© 2025 Raja Fulara. All rights reserved.</p>
          <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                <li><a href="https://www.linkedin.com/in/rajafulara/" target="_blank">LinkedIn</a></li>
                <li><a href="https://github.com/rajafulara/" target="_blank">GitHub</a></li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Footer
