import Image from "next/image";
import chaira from "../../../public/chaira.png";
import chairb from "../../../public/chairb.png";
import chairc from "../../../public/chairc.png";

export default () => {
  return (
    <div className="flex flex-wrap justify-center gap-12 ml-[-55px]">
      {/* Card 1 */}
      <div className="h-[310px] w-[310px]">
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          {/* Product Image */}
          <Image
            alt="chair"
            src={chaira}
            height={500}
            width={500}
            className="object-cover h-full w-full"
          />
          {/* Overlay Text */}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white px-4 py-3">
            <h2 className="text-lg font-semibold">Wing Chair</h2>
            <p className="text-sm">3,584 Products</p>
          </div>
        </div>
      </div>
      {/* Card 2 */}
      <div className="h-[310px] w-[310px]">
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          {/* Product Image */}
          <Image
            alt="chair"
            src={chairb}
            height={500}
            width={500}
            className="object-cover h-full w-full"
          />
          {/* Overlay Text */}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white px-4 py-3">
            <h2 className="text-lg font-semibold">Wooden Chair</h2>
            <p className="text-sm">157 Products</p>
          </div>
        </div>
      </div>
      {/* Card 3 */}
      <div className="h-[300px] w-[310px]">
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          {/* Product Image */}
          <Image
            alt="chair"
            src={chairc}
            height={500}
            width={500}
            className="object-cover h-full w-full"
          />
          {/* Overlay Text */}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white px-4 py-3">
            <h2 className="text-lg font-semibold">Desk Chair</h2>
            <p className="text-sm">154 Products</p>
          </div>
        </div>
      </div>
    </div>
  );
};
