import React from "react";
import axios from "axios";
import { useState } from "react";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      alert(response.data.message);
      setFormData({ fullName: '', phoneNumber: '', email: '' });
    } catch (error) {
      alert('Error submitting the form');
      console.error(error);
    }
  };


  return (
    <div className="min-h-screen flex flex-col sm:flex-row md:flex-row items-center justify-center bg-servicesBg">
      <div className="mx-20">
        <h1 className="text-white font-bold text-[60px] font-inter leading-tight">
          The form that starts <br/> smarter growth.
        </h1>
        <p className="text-white my-4 mb-6 font-inter text-[20px]">Let’s turn your ideas into action.</p>
        
        <p className="text-white font-inter text-[20px]">
          Whether it’s AI, marketing, or HubSpot mastery, we’re ready to
          simplify the complex and supercharge your growth.
        </p>
        <p className="text-white font-inter my-6 text-[20px]">Drop us a line, and let’s make it happen!</p>
      </div>
      <div className="bg-servicesBg p-10 rounded-lg shadow-lg max-w-lg w-full">
      <h1 className="text-white text-3xl font-bold mb-2">Get in Touch</h1>
      <p className="text-white text-base mb-6">
        We will contact you as soon as possible
      </p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="text-white block font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
            required
          />
        </div>
        <div>
          <label className="text-white block font-medium mb-1">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
            required
          />
        </div>
        <div>
          <label className="text-white block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-bold py-2 rounded-md hover:bg-orange-600"
        >
          Connect Now
        </button>
      </form>
    </div>
    </div>
  );
};

export default ContactForm;
