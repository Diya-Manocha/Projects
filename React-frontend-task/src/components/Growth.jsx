import React from "react";
import growthImage from "../assets/growth-image.webp";
import backDesign from "../assets/back-design.webp";

const Growth = () => {
  return (
    <>
      <img
        className="h-[200px] w-auto absolute opacity-40 "
        src={backDesign}
        alt=""
      />
      <div className="flex flex-col items-center justify-center mt-20 mb-20">
        <h1 className="font-bold  font-inter text-[44px]">
          The Growth Playbook: 5 Wives and 1 Husband
        </h1>
        <h5 className="font-inter  text-[40px]">
          Because answers drive results.
        </h5>
        <div className="bg-menuBtn h-1.5 w-[150px] mx-auto my-7"></div>
        <p className="font-normal leading-tight text-center">
          At Nexveda, the 5 Wives and 1 Husband aren’t for drama—they’re for
          direction. We lay it all out: <br /> who, what, when, where, why, and
          how. The result? Clarity that simplifies complexity and <br />{" "}
          accelerates your growth.
        </p>
        <div className="flex flex-row flex-wrap gap-4 mt-6 ">
          <button className="bg-backBtn text-black font-bold px-10 py-2 rounded-md hover:bg-menuBtn hover:text-white active:bg-menuBtn active:text-white active:scale-95">
            Who
          </button>
          <button className="bg-backBtn text-black font-bold px-10 py-2 rounded-md hover:bg-menuBtn hover:text-white">
            What
          </button>
          <button className="bg-backBtn text-black font-bold px-10 py-2 rounded-md hover:bg-menuBtn hover:text-white">
            When
          </button>
          <button className="bg-backBtn text-black font-bold px-10 py-2 rounded-md hover:bg-menuBtn hover:text-white">
            Where
          </button>
          <button className="bg-backBtn text-black font-bold px-10 py-2 rounded-md hover:bg-menuBtn hover:text-white">
            Why
          </button>
          <button className="bg-backBtn text-black font-bold px-10 py-2 rounded-md hover:bg-menuBtn hover:text-white">
            How
          </button>
        </div>

        <div className="flex flex-row items-center justify-center gap-20 mt-20">
          <p className="font-medium">
            Businesses looking for smarter AI, <br /> marketing, and HubSpot
            solutions.
          </p>
          <img
            className="h-80 w-auto shadow-top-right"
            src={growthImage}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Growth;
