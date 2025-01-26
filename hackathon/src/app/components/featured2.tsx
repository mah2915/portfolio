import Image from "next/image";
import chair1 from "../../../public/chair1.png";
import chaira from "../../../public/chaira.png";
import chairc from "../../../public/chairc.png";
import chair3 from "../../../public/chair3.png";
import chair6 from "../../../public/chair6.png";

export default () => {
  return (
    <div className="flex ml-[200px] bg-white mt-16">
      <div className="card card-compact w-[230px] h-[370px]">
        <Image
          src={chair6}
          alt="picture"
          height={500}
          width={500}
          className="h-[200px] w-[200px]"
        />
        <div className="text-left justify-start  mt-5">
          <p className="text-[#007580] text-[16px]">Library Stool Chair</p>
          <p className="card-title mt-2">$20</p>
        </div>
      </div>
      <div className="card card-compact w-[230px] h-[370px]">
        <Image
          src={chair1}
          alt="picture"
          height={500}
          width={500}
          className="h-[200px] w-[200px]"
        />
         <div className="text-left justify-start  mt-5">
          <h2 className=" text-[16px]">Library Stool Chair</h2>
          <p className="card-title mt-2">$20</p>
        </div>
      </div>
      <div className="card card-compact w-[230px] h-[370px]">
        <Image
          src={chairc}
          alt="picture"
          height={500}
          width={500}
          className="h-[200px] w-[200px]"
        />
         <div className="text-left justify-start mt-5">
          <h2 className=" text-[16px]">Library Stool Chair</h2>
          <p className="card-title mt-2">$20</p>
        </div>
      </div>
      <div className="card card-compact w-[230px] h-[370px]">
        <Image
          src={chair3}
          alt="picture"
          height={500}
          width={500}
          className="h-[200px] w-[200px]"
        />
        <div className="text-left justify-start mt-5">
          <h2 className=" text-[16px]">Library Stool Chair</h2>
          <p className="card-title mt-2">$20</p>
        </div>
      </div>
      <div className="card card-compact w-[230px] h-[370px]">
        <Image
          src={chaira}
          alt="picture"
          height={500}
          width={500}
          className="h-[200px] w-[200px]"
        />
        <div className="text-left justify-start mt-5">
          <h2 className=" text-[16px]">Library Stool Chair</h2>
          <p className="card-title mt-2">$20</p>
        </div>
      </div>
      
    </div>
  );
};
