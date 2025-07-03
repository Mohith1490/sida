import Image from "next/image"
export default function PlanIntro() {
    return (
        <>
            <div className="min-h-screen flex flex-col md:flex-row">
                <div className="bg-purple-100 w-full md:w-1/2 p-10 flex flex-col justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">Legal Plan - For<br />
                        Tenants
                    </h1>
                    <p className="text-gray-700 text-lg mb-8 max-w-md">Renting a house is tough already, and if the landlord is troublesome then it makes it worse. With Medence you solve the problem of troublesome landlords. Not refunding your security deposit, or making getting evicted abruptly? Dont worry with Medence Personal Lawyer you have a lawyer who can secure your stay</p>
                </div>
                <div className="w-full md:w-1/2 relative">
                    <Image width={100} height={100} alt="Man on phone" loading="lazy" decoding="async" data-nimg="fill" className="object-cover absolute w-full h-full inset-0 " sizes="100vw" src={"/entrepreneur.webp"} />
                </div>
            </div>
        </>
    )
}