import {useState} from "react"
import MikeFLogo from "@assets/LogoMF.svg"
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const links = [
        {title: "Iniciativas", href: "#"},
        {title: "Mis articulos de opinión", href: "#"},
        {title: "Contacto", href: "#"},
    ]

    return (
    <header className="relative bg-linear-to-r noise-bg text-white uppercase font-montserrat font-semibold">
       <nav className="flex relative z-30 items-center justify-between p-4 max-w-[1000px] mx-auto gap-6 ">
            <img className="w-[150px]" src={MikeFLogo.src} alt="Logo del Diputado Mike Flores" />
            <ul className="flex items-center gap-6 max-[800px]:hidden">
                {
                    links.map((link, key) => <li key={key}><a href={link.href}>{link.title}</a></li>)
                }
            </ul>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex-col gap-1 cursor-pointer hidden max-[800px]:flex">
               {
                   [...Array(3)].map((_, i) => <div key={i} className="h-1 w-8 bg-white"></div>)
               } 
           </button>
       </nav> 
      <ul className={`absolute z-20 w-full noise-bg transition-all duration-300 ease-in-out border-t-1 border-white hidden items-center gap-4 max-[800px]:flex flex-col p-4 ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
            {
                links.map((link, key) => <li key={key}><a onClick={() => setIsMenuOpen(!isMenuOpen)} href={link.href}>{link.title}</a></li>)
            }
        </ul>
    </header>
    )
}

export default Header
