
export default function FAQSection(){
    return(
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
    {/* FAQ Item 1 */}
    <div className="border rounded-lg overflow-hidden">
      <button className="w-full text-left p-4 flex justify-between items-center text-sm md:text-md font-semibold">
        What are included and excluded in the plan?
        <span className="bg-blue-700 text-white rounded p-1">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="0"
            viewBox="0 0 15 15"
            className="transition-transform rotate-45"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </button>
    </div>

    {/* FAQ Item 2 */}
    <div className="border rounded-lg overflow-hidden">
      <button className="w-full text-left p-4 flex justify-between items-center text-sm md:text-md font-semibold">
        Why is the plan pricing so affordable while lawyers outside charge so high?
        <span className="bg-blue-700 text-white rounded p-1">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="0"
            viewBox="0 0 15 15"
            className="transition-transform rotate-45"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </button>
    </div>

    {/* FAQ Item 3 */}
    <div className="border rounded-lg overflow-hidden">
      <button className="w-full text-left p-4 flex justify-between items-center text-sm md:text-md font-semibold">
        Can I contact my personal lawyer on an emergency basis?
        <span className="bg-blue-700 text-white rounded p-1">
          {/* SVG same as above */}
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="0"
            viewBox="0 0 15 15"
            className="transition-transform rotate-45"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </button>
    </div>

    {/* FAQ Item 4 */}
    <div className="border rounded-lg overflow-hidden">
      <button className="w-full text-left p-4 flex justify-between items-center text-sm md:text-md font-semibold">
        Does the personal lawyer handle cases in court or only offer legal advice?
        <span className="bg-blue-700 text-white rounded p-1">
         <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="0"
            viewBox="0 0 15 15"
            className="transition-transform rotate-45"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </button>
    </div>

    {/* FAQ Item 5 */}
    <div className="border rounded-lg overflow-hidden">
      <button className="w-full text-left p-4 flex justify-between items-center text-sm md:text-md font-semibold">
        Is my information safe and confidential with Medence?
        <span className="bg-blue-700 text-white rounded p-1">
         <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="0"
            viewBox="0 0 15 15"
            className="transition-transform rotate-45"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </button>
    </div>
  </div>
</section>

        </>
    )
}