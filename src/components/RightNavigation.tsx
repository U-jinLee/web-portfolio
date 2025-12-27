import { useState, useEffect } from "react"

const RightNavigation = () => {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "experience", "education"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = [
    { id: "home", label: "소개" },
    { id: "skills", label: "기술" },
    { id: "projects", label: "프로젝트" },
    { id: "experience", label: "경력" },
    { id: "education", label: "교육" },
  ]

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col gap-6">
        {navItems.map((item) => (
          <button key={item.id} onClick={() => scrollToSection(item.id)} className="group flex items-center gap-3">
            <span
              className={`text-xs font-medium transition-all ${
                activeSection === item.id
                  ? "text-foreground opacity-100"
                  : "text-muted-foreground opacity-0 group-hover:opacity-100"
              }`}
            >
              {item.label}
            </span>
            <div
              className={`h-px transition-all ${
                activeSection === item.id
                  ? "w-12 bg-primary"
                  : "w-8 bg-muted-foreground group-hover:w-10 group-hover:bg-foreground"
              }`}
            />
          </button>
        ))}
      </div>
    </nav>
  )
}

export default RightNavigation;