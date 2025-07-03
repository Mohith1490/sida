export default function Benifits() {
    return (
        <>
            <section className="mt-20 mx-6 md:mx-20 text-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-12">Benefits</h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
                    <div className="flex-1 items-center justify-center bg-white p-6 rounded-xl shadow-md border border-gray-200 max-w-sm">
                        <h3 className="text-lg font-semibold text-purple-900 mb-2">Quick timelines</h3>
                    </div>
                    <div className="flex-1 bg-white p-6 rounded-xl shadow-md border border-gray-200 max-w-sm">
                        <h3 className="text-lg font-semibold text-purple-900 mb-2">Affordable pricing</h3>
                    </div>
                    <div className="flex-1 bg-white p-6 rounded-xl shadow-md border border-gray-200 max-w-sm">
                        <h3 className="text-lg font-semibold text-purple-900 mb-2">Expert lawyer</h3>
                    </div>
                </div>
            </section>
        </>
    )
}