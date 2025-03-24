import React from "react";

const HomePage = () => {
  // New color palette
  // Primary: #2A4365 (Deep Blue)
  // Secondary: #ED8936 (Warm Orange)
  // Accent: #48BB78 (Fresh Green)
  // Light: #F7FAFC (Off-White)
  // Dark: #1A202C (Almost Black)

  return (
    <div className="font-sans text-[#1A202C] bg-[#F7FAFC]">
      {/* Header with full-width hero image */}
      <header className="relative">
        <div
          className="h-screen bg-cover bg-center"
          style={{
            backgroundImage: "url(/path/to/featured-image.jpg)",
            backgroundColor: "#2A4365", // Fallback
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#2A4365] opacity-60"></div>

          {/* Navbar - Floating on top of hero */}
          <nav className="relative z-10 px-8 py-6 flex justify-between items-center">
            <div className="text-white text-2xl font-bold">LOGO</div>
            <ul className="hidden md:flex space-x-8">
              <li>
                <a
                  href="#home"
                  className="text-white hover:text-[#ED8936] font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-white hover:text-[#ED8936] font-medium"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white hover:text-[#ED8936] font-medium"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white hover:text-[#ED8936] font-medium"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white hover:text-[#ED8936] font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="flex space-x-4">
              <button className="bg-[#ED8936] text-white px-5 py-2 rounded-md hover:bg-opacity-90 transition">
                Login
              </button>
              <button className="bg-transparent border-2 border-white text-white px-5 py-2 rounded-md hover:bg-white hover:text-[#2A4365] transition">
                Sign Up
              </button>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Your Vision, Our Expertise
              </h1>
              <p className="text-xl text-white mb-8">
                We bring your ideas to life with premium materials and expert
                craftsmanship
              </p>
              <button className="bg-[#ED8936] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-opacity-90 transition mr-4">
                Explore Our Services
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-[#2A4365] transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Introduction with feature boxes */}
      <section className="py-24 px-8 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-12">
              <h2 className="text-3xl font-bold mb-6 text-[#2A4365]">
                Welcome to Our Company
              </h2>
              <p className="text-lg mb-8 leading-relaxed text-gray-700">
                We provide high-quality decoration materials, personalized
                designs, and professional execution, all under one roof, making
                it easy to bring your vision to life with our award-winning
                expertise.
              </p>
              <button className="bg-[#2A4365] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition inline-flex items-center">
                Learn More About Us
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-[#F7FAFC] p-6 rounded-lg border-l-4 border-[#ED8936] shadow-md">
                <div className="text-[#ED8936] mb-4">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">10+ Years</h3>
                <p className="text-gray-600">Experience in the industry</p>
              </div>
              <div className="bg-[#F7FAFC] p-6 rounded-lg border-l-4 border-[#48BB78] shadow-md">
                <div className="text-[#48BB78] mb-4">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">5 Facilities</h3>
                <p className="text-gray-600">Across the country</p>
              </div>
              <div className="bg-[#F7FAFC] p-6 rounded-lg border-l-4 border-[#2A4365] shadow-md">
                <div className="text-[#2A4365] mb-4">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">50+ Experts</h3>
                <p className="text-gray-600">Professional team</p>
              </div>
              <div className="bg-[#F7FAFC] p-6 rounded-lg border-l-4 border-[#ED8936] shadow-md">
                <div className="text-[#ED8936] mb-4">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">200+ Projects</h3>
                <p className="text-gray-600">Successfully completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services with overlapping cards */}
      <section className="py-24 px-8 bg-[#F7FAFC] relative">
        <div className="absolute top-0 right-0 w-1/3 h-64 bg-[#ED8936] opacity-10 rounded-bl-full"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-[#2A4365]">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of services to meet all your needs,
              from design to installation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl">
              <div className="h-48 bg-[#2A4365] relative">
                <div className="absolute bottom-0 left-0 bg-[#ED8936] text-white font-bold py-2 px-4">
                  Design
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#2A4365]">
                  Premium Design
                </h3>
                <p className="mb-4 text-gray-600">
                  Personalized interior design solutions tailored to your
                  preferences and lifestyle. Our expert designers create spaces
                  that reflect your unique style.
                </p>
                <a
                  href="#"
                  className="text-[#ED8936] font-medium flex items-center"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl">
              <div className="h-48 bg-[#2A4365] relative">
                <div className="absolute bottom-0 left-0 bg-[#48BB78] text-white font-bold py-2 px-4">
                  Materials
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#2A4365]">
                  Quality Materials
                </h3>
                <p className="mb-4 text-gray-600">
                  High-end materials sourced from sustainable suppliers for
                  durability and aesthetics. We never compromise on quality.
                </p>
                <a
                  href="#"
                  className="text-[#48BB78] font-medium flex items-center"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl">
              <div className="h-48 bg-[#2A4365] relative">
                <div className="absolute bottom-0 left-0 bg-[#ED8936] text-white font-bold py-2 px-4">
                  Installation
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#2A4365]">
                  Expert Installation
                </h3>
                <p className="mb-4 text-gray-600">
                  Professional team of craftsmen ensuring flawless execution of
                  your project. We pride ourselves on attention to detail.
                </p>
                <a
                  href="#"
                  className="text-[#ED8936] font-medium flex items-center"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project showcase */}
      <section className="py-24 px-8 bg-[#2A4365] text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Recent Projects</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Take a look at some of our recent work and see the quality we
              deliver to our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-gray-300 h-64 rounded-lg overflow-hidden"></div>
            <div className="bg-gray-300 h-64 rounded-lg overflow-hidden"></div>
            <div className="bg-gray-300 h-64 rounded-lg overflow-hidden"></div>
            <div className="bg-gray-300 h-64 rounded-lg overflow-hidden"></div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-[#ED8936] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-opacity-90 transition">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials with cards */}
      <section className="py-24 px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-[#2A4365]">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Hear what our clients have to say
              about working with us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F7FAFC] p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#2A4365] rounded-full mr-4"></div>
                <div>
                  <p className="font-bold text-[#2A4365]">Sarah Johnson</p>
                  <p className="text-gray-600">Residential Client</p>
                </div>
                <div className="ml-auto text-[#ED8936]">
                  <svg
                    className="w-5 h-5 inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5 inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5 inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5 inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg mb-4 text-gray-700">
                "The team delivered beyond our expectations. The quality of
                materials and workmanship has transformed our space completely.
                Would highly recommend to anyone looking for quality design and
                execution."
              </blockquote>
              <p className="text-[#ED8936] font-medium">
                Residential Renovation Project
              </p>
            </div>
            <div className="bg-[#F7FAFC] p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#2A4365] rounded-full mr-4"></div>
                <div>
                  <p className="font-bold text-[#2A4365]">Mark Williams</p>
                  <p className="text-gray-600">Commercial Client</p>
                </div>
                <div className="ml-auto text-[#ED8936]">
                  <svg
                    className="w-5 h-5 inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5 inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5 inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5 inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg mb-4 text-gray-700">
                "Professional from start to finish. Their attention to detail
                and commitment to our vision made all the difference. Our office
                space now reflects our brand perfectly."
              </blockquote>
              <p className="text-[#ED8936] font-medium">
                Office Redesign Project
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A202C] text-white py-12">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold">LOGO</h3>
              <p className="mt-4 text-gray-400">
                © {new Date().getFullYear()} Your Company. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#ED8936]">
                Home
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ED8936]">
                About
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ED8936]">
                Services
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ED8936]">
                Projects
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ED8936]">
                Contact
              </a>
            </div>
            <div className="flex space-x-4 mt-8 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#ED8936]">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.5.58-2.3.69a4.1 4.1 0 001.8-2.26 8.2 8.2 0 01-2.6 1 4.1 4.1 0 00-7 3.74A11.66 11.66 0 013 4.79a4.1 4.1 0 001.27 5.47 4.1 4.1 0 01-1.86-.51v.05a4.1 4.1 0 003.3 4 4.1 4.1 0 01-1.85.07 4.1 4.1 0 003.83 2.85A8.24 8.24 0 012 18.58 11.62 11.62 0 008.29 20c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.35-.02-.53A8.32 8.32 0 0022.46 6z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ED8936]">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 2.87 8.16 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.92.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.26-.45-1.29.1-2.69 0 0 .84-.27 2.75 1.02a9.53 9.53 0 012.5-.34c.85 0 1.7.11 2.5.34 1.9-1.3 2.75-1.02 2.75-1.02.55 1.4.2 2.43.1 2.69.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.93.68 1.88 0 1.36-.01 2.46-.01 2.8 0 .26.18.58.69.48A9.97 9.97 0 0022 12c0-5.5-4.46-9.96-10-9.96z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ED8936]">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.5 3h-15A2.5 2.5 0 002 5.5v13A2.5 2.5 0 004.5 21h15a2.5 2.5 0 002.5-2.5v-13A2.5 2.5 0 0019.5 3zm-8 14H7v-6h4.5v6zm-2.25-7.5a2.25 2.25 0 112.25-2.25 2.25 2.25 0 01-2.25 2.25zm9.75 7.5h-4.5v-3c0-.75-.03-1.72-1.05-1.72s-1.2.82-1.2 1.67v3.05H9.75v-6h4.32v.82h.06a4.74 4.74 0 014.26-2.34c4.56 0 5.4 3 5.4 6.9v3.72z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
