import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
function LandingPage(){
    return (
     <div data-scroll-speed="-.9"className="w-full h-screen bg-zinc-900 pt-1">
            <div className='textstructure mt-52 px-20'>
                {["WE Create", "Eye Opening", "Presentation"].map((item, index)=>{
                return (
                 <div className="masker">
                    <div className="w-fit flex items-center">
                     {index === 1 && (
                     <motion.div 
                     initial={{width: 0}}
                      animate={{width: "9vw"}} 
                      transition={{ease:[.0001, 0, 1.5, 1.5], duraion: 2, delay: 0.5}} 
                      className="mr-[1vw] w-[8vw] h-[5vw] rounded-md">
                         <img src="/images/img-3.png" alt="description_of_image" className="w-[10vw] h-[5vw] object-cover" />
                      </motion.div>)}  
                        <h1 className="text-[7.5vw] leading-[6.2vw] tracking-tighter uppercase font-[''] font-medium">
                            {item}
                         </h1>
                    </div>
                 </div> 
                );
            })}
            <div className="border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-5 px-18">
                {[
                    "For Public and private companies",
                     "From the first pitch to IPO"
                ].map((item, index)=>(
                <p className="text-md font-light tracking-tight leading-none">{item}</p>
                ))}
                <div className="start flex items-center gap-5">
                    <div className="px-4 py-2 border-[1px] border-zinc-400 font-light text-sm uppercase rounded-full">Start the project</div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-300">
                        <span className='rotate-[45deg]'>
                        <FaArrowUpLong />
                        </span>
                    </div>
                   
                </div>
            </div>
             </div>
     </div>
    )}
export default LandingPage