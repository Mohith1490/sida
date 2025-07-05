"use client"

import { Home, Package, ShoppingCart, Package2, Users, ChartLine, File,Sun,Settings } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Dashboard", icon: Home, href: "/dashboard" },
  { label: "Orders", icon: Package2, href: "/orders" },
  { label: "Riders", icon: ShoppingCart, href: "/riders" },
  { label: "Packers", icon: Package, href: "/packers" },
  { label: "Schedule", icon: Users, href: "/schedule" },
  { label: "Payments", icon: ChartLine, href: "/payments" },
  { label: "Settings", icon: File, href: "/settings" },
]

export function Sidebar() {
  return (
    <aside className="w-20 h-screen border-r p-4 hidden md:block fixed">
      <nav className="space-y-2 ">
        {navItems.map(({ label, icon: Icon, href }) => (
          <Link
            key={label}
            href={href}
            className={cn(
              "flex items-center gap-3 p-2 rounded-md hover:bg-primary/10 transition text-sm font-medium text-muted-foreground active:bg-purple-500"
            )}
          >
            <Icon className="h-5 w-5" />
          </Link>
        ))}
        <div className="p-3 space-y-5 absolute bottom-10" >
          <Sun className="h-5 w-5" />
          <Settings className="h-5 w-5" />
        </div>
      </nav>
    </aside>
  )
}

