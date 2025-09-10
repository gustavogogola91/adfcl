import { useState } from "react"
import logo from "../assets/ADFCL-Logo.jpg"

export default function Header() {
    const [option, SetOption] = useState([]);

    

    // A fazer:
    // - Terminar Gradiente
    // - Arrumar Design
    // - Colocar cores no CSS

    return (

        <header className="flex flex-col md:flex-row  md:px-20 py-2 w-full md:h-[160px] justify-between items-start pt-[25px] text-black bg-linear-to-b from-[#4A755A63] to-white">
            <div className="flex flex-row gap-2 mb-4 justify-center items-center">
                <img src={logo} alt="LOGO ADFCL"
                    className="rounded-full size-[60px]" />
                <div className="flex flex-col leading-none">
                    <h3 className="text-[30px] font-bold text-[#4a755a]">A.D.F.C.L</h3>
                    <p className="text-[12px] font-bold">Associação de Deficientes Fisicos de Campo Largo</p>
                </div>
            </div>

            <ul className="text-[18px] md:h-1/2 w-full flex-col md:flex-row font-bold flex justify-center items-center gap-3 md:gap-6">
                <li>
                    <a href="#" className="text-black p-2 transition  rounded-[5px] hover:bg-dark-green-alpha hover:text-light-green">Home</a>
                </li>
                <li>
                    <a href="#" className="text-black p-2 transition  rounded-[5px] hover:bg-dark-green-alpha hover:text-light-green">Sobre Nós</a>
                </li>
                <li>
                    <a href="#" className="text-black p-2  transition  rounded-[5px] hover:bg-dark-green-alpha hover:text-light-green">Projetos</a>
                </li>
                <li>
                    <a href="#" className="text-[20px] text-white bg-dark-green transition rounded-[5px] px-4 py-2 p-2 hover:bg-dark-green-alpha hover:text-dark-green">COMO AJUDAR</a>
                </li>
            </ul>

        </header>
    )
}
