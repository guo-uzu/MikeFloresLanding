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

import Arrow from "@assets/ArrowOrange.svg"

const ArrowL = ({ className, style, onClick }) => {
  return (
    <img className={className} style={{ ...style, zIndex: 9, width: "20px", height: "auto", transform: "rotate(3.142rad) translate(0, 50%)" }} onClick={onClick} src={Arrow.src} alt="Flecha a la derecha" />
  )
}

const ArrowR = ({ className, style, onClick }) => {
  return (
    <img className={className} style={{ ...style, width: "20px", height: "auto" }} onClick={onClick} src={Arrow.src} alt="Flecha a la izquierda" />
  )
}

const CarouselTrabajo = () => {

  const data = [
    {
      img: Cadenas.src,
      title: "penas más duras a secuestradores",
      text: "Actualmente la pena a secuestradores es de 3 a 20 años. Yo propongo que sean de hasta 80."
    },
    {
      img: Escuela.src,
      title: "becas para hijos de fuerza civil",
      text: "Para tener a la mejor policía de México hay que apoyarlos con todo."
    },
    {
      img: Fuego.src,
      title: "provocar incendios forestales sea delito grave",
      text: "Quien dañe nuestro medio ambiente pagará con hasta 13 años de cárcel."
    },
    {
      img: Telefono.src,
      title: "línea telefónica para prevenir el suicidio",
      text: "Propuse crear una línea telefónica para quien necesite ser escuchado."
    },
    {
      img: Nube.src,
      title: "ley de economía circular",
      text: "Con esta ley reduciremos los residuos y ayudaremos a mitigar el cambio climático."
    },
    {
      img: Tribunal.src,
      title: "más jóvenes en la política",
      text: "Propuse bajar la edad para ocupar un cargo público y que así seamos más jóvenes haciendo nueva política."
    },
    {
      img: Pildoras.src,
      title: "guarderías y medicinas gratuitas",
      text: "Para los hijos de padres o madres adolescentes y que así no abandonen sus sueños."
    },
    {
      img: Mujer.src,
      title: "juzgados especializados en violencia contra las mujeres",
      text: "Para prevenir y sancionar cualquier tipo de violencia contra las mujeres y niñas."
    },
  ]


  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <ArrowR />,
    prevArrow: <ArrowL />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }


  return (
    <section id='iniciativas' className="w-full bg-orange-50 px-10 py-40 scroll-mt-[77.19px]">
      <h2 className="max-w-[500px] md:max-w-full mx-auto pb-10 text-center text-3xl md:text-5xl font-anton text-orange-500 font-black uppercase">conoce mi trabajo en beneficio de nuevo león</h2>
      <div className="mx-auto relative max-w-[1440px] slider-container">
        <Slider {...settings}>
          {
            data.map((element, key) => (
              <div className="w-full max-w-[400px] h-full mx-auto bg-orange-500 rounded-xl font-montserrat p-10 justify-center flex! gap-4 flex-col items-center">
                <p className="text-center text-orange-50 text-sm md:text-xl uppercase font-bold">{element.title}</p>
                <img className="w-[150px] aspect-square " src={element.img} alt="" />
                <p className="text-orange-50 text-center text-xs sm:text-sm md:text-md">{element.text}</p>
              </div>
            ))
          }
        </Slider>
      </div>
    </section>
  )
}

export default CarouselTrabajo
