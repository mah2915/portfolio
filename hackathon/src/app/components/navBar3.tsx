import Link from "next/link"

export default ()=>{
return(
    <nav className="shadow flex items-center bg-white text-black h-[74px]">
        <div className="flex items-center space-x-10 ml-[240px]">
            <ul className="flex text-[16px] text-black space-x-10">
                <li className="text-black hover:text-[#007580]">
                    <Link href="/">Home</Link>
                </li>
                <li className="text-black hover:text-[#007580]">
                    <Link href="/shop">Shop</Link>
                </li>
                <li className="text-black hover:text-[#007580]">
                    <Link href="/product">Product</Link>
                </li>
                <li className="text-black hover:text-[#007580]">
                    <Link href="/pages">Pages</Link>
                </li>
                <li className="text-black hover:text-[#007580]">
                    <Link href="/about">About</Link>
                </li>
            </ul>
            <ul className="flex text-[16px]">
            <li className="text-[#636270] ml-[440px]">
                    <Link href="/contact">Contact:</Link>
                </li>
                <li className="text-black hover:underline">
                    <Link href="/contact">(808) 555-0111</Link>
                </li>  
            </ul>
        </div>
    </nav>
)
}
