import React from 'react';

function Footer() {
 return (
    <div className='flex gap-5 w-full h-screen bg-zinc-900 p-20 font-["Founders_Grotesk_X-Condensed"]'>
      <div className='w-1/2 h-full flex flex-col justify-between'>
        <div className='heading'>
          <h1 className='text-[7vw] font-semibold uppercase leading-none mb-[-10]'>Eye-</h1>
          <h1 className='text-[7vw] font-semibold uppercase leading-none mb-[-10]'>Oppenning</h1>
        </div>
      </div>
      <div className='w-1/2'></div>
      <div>
        <h1 className='text-[5vw] font-semibold uppercase leading-none mb-[-10]'>Presentations</h1>
      </div>
    </div>
 );
}

export default Footer;
