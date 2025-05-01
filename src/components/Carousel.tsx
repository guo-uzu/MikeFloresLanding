import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Carousel1 from "@assets/CompletoCarousel1.webp"
import Carousel1Mobile from "@assets/Carousel1Mobile.webp"
import TextCarousel1 from "@assets/CarouselText1.svg"
import TextMobile1 from "@assets/TextCarouselMobile1.svg"

import Carousel2 from "@assets/CompletoCarousel2.webp"
import Carousel2Mobile from "@assets/Carousel2Mobile.webp"
import TextCarousel2 from "@assets/CarouselText2.svg"
import TextMobile2 from "@assets/TextCarouselMobile2.svg"

import Carousel3 from "@assets/CompletoCarousel3.webp"
import Carousel3Mobile from "@assets/Carousel3Mobile.webp"
import TextCarousel3 from "@assets/CarouselText3.svg"
import TextMobile3 from "@assets/TextCarouselMobile3.svg"

import Carousel4 from "@assets/CompletoCarousel4.webp"
import Carousel4Mobile from "@assets/Carousel4Mobile.webp"
import TextCarousel4 from "@assets/CarouselText4.svg"
import TextMobile4 from "@assets/TextCarouselMobile4.svg"

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
          text: TextCarousel1.src,
          textMobile: TextMobile1.src
      },
      {
          img: Carousel2.src,
          imgMobile: Carousel2Mobile.src,
          text: TextCarousel2.src,
          textMobile: TextMobile2.src
      },
      {
          img: Carousel3.src,
          imgMobile: Carousel3Mobile.src,
          text: TextCarousel3.src,
          textMobile: TextMobile3.src
      },
      {
          img: Carousel4.src,
          imgMobile: Carousel4Mobile.src,
          text: TextCarousel4.src,
          textMobile: TextMobile4.src
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
