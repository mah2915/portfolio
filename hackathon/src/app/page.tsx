
import Brands from "./components/brands";
import Categories from "./components/categories";
import Featured from "./components/featured";
import Footer from "./components/footer";
import Hero from "./components/hero";
import NavBar1 from "./components/navBar1";
import NavBar2 from "./components/navBar2";
import NavBar3 from "./components/navBar3";
import ProductGallery from "./components/popular";
import Products1 from "./components/products1";
import Products2 from "./components/products2";


export default function Home() {
  return (
    <div className="h-full w-full bg-white">
    
      <div className="bg-green-50 h-[550px] w-[1000px] ml-[230px] rounded-2xl">
        <Hero />
      </div>
      <br></br>
      <Brands />
      <br></br>
      <h1 className="font-bold text-[22px] ml-[230px]">Featured Products</h1>
      <br></br>
      <Featured />
      <h1 className="font-bold text-[22px] ml-[230px]">Top Categories</h1>
      <br></br>
      <Categories />
      <br></br>
      <ProductGallery />

      <h1 className="text-[22px] flex items-center justify-center mb-12 font-medium">Our Products</h1>
      <Products1 />
      <Products2 />
      <Footer />
    </div>
  );
}
