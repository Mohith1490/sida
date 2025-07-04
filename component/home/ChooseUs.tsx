"use client"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import gsap from "gsap"

gsap.registerPlugin(ScrollTrigger);


export default function ChooseUs() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const box1 = useRef<HTMLDivElement>(null);
    const box2 = useRef<HTMLDivElement>(null);
    const box3 = useRef<HTMLDivElement>(null);
    useGSAP(() => {
  if (!scrollRef.current || !box1.current || !box2.current || !box3.current) return;

  const boxes = [
    { ref: box1, y: 50 },
    { ref: box2, y: 25 },
    { ref: box3, y: 50 },
  ];

  boxes.forEach(({ ref, y }) => {
    gsap.fromTo(ref.current,{
     y:500
    },
    {
      y,
      ease: "none",
      scrollTrigger: {
        trigger: scrollRef.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        markers: true,
      },
    });
  });
}, []);

    return (
        <>
            <div ref={scrollRef} className="my-8 mx-4 md:my-12 md:mx-12 bg-gray-900 rounded-3xl">
                <div className="py-8 px-24 text-center md:text-left">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center text-white">Why choose us?</h2>
                </div>
                <div >
                    <div  className="hidden sm:flex flex-col sm:flex-row justify-evenly relative overflow-y-hidden -mt-8 min-h-[480px]">
                        <div ref={box1} className="h-[380px] flex flex-col gap-4 w-full sm:w-88 relative p-8 bg-purple-200 rounded-2xl" >
                            <h3 className="text-xl sm:text-3xl font-medium">Affordable Legal Solutions</h3>
                            <p className="text-sm sm:text-base">Access premium legal services without stretching your budget.</p>
                            <hr className="border-t border-gray-500" /><ul className="list-disc list-inside text-xs sm:text-sm" >
                                <li>Flexible plans to suit various financial needs.</li>
                                <li>Transparent pricing with no hidden charges.</li>
                                <li>Quality legal support at an unbeatable value.</li>
                            </ul>
                        </div>
                        <div ref={box2} className="h-[400px] flex flex-col gap-4 w-full sm:w-88 relative p-8 bg-green-200 rounded-2xl">
                            <h3 className="text-xl sm:text-3xl font-medium">Expert and Personalized Support</h3>
                            <p className="text-sm sm:text-base">Experience unmatched service from seasoned legal professionals tailored to your needs.</p>
                            <hr className="border-t border-gray-500" />
                            <ul className="list-disc list-inside text-xs sm:text-sm">
                                <li>Handpicked lawyers with expertise across diverse legal fields.</li>
                                <li>Personalized matching to ensure the best lawyer-client fit.</li>
                                <li>Comprehensive solutions designed around your unique requirements.</li>
                            </ul>
                        </div>
                        <div ref={box3} className="h-[380px] flex flex-col gap-4 w-full sm:w-88 relative p-8 bg-yellow-200 rounded-2xl">
                            <h3 className="text-xl sm:text-3xl font-medium">Always Here for You</h3>
                            <p className="text-sm sm:text-base">Count on Medence for round-the-clock assistance and guidance.</p>
                            <hr className="border-t border-gray-500" />
                            <ul className="list-disc list-inside text-xs sm:text-sm">
                                <li>24/7 customer support for all your queries.</li>
                                <li>Timely updates and proactive communication.</li>
                                <li>Accessible help whenever and wherever you need it.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:hidden -mt-8">
                    <div className="flex flex-col gap-4 sm:w-96 p-8 m-4 bg-purple-200 rounded-2xl card">
                        <h3 className="text-xl sm:text-3xl font-medium">Affordable Legal Solutions</h3>
                        <p className="text-sm sm:text-base">Access premium legal services without stretching your budget.</p>
                        <hr className="border-t border-gray-500" />
                        <ul className="list-disc list-inside text-xs sm:text-sm">
                            <li>Flexible plans to suit various financial needs.</li>
                            <li>Transparent pricing with no hidden charges.</li>
                            <li>Quality legal support at an unbeatable value.</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4 sm:w-96 p-8 m-4 bg-green-200 rounded-2xl card">
                        <h3 className="text-xl sm:text-3xl font-medium">Expert and Personalized Support</h3>
                        <p className="text-sm sm:text-base">Experience unmatched service from seasoned legal professionals tailored to your needs.</p>
                        <hr className="border-t border-gray-500" />
                        <ul className="list-disc list-inside text-xs sm:text-sm">
                            <li>Handpicked lawyers with expertise across diverse legal fields.</li>
                            <li>Personalized matching to ensure the best lawyer-client fit.</li>
                            <li>Comprehensive solutions designed around your unique requirements.</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4 sm:w-96 p-8 m-4 bg-yellow-200 rounded-2xl card">
                        <h3 className="text-xl sm:text-3xl font-medium">Always Here for You</h3>
                        <p className="text-sm sm:text-base">Count on Medence for round-the-clock assistance and guidance.</p>
                        <hr className="border-t border-gray-500" />
                        <ul className="list-disc list-inside text-xs sm:text-sm">
                            <li>24/7 customer support for all your queries.</li>
                            <li>Timely updates and proactive communication.</li>
                            <li>Accessible help whenever and wherever you need it.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}