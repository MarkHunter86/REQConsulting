"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Insights", href: "/insights" },
    { name: "Partners", href: "/partners" },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo in Upper Left Corner */}
          <div className="absolute top-4 left-4 z-50">
            <Link href="/" className="flex-shrink-0">
              <img
                src="/images/req-logo.png"
                alt="REQ Consulting"
                className="w-auto"
                style={{
                  height: "140px",
                  background: "linear-gradient(to right, #059669, #0f172a)",
                  borderRadius: "1rem",
                  padding: "6px",
                  border: "6px solid transparent",
                  backgroundClip: "padding-box",
                }}
                onError={(e) => {
                  e.currentTarget.src = "/images/req-logo.png"
                }}
              />
            </Link>
          </div>

          <div className="flex items-center">{/* Empty space where logo was */}</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 rounded-md ${
                  pathname === item.href
                    ? "text-gold-600 border-b-2 border-emerald-600"
                    : "text-navy-700 hover:text-emerald-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <ContactForm>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Contact Us</Button>
            </ContactForm>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy-700 hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-inset"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg z-50">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors rounded-md ${
                    pathname === item.href
                      ? "text-gold-600 bg-emerald-50"
                      : "text-navy-700 hover:text-emerald-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <ContactForm>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Contact Us</Button>
                </ContactForm>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
