import React from 'react'

const HeroPage = () => {
  return (
    <div className='h-screen w-full bg-black flex flex-col justify-center items-center '>
        <h1 className="text-white font-inter font-bold text-[37px] sm:text-[82px]">
    SimplifyComplexity
  </h1>
        <h3 className='font-inter text-white font-semibold text-[54px] mt-[-19px]'>& Amplify Results</h3>
        <div className='bg-menuBtn h-1.5 w-[150px] mx-auto my-7'></div>
        <p className='text-white mx-auto  font-normal text-center'>Growth with consultative next-gen AI solutions, marketing strategies, <br/>
        and expert HubSpot services for today’s fast-moving businesses.</p>
        <button className='  bg-menuBtn mb-6 mt-5 rounded-md text-white font-bold px-[18px] py-2 mx-auto'>Let's Talk Now</button>
    </div>
  )
}

export default HeroPage