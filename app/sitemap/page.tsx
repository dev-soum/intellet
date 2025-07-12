import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { navigationData } from "@/lib/navigation-data"
import { ChevronRight, Building2, Users, Briefcase, Globe, BookOpen, Phone } from "lucide-react"

export default function SitemapPage() {
  const getIconForSection = (sectionName: string) => {
    switch (sectionName) {
      case "Who We Are":
        return <Users className="h-5 w-5" />
      case "What We Do":
        return <Briefcase className="h-5 w-5" />
      case "Our Companies":
        return <Building2 className="h-5 w-5" />
      case "Industries (We Serve)":
        return <Globe className="h-5 w-5" />
      case "Insights":
        return <BookOpen className="h-5 w-5" />
      case "Contact Us":
        return <Phone className="h-5 w-5" />
      default:
        return <ChevronRight className="h-5 w-5" />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-in fade-in slide-in-from-top-8 duration-700 ease-out">
              Complete Site Overview
            </h1>
            <p className="mt-6 text-xl text-muted-foreground md:text-2xl animate-in fade-in slide-in-from-top-10 duration-700 ease-out delay-100">
              Explore all our services, solutions, and resources in one comprehensive view
            </p>
            <div className="mt-8 animate-in fade-in slide-in-from-top-12 duration-700 ease-out delay-200">
              <Badge variant="outline" className="text-lg px-4 py-2">
                Complete Navigation Guide
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8">
            {navigationData.map((section, index) => (
              <Card
                key={section.name}
                className="group hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    {getIconForSection(section.name)}
                    <Link href={section.href} className="hover:text-primary transition-colors">
                      {section.name}
                    </Link>
                  </CardTitle>
                  {section.name === "What We Do" && (
                    <p className="text-muted-foreground text-lg">Transforming businesses through technology</p>
                  )}
                </CardHeader>

                <CardContent>
                  {section.children && (
                    <div className="space-y-6">
                      {/* Handle mega menu structure for "What We Do" */}
                      {section.isMegaMenu ? (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                          {section.children.map((category, catIndex) => (
                            <div key={catIndex} className="space-y-3">
                              <h3 className="text-lg font-semibold text-primary border-b border-border pb-2">
                                {category.category}
                              </h3>
                              <ul className="space-y-2">
                                {category.items.map((item, itemIndex) => (
                                  <li key={itemIndex}>
                                    <Link
                                      href={item.href}
                                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group/item"
                                    >
                                      <ChevronRight className="h-4 w-4 group-hover/item:translate-x-1 transition-transform" />
                                      <span className="text-sm">{item.name}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        /* Handle regular dropdown structure */
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                          {section.children.map((child, childIndex) => (
                            <div key={childIndex}>
                              {/* Check if child has category structure (Our Companies) */}
                              {child.category ? (
                                <div className="space-y-3">
                                  <h3 className="text-lg font-semibold text-primary border-b border-border pb-2">
                                    {child.category}
                                  </h3>
                                  <ul className="space-y-2">
                                    {child.items.map((item, itemIndex) => (
                                      <li key={itemIndex}>
                                        <Link
                                          href={item.href}
                                          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group/item"
                                        >
                                          <ChevronRight className="h-4 w-4 group-hover/item:translate-x-1 transition-transform" />
                                          <span className="text-sm">{item.name}</span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ) : (
                                /* Regular child items */
                                <Link
                                  href={child.href}
                                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group/item p-3 rounded-lg hover:bg-muted"
                                >
                                  <ChevronRight className="h-4 w-4 group-hover/item:translate-x-1 transition-transform" />
                                  <span>{child.name}</span>
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Special case for Home */}
                  {section.name === "Home" && (
                    <div className="text-muted-foreground">
                      <p>
                        Welcome to Intellett - Your gateway to innovative technology solutions and digital
                        transformation.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="w-full py-16 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Comprehensive Service Portfolio</h2>
            <p className="mt-4 text-muted-foreground text-lg">Everything you need to know about our offerings</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center p-6">
              <CardContent className="pt-0">
                <div className="text-3xl font-bold text-primary mb-2">8</div>
                <div className="text-sm text-muted-foreground">Service Categories</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-0">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Specialized Services</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-0">
                <div className="text-3xl font-bold text-primary mb-2">10</div>
                <div className="text-sm text-muted-foreground">Industries Served</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-0">
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <div className="text-sm text-muted-foreground">Partner Companies</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Ready to Get Started?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Explore our services or get in touch to discuss your specific needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/what-we-do"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Explore Our Services
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
