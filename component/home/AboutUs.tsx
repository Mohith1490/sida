import Image from "next/image"

export default function AboutUs() {
    return (
        <section className="py-8 px-4 md:py-12 md:px-12">
            <div className="mx-auto">
                <div className="grid grid-cols-3"><div>
                </div><div className="px-1 md:px-2">
                        <div className="h-full bg-green-50 rounded-t-md">
                            <div className=" h-full text-xl bg-green-100 text-[#0A0B5C] font-semibold py-3 px-4 text-center rounded-md flex justify-center items-center">
                                <Image alt="logo" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" className="object-contain" src={"/image_9.png"}/>
                                    <span className="hidden sm:inline-block">Medence Legal</span>
                            </div>
                        </div>
                    </div>
                    <div className="pl-1 md:pl-2 flex">
                        <div className="bg-red-50 flex w-full rounded-t-md">
                            <div className="text-[3vw] sm:text-xl bg-red-100 text-red-800 font-medium py-3 px-4 text-center rounded-md justify-center items-center w-full block">Other <span className="mx-3">&quot;Typical&quot;</span> Lawyers</div>
                        </div>
                    </div>
                    <div className="border-y border-gray-200 pr-1 md:pr-2 block">
                        <div className="py-4 px-4 text-gray-900 bg-white font-medium text-[3vw] sm:text-xl">Price Tag</div>
                    </div>
                    <div className="h-full px-1 md:px-2 border-y border-gray-200">
                        <div className="py-4 px-4 text-center bg-green-50 font-medium text-[3vw] sm:text-xl">Only ₹125/month</div>
                    </div>
                    <div className="pl-1 md:pl-2 border-y border-gray-200">
                        <div className="py-4 px-4 text-center bg-red-50 h-full font-medium text-[3vw] sm:text-xl">Expensive</div>
                    </div>
                    <div className="border-y border-gray-200 pr-1 md:pr-2">
                        <div className="py-4 px-4 text-gray-900 bg-white font-medium text-[3vw] sm:text-xl">Price Clarity</div>
                    </div>
                    <div className="px-1 md:px-2 border-y border-gray-200">
                        <div className="py-4 px-4 h-full text-center bg-green-50 font-medium text-[3vw] sm:text-xl">Standard Pricing</div>
                    </div>
                    <div className="pl-1 md:pl-2 border-y border-gray-200">
                        <div className="py-4 px-4 text-center bg-red-50 h-full font-medium text-[3vw] sm:text-xl">Uncertain &amp; Hidden Pricing</div>
                    </div>
                    <div className="border-y border-gray-200 pr-1 md:pr-2">
                        <div className="py-4 px-4 text-gray-900 bg-white font-medium text-[3vw] sm:text-xl">Quality</div>
                    </div>
                    <div className="px-1 md:px-2 border-y border-gray-200">
                        <div className="py-4 px-4 text-center bg-green-50 font-medium text-[3vw] sm:text-xl">Avg. 19 Years of Experience</div>
                    </div>
                    <div className="pl-1 md:pl-2 border-y border-gray-200">
                        <div className="py-4 px-4 text-center bg-red-50 h-full font-medium text-[3vw] sm:text-xl">Unsure of Quality</div>
                    </div>
                    <div className="border-y border-gray-200 pr-1 md:pr-2">
                        <div className="py-4 px-4 text-gray-900 bg-white font-medium text-[3vw] sm:text-xl">Ease</div>
                    </div>
                    <div className="px-1 md:px-2 border-y border-gray-200">
                        <div className="py-4 px-4 text-center bg-green-50 font-medium text-[3vw] sm:text-xl">Auto Case Updates</div>
                    </div>
                    <div className="pl-1 md:pl-2 border-y border-gray-200">
                        <div className="py-4 px-4 text-center bg-red-50 h-full font-medium text-[3vw] sm:text-xl">Hassles &amp; Runarounds</div>
                    </div>
                    <div className="border-y border-gray-200 pr-1 md:pr-2">
                        <div className="py-4 px-4 text-gray-900 bg-white font-medium text-[3vw] sm:text-xl">Flexibility</div>
                    </div>
                    <div className="px-1 md:px-2 border-y border-gray-200">
                        <div className="py-4 px-4 text-center bg-green-50 font-medium text-[3vw] sm:text-xl">Lawyer Replacement Option</div>
                    </div>
                    <div className="pl-1 md:pl-2 border-y border-gray-200">
                        <div className="py-4 px-4 text-center bg-red-50 h-full font-medium text-[3vw] sm:text-xl">No Flexibility</div>
                    </div>
                </div>
            </div>
        </section>
    )
}