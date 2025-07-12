import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full py-20 md:py-32 lg:py-48 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white overflow-hidden"
    >
      <div className="container px-4 md:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-in fade-in slide-in-from-top-8 duration-700 ease-out">
            Empowering Your Digital Future
          </h1>
          <p className="mx-auto max-w-[800px] text-gray-300 md:text-xl animate-in fade-in slide-in-from-top-10 duration-700 ease-out delay-100">
            Intellett delivers innovative software solutions, transforming your ideas into reality with cutting-edge
            technology and unparalleled expertise.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center animate-in fade-in slide-in-from-top-12 duration-700 ease-out delay-200">
            <Link href="#contact">
              <Button size="lg" className="px-8 py-3 text-lg bg-primary hover:bg-primary/90 transition-colors">
                Get Started
              </Button>
            </Link>
            <Link href="#services">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-primary transition-colors bg-transparent"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* New circular SVG background element */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <svg
          className="circle-svg desk w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1020px] lg:h-[1020px]"
          viewBox="0 0 1020 1020"
        >
          {/* Outer Glow Layer */}
          <circle className="glow" cx="510" cy="510" r="300"></circle>
          {/* Removed: Main White Circle Animation */}
        </svg>
      </div>
    </section>
  )
}
