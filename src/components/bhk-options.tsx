  "use client"

  import { Home } from "lucide-react"

  export default function BhkOptions() {
    return (
      <section className="mx-20 py-6 mt-20  bg-[#15284F]"> {/* Dark navy background */}
        <div className="container mx-auto px-4 p-10">
          <div className="rounded-lg p-6 text-white">
            {/* Title & Description */}
            <div className="flex items-center space-x-3">
              <Home className="h-8 w-8 text-white" />
              <h2 className="text-xl md:text-2xl font-bold">BHK choice in mind?</h2>
            </div>
            <p className="text-gray-300 mt-1">Browse by no. of bedrooms in the house</p>

            {/* BHK Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {[
                { title: "Villa", description: "Luxury Properties" },
                { title: "2 BHK", description: "650+ Properties" },
                { title: "3 BHK", description: "650+ Properties" },
              ].map((item, index) => (
                 <div
                  key={index}
                  className="relative bg-white rounded-lg p-6 shadow-lg border border-gray-200 flex flex-col items-start justify-center h-[180px] w-[180px] md:h-[300px] md:w-[360px] mx-auto">
                  

                  <h3 className="text-xl font-bold mt-8">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    )
  }
