import HeroMike from "@assets/HeroMF.webp"
import HeroMikeMobile from "@assets/HeroSectionMobile.webp"
import HeroTextMike from "@assets/TextWebHero.webp"
import MobileTextHeroSection from "@assets/TextMobileHero.webp"

import Atropos from "atropos"
import { useEffect } from "react"

export default function HeroSection() {
    useEffect(() => {
        const myAtropos = Atropos({
            el: ".my-atropos",
            activeOffset: 0,
            rotate: true,
            rotateTouch: true,
            rotateXMax: 1,
            rotateYMax: 1,

        })
        return () => myAtropos.destroy()
    }, [])
    return (
        <section id="Hero" className="overflow-hidden relative ">
            <div className="my-atropos max-[650px]:hidden">
                <div className="atropos-scale">
                    <div className="atropos-rotate">
                        <div className="relative atropos-inner">
                            <img className="w-full h-full" data-atropos-offset="0.1" src={HeroMike.src} alt="" />
                            <img className="absolute top-0" data-atropos-offset="-1" src={HeroTextMike.src} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden max-[650px]:block">
                <img className="w-full h-full" src={HeroMikeMobile.src} alt="" />
                <img className="absolute top-0" src={MobileTextHeroSection.src} alt="" />
            </div>
        </section>
    )
}
