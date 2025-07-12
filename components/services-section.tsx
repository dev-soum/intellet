import { Code, Smartphone, Cloud, Palette, Megaphone, Briefcase } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Crafting responsive and high-performance web applications tailored to your business needs.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Building intuitive and engaging mobile experiences for iOS and Android platforms.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Leveraging cloud technologies for scalable, secure, and efficient infrastructure.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing user-centric interfaces that are both beautiful and highly functional.",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Driving growth and visibility through effective digital marketing strategies.",
    },
    {
      icon: Briefcase,
      title: "IT Consulting",
      description: "Providing expert guidance to optimize your technology strategy and operations.",
    },
  ]

  return (
    <section id="services" className="w-full py-16 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Core Services</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            We offer a comprehensive suite of services designed to help your business thrive in the digital age.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden
                         bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-black/20
                         hover:shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-2
                         animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="flex flex-col items-center text-center p-6">
                <div className="p-4 rounded-full bg-primary/10 text-primary mb-4 transition-transform group-hover:scale-105">
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent
                className="text-center px-6 pb-6
                                    max-h-0 opacity-0
                                    transition-all duration-500 ease-in-out
                                    group-hover:max-h-screen group-hover:opacity-100"
              >
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
