// app/(public)/services/page.tsx
'use client'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  FaLaptopCode,
  FaMobileAlt,
  FaChalkboardTeacher,
  FaTools,
} from 'react-icons/fa'
import { StaticImageData } from 'next/image'

// Use public folder instead of importing media directly
const services = [
  {
    title: 'Full-Stack Web App Development',
    description:
      'We build fast, scalable, and secure web applications tailored to your business needs using the latest technologies.',
    icon: <FaLaptopCode className="text-5xl text-blue-600" />,
    image: '/images/WebDevelopement.jpg',
  },
  {
    title: 'Mobile App Development',
    description:
      'We craft responsive, elegant, and powerful mobile apps for Android and iOS platforms using Flutter and React Native.',
    icon: <FaMobileAlt className="text-5xl text-blue-600" />,
    image: '/images/mobileAppDevelopement.jpg',
  },
  {
    title: 'Tutorials & Career Development',
    description:
      'We provide high-quality learning content and mentorship in web development, mobile apps, graphics, and video editing.',
    icon: <FaChalkboardTeacher className="text-5xl text-blue-600" />,
    image: '/images/tutorials.jpg',
  },
  {
    title: 'Coming Soon: Tech Tools & More',
    description:
      'We’re always innovating. Stay tuned for custom tools, platforms, and APIs to support Africa’s digital transformation.',
    icon: <FaTools className="text-5xl text-blue-600" />,
    image: '/images/toolsImg.jpg',
  },
]

export default function ServicesPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <div className="relative min-h-screen bg-white">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/vid/servicesBg.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover brightness-50 blur-sm"
        ></video>
        <div className="absolute inset-0 opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-20 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12" data-aos="fade-down">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-30 shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300"
              data-aos="fade-up"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center gap-4 mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
