import React from 'react'
import HeroPage from './HeroPage'
import Footer from './Footer'

const ProductPage = () => {
  return (
    <>
    
    <HeroPage/>
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-3 py-2 uppercase">
          Our Products
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-7xl mt-10 lg:mt-20 tracking-wide font-bold ">
          Easily Build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text ">
            Your Code
          </span>{" "}
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div className="transition duration-300 hover:scale-105 hover:bg-gray-100 p-4 rounded-lg">
  <h5 className="mt-1 mb-6 text-2xl font-bold font-inter">
    {feature.text}
  </h5>
  <p className="text-md p-2 mb-10 text-neutral-500 text-[20px] font-inter">
    {feature.description}
  </p>
</div>

            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default ProductPage

const features = [
    {
      
      text: "Drag-and-Drop Interface",
      description:
        "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
    },
    {
      
      text: "Multi-Platform Compatibility",
      description:
        "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
    },
    {
      
      text: "Built-in Templates",
      description:
        "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
    },
    {
      
      text: "Real-Time Preview",
      description:
        "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
    },
    {
      
      text: "Collaboration Tools",
      description:
        "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
    },
    {
      
      text: "Analytics Dashboard",
      description:
        "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
    },
  ];
  