export default function Steps() {
    return (
        <>
            <div className="py-12 bg-white">
                <div className="mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold mb-12 text-[#080414]">How It Works</h2>
                    <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8">

                        {/* Step 1 */}
                        <div className="relative flex flex-col items-center">
                            <div
                                className="w-16 h-16 flex items-center justify-center rounded-full mb-2"
                                style={{ backgroundColor: "#080414" }}
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 512 512"
                                    className="text-white text-2xl"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-lg mb-2 text-[#080414]">1. Call Our Executive</h3>
                            <p className="text-gray-400 text-center">
                                Select your required plan and talk to our executive.
                            </p>
                            <div
                                className="absolute hidden md:block w-px h-16 border-dotted border-gray-600"
                                style={{ top: "6rem", left: "50%", transform: "translateX(-50%)" }}
                            />
                        </div>

                        {/* Step 2 */}
                        <div className="relative flex flex-col items-center">
                            <div
                                className="w-16 h-16 flex items-center justify-center rounded-full mb-2"
                                style={{ backgroundColor: "#080414" }}
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 448 512"
                                    className="text-white text-2xl"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-lg mb-2 text-[#080414]">2. Expert Lawyer Assigned</h3>
                            <p className="text-gray-400 text-center">
                                Based on your needs and preference, we will assign an expert lawyer to you.
                            </p>
                            <div
                                className="absolute hidden md:block w-px h-16 border-dotted border-gray-600"
                                style={{ top: "6rem", left: "50%", transform: "translateX(-50%)" }}
                            />
                        </div>

                        {/* Step 3 */}
                        <div className="relative flex flex-col items-center">
                            <div
                                className="w-16 h-16 flex items-center justify-center rounded-full mb-2"
                                style={{ backgroundColor: "#080414" }}
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 512 512"
                                    className="text-white text-2xl"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M504.971 199.362l-22.627-22.627c-9.373-9.373-24.569-9.373-33.941 0l-5.657 5.657L329.608 69.255l5.657-5.657c9.373-9.373 9.373-24.569 0-33.941L312.638 7.029c-9.373-9.373-24.569-9.373-33.941 0L154.246 131.48c-9.373 9.373-9.373 24.569 0 33.941l22.627 22.627c9.373 9.373 24.569 9.373 33.941 0l5.657-5.657 39.598 39.598-81.04 81.04-5.657-5.657c-12.497-12.497-32.758-12.497-45.255 0L9.373 412.118c-12.497 12.497-12.497 32.758 0 45.255l45.255 45.255c12.497 12.497 32.758 12.497 45.255 0l114.745-114.745c12.497-12.497 12.497-32.758 0-45.255l-5.657-5.657 81.04-81.04 39.598 39.598-5.657 5.657c-9.373 9.373-9.373 24.569 0 33.941l22.627 22.627c9.373 9.373 24.569 9.373 33.941 0l124.451-124.451c9.372-9.372 9.372-24.568 0-33.941z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-lg mb-2 text-[#080414]">3. Assigned Personal Lawyer</h3>
                            <p className="text-gray-400 text-center">
                                Congrats! You now have a personal lawyer.
                            </p>
                            <div
                                className="absolute hidden md:block w-px h-16 border-dotted border-gray-600"
                                style={{ top: "6rem", left: "50%", transform: "translateX(-50%)" }}
                            />
                        </div>

                        {/* Step 4 */}
                        <div className="relative flex flex-col items-center">
                            <div
                                className="w-16 h-16 flex items-center justify-center rounded-full mb-2"
                                style={{ backgroundColor: "#080414" }}
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 512 512"
                                    className="text-white text-2xl"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-lg mb-2 text-[#080414]">4. Legal Assistance</h3>
                            <p className="text-gray-400 text-center">
                                Connect with your personal lawyer for any legal issue. They are your go-to professional for anything legal.
                            </p>
                            <div
                                className="absolute hidden md:block w-px h-16 border-dotted border-gray-600"
                                style={{ top: "6rem", left: "50%", transform: "translateX(-50%)" }}
                            />
                        </div>

                        {/* Step 5 */}
                        <div className="relative flex flex-col items-center">
                            <div
                                className="w-16 h-16 flex items-center justify-center rounded-full mb-2"
                                style={{ backgroundColor: "#080414" }}
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 512 512"
                                    className="text-white text-2xl"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-lg mb-2 text-[#080414]">5. Grievance Support</h3>
                            <p className="text-gray-400 text-center">
                                Our robust support team is at your disposal if you need to change lawyers or resolve grievances.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
