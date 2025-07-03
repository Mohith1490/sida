import Image from "next/image"

export default function MainSection() {
  return (
    <>
      <main className="min-h-[calc(100vh-100px)] relative flex items-center justify-between px-12 py-12 sm:py-0" >
        <div className="absolute top-[-100px] right-0 w-1/3 h-[878.4px] sm:h-screen bg-gradient-to-br from-yellow-100 to-yellow-100 opacity-70 -z-10 main_page_line1"></div>
        <div className="absolute hidden sm:block top-[-100px] right-0 w-1/3 h-screen bg-gradient-to-br from-[#0A0B5C] to-[#0A0B5C] opacity-100 -z-5 main_page_line2"></div>
        <div className="absolute bottom-0 right-32 hidden sm:block" >
          <Image loading="lazy" width={750} height={750} alt="Woman Lawyer" src={"/image_5.png"} className="w-[90vh] " />
        </div>
        <div className="w-full sm:w-1/2 flex flex-col gap-8">
          <h1 className="text-5xl text-center sm:text-left sm:text-7xl font-bold text-[#0A0B5C]">Your Personal
            <br /> Lawyer
          </h1>
          <p className="text-xl text-center sm:text-left sm:text-3xl text-gray-500">Medence Legal - Your Family Doctor for all your <br /> Legal Needs</p>
          <div className="flex flex-col sm:flex-row gap-4"><div className="-mb-4 block sm:hidden opacity-1">
            <Image alt="Woman Lawyer" loading="lazy" width="750" height="750" decoding="async" data-nimg="1" className="w-[720px] text-transparent" src={"/image_8.png"} /></div>
            <button className="px-8 py-4 text-[#0A0B5C] font-semibold bg-yellow-100 rounded-full shadow hover:bg-yellow-200 transition">Check Prices</button>
            <button className="border-2 border-[#0A0B5C] sm:border-0 flex items-center justify-center gap-2 px-8 py-4 text-[#0A0B5C] font-semibold rounded-full hover:bg-gray-200 transition">Book a Call
              <Image alt="arrow" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="object-contain opacity-100" src={"/image_4.png"} />
            </button>
          </div>
        </div>
      </main>
    </>
  )
}