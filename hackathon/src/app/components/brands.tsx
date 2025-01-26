import Image from "next/image"
import zapier from "../../../public/zapier.png"
import pipedrive from "../../../public/pipedrive.png"
import bank from "../../../public/bank.png"
import logo from "../../../public/logo.png"
import toast from "../../../public/toast.png"
import panda from "../../../public/panda.png"
import moz from "../../../public/moz.png"

export default ()=>{
    return(
        <div className="flex space-x-20 ml-[235px]">
        <Image
        src={zapier}
        alt="logo"
        height={1000}
        width={1000}
        className="h-[95px] w-[95px]"
        />
        <Image
        src={pipedrive}
        alt="logo"
        height={600}
        width={600}
        className="h-[95px] w-[95px]"
        />
        <Image
        src={bank}
        alt="logo"
        height={600}
        width={600}
        className="h-[95px] w-[95px]"
        />
        <Image
        src={logo}
        alt="logo"
        height={600}
        width={600}
        className="h-[95px] w-[95px]"
        />
        <Image
        src={toast}
        alt="logo"
        height={600}
        width={600}
        className="h-[95px] w-[95px]"
        />
        <Image
        src={panda}
        alt="logo"
        height={600}
        width={600}
        className="h-[95px] w-[95px]"
        />
        <Image
        src={moz}
        alt="logo"
        height={600}
        width={600}
        className="h-[95px] w-[95px]"
        />
        </div>
    )
}