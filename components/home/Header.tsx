import Image from "next/image"
import Link from "next/link"

export default function Header(){
    return(
        <>
         <nav className="flex flex-row justify-between items-center px-6 lg:px-12 " >
            <div className="flex flex-row items-center gap-8">
               <div>
                  <Image alt="logo" loading="lazy" src={"/image_1.png"} width={100} height={100} />
               </div>
               <ul className="hidden lg:flex flex-row gap-4 text-[#0A0B5C]" >
                    <li className="px-2 py-2 active:border-b-2 hover:border-b-2 hover:border-[#0A0B5C] border-[#0A0B5C] transition-all" > <Link href={"/"} >Home</Link> </li>
                    <li className="px-2 py-2 active:border-b-2 hover:border-b-2 hover:border-[#0A0B5C] border-[#0A0B5C] transition-all" > <Link href={"/faqs"} >FAQs</Link> </li>
                    <li className="px-2 py-2 active:border-b-2 hover:border-b-2 hover:border-[#0A0B5C] border-[#0A0B5C] transition-all" > <Link href={"/legal-plans"} >Legal Plans</Link> </li>
               </ul>
            </div>
            <div className="lg:hidden">
                <button className="focus:outline-none">
                    <svg className="w-6 h-6 text-[#0A0B5C]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>
            <div>
                <button className="hidden lg:flex px-4 py-2 text-[#0A0B5C] hover:text-blue-800 transition-all flex-row items-center justify-center gap-2 cursor-pointer" >
                    Book a Call
                    <Image alt="redirect icon" src={"/image_2.png"} width={24} height={24} />
                </button>
            </div>
         </nav>
        </>
    )
}