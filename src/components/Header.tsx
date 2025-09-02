import { useState } from "react"
import logo from "../assets/ADFCL-Logo.jpg"

export default function Header() {
    const [option, SetOption] = useState([]);

    // A fazer:
    // - Terminar Gradiente
    // - Arrumar Design
    // - Colocar cores no CSS

    return (

        <header className="flex flex-row px-20 py-2 w-full justify-between items-center text-black bg-linear-to-b from-[#4A755A63] to-white">
            <div className="flex flex-row gap-2 items-center">
                <img src={logo} alt="LOGO ADFCL"
                    className="rounded-full size-[60px]" />
                <div className="flex flex-col leading-none">
                    <h3 className="text-[30px] font-bold text-[#4a755a]">A.D.F.C.L</h3>
                    <p className="text-[12px] font-bold">Associação de Deficientes Fisicos de Campo Largo</p>
                </div>
            </div>

            <ul className="text-[19px] font-bold flex items-center gap-6">
                <li>
                    <a href="#" className="text-black p-2 transition  rounded-[5px] hover:bg-[#A9D04730] hover:text-[#A9D047]">Home</a>
                </li>
                <li>
                    <a href="#" className="text-black p-2 transition  rounded-[5px] hover:bg-[#A9D04730] hover:text-[#A9D047]">Sobre Nós</a>
                </li>
                <li>
                    <a href="#" className="text-black p-2  transition  rounded-[5px] hover:bg-[#A9D04730] hover:text-[#A9D047]">Projetos</a>
                </li>
                <li>
                    <a href="#" className="text-[22px] text-white bg-[#4a755a] transition rounded-[5px] px-4 py-2 p-2 hover:bg-[#A9D04730] hover:text-[#4a755a]">COMO AJUDAR</a>
                </li>
            </ul>

        </header>
    )
}
