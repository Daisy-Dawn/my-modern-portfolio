'use client'
import '../../app/globals.css'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { RiCloseLargeLine } from 'react-icons/ri'

const Header = () => {
    const [activeSection, setActiveSection] = useState('')
    const [toggle, setToggle] = useState(false)
    const [componentMount, setComponentMount] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]')
            let currentSection = ''

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect()
                if (rect.top <= 100 && rect.bottom >= 100) {
                    currentSection = section.id
                }
            })

            setActiveSection(currentSection || '')
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id: string) => {
        const target = document.getElementById(id)
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const handleToggle = () => {
        setToggle(!toggle) // Toggle between showing and hiding the navbar
        if (!componentMount) {
            setComponentMount(true) // Set componentMount to true when toggle is first triggered
        }
    }

    const navLinks = [
        { title: 'About', key: 'about' },
        { title: 'Services', key: 'services' },
        { title: 'Skills', key: 'skills' },
        { title: 'Portfolio', key: 'portfolio' },
        { title: 'contact us', key: 'contact' },
    ]
    return (
        <div className="flex font-open_sans text-lemonGreen sticky shadow-md top-0 w-full z-[20] bg-background justify-between px-3 lg:px-[3rem]  items-center h-[70px] ">
            {/* logo  lg:px-0 lg:justify-around */}
            <div className=" flex items-center gap-1">
                {/* border-[2px]  border-lightBg  */}
                <div className="w-[40px] h-[40px] flex justify-center items-center bg-darkGrey rounded-full">
                    <Image
                        className="w-[35px] h-[35px] object-contain"
                        src="/images/logo.png"
                        alt="app logo image"
                        width={35}
                        height={35}
                    />
                </div>
                <h2 className="text-primary font-playwrite text-[13px] font-medium">
                    Daisy Dawn Concepts
                </h2>
            </div>

            {/* links */}
            <div className="rounded-md hidden lg:flex p-[2px] gap-2 ">
                {navLinks.map((link) => (
                    <button
                        key={link.key}
                        onClick={() => scrollToSection(link.key)}
                        className={`px-[20px] capitalize text-center py-[8px] ${
                            activeSection === link.key ? 'bg-darkGrey' : ''
                        }`}
                    >
                        {link.title}
                    </button>
                ))}
                <a
                    href="/doc/my_resume.pdf" // Path to the CV file in the public folder
                    download // Allows the file to be downloaded
                    className={`px-[20px] capitalize text-center py-[8px] bg-darkGrey hover:bg-background transition-all duration-100 hover:border-[1px] hover:border-darkGrey text-white hover:text-foreground`}
                >
                    Download CV
                </a>
            </div>

            {/* RESPONSIVENESS */}

            {/* {toggle && (
                <div className="fixed inset-0 bg-black md:bg-opacity-50 bg-opacity-30"></div>
            )} */}

            <span
                className="absolute right-[2rem] lg:hidden"
                onClick={handleToggle}
            >
                {toggle ? (
                    <RiCloseLargeLine />
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                )}
            </span>
            {/*  */}
            <div
                className={`flex flex-col ${
                    !componentMount && !toggle
                        ? 'hidden'
                        : toggle && componentMount
                        ? 'slide-in-left'
                        : 'slide-out-left'
                } items-start justify-start glass-background opacity-50 bg-background  absolute top-[70px] py-[30px] left-0  z-10 w-[65%] md:w-[45%] h-dvh nav shadow-lg transition-all duration-300 gap-4 lg:hidden`}
            >
                {navLinks.map((link) => (
                    <button
                        key={link.key}
                        onClick={() => {
                            scrollToSection(link.key)
                            handleToggle() // Ensure toggle happens here as well
                        }}
                        className={`px-[20px] capitalize text-lightBg text-center py-[8px] ${
                            activeSection === link.key ? 'bg-darkGrey' : ''
                        }`}
                    >
                        {link.title}
                    </button>
                ))}
                <a
                    onClick={handleToggle}
                    href="/doc/my_resume.pdf" // Path to the CV file in the public folder
                    download // Allows the file to be downloaded
                    className={`px-[20px] capitalize text-center py-[8px]  bg-darkGrey text-foreground `}
                >
                    Download CV
                </a>
            </div>
        </div>
    )
}

export default Header
