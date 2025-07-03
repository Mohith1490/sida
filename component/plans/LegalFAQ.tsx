import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { legalFaq } from "../../data"

export default function LegalFAQ() {
    return (
        <>
            <div className="px-6 md:px-16 py-20 bg-white">
                <h2 className="text-3xl font-bold mb-10">FAQs</h2>
                <div className="divide-y border-t border-b">
                    {
                        legalFaq.map((value, index) => {
                            return (
                                <div className="mb-3" key={`index-${index}`} >
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
            </div>
        </>
    )
}