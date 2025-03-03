import Image from "next/image"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Buy a Property",
      image: "/placeholder.svg?height=300&width=200",
      link: "/buy",
    },
    {
      id: 2,
      title: "Sell a Property",
      image: "/placeholder.svg?height=300&width=200",
      link: "/sell",
    },
    {
      id: 3,
      title: "Rent a Property",
      image: "/placeholder.svg?height=300&width=200",
      link: "/rent",
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">What we Doing?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link href={service.link} key={service.id}>
              <div className="relative rounded-lg overflow-hidden border border-gray-200 group">
                <div className="h-64 md:h-80 relative">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white p-4 text-center">
                  <h3 className="text-lg font-medium">{service.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

