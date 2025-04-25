// src/components/InnovatorsSection.jsx
import React from 'react';

const InnovatorsSection = () => {
  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">We are Innovators</h1>
        <p className="text-gray-600 mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type.
        </p>
        <button className="bg-menuBtn text-white py-2 px-6 rounded-md shadow-md hover:bg-orange-600">
          Let’s Talk Now
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white shadow-md rounded-md p-6 flex flex-col items-center">
            <h3 className="text-gray-900 text-2xl font-bold">60+</h3>
            <p className="text-gray-600">Satisfied Clients</p>
          </div>
          <div className="bg-white shadow-md rounded-md p-6 flex flex-col items-center">
            <h3 className="text-gray-900 text-2xl font-bold">1.5k+</h3>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="bg-white shadow-md rounded-md p-6 flex flex-col items-center">
            <h3 className="text-gray-900 text-2xl font-bold">14+</h3>
            <p className="text-gray-600">Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovatorsSection;
