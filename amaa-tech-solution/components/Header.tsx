'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Header = () => {
  const router = useRouter()
  const [careerDropdown, setCareerDropdown] = useState(false)
  const [mobileCareerDropdown, setMobileCareerDropdown] = useState(false)
  const dropdownRef = useRef(null)

  const handleOutsideClick = (e: MouseEvent) => {
    if (dropdownRef.current && !(dropdownRef.current as any).contains(e.target)) {
      setCareerDropdown(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <header className="bg-gradient-to-r from-blue-800 via-blue-900 to-black text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => router.push('/')}>
          <Image width={50} height={50} src="/amaaTech.png" alt="Amaa Tech Solutions Logo" className=" mr-3 bg-white rounded-2xl" />
          <span className="hidden md:block text-2xl font-bold text-blue-400">Amaa Tech Solutions</span>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex space-x-6 relative">
          {[
            ['/', 'Home'],
            ['/services', 'Services'],
            ['/tutorials', 'Tutorials'],
            ['/about', 'About']
          ].map(([path, label]) => (
            <button key={label} onClick={() => router.push(path)} className="hover:text-blue-400 transition duration-300">
              {label}
            </button>
          ))}
          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setCareerDropdown(!careerDropdown)} className="hover:text-blue-400 transition duration-300">
              Career
            </button>
            {careerDropdown && (
              <div className="absolute top-full left-0 bg-blue-900 text-white shadow-lg rounded-md mt-2 z-50">
                {['internships', 'jobs', 'invest'].map((slug) => (
                  <button
                    key={slug}
                    onClick={() => router.push(`/career/${slug}`)}
                    className="block px-4 py-2 hover:bg-blue-700 transition duration-300"
                  >
                    {slug.charAt(0).toUpperCase() + slug.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </div>
          
        </nav>
         <button
          onClick={() => router.push('/services')}
          className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 md:block hidden"
        >
          Get Started
        </button>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => {
              const menu = document.getElementById('mobile-menu')
              if (menu) menu.classList.toggle('hidden')
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="hidden md:hidden text-white pb-4 px-2">
        {[
          ['/', 'Home'],
          ['/services', 'Services'],
          ['/tutorials', 'Tutorials'],
          ['/about', 'About']
        ].map(([path, label]) => (
          <button key={label} onClick={() => router.push(path)} className="block px-4 py-2 hover:bg-blue-700">
            {label}
          </button>
        ))}
        <div className="block px-4 py-2 hover:bg-blue-700">
          <button onClick={() => setMobileCareerDropdown(!mobileCareerDropdown)} className="block w-full text-left">
            Career
          </button>
          {mobileCareerDropdown && (
            <div className="pl-4">
              {['internships', 'jobs', 'invest'].map((slug) => (
                <button
                  key={slug}
                  onClick={() => router.push(`/career/${slug}`)}
                  className="block px-4 py-2 hover:bg-blue-900 transition duration-300"
                >
                  {slug.charAt(0).toUpperCase() + slug.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>
         <button
          onClick={() => router.push('/services')}
          className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 "
        >
          Get Started
        </button>
      </div>
    </header>
  )
}

export default Header
