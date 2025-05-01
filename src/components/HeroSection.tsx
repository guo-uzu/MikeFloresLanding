import HeroMike from "@assets/HeroMF.webp"
import HeroTextMike from "@assets/TextHeroMF.webp"
import MobileTextHeroSection from "@assets/MobileTextHeroSection.svg"
import HeroSectionMobile from "@assets/HeroSectionMobile.webp"
import SimpleParallax from "simple-parallax-js"

export default function HeroSection() {
  return (
    <section id="Hero">
        
        <div className="flex relative">
            <SimpleParallax orientation="down" scale={1.3} delay={1.5}>
                <img className="max-[650px]:hidden " src={HeroMike.src} alt="Mike Hero Section" /> 
            </SimpleParallax>
            <SimpleParallax orientation="up" scale={1.1} delay={1.5}>
                <img className="max-[650px]:hidden absolute w-[38%] top-[18%] right-[8%]" src={HeroTextMike.src} alt="Mike Hero Section" /> 
            </SimpleParallax>
            <SimpleParallax orientation="down" scale={1.2} delay={1.5}>
                <img className="hidden max-[650px]:block" src={HeroSectionMobile.src} alt="Mike Hero Section Mobile"/>
            </SimpleParallax>
            <SimpleParallax orientation="up" overflow={true} scale={1.1} delay={1.5} className="absolute">
                <img className="hidden max-[650px]:block absolute top-0 left-0" src={MobileTextHeroSection.src} alt="Mike Hero Section Mobile"/>    
            </SimpleParallax>
        </div>
    </section>
  )
}
