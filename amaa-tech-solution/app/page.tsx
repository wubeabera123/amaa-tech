// 1. app/page.jsx (Home page using App Router)
'use client'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { TypeAnimation } from 'react-type-animation'
import { useRouter } from 'next/navigation'
import {
  FaRocket,
  FaUsers,
  FaHeadset,
  FaHandshake,
  FaGlobe,
  FaSmile
} from 'react-icons/fa'
// import video from '@/assets/vid/hero.mp4'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            src={"/assets/vid/hero.mp4"}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4"
          data-aos="fade-down"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <TypeAnimation
              sequence={['Amaa Tech Solutions:', 1500, 'Code. Create. Empower.', 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Transforming ideas into impactful digital solutions for a better tomorrow.
          </p>
        </div>
      </section>

      <section className="mb-16 px-6 md:px-20 lg:pb-16 md:pb-8 pb-4 lg:pt-16 md:pt-8 pt-4" data-aos="fade-up ">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-300">
          Why Choose Amaa Tech Solutions?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            [<FaRocket className="text-blue-600 text-4xl" />, 'Fast Delivery', 'We prioritize efficiency without compromising quality.'],
            [<FaUsers className="text-blue-600 text-4xl" />, 'Expert Developers', 'Our team is dedicated to crafting scalable solutions.'],
            [<FaHeadset className="text-blue-600 text-4xl" />, 'Ongoing Support', 'We provide continuous support for your success.'],
          ].map(([icon, title, desc], idx) => (
            <div
              key={idx}
              className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                {icon}
                <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
              </div>
              <p className="text-sm text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 px-6 md:px-20" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-300">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            [<FaHandshake className="text-blue-400 text-5xl" />, '2+', 'Partner Companies'],
            [<FaSmile className="text-blue-400 text-5xl" />, '10+', 'Satisfied Clients'],
            [<FaGlobe className="text-blue-400 text-5xl" />, '2+', 'Countries Served'],
          ].map(([icon, number, label], i) => (
            <div key={i}>
              <div className="mb-4">{icon}</div>
              <h3
                className="text-5xl font-bold text-blue-400"
                data-aos="zoom-in"
                data-aos-delay={`${200 * (i + 1)}`}
              >
                {number}
              </h3>
              <p className="text-gray-300">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 px-6 md:px-20" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-300">
          What Happy Customers Are Saying About Us!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Alex Teka',
              position: 'Manager at Orbit Digital Solution',
              feedback: 'Amaa Tech Solutions delivered our project on time with exceptional quality. Highly recommended!',
            },
            {
              name: 'Yosisa Kebede',
              position: 'CEO at Nile Tech',
              feedback: 'Their team is highly skilled and professional. They transformed our ideas into reality.',
            },
            {
              name: 'Bereket Janje',
              position: 'Musician and Producer',
              feedback: 'Their creative solutions helped us reach a wider audience. Truly outstanding service!',
            },
          ].map(({ name, position, feedback }, idx) => (
            <div
              key={idx}
              className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              <p className="text-gray-700 italic mb-4">"{feedback}"</p>
              <h3 className="text-lg font-semibold text-blue-700">{name}</h3>
              <p className="text-sm text-gray-500">{position}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center pb-6 px-6 md:px-20" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4 text-blue-300">Ready to build the future?</h2>
        <p className="text-lg text-gray-300 mb-8">
          Let’s collaborate and create something extraordinary together.
        </p>
        <button
          onClick={() => router.push('/services')}
          className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </button>
      </section>
    </div>
  )
}
