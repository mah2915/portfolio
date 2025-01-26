import Image from "next/image"
import product from "../../../public/product.png"

export default ()=>{
return(

<section className="text-bla body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <p className="mb-2 leading-relaxed text-[20px] ml-[70px]">
    Welcome to chairy
      </p>
      <h1 className="title-font text-[36px] ml-[70px] font-extrabold mb-4 text-gray-900 leading-tight">
  Best Furniture
  <br className="hidden lg:inline-block" />
  Collection for your
  <br className="hidden lg:inline-block" />
  interior.
</h1>

      
      <div className="flex justify-center">
        <button className="inline-flex ml-[70px] text-white bg-[#029FAE] border-0 rounded-md py-2 px-6 focus:outline-none hover:bg-[#027A87]">
        Shop Now
        </button>
        </div>
    </div>
    <Image
    src={product}
    alt="vector"
    height={500}
    width={500}
    className="h-[400px] w-[300px] mr-[50px]"
    />
  </div>
</section>
)
}
