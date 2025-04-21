import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Carousel1 from "@assets/CompletoCarousel1.webp"
import Carousel2 from "@assets/Carousel2.webp"
import Carousel3 from "@assets/Carousel3.webp"
import Carousel4 from "@assets/Carousel4.webp"

import ArrowLeft from "@assets/ArrowLeft.svg"
import ArrowRight from "@assets/ArrowRight.svg"

const ArrowL = ({ className, style, onClick }) => {
    return (
        <img className={className} style={{ ...style, zIndex: 9, left: "40px", width: "30px", height: "auto" }} onClick={onClick} src={ArrowLeft.src} alt="Flecha a la derecha" />
    )
}

const ArrowR = ({ className, style, onClick }) => {
    return (
        <img className={className} style={{ ...style, right: "40px", width: "30px", height: "auto" }} onClick={onClick} src={ArrowRight.src} alt="Flecha a la izquierda" />
    )
}

const Carousel = () => {

    const data = [
        {
            img: Carousel1.src,
        }
    ]
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <ArrowR />,
        prevArrow: <ArrowL />,
    };

    return (
        <section className="w-full bg-orange-50 ">
            <div className="">
                <Slider {...settings}>
                  <div className="relative">
                    <div className="w-full h-full relative">
                        <img src={Carousel1.src} alt="" />
                      <div className="text-2xl text-white font-montserrat absolute -top-[12vh] translate-y-1/2 right-[28%] w-full max-w-[400px] text-right">
                          <p className="text-image">soy</p>
                          <div className="uppercase text-[calc(4vw+1vh)] font-anton">
                            <p className="">mike</p>
                            <p className="">flores</p>
                          </div>
                            <p className="text-[calc(1vw+1.3vh)]">
                                empresario, coordinador de la
                                Bancada Naranja en Nuevo
                                León, esposo y padre de dos
                                niños que son mi motor. Mi
                                compromiso es trabajar para
                                que a Nuevo León siempre le
                                vaya bien.
                            </p>
                        </div>
                    </div>
                  </div>
                   <div className="relative">
                    <div className="w-full h-full relative">
                        <img src={Carousel1.src} alt="" />
                      <div className="text-2xl text-white font-montserrat absolute -top-[12vh] translate-y-1/2 right-[28%] w-full max-w-[400px] text-right">
                          <p className="text-image">soy</p>
                          <div className="uppercase text-[calc(4vw+1vh)] font-anton">
                            <p className="">mike</p>
                            <p className="">flores</p>
                          </div>
                            <p className="text-[calc(1vw+1.3vh)]">
                                empresario, coordinador de la
                                Bancada Naranja en Nuevo
                                León, esposo y padre de dos
                                niños que son mi motor. Mi
                                compromiso es trabajar para
                                que a Nuevo León siempre le
                                vaya bien.
                            </p>
                        </div>
                    </div>
                    

                  </div> 
                </Slider>
            </div>
        </section>
    )
}

export default Carousel
