import Image from "next/image"

export default function InfoSection() {
    return (
        <>
            <section className="about-section py-8 px-4 md:py-12 md:px-12">
                <div className="mx-auto flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0">
                    <div className="about-text flex-1 transform-3d translate-[-0.5107px_0px_0px] ">
                        <div className="w-full lg:w-[80%]">
                            <div className="flex items-center mb-12 relative">
                                <Image alt="Person 1" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" className="w-10 h-10 rounded-full absolute top-0 left-0" src={"/image_3.jpg"} />
                                <Image alt="Person 2" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" className="w-10 h-10 rounded-full absolute top-0 left-6" src={"/image_2.jpg"} />
                                <Image alt="Person 3" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" className="w-10 h-10 rounded-full absolute top-0 left-12" src={"/image_3.png"} />
                            </div>
                            <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">Welcome to Medence Legal, <br className="hidden lg:block" /> Your Personal Lawyer.</h1>
                            <p className="text-sm md:text-base text-gray-600 mb-6">Instead of spending hefty fees when legal troubles arise, pay a small yearly fee and get access to your personal lawyer. From resolving minor consumer complaints to addressing major property disputes, your personal lawyer handles it all, providing peace of mind and reliable support whenever you need it.</p>
                        </div>
                    </div>
                    <div className="about-image flex-1 flex justify-end transform-3d translate-[0.5107px_0px_0px]">
                        <div className="rounded-3xl overflow-hidden shadow-lg w-full sm:w-[80%] lg:w-[80%] mx-auto">
                            <Image alt="legal" loading="lazy" width="600" height="400" decoding="async" data-nimg="1" className="h-auto lg:h-[calc(100vh-96px)] object-cover" src={"/image_4.jpg"} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}