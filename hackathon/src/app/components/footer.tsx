import React from 'react';
import Image from 'next/image';

// Import images for social media icons
import facebookIcon from '../../../public/FacebookIcon.png';
import twitterIcon from '../../../public/twitterIcon.png';
import instagramIcon from '../../../public/instaIcon.png';
import pinterestIcon from "../../../public/pinterestIcon.png"
import utubeIcon from "../../../public/utubeIcon.png"
import logos from "../../../public/logos.png"



const Footer =()=>{
  return (
    <footer className="bg-white text-gray-600 body-font shadow-inner">
      <div className="container py-24 mx-auto flex justify-center md:items-center lg:items-center md:flex-row md:flex-nowrap flex-wrap flex-col ml-[230px]">

        {/* Logo and Description */}
        <div className="w-72 flex-shrink-0 md:mx-0 text-center md:text-left">
          <a className="flex title-font font-medium md:justify-start text-gray-900 items-center">
            <Image
              alt="sofa"
              src="/sofa.png" // Replace with the actual logo path
              width={50}
              height={50}
              className="h-[40px] w-[40px] ml-[-8px]"
            />
            <span className="text-2xl font-semibold">Comforty</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Vivamus tristique odio sit amet velit semper, <br/>
            eu posuere turpis interdum. <br/>
            Cras egestas purus.
          </p>
          {/* Social Media Icons */}
          <div className="flex mt-4 space-x-2">
            <a href="#" className="text-gray-500">
              <Image src={facebookIcon} alt="Facebook" width={20} height={20} />
            </a>
            <a href="#" className="text-gray-500">
              <Image src={twitterIcon} alt="Twitter" width={20} height={20} />
            </a>
            <a href="#" className="text-gray-500">
              <Image src={instagramIcon} alt="Instagram" width={20} height={20} />
            </a>
            <a href="#" className="text-gray-500">
              <Image src={pinterestIcon} alt="Pinterest" width={20} height={20} />
            </a>
            <a href="#" className="text-gray-500">
              <Image src={utubeIcon} alt="youtube" width={20} height={20} />
            </a>
          </div>
        </div>

        {/* Links and Categories */}
        <div className="flex-grow flex flex-wrap md:pl-36 -mb-10 md:mt-0 mt-10 md:text-left text-center">
{/* Category Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full">
            <h2 className="title-font font-medium text-[#9A9CAA] tracking-widest text-sm mb-3">CATEGORY</h2>
            <nav className="list-none mb-10 space-y-1">
              <li><a href="#" className="text-gray-600 hover:text-[#007580] hover:underline">Sofa</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#007580] hover:underline">Armchair</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#007580] hover:underline">Wing Chair</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#007580] hover:underline">Desk Chair</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#007580] hover:underline">wooden Chair</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#007580] hover:underline">Park Bench</a></li>
              
            </nav>
          </div>

          {/* Support Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full ml-[-100px]">
            <h2 className="title-font font-medium text-[#9A9CAA] tracking-widest text-sm mb-3">SUPPORT</h2>
            <nav className="list-none mb-10 space-y-1">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Help & Support</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">FAQ</a></li>
            </nav>
          </div>

          {/* Newsletter Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full ml-[-100px]">
            <h2 className="title-font font-medium text-[#9A9CAA] tracking-widest text-sm mb-3">NEWSLETTER</h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label htmlFor="footer-field" className="leading-7 text-sm text-[#9A9CAA]">Your Email</label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-[#029FAE] border-0 py-2 px-6 focus:outline-none hover:bg-[#027f8b] rounded">Subscribe</button>
            </div>
            <p className="text-[#9A9CAA] text-sm mt-2 md:text-left text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
            Nullam tincidunt erat enim.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-white shadow-inner flex">
        <div className="container mx-auto py-8 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left ml-[220px]">
          @ 2021 - Blogy - Designed & Develop by Zakirsoft
          </p>
        </div>
        <Image
        src={logos}
        alt='vector'
        height={500}
        width={500}
        className='h-[20px] w-[220px] m-6 mr-[285px] '
        />
      </div>
    </footer>
  );
};

export default Footer
