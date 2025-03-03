export default function Partners() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Hundreds of Partners</h2>
        <h3 className="text-xl md:text-2xl font-bold mb-6">Around the World</h3>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Every day, we build trust through communication, transparency, and results.
        </p>

        {/* Partner logos would go here */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-16 bg-gray-200 rounded-md flex items-center justify-center">
              <span className="text-gray-500 font-medium">Partner {i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

