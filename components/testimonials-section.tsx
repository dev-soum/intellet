import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Intellett transformed our online presence. Their web development expertise is truly exceptional!",
      name: "Jane Doe",
      title: "CEO, Tech Innovations",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      quote: "The mobile app developed by Intellett exceeded our expectations. Seamless experience and great support.",
      name: "John Smith",
      title: "Founder, Mobile Solutions",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      quote: "Their cloud solutions are robust and scalable. Intellett is a partner we can truly rely on.",
      name: "Emily White",
      title: "CTO, Cloud Ventures",
      avatar: "/placeholder.svg?height=50&width=50",
    },
  ]

  return (
    <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Hear from businesses that have partnered with Intellett to achieve their digital goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="flex flex-col items-center text-center p-6 group hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="h-8 w-8 text-primary mb-4 transition-transform group-hover:scale-105" />
              <CardContent className="flex flex-col items-center">
                <p className="text-lg italic mb-6">{testimonial.quote}</p>
                <Avatar className="h-16 w-16 mb-3">
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                  <AvatarFallback>
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <p className="font-semibold text-lg">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
