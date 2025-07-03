import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { homeFaq } from "../../data"

export default function FAQSection() {
  return (
    <>
      <section className="py-8 px-4 md:py-12 md:px-12 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="mb-6 text-sm md:text-base">
            Still have any questions? Contact our Team via{' '}
            <a className="text-blue-600 underline" href="mailto:support@medencelegal.com">
              support@medencelegal.in
            </a>.
          </p>
          <a href="/faqs">
            <button className="border rounded px-4 py-2 text-sm font-medium hover:bg-gray-200 transition w-full md:w-auto">
              See All FAQ&apos;s
            </button>
          </a>
        </div>

        <div className="md:w-2/3 space-y-4 border p-4 md:p-8 rounded-md">
          {
            homeFaq.map((value,index) => {
              return (
                <div key={`index-${index}`}>
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
      </section>

    </>
  )
}