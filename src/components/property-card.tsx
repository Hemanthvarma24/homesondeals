import Image from "next/image"
import { Button } from "@/components/ui/button"
import homebg from "@/assets/homebg.jpg"

interface PropertyCardProps {
  property: {
    id: number
    location: string
    type: string
    priceRange: string
    unit: string
    image: string
  }
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-navy-800 rounded-lg overflow-hidden text-white">
      <div className="relative h-48 md:h-64">
        <Image src={homebg || "/placeholder.svg"} alt={property.location} fill className="object-cover" />
      </div>
      <div className="p-4">
        <p className="text-sm font-medium">{property.location}</p>
        <p className="text-xs text-gray-300 mb-2">{property.type}</p>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-xl font-bold">{property.priceRange}</span>
            <span className="text-sm ml-1">{property.unit}</span>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Buy Now</Button>
        </div>
      </div>
    </div>
  )
}

