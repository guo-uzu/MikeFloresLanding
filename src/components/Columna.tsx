import React, { useState, useEffect, lazy } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AcabemosConElAbandonoDeMenores from "@assets/AcabemosConElAbandonoDeMenores.webp";
import DiaDeLaFamiliaNeolenesa from "@assets/DiaDeLaFamiliaNeolenesa.webp";
import ElPresidenteDeLasNinez from "@assets/ElPresidenteDeLasNinez.webp";
import TrumpAranceles from "@assets/TrumpAranceles.webp";
import CuidemosAQuienesNosCuidan from "@assets/CuidemosAQuienesNosCuidan.webp";
import HeroeEnCadaBombero from "@assets/HeroeEnCadaBombero.webp";
import UnaVezAlMes from "@assets/UnaVezAlMes.webp";
import UnRespiroParaNL from "@assets/UnRespiroParaNL.webp";
import NuevoFiscal from "@assets/NuevoFiscal.webp";
import GanoNL from "@assets/GanoNL.webp";
import UnaGrataSorpresa from "@assets/UnaGrataSorpresa.webp";
import UnCongresoDeSoluciones from "@assets/UnCongresoDeSoluciones.webp";
import NuevoPeriodoDeSesiones from "@assets/NuevoPeriodoDeSesiones.webp";
import ArranqueTumultoso from "@assets/ArranqueTumultoso.webp";
import EsPorNL from "@assets/EsPorNL.webp";
import Coordinacion from "@assets/Coordinacion.webp";

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

const imagePool = [
  { src: AcabemosConElAbandonoDeMenores.src, title: "Acabemos con el abandono de menores", date: "04 abril 2025", link: "https://abcnoticias.mx/opinion/2025/4/4/acabemos-con-el-abandono-de-menores-245145.html" },
  { src: ElPresidenteDeLasNinez.src, title: "El presente de la niñez, el futuro de Nuevo León", date: "02 abril 2025", link: "https://www.elhorizonte.mx/opinion/el-presente-de-la-ninez-el-futuro-de-nuevo-leon/7536825636" },
  { src: TrumpAranceles.src, title: "Otra vez Trump, otra vez aranceles", date: "28 marzo 2025", link: "https://abcnoticias.mx/opinion/2025/3/28/otra-vez-trump-otra-vez-aranceles-244396.html" },
  { src: Coordinacion.src, title: "Coordinación municipal, clave para Nuevo León", date: "26 marzo 2025", link: "https://www.elhorizonte.mx/opinion/coordinacion-municipal-clave-para-nuevo-leon/5379940264" },
  { src: CuidemosAQuienesNosCuidan.src, title: "Cuidemos a quienes nos cuidan", date: "21 marzo 2025", link: "https://www.elhorizonte.mx/opinion/coordinacion-municipal-clave-para-nuevo-leon/5379940264" },
  { src: DiaDeLaFamiliaNeolenesa.src, title: "Día de la familia neoleonesa", date: "19 marzo 2025", link: "https://www.elhorizonte.mx/opinion/dia-de-la-familia-neoleonesa/4914321034" },
  { src: HeroeEnCadaBombero.src, title: "Nuevo León, un héroe en cada bombero te dio", date: "14 marzo 2025", link: "https://abcnoticias.mx/opinion/2025/3/14/nuevo-leon-un-heroe-en-cada-bombero-te-dio-243036.html" },
  { src: UnaVezAlMes.src, title: "Un mes a la vez", date: "12 marzo 2025", link: "https://www.elhorizonte.mx/opinion/un-mes-a-la-vez/4312682353" },
  { src: UnRespiroParaNL.src, title: "Un respiro para Nuevo León", date: "05 Marzo 2025", link: "https://www.elhorizonte.mx/opinion/un-respiro-para-nuevo-leon/7255987433" },
  { src: NuevoFiscal.src, title: "Nuevo fiscal, nueva Fiscalía", date: "26 febrero 2025", link: "https://www.elhorizonte.mx/opinion/nuevo-fiscal-nueva-fiscalia/7363875780" },
  { src: GanoNL.src, title: "Ganó Nuevo León", date: "19 febrero 2025", link: "https://www.elhorizonte.mx/opinion/gano-nuevo-leon/7805645374" },
  { src: UnaGrataSorpresa.src, title: "Una grata sorpresa", date: "12 Febrero 2025", link: "https://www.elhorizonte.mx/opinion/una-grata-sorpresa/8560119359" },
  { src: UnCongresoDeSoluciones.src, title: "Un Congreso de soluciones", date: "  05 febrero 2025", link: "https://www.elhorizonte.mx/opinion/un-congreso-de-soluciones/6360850934" },
  { src: NuevoPeriodoDeSesiones.src, title: "Nuevo periodo de sesiones, nuevos retos", date: "29 Enero 2025", link: "https://www.elhorizonte.mx/opinion/nuevo-periodo-de-sesiones-nuevos-retos/3022796705" },
  { src: ArranqueTumultoso.src, title: "Arranque tumultuoso", date: "22 Enero 2025", link: "https://www.elhorizonte.mx/opinion/arranque-tumultuoso/7232558856" },
  { src: EsPorNL.src, title: "Es por Nuevo León", date: "15 Enero 2025", link: "https://www.elhorizonte.mx/opinion/es-por-nuevo-leon/1166326680" },
];


const Columna = () => {
  const [activeIndex, setActiveIndex] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    lazyLoad: true,
    slidesToScroll: 1,
    nextArrow: <ArrowR />,
    prevArrow: <ArrowL />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <section id="articulos" className="px-10 py-10 bg-orange-50 scroll-mt-[77.19px]">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="max-w-[500px] mx-auto text-center text-2xl sm:text-3xl md:text-4xl font-anton text-orange-500 font-black uppercase">
          Te invito a leer mi columna semanal
        </h2>
        <Slider  {...settings} className="py-10 font-montserrat">
          {
          imagePool.map((item, i) => (
            <div key={i} className="px-2">
              <div className="flex w-full h-[700px] items overflow-hidden rounded-xl">
              <a href={item.link} target="_blank">
                <div className="flex relative h-full">
                  <img
                    className="w-full h-auto object-cover opacity-60 transform-gpu hover:scale-110 max-[640px]:opacity-100 hover:opacity-100 transition-all duration-500"
                    src={item.src}
                    
                    alt={`img-${i}`}
                  />
                  <div className="absolute p-4 text-white">
                    <p className="font-regular text-2xl shadow-text">{item.title}</p>
                    <p className="font-regular text-md shadow-text">({item.date})</p>
                  </div>
                  <div className="absolute bottom-0 w-full p-2 text-xl text-orange-500">
                    <p className="flex justify-between items-center bg-white w-full rounded-xl px-2 py-1">
                      Leer más
                      <img className="w-[15px] h-auto" src={Arrow.src} alt="" />
                    </p>
                  </div>
                </div>
              </a>
            </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Columna;

