import React from 'react'

function About() {
  return (
    <div className="w-full p-20  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black ">
        <h1 className="font-['Neue_Montereal'] text-[4.5vw] leading-[3.5vw] tracking-tight">Ormo is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#97ab56] '>

          <div className=" w-1/2 ">
            <h1 className="text-5xl">Our Approach: </h1>
            <button className=" flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10  rounded-full text-white">Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full "></div> 
            </button>
          </div>
          <div className="w-1/2 h-[70vh] rounded-3xl bg-[#b0c858] overflow-hidden">
          <img src="/public/images/img-2.jpg" alt="description_of_image" className="w-.2 h-[70vh] object-cover" />
          </div>
        </div>
    </div> 
  )
}

export default About