import Image from "next/image"
import sofa from "../../../public/sofa.png"
import cart from "../../../public/cart.png"
import Link from "next/link"


export default () => {
    return (
        <nav className="bg-green-50 w-full h-[84px] flex items-center">
        <Image
        src={sofa}
        alt="logo"
        height={150}
        width={150}
        className="h-[70px] w-[70px] absolute top-[42px] left-[230px] transfrom translate-y-2"
        />
        <div className="ml-[300px] text-black text-[26px]">
            Comforty
        </div>
        <button className="relative h-[44px] w-[120px] bg-white rounded-2xl ml-[680px] flex items-center justify-left">
        <Link href={"/cart"}><Image
            src={cart}
            alt="cart"
            height={150}
            width={150}
            className="w-[25px] h-[25px] ml-7"
            />
            </Link>
            <div className="text-black text-[12px]">
            <Link href={"/cart"}>Cart</Link>
            </div>
            <div className="absolute w-[20px] h-[20px] bg-[#007580] rounded-full top-1/2 left-[80px] transform -translate-y-1/2 items-center justify-center">
                <div className="text-white mt-[2.5px]">2</div>
            </div>
        </button>
        </nav>
    )
}