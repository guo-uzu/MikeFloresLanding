import HeroTextMike from "@assets/TextWebHero.webp"
import MobileTextHeroSection from "@assets/TextMobileHero.webp"

export default function HeroSection() {
    return (
        <section className="bg-[url(/src/assets/HeroSectionMobile.webp)] sm:bg-[url(/src/assets/HeroMF.webp)] bg-fixed bg-cover">
          <img className="relative top-0 mx-auto hidden sm:block" src={HeroTextMike.src} />
          <img className="relative top-0 sm:hidden" src={MobileTextHeroSection.src} />
        </section>
    )
}
