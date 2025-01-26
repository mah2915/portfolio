import Image from "next/image";
import chaira from "../../../public/chaira.png";
import sofa2 from "../../../public/sofa2.png";
import chair6 from "../../../public/chair6.png";
import chair1 from "../../../public/chair1.png";
import Link from "next/link";

export default () => {
  return (
    <div className="flex ml-[230px] bg-white space-x-10">
      <div className="card card-compact w-[230px] h-[370px]">
        <Image
          src={chaira}
          alt="picture"
          height={500}
          width={500}
          className="h-[250px] w-[250px]"
        />
        <div className="text-left justify-start ml-[2px] mt-5 text-[16px]">
        <Link href="/product/productse">Library Stool Chair</Link>
          <p className="card-title mt-2">$20</p>
        </div>
      </div>
      <div className="card card-compact w-[230px] h-[370px]">
        <Image
          src={sofa2}
          alt="picture"
          height={500}
          width={500}
          className="h-[250px] w-[250px]"
        />
         <div className="text-left justify-start ml-[2px] mt-5 text-[16px]">
         <Link href="/product/productsf">Library Stool Chair</Link>
         <p className="card-title mt-2">$20</p>
        </div>
      </div>
      <div className="card card-compact w-[230px] h-[370px]">
        <Image
          src={chair6}
          alt="picture"
          height={500}
          width={500}
          className="h-[250px] w-[250px]"
        />
         <div className="text-left justify-start ml-[2px] mt-5 text-[16px]">
         <Link href="/product/productsg">Library Stool Chair</Link>
         <p className="card-title mt-2">$20</p>
        </div>
      </div>
      <div className="card card-compact w-[230px] h-[370px]">
        <Image
          src={chair1}
          alt="picture"
          height={500}
          width={500}
          className="h-[250px] w-[250px]"
        />
        <div className="text-left justify-start ml-[2px] mt-5 text-[16px]">
        <Link href="/product/productsh">Library Stool Chair</Link>
          <p className="card-title mt-2">$20</p>
        </div>
      </div>
    </div>
  );
};
