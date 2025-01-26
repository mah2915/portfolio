import Image from "next/image"

import tick from "../../../public/tick.png"
import arrow2 from "../../../public/arrow2.png"
import error2 from "../../../public/error2.png"


export default () => {
    return (
        <nav className="bg-[#272343] w-full h-[45px] flex items-center">

            <Image
                width={150}
                height={150}
                src={tick} alt="vector"
                className="h-[30px] w-[30px] m-3 ml-[250px] "
            />

            <div className="text-[13px] font-medium text-white">
                Free shipping on all orders over $50
            </div>

            <Image
                width={150}
                height={150}
                src={arrow2} alt="vector"
                className="h-[3.5px] w-[7px] absolute top-[16px] right-[520px] transfrom translate-y-2"
            />

            <div className="dropdown dropdown-hover">
                <div
                    tabIndex={0}
                    role="button"
                    className="btn m-1 text-white ml-[470px] bg-[#272343]">
                    Eng
                </div>
                <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow text-white ml-[470px]" 
                >
                    <li>
                        <a className="text-white">Urdu</a> 
                    </li>
                    <li>
                        <a className="text-white">Tur</a> 
                    </li>
                </ul>
            </div>


            <div className="ml-[50px] text-[13px] font-medium text-white">
                Faqs
            </div>
            <Image
                width={150}
                height={150}
                src={error2} alt="vector"
                className="h-[16px] w-[16px] absolute top-[9px] right-[400px] transfrom translate-y-2"
            />
            <div className="ml-[50px] mr-[300px] text-[13px] font-medium text-white">
                Need Help
            </div>
        </nav>
    )
}