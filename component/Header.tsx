"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
    const [toggleNav, settoggleNav] = useState<boolean>(false);
    return (
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
                <div className="lg:hidden absolute right-10">
                    <button onClick={()=>settoggleNav(!toggleNav)} className="focus:outline-none">
                        <svg className={`w-6 h-6 text-[#0A0B5C] ${toggleNav ? "hidden" : "block"} `} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        <svg className={`w-6 h-6 text-[#0A0B5C] ${toggleNav ? "block" : "hidden"} `} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M20 20L4 4m16 0L4 20"/></svg>
                    </button>
                </div>
                {/* responsive nav items */}
                <ul className={`w-full absolute top-20 bg-white z-20 left-0 flex flex-col items-center gap-4 py-4 text-[#0A0B5C] ${toggleNav == true ? "block" : "hidden"} `}>
                    <li className="px-4 py-2 border-b-2 border-transparent hover:border-[#0A0B5C] transition-all">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="px-4 py-2 border-b-2 border-transparent hover:border-[#0A0B5C] transition-all">
                        <Link href="/faqs">FAQs</Link>
                    </li>
                    <li className="px-4 py-2 border-b-2 border-transparent hover:border-[#0A0B5C] transition-all">
                        <Link href="/legal-plans">Legal Plans</Link>
                    </li>
                    <button className="px-4 py-2 text-[#0A0B5C] hover:text-blue-800 transition-all flex flex-row items-center gap-2">
                        Book A Call
                        <Image
                            alt="arrow"
                            loading="lazy"
                            width="24"
                            height="24"
                            decoding="async"
                            data-nimg="1"
                            className="object-contain"
                            src={"/image_2.png"}
                        />
                    </button>
                </ul>
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