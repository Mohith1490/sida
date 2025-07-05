"use client"
import { useState } from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { GeneralFaq, Planfaq, Lawyerfaq, BillingFaq, OtherFaq } from "../../../../data";

export default function Page() {
    const [toggle, setToggle] = useState<string>("general");
    return (
        <>
            <div className="px-8 md:px-16">
                <h1 className="text-2xl md:text-4xl font-bold text-center text-[#0A0B5C] mt-4 p-2 md:p-8">Frequently asked questions</h1>
                <div className="flex flex-col md:flex-row justify-center gap-12 py-8">
                    <div className="md:w-1/4 bg-gradient-to-b rounded-3xl">
                        <ul className="">
                            <li onClick={() => setToggle("general")}
                                className={`${toggle === "general" ? "flex items-center text-blue-600 bg-white p-4 cursor-pointer" : "flex items-center text-white bg-blue-500 hover:bg-blue-600  rounded-t-3xl p-4 cursor-pointer"}`}>
                                General
                            </li>
                            <li onClick={() => setToggle("plan")} className={`${toggle === "plan" ? "flex items-center text-blue-600 bg-white p-4 cursor-pointer" : "flex items-center text-white bg-blue-500 hover:bg-blue-600 p-4 cursor-pointer"}`}>
                                Plan
                            </li>
                            <li onClick={() => setToggle("lawyer")}
                                className={`${toggle === "lawyer" ? "flex items-center text-blue-600 bg-white p-4 cursor-pointer" : "flex items-center text-white bg-blue-500 hover:bg-blue-600   p-4 cursor-pointer"}`}>
                                Lawyer
                            </li>
                            <li onClick={() => setToggle("billing")} className={`${toggle === "billing" ? "flex items-center text-blue-600 bg-white p-4 cursor-pointer" : "flex items-center text-white bg-blue-500 hover:bg-blue-600   p-4 cursor-pointer"}`}>
                                Billing
                            </li>
                            <li onClick={() => setToggle("others")} className={`${toggle === "others" ? "flex items-center text-blue-600 bg-white p-4 cursor-pointer" : "flex items-center text-white bg-blue-500 hover:bg-blue-600 rounded-b-3xl  p-4 cursor-pointer"}`}>
                                Others
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-3/4 space-y-4 rounded-md">
                    {/* General faq */}
                        <div className={`${toggle === "general" ? "block" : "hidden"}`} >
                            {
                                GeneralFaq.map((value, index) => {
                                    return (
                                            <div key={`index-${index}`} className="mb-3" >
                                                <Accordion type="single" collapsible>
                                                    <AccordionItem value="item-1">
                                                        <AccordionTrigger>{value.question}</AccordionTrigger>
                                                        <AccordionContent>
                                                            {value.answer}
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            </div>
                                    )
                                })
                            }
                        </div>
                    {/* plan faq */}
                        <div className={`${toggle === "plan" ? "block" : "hidden"}`} >
                            {
                                Planfaq.map((value, index) => {
                                    return (
                                            <div key={`index-${index}`} className="mb-3" >
                                                <Accordion type="single" collapsible>
                                                    <AccordionItem value="item-1">
                                                        <AccordionTrigger>{value.question}</AccordionTrigger>
                                                        <AccordionContent>
                                                            {value.answer}
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            </div>
                                    )
                                })
                            }
                        </div>
                    {/* lawyer faq */}
                        <div className={`${toggle === "lawyer" ? "block" : "hidden"}`} >
                            {
                                Lawyerfaq.map((value, index) => {
                                    return (
                                            <div key={`index-${index}`} className="mb-3" >
                                                <Accordion key={`index-${index}`} type="single" collapsible>
                                                    <AccordionItem value="item-1">
                                                        <AccordionTrigger>{value.question}</AccordionTrigger>
                                                        <AccordionContent>
                                                            {value.answer}
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            </div>
                                    )
                                })
                            }
                        </div>
                    {/* Billing faq */}
                        <div className={`${toggle === "billing" ? "block" : "hidden"}`} >
                            {
                                BillingFaq.map((value, index) => {
                                    return (
                                            <div key={`index-${index}`} className="mb-3" >
                                                <Accordion key={`index-${index}`} type="single" collapsible>
                                                    <AccordionItem value="item-1">
                                                        <AccordionTrigger>{value.question}</AccordionTrigger>
                                                        <AccordionContent>
                                                            {value.answer}
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            </div>
                                    )
                                })
                            }
                        </div>
                    {/* other faq */}
                        <div className={`${toggle === "others" ? "block" : "hidden"}`} >
                            {
                                OtherFaq.map((value, index) => {
                                    return (
                                            <div key={`index-${index}`} className="mb-3" >
                                                <Accordion key={`index-${index}`} type="single" collapsible>
                                                    <AccordionItem value="item-1">
                                                        <AccordionTrigger>{value.question}</AccordionTrigger>
                                                        <AccordionContent>
                                                            {value.answer}
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}