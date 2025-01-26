import Image from "next/image"
import chair2 from "../../../../public/chair2.png"
import NavBar1 from "@/app/components/navBar1"
import NavBar2 from "@/app/components/navBar2"
import NavBar3 from "@/app/components/navBar3"
import Footer from "@/app/components/footer"
import Featured2 from "@/app/components/featured2"
 
export default ()=>{
    return(

<section className="text-gray-600 body-font overflow-hidden bg-white  w-screen">
    
  <div className="container px-5 py-24 mb-8">
    <div className="lg:w-4/5 ml-[300px] flex flex-wrap">
      <Image
      src={chair2}
      alt="pic"
      height={1000}
      width={1000}
      className="w-[400px] h-[400px] mr-[40px]"
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 lg:mt-0">
    
        <h1 className="text-gray-900 text-[40px] title-font font-bold mb-7 max-w-[300px] leading-[40px]">
          Library Stool 
          Chair
        </h1>
        <button className="text-white text-[16px] bg-[#029FAE] rounded-3xl h-[35px] w-[110px] flex justify-center items-center mb-2">
        <p>$20.00 USD</p>          
        </button>
        
        <div className="flex mt-3  items-center pb-5 border-b-2 border-gray-100 mb-5 max-w-[300px]">
        </div>
        <p className="leading-relaxed max-w-[300px] mb-5 text-[13px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. 
        Lorem ipsum dolor
        sit amet, consectetur adipiscing
        </p>
        <div className="flex">
          
          <button className="flex text-white bg-[#029FAE] border-0 py-2 px-6 focus:outline-none rounded">
            Add To Cart
          </button>
          
        </div>
      
      </div>
   
    </div>
 
  </div>
  <div className="flex space-x-[800px]">  
    <h1 className=" text-black text-[20px] ml-[200px] font-bold tracking-widest">FEATURED PRODUCTS</h1>
  <h1 className="text-black text-[15px] font-normal">View all</h1>
  </div>
    <Featured2/>
  <Footer/>
</section>
    )
}
