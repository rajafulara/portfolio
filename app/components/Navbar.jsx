import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {

    const [isScroll, setIsScroll]= useState(false)

    const sideMenuRef= useRef();
    const openMenu= ()=>{
        sideMenuRef.current.style.transform= 'translateX(-16rem)'
    }
    const closeMenu= ()=>{
        sideMenuRef.current.style.transform= 'translateX(16rem)'
    }

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(scrollY>50){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        })
    },[])

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt='' className='w-full'/>
    </div>
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll?"bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20":""}`}>
        <a href="#top" className="px-0 py-2.5 lg:px-10 lg:mr-[60px]">Portfolio</a>

            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll?"":"bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"}`}>
                <li><a href="#top">Home</a></li>
                <li><a href="#about">About me</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#work">My work</a></li>
                <li><a href="#contact">Contact me</a></li>
            </ul>

            <div className='flex items-center gap-4 lg:px-10 lg:ml-[100px]'>

                <button onClick={()=> setIsDarkMode(prev=> !prev)}>
                    <Image src={isDarkMode?assets.sun_icon: assets.moon_icon} alt='' className='w-6'/>
                </button>

                <button className='block md:hidden ml-3' onClick={openMenu}>
                    <Image src={isDarkMode? assets.menu_white: assets.menu_black} alt='' className='w-6'/>
                </button>
            </div>

            {/* mobile menu */}
            <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>

                <div className='absolute right-6 top-6' onClick={closeMenu}>
                    <Image src={isDarkMode? assets.close_white: assets.close_black} alt='' className='w-5 cursor-pointer'/>
                </div>

                <li><a onClick={closeMenu} href="#top">Home</a></li>
                <li><a onClick={closeMenu} href="#about">About me</a></li>
                <li><a onClick={closeMenu} href="#services">Services</a></li>
                <li><a onClick={closeMenu} href="#work">My work</a></li>
                <li><a onClick={closeMenu} href="#contact">Contact me</a></li>
            </ul>
            
        </nav>
    </>
  )
}

export default Navbar