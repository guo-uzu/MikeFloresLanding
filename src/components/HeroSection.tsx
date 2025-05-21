import HeroTextMike from "@assets/TextWebHero.webp"
import MobileTextHeroSection from "@assets/TextMobileHero.webp"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [activeClass, setActiveClass] = useState(false)

  useEffect(() => {
    const updateActiveClass = () => {
      window.innerWidth >= 700 ? setActiveClass(true) : setActiveClass(false)
    }
    window.addEventListener("resize", updateActiveClass)
    return () => window.removeEventListener("resize", updateActiveClass)
  }, [])

  return (
    <section className={`${activeClass ? "hero-desktop" : "hero-mobile"}`}>
      <img className="relative top-0 max-[700px]:hidden" src={HeroTextMike.src} />
      <img className="relative top-0 hidden max-[700px]:block" src={MobileTextHeroSection.src} />
    </section>
  )
}
