import { useState } from "react"
import Link from "next/link"
import { Github, Linkedin, Instagram, Mail } from "lucide-react"

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/adilzakaria" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/adilzakariaa" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com/adilzakariaa" },
  { name: "Email", icon: Mail, url: "mailto:adilzakaria18@gmail.com" },
]

const SocialNavbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <nav className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
      <ul className="flex flex-col space-y-4">
        {socialLinks.map((link, index) => (
          <li key={link.name} className="relative">
            <Link href={link.url} passHref>
              <div
                className="flex items-center bg-white hover:bg-gray-100 transition-all duration-300 rounded-r-full shadow-md"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="p-3">
                  <link.icon className="w-6 h-6 text-gray-600" />
                </div>
                <span
                  className={`absolute left-full ml-2 bg-gray-800 text-white text-sm py-1 px-2 rounded transition-all duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    transform: hoveredIndex === index ? "translateX(0)" : "translateX(-10px)",
                  }}
                >
                  {link.name}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SocialNavbar