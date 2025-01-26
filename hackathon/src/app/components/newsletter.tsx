import React from "react";
import Image from "next/image";
import sofa2 from "../../../public/sofa2.png"
import chaira from "../../../public/chaira.png"
import chair2 from "../../../public/chair2.png"
import chair1 from "../../../public/chair1.png"
import chair3 from "../../../public/chair3.png"
import chairc from "../../../public/chairc.png"

const Newsletter = () => {
  return (
    <div className="w-full h-[554px] bg-[#1E28320D] items-center">
      <h2 className="newsletter-heading flex justify-center text-[30px] py-10 pt-[50px]">Or Subscribe To The Newsletter</h2>
      <form className="newsletter-form flex justify-center space-x-[70px] relative">
  <input
    type="email"
    className="bg-transparent newsletter-input focus:outline-none focus:border-b-2 focus:border-black pb-1 w-full max-w-md "
    placeholder="Email Address..."
    required
  />
  <div className="absolute bottom-0 left-0 h-1 bg-transparent focus:bg-black transition-all duration-300"></div>
  <button type="submit" className="newsletter-submit outline-none border-b-2 border-black pb-1">
    SUBMIT
  </button>
</form>

      <h3 className="instagram-heading flex justify-center text-[30px] pt-[50px]">
        Follow Products And Discounts On Instagram
      </h3>
      <div className="instagram-products flex justify-center rounded-lg space-x-4 pt-14">
        {/* Replace with actual product image links */}
    
        <Image src={sofa2} alt="Product 1" height={500} width={500} className="product-image w-[150px] h-[150px] rounded-lg" />
        <Image src={chaira} alt="Product 2" height={500} width={500} className="product-image w-[150px] h-[150px]" />
        <Image src={chair2} alt="Product 3" height={500} width={500} className="product-image w-[150px] h-[150px]" />
        <Image src={chair1} alt="Product 4" height={500} width={500} className="product-image w-[150px] h-[150px]" />
        <Image src={chair3} alt="Product 5" height={500} width={500} className="product-image w-[150px] h-[150px]" />
        <Image src={chairc} alt="Product 6" height={500} width={500} className="product-image w-[150px] h-[150px]" />
      </div>
    </div>
  );
};

export default Newsletter;
