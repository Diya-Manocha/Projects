import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import qoute from "../assets/qoute.webp";
import stars from "../assets/stars.webp";

const Testimonials = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 1,
    speed: 500,
  };

  const data = [
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      name: "Lido Advisor",
      country: "USA",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      name: "John Doe",
      country: "UK",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      name: "Jane Smith",
      country: "Canada",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      name: "Jane Smith",
      country: "Canada",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      name: "Jane Smith",
      country: "Canada",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      name: "Jane Smith",
      country: "Canada",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      name: "Jane Smith",
      country: "Canada",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      name: "Jane Smith",
      country: "Canada",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      name: "Jane Smith",
      country: "Canada",
    },
  ];

  return (
    <div className="bg-servicesBg h-screen flex flex-col items-center">
      <h3 className="text-white font-bold text-[30px] mt-8">Testimonials</h3>
      <h1 className="text-white font-bold text-[60px]">Our Client Feedback</h1>
      <div className="mt-5 w-3/4">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div
              key={index}
              className="bg-white p-6 mb-8 mx-[24px] mt-[24px] rounded-lg shadow-lg text-center h-[350px]"
            >
              <img
                src={qoute}
                alt="Quote Icon"
                className="mx-auto mb-4 mt-8 h-[24px]"
              />
              <p className="text-gray-600 italic mb-4">{d.text}</p>
              <img
                src={stars}
                alt="Stars Rating"
                className="mx-auto mb-4 mt-8 h-[20px]"
              />
              <p className="font-bold text-lg">{d.name}</p>
              <p className="text-gray-500">{d.country}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
