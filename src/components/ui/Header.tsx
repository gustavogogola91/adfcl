import { useEffect, useState } from "react";
import logo from "../../assets/ADFCL-Logo.jpg";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    const targetPosition = section.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - 100 - startPosition;
    const duration = 500;
    let start: number | null = null;

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const ease = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white flex flex-col transition-all duration-150 ease-in-out w-full text-black shadow-md ${
        isScrolled ? "md:h-20" : "md:p-4"
      }`}
    >
      <div className="flex w-full items-center justify-between px-4 md:px-20 py-2 max-w-[1400px] mx-auto">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="LOGO ADFCL"
            className={`rounded-full ${isScrolled ? "size-[40px]" : "size-[60px]"}`}
          />
          <div className="flex flex-col leading-none">
            <h3
              className={`font-bold text-[#4a755a] ${
                isScrolled ? "text-[20px]" : "text-[30px]"
              }`}
            >
              A.D.F.C.L
            </h3>
            {/* Nome completo só aparece em telas maiores */}
            <p
              className={`font-extrabold hidden md:block ${
                isScrolled ? "text-[8px]" : "text-[12px]"
              }`}
            >
              Associação de Deficientes Físicos de Campo Largo
            </p>
          </div>
        </div>

        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        <button
          className="md:hidden text-[#4a755a] font-bold text-sm px-3 py-1 border-2 border-[#4a755a] rounded"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          MENU
        </button>

        <div className="hidden md:flex text-[18px] font-bold gap-6">
          <button onClick={() => scrollToSection("depoimentos")}>Depoimentos</button>
          <button onClick={() => scrollToSection("projetos")}>Projetos</button>
          <button onClick={() => scrollToSection("contato")}>Contato</button>
        </div>
      </div>

      {/* Menu Mobile - agora sem precisar arrastar */}
      {menuOpen && (
        <div className="flex flex-col md:hidden bg-[#4a755a] text-white w-full">
          <button
            className="p-3 border-b border-white/20 hover:bg-[#3d5f4a] text-white md:text-black"
            onClick={() => scrollToSection("depoimentos")}
          >
            Depoimentos
          </button>
          <button
            className="p-3 border-b border-white/20 hover:bg-[#3d5f4a] text-white md:text-black"
            onClick={() => scrollToSection("projetos")}
          >
            Projetos
          </button>
          <button
            className="p-3 hover:bg-[#3d5f4a] text-white md:text-black"
            onClick={() => scrollToSection("contato")}
          >
            Contato
          </button>
        </div>
      )}

      <div
        onClick={() => {
          scrollToSection("main");
        }}
        className={`${
          isScrolled ? "inline" : "hidden"
        } cursor-pointer bg-[#4a755a] w-full text-center transition-all duration-300 ease-in-out text-white text-[20px] font-bold py-1 hover:py-6`}
      >
        <h1>VOLTAR AO INÍCIO</h1>
      </div>
    </header>
  );
}