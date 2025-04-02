import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Carousel1 from "@assets/Carousel1.webp"
import Carousel2 from "@assets/Carousel2.webp"
import Carousel3 from "@assets/Carousel3.webp"
import Carousel4 from "@assets/Carousel4.webp"

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

const Carousel = () => {

    const data = [
        {
            img: Carousel1.src,
            text: <>Soy <span className='text-orange-500 font-black'>Mike Flores</span>, expresario, coordinador de la Bancada Naranja en Nuevo León, esposo y padre de dos niños que son mi motor. Mi compromiso es trabajar para que a Nuevo León siempre le vaya bien.</>
        },
         {
            img: Carousel2.src,
            text: <>Me encanta pasar tiempo con mi familia, irme con ellos al rancho y salir a rodar en bicicleta.</>
        },
         {
            img: Carousel3.src,
            text: <>Soy empresario transportista como mi padre y abuelo con varios años de trayectoria en el rubro.</>
        },
         {
            img: Carousel4.src,
            text: <>Inicié como Jefe de la Oficina Ejecutiva del gobernador Samuel García y ahora soy Coordinador de la Bancada Naranja en Nuevo León.</>
        },
    ]
    var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowR/>,
    prevArrow: <ArrowL/>,
  };

    return (
        <section className="w-full bg-orange-50 ">
            <div className="max-w-[1600px] mx-auto relative px-20 py-10">
            <Slider {...settings}>
                {
                    data.map((element, key) => (
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-20 max-[768px]:gap-10 justify-content-center">
                            <div class="w-full max-h-[800px] overflow-hidden rounded-xl ">
                                <img className="w-full relative" src={element.img} alt=""/>
                            </div>
                                <p className="font-montserrat pr-10 text-3xl leading-relaxed max-[1024px]:text-xl max-[768px]:text-2xl max-[768px]:pr-0  ">{element.text}</p>
                            </div>
                        </div>
                    ))
                }
            </Slider> 
            </div>
        </section>
    )
}

export default Carousel
