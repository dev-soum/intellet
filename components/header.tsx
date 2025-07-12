"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navigationData } from "@/lib/navigation-data"
import { WhatWeDoMegaMenu } from "./what-we-do-mega-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import * as React from "react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          {/* Reverted to text logo with icon */}
          <Image src="/intellett-logo.png" alt="Intellett Logo" width={120} height={32} className="object-contain" />
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navigationData.map((item) => (
              <NavigationMenuItem key={item.name}>
                {item.isMegaMenu ? (
                  <WhatWeDoMegaMenu />
                ) : item.children ? (
                  <>
                    <NavigationMenuTrigger className="text-sm font-medium">{item.name}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-3 p-4 md:w-[300px] md:grid-cols-1">
                        {item.children.map((child, index) => (
                          <ListItem key={index} href={child.href} title={child.name}>
                            {child.name}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>{item.name}</NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
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
                {navigationData.map((item) => (
                  <React.Fragment key={item.name}>
                    <Link href={item.href} className="text-lg font-medium hover:text-primary">
                      {item.name}
                    </Link>
                    {item.children && !item.isMegaMenu && (
                      <div className="ml-4 flex flex-col gap-2">
                        {item.children.map((child, index) => (
                          <Link
                            key={index}
                            href={child.href}
                            className="text-base text-muted-foreground hover:text-primary"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                    {item.isMegaMenu && item.children && (
                      <div className="ml-4 flex flex-col gap-4">
                        {item.children.map((category, catIndex) => (
                          <div key={catIndex}>
                            <h4 className="text-base font-semibold text-primary mb-1">{category.category}</h4>
                            <div className="flex flex-col gap-1">
                              {category.items.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  href={subItem.href}
                                  className="text-sm text-muted-foreground hover:text-primary"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            {children && <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>}
          </Link>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
