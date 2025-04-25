import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
};
const Articles = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-6 mb-[50px]">
      <h5 className="text-servicesBg text-5xl font-semibold">Articles</h5>
      <h1 className="text-articleClr text-[62px] font-semibold">
        Latest Articles & Blogs
      </h1>

      <div className="w-3/4 m-auto">
        <div className="mt-20">
          <Slider {...settings}>
            {data.map((d, index) => (
              <div key={index} className="border p-4 mb-6 rounded-lg shadow-md">
                <div className="h-60 w-full bg-gray-200 mb-4"></div>
                <div>
                  <p className="text-gray-600">{d.date}</p>
                  <p className="text-lg font-medium my-2">{d.text}</p>
                  <button className="text-menuBtn font-semibold">
                    {d.button1}
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Articles;

const data = [
  {
    date: `09 Dec 2024`,
    text: `Guide to Visas and Funding to Study in the UK`,
    button1: `Read More`,
  },
  {
    date: `09 Dec 2024`,
    text: `Guide to Visas and Funding to Study in the UK`,
    button1: `Read More`,
  },
  {
    date: `09 Dec 2024`,
    text: `Guide to Visas and Funding to Study in the UK`,
    button1: `Read More`,
  },
  {
    date: `09 Dec 2024`,
    text: `Guide to Visas and Funding to Study in the UK`,
    button1: `Read More`,
  },
  {
    date: `09 Dec 2024`,
    text: `Guide to Visas and Funding to Study in the UK`,
    button1: `Read More`,
  },
  {
    date: `09 Dec 2024`,
    text: `Guide to Visas and Funding to Study in the UK`,
    button1: `Read More`,
  },
  {
    date: `09 Dec 2024`,
    text: `Guide to Visas and Funding to Study in the UK`,
    button1: `Read More`,
  },
  {
    date: `09 Dec 2024`,
    text: `Guide to Visas and Funding to Study in the UK`,
    button1: `Read More`,
  },
  {
    date: `09 Dec 2024`,
    text: `Guide to Visas and Funding to Study in the UK`,
    button1: `Read More`,
  },
  {
    date: `09 Dec 2024`,
    text: `Guide to Visas and Funding to Study in the UK`,
    button1: `Read More`,
  },
];
