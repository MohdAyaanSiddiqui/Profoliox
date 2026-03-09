'use client'
import React from "react";
import useNavigate from "react-dom"
const page = () => {

  const [mobileOpen, setMobileOpen] = React.useState(false);
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&display=swap');
          h1{
            font-family: "Ibarra Real Nova", serif;
          }
          p, a, button{
            font-family: 'Inter', sans-serif;
          }
        `}
      </style>
      <header className='flex min-h-screen mt-10 flex-col items-center bg-[#0C0414] text-white pb-4 md:pb-0'>

        <div className="p-px rounded-full bg-linear-to-r from-indigo-900 to-[#5F5F5F] mt-32">
          <div className="flex flex-wrap items-center justify-center gap-2 p-2 px-4 rounded-full bg-[#0C0414]">
            <p className="text-sm text-slate-200">⚡ AI-Powered Portfolio Generator</p>
          </div>
        </div>

        <h1 className="text-4xl md:text-[66px]/[72px] text-center max-w-4xl mt-6 bg-linear-to-r from-[#231233] via-[#F5F5F5] to-[#231233] text-transparent bg-clip-text leading-tight px-4">
          Design, Build & Launch Portfolio with AI in Minutes
        </h1>
        <p className="text-sm md:text-base bg-linear-to-r from-[#231233] via-[#F5F5F5] to-[#231233] text-transparent bg-clip-text text-center max-w-lg mt-4 px-4">
          Create production-ready Portfolio instantly with AI-generated layouts, code and design systems.
        </p>

        <div className='flex gap-3 mt-7'>
          <button className="bg-white hover:bg-white/80 border border-white/5 text-gray-900 text-xs md:text-sm px-6 py-3 rounded-lg transition cursor-pointer">
            Get in touch
          </button>
        </div>

        <div className="relative mt-12 w-full max-w-5xl px-4">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-4/5 md:w-[600px] lg:w-[800px] h-28 bg-[#D043FF] blur-[60px] opacity-100 z-0"></div>
          <img className="relative z-10 max-h-64 md:max-h-90 w-full object-cover object-top" src="HeroPort.jpeg" alt="" />
        </div>
      </header>
    </>
  )
}

export default page