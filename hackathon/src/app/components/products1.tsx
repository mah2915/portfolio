import Image from "next/image";
import chair1 from "../../../public/chair1.png";
import chair2 from "../../../public/chair2.png";
import chair3 from "../../../public/chair3.png";
import chair4 from "../../../public/chair4.png";
import Link from "next/link";

export default () => {
  return (
    <div className="flex ml-[230px] bg-white space-x-10">
      <ul className="flex space-x-10">      
        <div className="card card-compact w-[230px] h-[370px]">
        <Image
          src={chair1}
          alt="picture"
          height={500}
          width={500}
          className="h-[250px] w-[250px]"
        />
        <li>
        <div className="text-left justify-start ml-[2px] mt-5 text-[16px]">
        <Link href="/product/productsa">Library Stool Chair</Link>
          <p className="card-title mt-2">$20</p>
        </div>
        </li>
      </div>
      <div className="card card-compact w-[230px] h-[370px]">
        <Image
          src={chair2}
          alt="picture"
          height={500}
          width={500}
          className="h-[250px] w-[250px]"
        />
        <li>
         <div className="text-left justify-start ml-[2px] mt-5 text-[16px]">
         <Link href="/product/productsb">Library Stool Chair</Link>
          <p className="card-title mt-2">$20</p>
        </div>
        </li>
      </div>
      <div className="card card-compact w-[230px] h-[370px]">
        <Image
          src={chair3}
          alt="picture"
          height={500}
          width={500}
          className="h-[250px] w-[250px]"
        />
        <li>
         <div className="text-left justify-start ml-[2px] mt-5 text-[16px]">
         <Link href="/product/productsc">Library Stool Chair</Link>
          <p className="card-title mt-2">$20</p>
        </div>
        </li>
      </div>
      <div className="card card-compact w-[230px] h-[370px]">
        <Image
          src={chair4}
          alt="picture"
          height={500}
          width={500}
          className="h-[250px] w-[250px]"
        />
        <li>
        <div className="text-left justify-start ml-[2px] mt-5 text-[16px]">
        <Link href="/product/productsd">Library Stool Chair</Link>
          <p className="card-title mt-2">$20</p>
        </div>
        </li>
      </div>
      </ul>
    </div>
  );
};
