"use client"
import React, { useState } from "react";
import { MapPin, Phone, Clock } from "lucide-react"; // Lucide icons for styling
import Image from "next/image";
import Group from "../../../public/Group.png"
import Vector from "../../../public/Vector.png"
import Vector1 from "../../../public/Vector1.png"
import Footer from "../components/footer";

const ContactUs = () => {
  const [successMessage, setSuccessMessage] = useState(""); // State to handle the success message
  const [formVisible, setFormVisible] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setSuccessMessage("آپ کا پیغام کامیابی سے بھیج دیا گیا ہے");
    setFormVisible(false);
    // Set success message
  };

  return (
    <div>
    <div className="px-8 lg:px-32 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-[30px] font-bold">Get In Touch With Us</h2>
        <p className="text-gray-500 mt-2 mx-auto ">
          For more information about our product & services, please feel free to drop us <br />
          an email. Our staff is always here to help you out. Do not hesitate!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row ml-[300px]">
        {/* Contact Info */}
        <div className="lg:w-1/3 space-y-6">
          <div className="flex items-start space-x-4">
            <MapPin className="text-black w-6 h-6" />
            <div>
              <h4 className="font-semibold">Address</h4>
              <p className="text-gray-500">
                236 5th SE Avenue, New <br />
                York NY10000, United <br />
                States
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Phone className="text-black w-6 h-6" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-gray-500">Mobile: (+84) 546-6789</p>
              <p className="text-gray-500">Hotline: (+84) 456-6789</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Clock className="text-black w-6 h-6" />
            <div>
              <h4 className="font-semibold">Working Time</h4>
              <p className="text-gray-500">Monday-Friday: 9:00 - 22:00</p>
              <p className="text-gray-500">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-2/3 bg-white shadow-sm rounded-lg p-8">
          {formVisible ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-600 font-medium">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Abc"
                  className="w-[250px] mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-600 font-medium">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Abc@def.com"
                  className="w-[250px] mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500  bg-transparent"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-600 font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="This is optional"
                  className="w-[250px] mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500  bg-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-600 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Hi! I'd like to ask about..."
                  className="w-[250px] mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500  bg-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-[130px] py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all"
              >
                Submit
              </button>
            </form>
          ) : (
            <p className="mt-4 text-black text-3xl font-bold">{successMessage}</p>
          )}
        </div>
      </div>
      <br />

      {/* Footer Icons */}
      <div className="flex justify-center items-center mt-12 text-center bg-[#F4F4F4] w-[980px] h-[150px] mx-auto ml-[160px]">
        <div className="flex justify-center mx-auto space-x-44">
  <div className="flex-1 flex items-center space-x-2">
    <Image
      alt="vector"
      src={Group}
      height={500}
      width={500}
      className="h-[30px] w-[30px]"
    />
    <div className="text-left">
    <h4 className="text-black font-semibold mt-2 text-[13px]">High Quality</h4>
    <p className="text-gray-500 text-[10px] whitespace-nowrap">Crafted from top materials</p>
  </div>
  </div>
  <div className="flex-1 flex items-center space-x-2">
    <Image
      alt="vector"
      src={Vector}
      height={500}
      width={500}
      className="h-[30px] w-[30px]"
    />
    <div className="text-left">
    <h4 className="text-black font-semibold mt-2 text-[13px] whitespace-nowrap">Warranty Protection</h4>
    <p className="text-gray-500 text-[10px]">Over 2 years</p>
  </div>
  </div>
  <div className="flex-1 flex items-center space-x-2">
    <Image
      alt="vector"
      src={Vector1}
      height={500}
      width={500}
      className="h-[30px] w-[30px]"
    />
    <div className="text-left">
    <h4 className="text-black font-semibold mt-2 text-[13px]">24/7 Support</h4>
    <p className="text-gray-500 text-[10px]">Dedicated support</p>
  </div>
  </div>
</div>
</div>
<br/>

    </div>
    <Footer/>
    </div>
  );
};

export default ContactUs;
