import React from 'react'

function Navbar() {
  return (
    <div className="fixed z-[999] w-full px-20 py-8 font-['Neue Montereals'] flex justify-between items-center">
      <div className='logo'>
      <img src="/images/img.png" alt="description_of_image" className="w-[15vw] h-[5vw] object-cover" />
      </div>
      <div className='links flex gap-10'>
        {["Services", "Our Contact", "About Us", "Insights", "contact"].map((item,index)=>(
            <a key={index} className={`text-lg capitalize font-light ${index === 4 && "ml-32"}`}>{item}</a>
        ))}
      </div>
    </div>
  )
}

export default Navbar