import HeroTextMike from "@assets/TextWebHero.webp"
import MobileTextHeroSection from "@assets/TextMobileHero.webp"

export default function HeroSection() {
    return (
        <section id="Hero">
          <img className="relative top-0 max-[700px]:hidden" src={HeroTextMike.src} />
          <img className="relative top-0 hidden max-[700px]:block" src={MobileTextHeroSection.src} />
        </section>
    )
}
