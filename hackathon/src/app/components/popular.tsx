import Image from "next/image";
import chair1 from "../../../public/chair1.png";
import chair3 from "../../../public/chair3.png";
import sofa1 from "../../../public/sofa1.png";
import sofa2 from "../../../public/sofa2.png";

export default function ProductGallery() {
  return (
    <section className="py-6 px-4 my-[100px]">
      {/* Title Section */}
      <h2 className="text-[25px] font-semibold text-center mb-6 transform -rotate-90 absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 mt-[1640px] ml-[-935px]">
        Explore New and Popular Styles
      </h2>

      {/* Grid Section */}
      <div
        className="max-w-full mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-[220px]"
        style={{ height: "450px", width: "1000px" }}
      >
        {/* Large Image */}
        <div className="col-span-2 row-span-2">
          <div className="relative overflow-hidden shadow-md h-full w-full">
            <Image
              alt="Orange Chair"
              src={chair3}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Smaller Images */}
        <div className="relative overflow-hidden shadow-md h-full w-full">
          <Image
            alt="White Chair"
            src={sofa1}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="relative overflow-hidden shadow-md h-full w-full">
          <Image
            alt="Armchair"
            src={chair1}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="relative overflow-hidden shadow-md h-full w-full">
          <Image
            alt="Classic Chair"
            src={sofa2}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="relative overflow-hidden shadow-md h-full w-full">
          <Image
            alt="Classic Chair"
            src={chair1}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
}
