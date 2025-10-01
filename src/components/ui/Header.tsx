import { useEffect, useState } from "react";
import logo from "../../assets/ADFCL-Logo.jpg";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // 👈 controle do menu mobile

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
      className={`fixed top-0 z-1 bg-white flex flex-col transition-all duration-150 ease-in-out md:w-full text-black
        ${isScrolled ? "md:h-20" : "md:p-4"}`}
    >
      <div className="flex w-full items-center justify-between md:px-20 p-2">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="LOGO ADFCL"
            className={`rounded-full ${isScrolled ? "size-[40px]" : "size-[60px]"}`}
          />
          <div className="flex flex-col leading-none">
            <h3 className={`font-bold text-[#4a755a] ${isScrolled ? "text-[20px]" : "text-[30px]"}`}>A.D.F.C.L</h3>
            <p className={`font-extrabold ${isScrolled ? "text-[8px]" : "text-[12px]"}`}>
              Associação de Deficientes Fisicos de Campo Largo
            </p>
          </div>
        </div>

        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        <button
          className="md:hidden text-dark-green font-bold"
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

      {menuOpen && (
        <div className="flex flex-col md:hidden bg-dark-green text-white w-full text-center">
          <button className="p-2 border-b" onClick={() => scrollToSection("depoimentos")}>Depoimentos</button>
          <button className="p-2 border-b" onClick={() => scrollToSection("projetos")}>Projetos</button>
          <button className="p-2 border-b" onClick={() => scrollToSection("contato")}>Contato</button>
        </div>
      )}

      <div
        onClick={() => { scrollToSection("main"); }}
        className={`${isScrolled ? "inline" : "hidden"} cursor-pointer bg-dark-green w-full text-center transition-all duration-300 ease-in-out text-white text-[20px] font-bold py-1 hover:py-6`}
      >
        <h1>VOLTAR AO INICIO</h1>
      </div>
    </header>
  );
}