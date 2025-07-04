"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import gsap from "gsap"

gsap.registerPlugin(ScrollTrigger)

export default function TrustPage() {
    const clientRef = useRef<HTMLParagraphElement>(null)
    const scrollRef = useRef<HTMLDivElement>(null)
    const moneySavedRef = useRef<HTMLParagraphElement>(null);

    useGSAP(() => {
        if (!clientRef.current || !scrollRef.current || !moneySavedRef) return

        gsap.to(clientRef.current, {
            duration: 3,
            scrollTrigger: {
                trigger: scrollRef.current,
                start: "top 90%",
                end: "bottom bottom",
            },
            onUpdate: function () {
                const progress = this.progress()
                const value = Math.min(progress * 100, 400).toFixed(0)
                if (clientRef.current) {
                    clientRef.current.textContent = value + "+"
                }
            }
        })

        gsap.to(moneySavedRef.current, {
            duration: 3,
            scrollTrigger: {
                trigger: scrollRef.current,
                start: "top 90%",
                end: "bottom bottom",
            },
            onUpdate: function () {
                const progress = this.progress()
                const value = Math.min(progress * 100000, 73000).toFixed(0)
                if (moneySavedRef.current) {
                    moneySavedRef.current.textContent = value + "+"
                }
            }
        })
    }, [])

    return (
        <section
            ref={scrollRef}
            className="py-8 px-4 md:py-12 md:px-12 bg-white flex flex-col items-center"
        >
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
                Trusted by our Users
            </h2>
            <p className="mb-6 text-gray-600 text-sm md:text-base text-center">
                Medence Legal provides 100% value for money
            </p>

            <div className="grid grid-rows-1 sm:grid-cols-3 justify-around space-y-6 md:space-y-0 md:space-x-48 bg-white shadow-md border-t rounded-lg p-6 md:p-24 border-gray-200 w-full">
                <div className="text-center w-full">
                    <p ref={clientRef} className="text-2xl md:text-6xl font-bold text-blue-700">0</p>
                    <p className="text-gray-600 text-sm md:text-base">Clients Section</p>
                </div>

                <div className="text-center w-full">
                    <p ref={moneySavedRef} className="text-2xl md:text-6xl font-bold text-blue-700">0</p>
                    <p className="text-gray-600 text-sm md:text-base">Average Money Saved per User</p>
                </div>

                <div className="text-center w-full">
                    <p className="text-2xl md:text-6xl font-bold text-blue-700">4.83</p>
                    <p className="text-gray-600 text-sm md:text-base">Average Rating</p>
                </div>
            </div>
        </section>
    )
}
