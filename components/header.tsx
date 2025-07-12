import Link from "next/link"
import { Code, Menu } from "lucide-react" // Re-import Code icon
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Code className="h-6 w-6 text-primary" /> {/* Re-added Code icon */}
          <span>Intellett</span> {/* Re-added text logo */}
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#hero" className="transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="#services" className="transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="#features" className="transition-colors hover:text-primary">
            Features
          </Link>
          <Link href="#testimonials" className="transition-colors hover:text-primary">
            Testimonials
          </Link>
          <Link href="#contact" className="transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 pt-6">
                <Link href="#hero" className="text-lg font-medium hover:text-primary">
                  Home
                </Link>
                <Link href="#services" className="text-lg font-medium hover:text-primary">
                  Services
                </Link>
                <Link href="#features" className="text-lg font-medium hover:text-primary">
                  Features
                </Link>
                <Link href="#testimonials" className="text-lg font-medium hover:text-primary">
                  Testimonials
                </Link>
                <Link href="#contact" className="text-lg font-medium hover:text-primary">
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
