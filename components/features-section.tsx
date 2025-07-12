import { Scale, ShieldCheck, Users, Rocket, Zap, LifeBuoy } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export function FeaturesSection() {
  const features = [
    {
      icon: Scale,
      title: "Scalability",
      description: "Build solutions that grow with your business, designed for future expansion.",
    },
    {
      icon: ShieldCheck,
      title: "Robust Security",
      description: "Implementing industry-leading security practices to protect your data and users.",
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Creating intuitive and engaging experiences that prioritize your users' needs.",
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Delivering lightning-fast applications for superior user experience.",
    },
    {
      icon: Zap,
      title: "Agile Development",
      description: "Flexible and iterative development process ensuring rapid delivery and adaptability.",
    },
    {
      icon: LifeBuoy,
      title: "Dedicated Support",
      description: "Providing ongoing support and maintenance to ensure your systems run smoothly.",
    },
  ]

  return (
    <section id="features" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Intellett?</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Our commitment to excellence is reflected in the core features of our development process.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="flex flex-col items-center text-center p-6">
                <div className="p-4 rounded-full bg-primary/10 text-primary mb-4 transition-transform group-hover:scale-105">
                  <feature.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-6">
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
