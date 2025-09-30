import { useEffect, useState } from "react";
import logo from "../../assets/ADFCL-Logo.jpg";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const targetPosition =
      section.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - 100 - startPosition;
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

  // TODO:
  // - Centralizar elementos
  // - Diminuir quando scrolla

  return (
    <header
      className={`fixed top-0 z-1 bg-white flex flex-col transition-all duration-150 ease-in-out md:w-full justify-center items-center md:justify-between md:items-start  text-black
    ${isScrolled ? "md:h-20" : "md:p-4"}`}
    >
      <div className={`flex flex-col md:flex-row w-full items-center md:px-20
         ${isScrolled ? "py-2" : ""}`}>
        <div className="flex flex-row transition-all gap-2 justify-center items-center">
          <img
            src={logo}
            alt="LOGO ADFCL"
            className={`rounded-full 
              ${isScrolled ? "size-[40px]" : "size-[60px]"}`}
          />
          <div className="flex flex-col leading-none">
            <h3 className={`font-bold text-[#4a755a]
              ${isScrolled ? "text-[20px]" : "text-[30px]"}`
            }>A.D.F.C.L</h3>
            <p className={`font-extrabold
              ${isScrolled ? "text-[8px]" : "text-[12px]"}`}>
              Associação de Deficientes Fisicos de Campo Largo
            </p>
          </div>
        </div>
        <div className="text-[18px] h-1/2 w-full flex-col md:flex-row font-bold flex justify-end items-center md:gap-6">
          <button
            onClick={() => scrollToSection("depoimentos")}
            className={`${isScrolled ? "p-1" : "p-2"}`}
          > 
            Depoimentos
          </button>
          <button
            onClick={() => scrollToSection("projetos")}
            className={`${isScrolled ? "p-1" : "p-2"}`}
          >
            Projetos
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className={`${isScrolled ? "p-1" : "p-2"}`}
          >
            Contato
          </button>
        </div>
        <ThemeToggle />
      </div>
      <div
        onClick={() => {
          scrollToSection("main");
        }}
        className={` ${
          isScrolled ? "inline" : "hidden"
        } cursor-pointer bg-dark-green w-full text-center transition-all duration-300 ease-in-out text-white text-[20px] font-bold py-1 hover:py-6`}
      >
        <h1>VOLTAR AO INICIO</h1>

      </div>
    </header>
  );
}
