import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import AcabemosConElAbandonoDeMenores from "@assets/AcabemosConElAbandonoDeMenores.jpg"
import DiaDeLaFamiliaNeolenesa from "@assets/DiaDeLaFamiliaNeolenesa.jpg"

const Columna = () => {
    const [sliderRef, instaceRef] = useKeenSlider({
        loop: false,
        slides: {
            perView: 4,
            spacing: 5
        },
        mode: "free"
    })
   return (
    <section class="">
        <div ref={sliderRef} className="keen-slider flex max-w-[1000px] h-[500px] mx-auto gap-4 group">
            <img className="w-0 hover:max-w-[500px]! object-cover transition-opacity " src={AcabemosConElAbandonoDeMenores.src}/> 
            <img className=" h-full hover:max-w-[500px]! object-cover transition-opacity " src={AcabemosConElAbandonoDeMenores.src}/> 
            <img className=" h-full hover:max-w-[500px]! object-cover transition-opacity " src={AcabemosConElAbandonoDeMenores.src}/> 
            <img className=" h-full hover:max-w-[500px]! object-cover transition-opacity " src={AcabemosConElAbandonoDeMenores.src}/> 
        </div>
    </section>
   )
}

export default Columna 
