export default function BhkOptions() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-navy-800 rounded-lg p-6 text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-4">BHK choice in mind?</h2>
          <p className="mb-6">Browse by no. of bedrooms in the house</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-6 text-center text-black">
              <h3 className="text-xl font-bold mb-2">Villa</h3>
              <p className="text-gray-600">Luxury Properties</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center text-black">
              <h3 className="text-xl font-bold mb-2">2 BHK</h3>
              <p className="text-gray-600">600+ Properties</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center text-black">
              <h3 className="text-xl font-bold mb-2">3 BHK</h3>
              <p className="text-gray-600">650+ Properties</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

