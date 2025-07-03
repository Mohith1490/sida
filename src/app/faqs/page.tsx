export default function page() {
    return (
        <>
            <div className="px-8 md:px-16">
                <h1 className="text-2xl md:text-4xl font-bold text-center text-[#0A0B5C] mt-4 p-2 md:p-8">Frequently asked questions</h1>
                <div className="flex flex-col md:flex-row justify-center gap-12 py-8">
                    <div className="md:w-1/4 bg-gradient-to-b rounded-3xl">
                        <ul className="">
                            <li
                                className="flex items-center text-white bg-blue-500 hover:bg-blue-600 rounded-br-3xl rounded-t-3xl p-4 cursor-pointer">
                                General
                            </li>
                            <li className="flex items-center text-blue-600 bg-white p-4 cursor-pointer">
                                Plan
                            </li>
                            <li
                                className="flex items-center text-white bg-blue-500 hover:bg-blue-600 rounded-tr-3xl p-4 cursor-pointer">
                                Lawyer
                            </li>
                            <li className="flex items-center text-white bg-blue-500 hover:bg-blue-600 p-4 cursor-pointer">
                                Billing
                            </li>
                            <li className="flex items-center text-white bg-blue-500 hover:bg-blue-600 rounded-b-3xl p-4 cursor-pointer">
                                Others
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-3/4 space-y-4 rounded-md">
                        <div className="border rounded-lg overflow-hidden">
                            <button className="w-full text-left p-4 flex justify-between items-center text-sm md:text-md font-semibold">
                                What are included and excluded in the plan?
                                <span className="bg-blue-700 text-white rounded p-1 ml-1">
                                    <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15"
                                        className="transition-transform rotate-45" height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div className="border rounded-lg overflow-hidden">
                            <button className="w-full text-left p-4 flex justify-between items-center text-sm md:text-md font-semibold">
                                Does the plan also include my family members?
                                <span className="bg-blue-700 text-white rounded p-1 ml-1">
                                    <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15"
                                        className="transition-transform rotate-45" height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div className="border rounded-lg overflow-hidden">
                            <button className="w-full text-left p-4 flex justify-between items-center text-sm md:text-md font-semibold">
                                Why is the plan pricing so affordable while lawyers outside charge so high?
                                <span className="bg-blue-700 text-white rounded p-1 ml-1">
                                    <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15"
                                        className="transition-transform rotate-45" height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div className="border rounded-lg overflow-hidden">
                            <button className="w-full text-left p-4 flex justify-between items-center text-sm md:text-md font-semibold">
                                Can I upgrade and downgrade my plan later?
                                <span className="bg-blue-700 text-white rounded p-1 ml-1">
                                    <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15"
                                        className="transition-transform rotate-45" height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div className="border rounded-lg overflow-hidden">
                            <button className="w-full text-left p-4 flex justify-between items-center text-sm md:text-md font-semibold">
                                Is there any refund if I don’t like the plan?
                                <span className="bg-blue-700 text-white rounded p-1 ml-1">
                                    <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15"
                                        className="transition-transform rotate-45" height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}