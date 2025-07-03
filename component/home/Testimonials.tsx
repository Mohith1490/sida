import Image from "next/image"


export default function Testimonials() {
  return (
    <>
      <section className="py-12 flex flex-col min-h-[520px]">
        <div className="flex justify-between items-center px-4 sm:px-12">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Satisfied Clients</h2>
            <p className="text-sm sm:text-base sm:max-w-md">Discover the valuable feedback and testimonials from our satisfied clients about their experiences with us</p>
          </div>
        </div>
        <div className="flex gap-8 overflow-x-scroll testimonial scrollbar-hide snap-x snap-mandatory">
          <div className="snap-center flex-shrink-0 pl-4 sm:pl-12 py-8 -mr-4 sm:-mr-12 hover:scale-105 duration-150 ">
            <div id="card-1" className="min-w-[350px] max-w-sm p-6 rounded-3xl scale-100 transition text-white bg-[rgb(24_28_36)] " >
              <p className="text-white mb-2 text-sm">
                &quote;I was totally blank after the car accident near Gachibowli. The opposite driver called some people and started blaming me, saying they’ll go to the police. I felt safe only when my lawyer from Medence arrived at the spot. He handled everything — the crowd, the cops, even helped me file my insurance claim right then. I don’t think I could’ve managed it without him.<span id="more-1" className="hidden transition-all">. This is an amazing product! I highly recommend it.</span>&quote;
              </p>
              <div className="flex flex-row justify-between items-center">
                <div className="flex items-center mt-4">
                  <Image alt="Client Name" loading="lazy" width="640" height="640" decoding="async" className="w-10 h-10 rounded-full object-cover mr-4" src={"/user.webp"} />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Kiran Rao</h4>
                    <p className="text-xs text-gray-400">IT Professional</p>
                  </div>
                </div>
                <div className="mr-8 opacity-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292m-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="snap-center flex-shrink-0 pl-4 sm:pl-12 py-8 -mr-4 sm:-mr-12 hover:scale-105 duration-150 ">
            <div id="card-2" className="min-w-[350px] max-w-sm p-6 rounded-3xl scale-100 transition text-white bg-[rgb(24_28_36)] " >
              <p className="text-white mb-2 text-sm">&quote;I was about to buy a flat when a close friend told me to get the documents checked. I used Medence’s service — their lawyer found a legal issue that could have landed me in serious trouble. Just that one review saved me lakhs. I guess it is smart to have legal support before problems begin.<span id="more-2" className="hidden transition-all">. This is an amazing product! I highly recommend it.</span>&quote;</p>
              <div className="flex flex-row justify-between items-center">
                <div className="flex items-center mt-4">
                  <Image alt="Client Name" loading="lazy" width="640" height="640" decoding="async" className="w-10 h-10 rounded-full object-cover mr-4" src={"/user.webp"} />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Rahul Srivatasvan</h4>
                    <p className="text-xs text-gray-400">IT Professional</p>
                  </div>
                </div>
                <div className="mr-8 opacity-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292m-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="snap-center flex-shrink-0 pl-4 sm:pl-12 py-8 -mr-4 sm:-mr-12 hover:scale-105 duration-150 ">
            <div id="card-3" className="min-w-[350px] max-w-sm p-6 rounded-3xl scale-100 transition text-white bg-[rgb(24_28_36)] " >
              <p className="text-white mb-2 text-sm">&quote;An Innova car crashed into my new bike and he was so arrogant at the moment. He refused to pay for my damages when the mistake was clearly his. My personal lawyer from Medence helped me file third party insurance with minimal effort. Honestly, I didn’t realise these claims could be so simple with the right legal support.<span id="more-3" className="hidden transition-all">. This is an amazing product! I highly recommend it.</span>&quote;</p>
              <div className="flex flex-row justify-between items-center">
                <div className="flex items-center mt-4">
                  <Image alt="Client Name" loading="lazy" width="640" height="640" decoding="async" className="w-10 h-10 rounded-full object-cover mr-4" src={"/user.webp"} />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Zubair Khan</h4>
                    <p className="text-xs text-gray-400">Business Owner</p>
                  </div>
                </div>
                <div className="mr-8 opacity-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292m-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="snap-center flex-shrink-0 pl-4 sm:pl-12 py-8 -mr-4 sm:-mr-12 hover:scale-105 duration-150 ">
            <div id="card-4" className="min-w-[350px] max-w-sm p-6 rounded-3xl scale-100 transition text-white bg-[rgb(24_28_36)] " >
              <p className="text-white mb-2 text-sm">&quote;I was so tired with other divorce lawyers and their money extracting business. Medence’s simple pricing is such a relief here. The trust with my Medence personal lawyer is also very warm. It feels good to know someone powerful has your back in such times.<span id="more-4" className="hidden transition-all">. This is an amazing product! I highly recommend it.</span>&quote;</p>
              <div className="flex flex-row justify-between items-center">
                <div className="flex items-center mt-4">
                  <Image alt="Client Name" loading="lazy" width="640" height="640" decoding="async" className="w-10 h-10 rounded-full object-cover mr-4" src={"/user.webp"} />
                  <div>
                    <h4 className="font-semibold text-white text-sm">G.Sneha</h4>
                    <p className="text-xs text-gray-400">Government Service</p>
                  </div>
                </div>
                <div className="mr-8 opacity-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292m-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="snap-center flex-shrink-0 pl-4 sm:pl-12 py-8 -mr-4 sm:-mr-12 hover:scale-105 duration-150 ">
            <div id="card-5" className="min-w-[350px] max-w-sm p-6 rounded-3xl scale-100 transition text-white bg-[rgb(24_28_36)] " >
              <p className="text-white mb-2 text-sm">&quote;There was a freeze on my IDFC bank account. The fees charged by other lawyers was more than my savings that were frozen and it did not make sense to pay so much. But when I came across Medence, their affordable pricing made the process so easy. My personal lawyer filed a writ and the bank was given orders to remove such unlawful freeze within 20 days.<span id="more-5" className="hidden transition-all">. This is an amazing product! I highly recommend it.</span>&quote;</p>
              <div className="flex flex-row justify-between items-center">
                <div className="flex items-center mt-4">
                  <Image alt="Client Name" loading="lazy" width="640" height="640" decoding="async" className="w-10 h-10 rounded-full object-cover mr-4" src={"/user.webp"} />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Ngvuyhum Semp</h4>
                    <p className="text-xs text-gray-400">Private Employee</p>
                  </div>
                </div>
                <div className="mr-8 opacity-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292m-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="snap-center flex-shrink-0 pl-4 sm:pl-12 py-8 -mr-4 sm:-mr-12 hover:scale-105 duration-150 pr-4 sm:pr-12">
            <div id="card-6" className="min-w-[350px] max-w-sm p-6 rounded-3xl scale-100 transition text-white bg-[rgb(24_28_36)] " >
              <p className="text-white mb-2 text-sm">&quote;I travel a lot for my work and road rages and legal complexities after an accident make me feel unsafe on the road. From the day I subscribed to Medence’s personal lawyer service, it feels like I have a strong support in my side of the ring. It is such a relief and source of confidence for me personally.<span id="more-6" className="hidden transition-all">. This is an amazing product! I highly recommend it.</span>&quote;</p>
              <div className="flex flex-row justify-between items-center">
                <div className="flex items-center mt-4">
                  <Image alt="Client Name" loading="lazy" width="640" height="640" decoding="async" className="w-10 h-10 rounded-full object-cover mr-4" src={"/user.webp"} />
                  <div>
                    <h4 className="font-semibold text-white text-sm">RS Sudhakar</h4>
                    <p className="text-xs text-gray-400">Bank Executive</p>
                  </div>
                </div>
                <div className="mr-8 opacity-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292m-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="snap-center flex-shrink-0 pl-4 sm:pl-12 py-8 -mr-4 sm:-mr-12 hover:scale-105 duration-150 ">
            <div id="card-7" className="min-w-[350px] max-w-sm p-6 rounded-3xl scale-100 transition text-white bg-[rgb(24_28_36)] " >
              <p className="text-white mb-2 text-sm">&quote;I was totally blank after the car accident near Gachibowli. The opposite driver called some people and started blaming me, saying they’ll go to the police. I felt safe only when my lawyer from Medence arrived at the spot. He handled everything — the crowd, the cops, even helped me file my insurance claim right then. I don’t think I could’ve managed it without him.<span id="more-7" className="hidden transition-all">. This is an amazing product! I highly recommend it.</span>&quote;</p>
              <div className="flex flex-row justify-between items-center">
                <div className="flex items-center mt-4">
                  <Image alt="Client Name" loading="lazy" width="640" height="640" decoding="async" className="w-10 h-10 rounded-full object-cover mr-4" src={"/user.webp"} />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Kiran Rao</h4>
                    <p className="text-xs text-gray-400">IT Professional</p>
                  </div>
                </div>
                <div className="mr-8 opacity-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292m-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="snap-center flex-shrink-0 pl-4 sm:pl-12 py-8 -mr-4 sm:-mr-12 hover:scale-105 duration-150 ">
            <div id="card-8" className="min-w-[350px] max-w-sm p-6 rounded-3xl scale-100 transition text-white bg-[rgb(24_28_36)] " >
              <p className="text-white mb-2 text-sm">&quote;I was about to buy a flat when a close friend told me to get the documents checked. I used Medence’s service — their lawyer found a legal issue that could have landed me in serious trouble. Just that one review saved me lakhs. I guess it is smart to have legal support before problems begin.<span id="more-8" className="hidden transition-all">. This is an amazing product! I highly recommend it.</span>&quote;</p>
              <div className="flex flex-row justify-between items-center">
                <div className="flex items-center mt-4">
                  <Image alt="Client Name" loading="lazy" width="640" height="640" decoding="async" className="w-10 h-10 rounded-full object-cover mr-4" src={"/user.webp"} />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Rahul Srivatasvan</h4>
                    <p className="text-xs text-gray-400">IT Professional</p>
                  </div>
                </div>
                <div className="mr-8 opacity-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292m-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="snap-center flex-shrink-0 pl-4 sm:pl-12 py-8 -mr-4 sm:-mr-12 hover:scale-105 duration-150 ">
            <div id="card-9" className="min-w-[350px] max-w-sm p-6 rounded-3xl scale-100 transition text-white bg-[rgb(24_28_36)] " >
              <p className="text-white mb-2 text-sm">&quote;An Innova car crashed into my new bike and he was so arrogant at the moment. He refused to pay for my damages when the mistake was clearly his. My personal lawyer from Medence helped me file third party insurance with minimal effort. Honestly, I didn’t realise these claims could be so simple with the right legal support.<span id="more-9" className="hidden transition-all">. This is an amazing product! I highly recommend it.</span>&quote;</p>
              <div className="flex flex-row justify-between items-center">
                <div className="flex items-center mt-4">
                  <Image alt="Client Name" loading="lazy" width="640" height="640" decoding="async" className="w-10 h-10 rounded-full object-cover mr-4" src={"/user.webp"} />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Zubair Khan</h4>
                    <p className="text-xs text-gray-400">Business Owner</p>
                  </div>
                </div>
                <div className="mr-8 opacity-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292m-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="snap-center flex-shrink-0 pl-4 sm:pl-12 py-8 -mr-4 sm:-mr-12 hover:scale-105 duration-150 ">
            <div id="card-10" className="min-w-[350px] max-w-sm p-6 rounded-3xl scale-100 transition text-white bg-[rgb(24_28_36)] " >
              <p className="text-white mb-2 text-sm">&quote;I was so tired with other divorce lawyers and their money extracting business. Medence’s simple pricing is such a relief here. The trust with my Medence personal lawyer is also very warm. It feels good to know someone powerful has your back in such times.<span id="more-10" className="hidden transition-all">. This is an amazing product! I highly recommend it.</span>&quote;</p>
              <div className="flex flex-row justify-between items-center">
                <div className="flex items-center mt-4">
                  <Image alt="Client Name" loading="lazy" width="640" height="640" decoding="async" className="w-10 h-10 rounded-full object-cover mr-4" src={"/user.webp"} />
                  <div>
                    <h4 className="font-semibold text-white text-sm">G.Sneha</h4>
                    <p className="text-xs text-gray-400">Government Service</p>
                  </div>
                </div>
                <div className="mr-8 opacity-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292m-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="snap-center flex-shrink-0 pl-4 sm:pl-12 py-8 -mr-4 sm:-mr-12 hover:scale-105 duration-150 ">
            <div id="card-5" className="min-w-[350px] max-w-sm p-6 rounded-3xl scale-100 transition text-white bg-[rgb(24_28_36)] " >
              <p className="text-white mb-2 text-sm">&quote;There was a freeze on my IDFC bank account. The fees charged by other lawyers was more than my savings that were frozen and it did not make sense to pay so much. But when I came across Medence, their affordable pricing made the process so easy. My personal lawyer filed a writ and the bank was given orders to remove such unlawful freeze within 20 days.<span id="more-5" className="hidden transition-all">. This is an amazing product! I highly recommend it.</span>&quote;</p>
              <div className="flex flex-row justify-between items-center">
                <div className="flex items-center mt-4">
                  <Image alt="Client Name" loading="lazy" width="640" height="640" decoding="async" className="w-10 h-10 rounded-full object-cover mr-4" src={"/user.webp"} />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Ngvuyhum Semp</h4>
                    <p className="text-xs text-gray-400">Private Employee</p>
                  </div>
                </div>
                <div className="mr-8 opacity-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292m-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="snap-center flex-shrink-0 pl-4 sm:pl-12 py-8 -mr-4 sm:-mr-12 hover:scale-105 duration-150 pr-4 sm:pr-12">
            <div id="card-6" className="min-w-[350px] max-w-sm p-6 rounded-3xl scale-100 transition text-white bg-[rgb(24_28_36)] " >
              <p className="text-white mb-2 text-sm">&quote;I travel a lot for my work and road rages and legal complexities after an accident make me feel unsafe on the road. From the day I subscribed to Medence’s personal lawyer service, it feels like I have a strong support in my side of the ring. It is such a relief and source of confidence for me personally.<span id="more-6" className="hidden transition-all">. This is an amazing product! I highly recommend it.</span>&quote;</p>
              <div className="flex flex-row justify-between items-center">
                <div className="flex items-center mt-4">
                  <Image alt="Client Name" loading="lazy" width="640" height="640" decoding="async" className="w-10 h-10 rounded-full object-cover mr-4" src={"/user.webp"} />
                  <div>
                    <h4 className="font-semibold text-white text-sm">RS Sudhakar</h4>
                    <p className="text-xs text-gray-400">Bank Executive</p>
                  </div>
                </div>
                <div className="mr-8 opacity-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292m-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="snap-center flex-shrink-0 pl-4 sm:pl-12 py-8 -mr-4 sm:-mr-12 hover:scale-105 duration-150 ">
            <div id="card-13" className="min-w-[350px] max-w-sm p-6 rounded-3xl scale-100 transition text-white bg-[rgb(24_28_36)] " >
              <p className="text-white mb-2 text-sm">&quote;I was totally blank after the car accident near Gachibowli. The opposite driver called some people and started blaming me, saying they’ll go to the police. I felt safe only when my lawyer from Medence arrived at the spot. He handled everything — the crowd, the cops, even helped me file my insurance claim right then. I don’t think I could’ve managed it without him.<span id="more-13" className="hidden transition-all">. This is an amazing product! I highly recommend it.</span>&quote;</p>
              <div className="flex flex-row justify-between items-center">
                <div className="flex items-center mt-4">
                  <Image alt="Client Name" loading="lazy" width="640" height="640" decoding="async" className="w-10 h-10 rounded-full object-cover mr-4" src={"/user.webp"} />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Kiran Rao</h4>
                    <p className="text-xs text-gray-400">IT Professional</p>
                  </div>
                </div>
                <div className="mr-8 opacity-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292m-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="snap-center flex-shrink-0 pl-4 sm:pl-12 py-8 -mr-4 sm:-mr-12 hover:scale-105 duration-150 ">
            <div id="card-14" className="min-w-[350px] max-w-sm p-6 rounded-3xl scale-100 transition text-white bg-[rgb(24_28_36)] " >
              <p className="text-white mb-2 text-sm">&quote;I was about to buy a flat when a close friend told me to get the documents checked. I used Medence’s service — their lawyer found a legal issue that could have landed me in serious trouble. Just that one review saved me lakhs. I guess it is smart to have legal support before problems begin.<span id="more-14" className="hidden transition-all">. This is an amazing product! I highly recommend it.</span>&quote;</p>
              <div className="flex flex-row justify-between items-center">
                <div className="flex items-center mt-4">
                  <Image alt="Client Name" loading="lazy" width="640" height="640" decoding="async" className="w-10 h-10 rounded-full object-cover mr-4" src={"/user.webp"} />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Rahul Srivatasvan</h4>
                    <p className="text-xs text-gray-400">IT Professional</p>
                  </div>
                </div>
                <div className="mr-8 opacity-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292m-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="snap-center flex-shrink-0 pl-4 sm:pl-12 py-8 -mr-4 sm:-mr-12 hover:scale-105 duration-150 ">
            <div id="card-15" className="min-w-[350px] max-w-sm p-6 rounded-3xl scale-100 transition text-white bg-[rgb(24_28_36)] " >
              <p className="text-white mb-2 text-sm">&quote;An Innova car crashed into my new bike and he was so arrogant at the moment. He refused to pay for my damages when the mistake was clearly his. My personal lawyer from Medence helped me file third party insurance with minimal effort. Honestly, I didn’t realise these claims could be so simple with the right legal support.<span id="more-15" className="hidden transition-all">. This is an amazing product! I highly recommend it.</span>&quote;</p>
              <div className="flex flex-row justify-between items-center">
                <div className="flex items-center mt-4">
                  <Image alt="Client Name" loading="lazy" width="640" height="640" decoding="async" className="w-10 h-10 rounded-full object-cover mr-4" src={"/user.webp"} />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Zubair Khan</h4>
                    <p className="text-xs text-gray-400">Business Owner</p>
                  </div>
                </div>
                <div className="mr-8 opacity-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292m-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="snap-center flex-shrink-0 pl-4 sm:pl-12 py-8 -mr-4 sm:-mr-12 hover:scale-105 duration-150 ">
            <div id="card-16" className="min-w-[350px] max-w-sm p-6 rounded-3xl scale-100 transition text-white bg-[rgb(24_28_36)] " >
              <p className="text-white mb-2 text-sm">&quote;I was so tired with other divorce lawyers and their money extracting business. Medence’s simple pricing is such a relief here. The trust with my Medence personal lawyer is also very warm. It feels good to know someone powerful has your back in such times.<span id="more-16" className="hidden transition-all">. This is an amazing product! I highly recommend it.</span>&quote;</p>
              <div className="flex flex-row justify-between items-center">
                <div className="flex items-center mt-4">
                  <Image alt="Client Name" loading="lazy" width="640" height="640" decoding="async" className="w-10 h-10 rounded-full object-cover mr-4" src={"/user.webp"} />
                  <div>
                    <h4 className="font-semibold text-white text-sm">G.Sneha</h4>
                    <p className="text-xs text-gray-400">Government Service</p>
                  </div>
                </div>
                <div className="mr-8 opacity-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292m-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}