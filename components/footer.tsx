import Link from "next/link"
import { Code, Facebook, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full py-10 border-t bg-background">
      <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <Code className="h-6 w-6 text-primary" />
            <span>Intellett</span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs">
            Innovative software solutions for a brighter digital future.
          </p>
          <div className="flex gap-4 mt-2">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <Link href="#hero" className="text-muted-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
          <Link href="/sitemap" className="text-muted-foreground hover:text-primary transition-colors">
            Site Overview
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
          <p className="text-muted-foreground">123 Tech Lane, Innovation City, CA 90210</p>
          <p className="text-muted-foreground">Email: info@intellett.com</p>
          <p className="text-muted-foreground">Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="container px-4 md:px-6 text-center mt-10 pt-6 border-t border-border/50">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Intellett. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
