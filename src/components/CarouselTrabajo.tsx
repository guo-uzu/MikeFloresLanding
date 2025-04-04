import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Cadenas from "@assets/Cadenas.svg"
import Escuela from "@assets/Escuela.svg"
import Fuego from "@assets/Fuego.svg"
import Telefono from "@assets/Telefono.svg"
import Nube from "@assets/Nube.svg"
import Tribunal from "@assets/Tribunal.svg"
import Pildoras from "@assets/Pildoras.svg"
import Mujer from "@assets/Mujer.svg"

import ArrowLeft from "@assets/ArrowLeft.svg"
import ArrowRight from "@assets/ArrowRight.svg"

const ArrowL = ({className, style, onClick}) => {
    return (
        <img className={className} style={{...style, left: "-40px",width: "30px", height: "auto"}} onClick={onClick} src={ArrowLeft.src} alt="Flecha a la derecha"/>
    )
}

const ArrowR = ({className, style, onClick}) => {
    return (
        <img className={className} style={{...style, right: "-40px",width: "30px",height: "auto"}} onClick={onClick} src={ArrowRight.src} alt="Flecha a la izquierda"/>
    )
}

const CarouselTrabajo = () => {

    const data = [
        {
            img: Cadenas.src,
            title: "penas más duras a secuestradores",
            text: "Actualmente la pena a secuestradores es de 3 a 20 años. Yo propongo que sean hasta 80."
        },
         {
            img: Escuela.src,
            title: "becas para hijos de fuerza civil",
            text: "Para tener a la mejor policía de México, hay que apoyarlos con todo."
        },
        {
            img: Fuego.src,
            title: "provocar incendios forestales sea delito grave",
            text: "Quien dañe nuestro medio ambiente pagará con hasta 13 años de cárcel."
        },
        {
            img: Telefono.src,
            title: "línea telefónica para prevenir el suicidio",
            text: "Propuse crear una línea telefónica en los que alguien necesite ser escuchado."
        },
        {
            img: Nube.src,
            title: "ley de economía circular",
            text: "Con esta ley reduciremos los residuos y ayudaremos a mitigar el cambio climático."
        },
        {
            img: Tribunal.src,
            title: "más jovenes en la política",
            text: "Propuse bajar la edad para ocupar un cargo público y que así seamos más jóvenes haciendo nueva política."
        },
        {
            img: Pildoras.src,
            title: "guarderías y medicinas gratuitas",
            text: "Para los hijos de padres o mares adolescentes y que así no abandonen sus sueños."
        },
        {
            img: Mujer.src,
            title: "juzgados especializados en violencia contra las mujeres",
            text: "Para prevenir y sancionar cualquier tipo de violencia contra las mujeres y niñas."
        },


    ]
    var settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <ArrowR/>,
    prevArrow: <ArrowL/>,
    className: "carousel-job"
  };

    return (
        <section className="w-full bg-orange-50 ">
            <div className="max-w-[1000px] mx-auto relative px-20 py-10">
            <Slider {...settings}>
                {
                    data.map((element, key) => (
                        <div className="px-10">
                            <div className="w-full h-full aspect-square bg-orange-500 rounded-xl font-montserrat p-4 flex! gap-4 flex-col items-center">
                                <p className="text-center text-orange-50 text-xl uppercase font-bold">{element.title}</p>
                                <img className="w-full max-w-[150px]" src={element.img} alt="" />
                                <p className="text-orange-50 text-center font-md">{element.text}</p>
                            </div>
                        </div>
                    ))
                }
            </Slider> 
            </div>
        </section>
    )
}

export default CarouselTrabajo
