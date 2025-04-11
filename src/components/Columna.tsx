import { useEffect, useState } from "react";

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

import ArrowLeft from "@assets/ArrowLeft.svg";
import ArrowRight from "@assets/ArrowRight.svg";
import ArrowOrange from "@assets/ArrowOrange.svg"

const imagePool = [
  { src: AcabemosConElAbandonoDeMenores.src, title: "Acabemos con el abandono de menores", date: "04 abril 2025", link: "https://abcnoticias.mx/opinion/2025/4/4/acabemos-con-el-abandono-de-menores-245145.html" },
  { src: ElPresidenteDeLasNinez.src, title: "El presente de la niñez, el futuro de Nuevo León", date: "02 abril 2025", link: "https://www.elhorizonte.mx/opinion/el-presente-de-la-ninez-el-futuro-de-nuevo-leon/7536825636" },
  { src: TrumpAranceles.src, title: "Otra vez Trump, otra vez aranceles", date: "28 marzo 2025", link: "https://abcnoticias.mx/opinion/2025/3/28/otra-vez-trump-otra-vez-aranceles-244396.html" },
  { src: DiaDeLaFamiliaNeolenesa.src, title: "Coordinación municipal, clave para Nuevo León", date: "26 marzo 2025", link: "https://www.elhorizonte.mx/opinion/coordinacion-municipal-clave-para-nuevo-leon/5379940264" },
  { src: CuidemosAQuienesNosCuidan.src, title: "Cuidemos a quienes nos cuidan", date: "21 marzo 2025", link: "https://www.elhorizonte.mx/opinion/coordinacion-municipal-clave-para-nuevo-leon/5379940264" },
  { src: DiaDeLaFamiliaNeolenesa.src, title: "Día de la familia neoleonesa", date: "19 marzo 2025", link: "https://www.elhorizonte.mx/opinion/dia-de-la-familia-neoleonesa/4914321034" },
  { src: HeroeEnCadaBombero.src, title: "Nuevo León, un héroe en cada bombero te dio", date: "14 marzo 2025", link: "https://abcnoticias.mx/opinion/2025/3/14/nuevo-leon-un-heroe-en-cada-bombero-te-dio-243036.html" },
  { src: UnaVezAlMes.src, title: "Un mes a la vez", date: "12 marzo 2025", link: "https://www.elhorizonte.mx/opinion/un-mes-a-la-vez/4312682353" },
  { src: UnRespiroParaNL.src, title: "Un respiro para Nuevo León", date: "05 Marzo 2025", link: "https://www.elhorizonte.mx/opinion/un-respiro-para-nuevo-leon/7255987433" },
  { src: NuevoFiscal.src, title: "Nuevo fiscal, nueva Fiscalía", date: "26 febrero 2025", link: "https://www.elhorizonte.mx/opinion/nuevo-fiscal-nueva-fiscalia/7363875780" },
  { src: GanoNL.src, title: "Ganó Nuevo León", date: "19 febrero 2025", link: "https://www.elhorizonte.mx/opinion/gano-nuevo-leon/7805645374" },
  { src: UnaGrataSorpresa.src, title: "Una grata sorpresa", date: "12 Febrero 2025", link: "https://www.elhorizonte.mx/opinion/una-grata-sorpresa/8560119359" },
  { src: UnCongresoDeSoluciones.src, title: "Un Congreso de soluciones", date: "05 febrero 2025", link: "https://www.elhorizonte.mx/opinion/un-congreso-de-soluciones/6360850934" },
  { src: NuevoPeriodoDeSesiones.src, title: "Nuevo periodo de sesiones, nuevos retos", date: "29 Enero 2025", link: "https://www.elhorizonte.mx/opinion/nuevo-periodo-de-sesiones-nuevos-retos/3022796705" },
  { src: ArranqueTumultoso.src, title: "Arranque tumultuoso", date: "22 Enero 2025", link: "https://www.elhorizonte.mx/opinion/arranque-tumultuoso/7232558856" },
  { src: EsPorNL.src, title: "Es por Nuevo León", date: "15 Enero 2025", link: "https://www.elhorizonte.mx/opinion/es-por-nuevo-leon/1166326680" },
];


const Columna = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [maxItems, setMaxItems] = useState(4);

  useEffect(() => {
    const updateItems = () => {
      const width = window.innerWidth;
      if (width < 640) setMaxItems(1);        // mobile
      else if (width < 768) setMaxItems(2);   // sm
      else if (width < 1024) setMaxItems(3);  // md
      else setMaxItems(4);                    // lg+
    };
    updateItems(); // Set on mount

    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const getVisibleImages = () => {
    return Array.from({ length: maxItems }).map((_, i) => {
      const index = (startIndex + i) % imagePool.length;
      return imagePool[index];
    });
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % imagePool.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) =>
      (prev - 1 + imagePool.length) % imagePool.length
    )
  }

  return (
    <section id="articulos" className="px-10 py-10 bg-orange-50">
      <div className="relative max-w-[1000px] mx-auto">
        <h2 className="max-w-[500px] mx-auto text-center text-2xl sm:text-3xl md:text-4xl font-montserrat text-orange-500 font-black uppercase">te invito a leer mi columna semanal</h2>
        <div className="relative flex gap-2 h-[500px] justify-center font-montserrat py-10">
          {getVisibleImages().map((element, i) => (
            <a key={i} href={element.link} target="_blank">
              <div className="flex relative opacity-70 hover:opacity-100 max-[900px]:opacity-100 max-w-[200px]  w-full h-full hover:max-w-[400px] transition-all">
                <img
                  className="grow object-cover rounded-md max-[900px]:opacity-70"
                  src={element.src}
                  alt={`img-${i}`} />
                <div class="absolute p-4 text-white">
                  <p class="font-regular text-2xl shadow-text">{element.title}</p>
                  <p class="font-regular text-md shadow-text">({element.date})</p>
                </div>
                <div className="absolute bottom-0 w-full p-2  font-bold text-orange-500">
                  <p className="flex justify-between items-center bg-white w-full rounded-xl px-2 py-1">
                    Leer más
                    <img class="w-[15px] h-auto" src={ArrowOrange.src} alt="" />
                  </p>
                </div>
              </div>
            </a>

          ))}
          <img
            src={ArrowLeft.src}
            onClick={handlePrev}
            className="absolute top-1/2 -left-[35px] transform w-[30px] h-auto cursor-pointer z-10"
            alt="Flecha izquierda"
          />
          <img
            src={ArrowRight.src}
            onClick={handleNext}
            className="absolute top-1/2 -right-[35px] transform w-[30px] h-auto cursor-pointer z-10"
            alt="Flecha derecha"
          />

        </div>
      </div>
    </section>
  );
};

export default Columna;

