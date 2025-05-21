import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Carousel1 from "@assets/WebCarousel1.webp"
import Carousel1Mobile from "@assets/MobileCarousel1.webp"

import Carousel2 from "@assets/WebCarousel2.webp"
import Carousel2Mobile from "@assets/MobileCarousel2.webp"

import Carousel3 from "@assets/WebCarousel3.webp"
import Carousel3Mobile from "@assets/MobileCarousel3.webp"

import Carousel4 from "@assets/WebCarousel4.webp"
import Carousel4Mobile from "@assets/MobileCarousel4.webp"

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
            <div className="flex! relative w-full">
              <img className="max-[650px]:hidden! w-full" src={element.img} alt="" />
              <img className="hidden! max-[650px]:block! w-full" src={element.imgMobile} alt="" />
            </div>
          ))
        }
      </Slider>
    </section>
  )
}

export default Carousel
