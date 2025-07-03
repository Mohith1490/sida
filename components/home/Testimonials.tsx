import Image from "next/image"


export default function Testimonials(){
    return(
        <>
        <section className="py-12 flex flex-col min-h-[520px]">
  <div className="flex justify-between items-center px-4 sm:px-12">
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">Satisfied Clients</h2>
      <p className="text-sm sm:text-base sm:max-w-md">
        Discover the valueable feedback and testimonials from our satisfied clients about their experiences with us
      </p>
    </div>

    <div className="hidden sm:flex space-x-4">
      <button
        className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 focus:outline-none"
        aria-label="Scroll Left"
      >
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-gray-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
        </svg>
      </button>
      <button
        className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 focus:outline-none"
        aria-label="Scroll Right"
      >
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-gray-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
        </svg>
      </button>
    </div>
  </div>

  <div className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
    <div className="snap-center flex-shrink-0 pl-4 sm:pl-12 py-8 -mr-4 sm:-mr-12">
        {/* card 1 */}
      <div id="card-1" className="min-w-[350px] max-w-sm p-6 rounded-3xl scale-100 transition text-white bg-[rgb(24_28_36)] ">
        <p className="text-white mb-2 text-sm">
          &quot;I was totally blank after the car accident near Gachibowli... <span id="more-1" className="hidden transition-all">. This is an amazing product! I highly recommend it.</span>&quote;
        </p>
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center mt-4">
            <Image alt="Client Name" loading="lazy" width="640" height="640" decoding="async"
              className="w-10 h-10 rounded-full object-cover mr-4"
              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser.88daf45d.jpg&amp;w=1920&amp;q=75"
            />
            <div>
              <h4 className="font-semibold text-white text-sm">Kiran Rao</h4>
              <p className="text-xs text-gray-400">IT Professional</p>
            </div>
          </div>
          <div className="mr-8 opacity-50">
            <Image alt="quote" loading="lazy" width="25" height="25" decoding="async"
              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fquotation.c54cd4e6.png&amp;w=64&amp;q=75"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    )
}