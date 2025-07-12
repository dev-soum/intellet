"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { navigationData } from "@/lib/navigation-data"

const whatWeDoItem = navigationData.find((item) => item.name === "What We Do")

export function WhatWeDoMegaMenu() {
  if (!whatWeDoItem || !whatWeDoItem.children) {
    return null // Should not happen if navigationData is correctly defined
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm font-medium">What We Do</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[600px] gap-3 p-4 md:w-[800px] md:grid-cols-3 lg:w-[1000px] lg:grid-cols-4">
              {whatWeDoItem.children.map((category, index) => (
                <li key={index} className="row-span-3">
                  <h4 className="mb-2 text-sm font-semibold leading-none text-primary">{category.category}</h4>
                  <ul className="grid gap-1">
                    {category.items.map((item, itemIndex) => (
                      <ListItem key={itemIndex} href={item.href} title={item.name}>
                        {item.name}
                      </ListItem>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
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
