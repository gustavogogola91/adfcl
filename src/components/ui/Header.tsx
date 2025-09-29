import { useEffect, useState } from "react";
import logo from "../../assets/ADFCL-Logo.jpg";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  const [option, SetOption] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const targetPosition =
      section.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 500; // duração em ms (1500ms = 1.5 segundos)
    let start: number | null = null;

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    // Função de easing para movimento suave
    const ease = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  // A fazer:
  // - Terminar Gradiente
  // - Arrumar Design
  // - Colocar cores no CSS

  return (
    <header className={`fixed top-0 z-1 bg-white flex flex-col md:flex-row  md:px-20 py-2 w-full md:h-[120px] justify-between items-start pt-[25px] text-black
    ${isScrolled ? 'h-[200px] py-2' : 'h-20 py-4'}`}>
      <div className="flex flex-row gap-2 mb-4 justify-center items-center">
        <img src={logo} alt="LOGO ADFCL" className="rounded-full size-[60px]" />
        <div className="flex flex-col leading-none">
          <h3 className="text-[30px] font-bold text-[#4a755a]">A.D.F.C.L</h3>
          <p className="text-[12px] font-extrabold">
            Associação de Deficientes Fisicos de Campo Largo
          </p>
        </div>
      </div>

      <div className="text-[18px] md:h-1/2 w-full flex-col md:flex-row font-bold flex justify-center md:justify-end items-center md: gap-3 md:gap-6" >
        <button 
        onClick={() => scrollToSection("depoimentos")}
        className="text-black p-2 transition  rounded-[5px] hover:bg-dark-green-alpha hover:text-light-green">
          Depoimentos
        </button>
      </div>

      <ul className="text-[18px] md:h-1/2 w-full flex-col md:flex-row font-bold flex justify-center md:justify-end items-center md: gap-3 md:gap-6">
        <li>
          <a
            href="/"
            className="text-black p-2 transition  rounded-[5px] hover:bg-dark-green-alpha hover:text-light-green"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-black p-2 transition  rounded-[5px] hover:bg-dark-green-alpha hover:text-light-green"
          >
            Sobre Nós
          </a>
        </li>
        <li>
          <a
            href="/projetos"
            className="text-black p-2  transition  rounded-[5px] hover:bg-dark-green-alpha hover:text-light-green"
          >
            Projetos
          </a>
        </li>
        <li>
          <a
            href="/contato"
            className="text-[20px] text-white bg-dark-green transition rounded-[5px] px-4 py-2 p-2 hover:bg-dark-green-alpha hover:text-dark-green"
          >
            COMO AJUDAR
          </a>
        </li>
      </ul>

      <ThemeToggle />
    </header>
  );
}
