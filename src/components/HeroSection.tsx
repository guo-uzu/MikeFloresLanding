import HeroTextMike from "@assets/TextWebHero.webp"
import MobileTextHeroSection from "@assets/TextMobileHero.webp"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [activeClass, setActiveClass] = useState<number>(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setActiveClass(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [])

  return (
    <section className={`${activeClass >= 700 ? "hero-desktop" : "hero-mobile"}`}>
      <img className="relative top-0 max-[700px]:hidden" src={HeroTextMike.src} />
      <img className="relative top-0 hidden max-[700px]:block" src={MobileTextHeroSection.src} />
    </section>
  )
}
