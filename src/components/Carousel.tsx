import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Carousel1 from "@assets/WebCarousel1.webp"
import Carousel1Mobile from "@assets/MobileCarousel1.webp"
import TextCarousel1 from "@assets/CarouselText1.svg"

import Carousel2 from "@assets/WebCarousel2.webp"
import Carousel2Mobile from "@assets/MobileCarousel2.webp"
import TextCarousel2 from "@assets/CarouselText2.svg"

import Carousel3 from "@assets/WebCarousel3.webp"
import Carousel3Mobile from "@assets/MobileCarousel3.webp"
import TextCarousel3 from "@assets/CarouselText3.svg"

import Carousel4 from "@assets/WebCarousel4.webp"
import Carousel4Mobile from "@assets/MobileCarousel4.webp"
import TextCarousel4 from "@assets/CarouselText4.svg"

import Arrow from "@assets/ArrowOrange.svg"

const ArrowL = ({ className, style, onClick }) => {
    return (
        <img className={className} style={{ ...style, zIndex: 9, left: "10px", width: "20px", height: "auto", transform: "rotate(3.142rad) translate(0, 50%)" }} onClick={onClick} src={Arrow.src} alt="Flecha a la derecha" />
    )
}

const ArrowR = ({ className, style, onClick }) => {
    return (
        <img className={className} style={{ ...style, right: "10px", width: "20px", height: "auto" }} onClick={onClick} src={Arrow.src} alt="Flecha a la izquierda" />
    )
}

const Carousel = () => {
    const data = [
      {
          img: Carousel1.src,
          imgMobile: Carousel1Mobile.src,
      },
      {
          img: Carousel2.src,
          imgMobile: Carousel2Mobile.src,
      },
      {
          img: Carousel3.src,
          imgMobile: Carousel3Mobile.src,
      },
      {
          img: Carousel4.src,
          imgMobile: Carousel4Mobile.src,
      },
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
        <section className="w-full">
          <Slider {...settings}>
            {
              data.map(element => (
              <div className="flex! relative">
                <img className="max-[650px]:hidden! w-full" src={element.img} alt="" />
                <img className="max-[650px]:hidden! absolute top-0" src={element.text} alt="" />
                <img className="hidden! max-[650px]:block! w-full" src={element.imgMobile} alt="" />
                <img className="hidden! max-[650px]:block! w-full absolute top-0 z-10" src={element.textMobile} alt="" />
              </div>
              ))
            }
      </Slider>
        </section>
    )
}

export default Carousel
