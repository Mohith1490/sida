export default function Plans() {
    return (
        <>
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Pricing</h2>
                    <div id="pricing" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <div
                            className="pricing-card w-full flex flex-col gap-4 p-6 border-2 border-b-4 border-gray-950 rounded-2xl bg-white shadow transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
                            <div className="flex flex-row gap-2">
                                <p className="text-xs bg-green-100 text-green-500 rounded-full px-3 py-1">Basic</p>
                            </div>
                            <div>
                                <h1 className="text-5xl font-bold">₹499</h1>
                                <p className="text-xs mt-2 text-gray-500">One-time</p>
                            </div>
                            <div className="text-sm font-semibold">Level 1: Lawyer persuasion over call</div>
                            <div>
                                <button
                                    className="flex flex-row items-center justify-center gap-2 text-sm font-semibold bg-gray-950 text-white px-4 py-2 rounded-lg w-full hover:bg-gray-800 transition">Choose
                                    this plan
                                </button>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-sm font-semibold">Features:</h3>
                                <ul className="flex flex-col gap-2">
                                    <li className="text-sm flex items-center gap-2"><span className="text-gray-500"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg></span>Review deposit related clauses – Watch for vague terms allowing unfair
                                        deductions.</li>
                                    <li className="text-sm flex items-center gap-2"><span className="text-gray-500"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg></span>Check tenant rights and exit terms – Ensure fair notice period and no
                                        excessive penalties.</li>
                                </ul>
                            </div>
                            <div className="mt-auto">
                                <hr />
                                <p className="text-xs text-gray-500 mt-2">*30 days money back guarantee if paid and not used</p>
                            </div>
                        </div>
                        <div
                            className="pricing-card w-full flex flex-col gap-4 p-6 border-2 border-b-4 border-gray-950 rounded-2xl bg-gray-950 text-white shadow transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
                            <div className="flex flex-row gap-2">
                                <p className="text-xs bg-gray-800 text-white rounded-full px-3 py-1">Most Popular (Standard Plan)</p>
                            </div>
                            <div>
                                <h1 className="text-5xl font-bold">₹999</h1>
                                <p className="text-xs mt-2 text-gray-300">One-time</p>
                            </div>
                            <div className="text-sm font-semibold">Level 2 : Drafting of strong legal notice</div>
                            <div>
                                <button
                                    className="flex flex-row items-center justify-center gap-2 text-sm font-semibold bg-white text-gray-950 px-4 py-2 rounded-lg w-full hover:bg-gray-100 transition">Choose
                                    this plan</button>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-sm font-semibold">Features:</h3>
                                <ul className="flex flex-col gap-2">
                                    <li className="text-sm flex items-center gap-2"><span className="text-gray-500"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg></span>Drafting your rent agreement from scratch to suit your rights.</li>
                                    <li className="text-sm flex items-center gap-2"><span className="text-gray-500"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg></span>+ Everything included in Basic plan.</li>
                                </ul>
                            </div>
                            <div className="mt-auto">
                                <hr className="border-gray-800"/>
                                    <p className="text-xs text-gray-300 mt-2">*30 days money back guarantee if paid and not used</p>
                            </div>
                        </div>
                        <div
                            className="pricing-card w-full flex flex-col gap-4 p-6 border-2 border-b-4 border-gray-950 rounded-2xl bg-white shadow transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
                            <div className="flex flex-row gap-2">
                                <p className="text-xs bg-yellow-100 text-yellow-500 rounded-full px-3 py-1">Premium</p>
                            </div>
                            <div>
                                <h1 className="text-5xl font-bold">₹1499</h1>
                                <p className="text-xs mt-2 text-gray-500">One-time</p>
                            </div>
                            <div className="text-sm font-semibold">Level 3 : Fight your case in court to secure deposit</div>
                            <div>
                                <button
                                    className="flex flex-row items-center justify-center gap-2 text-sm font-semibold bg-gray-950 text-white px-4 py-2 rounded-lg w-full hover:bg-gray-800 transition">Choose
                                    this plan</button>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-sm font-semibold">Features:</h3>
                                <ul className="flex flex-col gap-2">
                                    <li className="text-sm flex items-center gap-2"><span className="text-gray-500"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg></span>Fight for issues apart from security deposits like sudden eviction or
                                        frequent privacy intrusions by landlord.</li>
                                    <li className="text-sm flex items-center gap-2"><span className="text-gray-500"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg></span>Handle issues like sudden eviction or landlord harassment</li>
                                    <li className="text-sm flex items-center gap-2"><span className="text-gray-500"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg></span>+ All features included in Standard plan</li>
                                </ul>
                            </div>
                            <div className="mt-auto">
                                <hr />
                                <p className="text-xs text-gray-500 mt-2">*30 days money back guarantee if paid and not used</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}