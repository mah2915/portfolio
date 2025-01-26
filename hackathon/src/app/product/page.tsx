import Footer from "../components/footer";
import NavBar1 from "../components/navBar1";
import NavBar2 from "../components/navBar2";
import NavBar3 from "../components/navBar3";
import Newsletter from "../components/newsletter";
import Products1 from "../components/products1";
import Products2 from "../components/products2";
import Products3 from "../components/products3";


export default function Home() {
  return (
    <div className="h-full w-full bg-white">
    
     <br/>
     
     <h1 className="text-[23px] flex items-start justify-start mb-10 mt-8 font-medium ml-[230px]">All Products</h1>
     <Products1/>
     <Products2/>
     <Products3/>
     <Newsletter/>
     <Footer/>
      </div>
  )
}