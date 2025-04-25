import React from 'react'
import services from '../assets/services.webp'


const Services = () => {
  return (
   <>
   <img className='h-[19.5rem] w-[27rem] mt-[66px] absolute mr-0 right-20' src={services} alt="" />
    <section className="bg-servicesBg text-white py-16 px-8 w-[75%]">
        <div className="max-w-4xl mx-auto ml-[66px] ">
          <h2 className="text-5xl font-bold mb-4 font-inter">Our Service</h2>
          <div className='bg-white h-1.5 w-[150px]  my-7'></div>
  
          <div className="space-y-8">
            {/* Service 1 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-white text-blue-900 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold font-inter">AI Solutions</h3>
                <p className="text-gray-300 font-inter">
                  AI for businesses ready to set the pace, not follow it.
                </p>
                <ul className="mt-2 space-y-1  font-inter">
                  <li>
                    <strong>AI Consulting:</strong> Strategies that turn data into decisions.
                  </li>
                  <li>
                    <strong>AI School:</strong> Build a workforce fluent in AI.
                  </li>
                  <li>
                    <strong>AI Upskilling:</strong> Turn your team into tech-savvy trailblazers.
                  </li>
                </ul>
              </div>
            </div>
  
            {/* Service 2 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold  font-inter">Growth Marketing</h3>
                <p className="text-gray-300">
                  Marketing built for game-changers and boundary-breakers.
                </p>
              </div>
            </div>
  
            {/* Service 3 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold  font-inter">HubSpot Expertise</h3>
                <p className="text-gray-300">
                  HubSpot solutions that don’t just work—they wow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
   </>
     
    );
  };


export default Services