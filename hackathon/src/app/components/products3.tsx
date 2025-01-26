import Image from "next/image";
import chaira from "../../../public/chaira.png"
import chair2 from "../../../public/chair2.png"
import chair3 from "../../../public/chair3.png"
import chairc from "../../../public/chairc.png"
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
        <Link href="/product/productsi">Library Stool Chair</Link>
          <p className="card-title mt-2">$20</p>
        </div>
      </div>
      <div className="card card-compact w-[230px] h-[370px]">
        <Image
          src={chair2}
          alt="picture"
          height={500}
          width={500}
          className="h-[250px] w-[250px]"
        />
         <div className="text-left justify-start ml-[2px] mt-5 text-[16px]">
         <Link href="/product/productsj">Library Stool Chair</Link>
         <p className="card-title mt-2">$20</p>
        </div>
      </div>
      <div className="card card-compact w-[230px] h-[370px]">
        <Image
          src={chair3}
          alt="picture"
          height={500}
          width={500}
          className="h-[250px] w-[250px]"
        />
         <div className="text-left justify-start ml-[2px] mt-5 text-[16px]">
         <Link href="/product/productsk">Library Stool Chair</Link>
         <p className="card-title mt-2">$20</p>
        </div>
      </div>
      <div className="card card-compact w-[230px] h-[370px]">
        <Image
          src={chairc}
          alt="picture"
          height={500}
          width={500}
          className="h-[250px] w-[250px]"
        />
        <div className="text-left justify-start ml-[2px] mt-5 text-[16px]">
        <Link href="/product/productsl">Library Stool Chair</Link>
          <p className="card-title mt-2">$20</p>
        </div>
      </div>
    </div>
  );
};
