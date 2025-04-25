import React from "react";
import footerImg from "../assets/footer-img.webp";

const Footer = () => {
  return (
    <>
      <div className="bg-servicesBg h-[350px] w-full relative">
        <img
          className="h-[11.5rem] w-[25rem] absolute top-[166px] opacity-60"
          src={footerImg}
          alt=""
        />
        <footer className=" text-white py-8 pl-8">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-8 mt-[50px]">
            <div className="col-span-1"></div>{" "}
            {/* Empty column to maintain layout */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-menuBtn">COMPANY</h3>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Why Nexveda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Browse our Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Work with Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-menuBtn">
                OTHER LINKS
              </h3>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    User Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Site Map
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Legal Notices
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Plus subscriptions T&C
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-menuBtn">
                NEWSLETTER
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of <br />
                the printing and typesetting industry.
              </p>
              <div>
                <input
                  type="text"
                  placeholder="Email Id"
                  className="w-full px-4 py-2 mt-5 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
                />
              </div>
              <button className="bg-menuBtn mb-6 mt-5 mr-[193px] rounded-md text-white font-bold px-[18px] py-2">
                Submit
              </button>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
