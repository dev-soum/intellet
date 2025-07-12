import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Let's build something amazing together. Reach out to us for a consultation.
          </p>
        </div>
        <div className="max-w-lg mx-auto bg-card p-8 rounded-lg shadow-lg animate-in fade-in slide-in-from-bottom-10 duration-700 ease-out delay-100">
          <form className="grid gap-6">
            <Input placeholder="Your Name" type="text" className="h-12" />
            <Input placeholder="Your Email" type="email" className="h-12" />
            <Input placeholder="Subject" type="text" className="h-12" />
            <Textarea placeholder="Your Message" rows={5} className="min-h-[120px]" />
            <Button type="submit" size="lg" className="w-full py-3 text-lg">
              Send Message
            </Button>
          </form>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Or email us directly at{" "}
            <Link href="mailto:info@intellett.com" className="underline hover:text-primary">
              info@intellett.com
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
