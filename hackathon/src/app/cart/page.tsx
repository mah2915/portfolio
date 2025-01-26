import React from "react";
import chair3 from "../../../public/chair3.png";
import Footer from "../components/footer";

const ShoppingBag = () => {
  const items = [
    {
      id: 1,
      image: "/chair3.png", // Replace with actual image paths
      name: "Library Stool Chair",
      color: "Ashen Slate/Cobalt Bliss",
      price: 99,
      quantity: 1,
    },
    {
      id: 2,
      image: "/chaira.png", // Replace with actual image paths
      name: "Library Stool Chair",
      color: "Ashen Slate/Cobalt Bliss",
      price: 99,
      quantity: 1,
    },
  ];

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <div className="flex flex-col lg:flex-row p-8 gap-x-12 ml-[220px]">
        {/* Bag Section */}
        <div>
          <h2 className="text-[18px] font-medium mb-6 mt-16">Bag</h2>
          {items.map((item) => (
            <div key={item.id} className="flex items-start border-b pb-10 mb-8">
              <img
                src={item.image}
                alt={item.name}
                className="w-[110px] h-[110px] object-cover rounded-lg mr-6"
              />
              <div className="flex-1">
                <h4 className="font-medium text-[12px] text-[#272343] pb-6">{item.name}</h4>
                <p className="text-gray-500">{item.color}</p>
                {/* Quantity and Action Buttons */}
                <div className="flex flex-col items-start gap-1 mt-1">
                  <p className="text-sm text-[#757575] text-[11px]">Quantity {item.quantity}</p>
                  <div className="flex gap-2">
                    <button className="text-gray-500 hover:text-gray-700">❤️</button>
                    <button className="text-gray-500 hover:text-gray-700">🗑️</button>
                  </div>
                </div>
              </div>
              <p className="text-right font-normal ml-[340px]">MRP: ${item.price}</p>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="w-full lg:w-1/3 p-6 bg-transparent rounded-lg ml-[40px] mt-16 max-w-[260px]">
          <h2 className="text-[17px] font-medium mb-4">Summary</h2>
          <div className="flex justify-between text-[11px] mb-2 ">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-[11px] mb-2">
            <span>Estimated Delivery & Handling</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between text-lg font-normal mb-6 ">
<div className="border-y border-gray-200 min-w-[235px] space-x-[160px] py-5">
            <span className="">Total</span>
            <span  className="">${subtotal.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex justify-center">
          <button className="flex justify-center min-w-[100px] py-3 bg-[#029FAE] text-white rounded-3xl hover:bg-teal-600">
            Checkout
          </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingBag;
