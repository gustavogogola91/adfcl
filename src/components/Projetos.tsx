import projetoEsporte from "../assets/projetos/projetoEsportivo.avif";
import projetoEquoterapia from "../assets/projetos/projetoEquoterapia.avif";
import projetoBaile from "../assets/projetos/projetoBaile.avif";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Projetos() {
  const projetos = [
    {
      id: 1,
      titulo: "Projeto Esportivo",
      descricao:
        "Iniciativa voltada para incentivar a prática do esporte entre os jovens.",
      imagem: projetoEsporte,
      imageSpotlight: "center",
    },
    {
      id: 2,
      titulo: "Equoterapia",
      descricao:
        "Recurso terapêutico que utiliza o cavalo dentro de uma abordagem interdisciplinar nas áres da saúde, educação e equitação.",
      imagem: projetoEquoterapia,
      imageSpotlight: "top",
    },
    {
      id: 3,
      titulo: "Eventos e Bailes",
      descricao: "Tardes de dança e muita alegria!!!",
      imagem: projetoBaile,
      imageSpotlight: "center",
    },
    {
      id: 4,
      titulo: "Projeto Esportivo",
      descricao:
        "Iniciativa voltada para incentivar a prática do esporte entre os jovens.",
      imagem: projetoEsporte,
      imageSpotlight: "center",
    },
    {
      id: 5,
      titulo: "Equoterapia",
      descricao:
        "Recurso terapêutico que utiliza o cavalo dentro de uma abordagem interdisciplinar nas áres da saúde, educação e equitação.",
      imagem: projetoEquoterapia,
      imageSpotlight: "top",
    },
    {
      id: 6,
      titulo: "Eventos e Bailes",
      descricao: "Tardes de dança e muita alegria!!!",
      imagem: projetoBaile,
      imageSpotlight: "center",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const itemsVisiveis = isMobile ? 1 : 3;
  const limiteCarrossel = projetos.length - itemsVisiveis;
  const translateXValue = current * (100 / itemsVisiveis);

  const prev = () =>
    setCurrent((current) => (current === 0 ? limiteCarrossel : current - 1));

  const next = () =>
    setCurrent((current) => (current === limiteCarrossel ? 0 : current + 1));

  return (
    <section className="w-[80%] md:w-[90%] flex flex-col gap-8 m-auto text-center mt-12">
      <h2 className="font-bold uppercase text-2xl text-[#4A755A] text-center">
        Nossos projetos
      </h2>
      <h3 className="text-center mt-4">
        Conheça alguns projetos que já realizamos
      </h3>

      <div className="relative overflow-hidden">
        <div
          className="flex mt-6 transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${translateXValue}%)` }}
        >
          {projetos.map((projeto) => (
            <div
              className="flex-shrink-0 w-full md:w-1/3 p-2 md:p-3 min-h-[350px]"
              key={projeto.id}
            >
              <div
                className="flex flex-col shadow-lg items-center hover:scale-105 duration-200 bg-dark-green h-full"
                id="projeto"
              >
                <img
                  src={projeto.imagem}
                  alt={projeto.titulo}
                  className={`w-full object-cover h-[280px] object-${projeto.imageSpotlight}`}
                />
                <div className="p-4">
                  <h4 className="text-[24px] text-white font-bold mb-4">
                    {projeto.titulo}
                  </h4>
                  <p className="text-sm text-justify text-white">
                    {projeto.descricao}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {projetos.length > itemsVisiveis ? (
          <div className="absolute inset-0 flex items-center justify-between p-8 w-full">
            <button
              onClick={prev}
              className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              onClick={next}
              className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            >
              <ChevronRight size={40} />
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}
