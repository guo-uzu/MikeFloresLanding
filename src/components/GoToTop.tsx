import { useEffect, useState } from "react";

export default function GoToTop() {
    const [isVisible, setIsVisible] = useState(false);
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    })
    return (
        <button className={`fixed bottom-0 right-0 z-50 m-4 p-1 bg-white rounded-full ease-in-out transition-all invisible opacity-0 ${isVisible ? "visible opacity-100": ""}`}>
            <a href="#top" title="Volver al inicio">
                <svg className=" w-10 h-10 text-orange-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7" />
                </svg>
            </a>
        </button>
    )
}
