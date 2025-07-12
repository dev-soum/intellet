"use client"

import Image from "next/image"

export function ClientsSection() {
  const clientLogos = [
    // Using placeholder.svg for now. Replace with your actual client logo paths.
    "/placeholder.svg?height=75&width=212",
    "/placeholder.svg?height=75&width=212",
    "/placeholder.svg?height=75&width=212",
    "/placeholder.svg?height=75&width=212",
    "/placeholder.svg?height=75&width=212",
    "/placeholder.svg?height=75&width=212",
    "/placeholder.svg?height=75&width=212",
    "/placeholder.svg?height=75&width=212",
    "/placeholder.svg?height=75&width=212",
    "/placeholder.svg?height=75&width=212",
    "/placeholder.svg?height=75&width=212",
    "/placeholder.svg?height=75&width=212",
    "/placeholder.svg?height=75&width=212",
    "/placeholder.svg?height=75&width=212",
    "/placeholder.svg?height=75&width=212",
    "/placeholder.svg?height=75&width=212",
    "/placeholder.svg?height=75&width=212",
    "/placeholder.svg?height=75&width=212",
    "/placeholder.svg?height=75&width=212",
    "/placeholder.svg?height=75&width=212",
    "/placeholder.svg?height=75&width=212",
    "/placeholder.svg?height=75&width=212",
    "/placeholder.svg?height=75&width=212",
  ]

  // Duplicate logos to create a seamless infinite scroll effect
  const duplicatedLogos = [...clientLogos, ...clientLogos]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6 text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Valued Clients</h2>
        <p className="mt-4 text-muted-foreground md:text-xl">Trusted by leading companies across various industries.</p>
      </div>
      <div className="relative w-full overflow-hidden py-4">
        <div className="flex w-max animate-scroll">
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 px-8">
              <Image
                src={logo || "/placeholder.svg"}
                alt={`Client logo ${index + 1}`}
                width={212}
                height={75}
                className="h-[75px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
