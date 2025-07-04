export default function LegalPlans() {
    return (
        <>
            <div className="mt-20 max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-purple-900 text-center mb-12">Tenants Problem &amp; Medences Solution</h2>
                <div className="rounded-xl overflow-hidden border border-gray-200 grid grid-cols-1 md:grid-cols-[60%_40%]">
                    <div className=" bg-indigo-100 p-6 md:p-10 border-t md:border-t-0 md:border-l border-indigo-100 flex flex-col justify-center shadow-md transition-shadow duration-300 hover:shadow-xl cursor-pointer ">
                        <div className="flex items-center gap-3 mb-4 text-indigo-900">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-indigo-700 text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path>
                            </svg><h3 className="text-xl font-bold">The Tenant’s Problem</h3>
                        </div>
                        <p className="text-gray-800 font-medium leading-relaxed text-sm md:text-base">You found the perfect flat, paid your deposit, followed every rule. But now the landlord won’t return your security deposit.<br />No calls. No replies. Just excuses — “cleaning charges,” “damage,” or “next tenant hasn’t come.”</p>
                    </div>
                    <div className=" bg-purple-100 p-6 md:p-10 flex flex-col justify-center shadow-md transition-shadow duration-300 hover:shadow-xl cursor-pointer ">
                        <div className="flex items-center gap-3 mb-4 text-purple-800">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-purple-600 text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                            </svg>
                            <h3 className="text-xl font-bold">The Medence Solution</h3>
                        </div>
                        <p className="text-gray-800 font-medium leading-relaxed text-sm md:text-base">Your personal lawyer steps in — calmly calls your landlord, sends legal notice if needed, and even represents you in court.<br className="hidden md:block" />No court runs. No stress. We handle it all end-to-end.</p>
                    </div>
                </div>
            </div>
        </>
    )
}