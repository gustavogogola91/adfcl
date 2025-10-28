import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Depoimentos() {
  const depoimentos = [
    {
      id: 1,
      titulo: "",
      depoimento:
        "Faz seis meses que frequento a associação, e foi uma das melhores decisões que tomei. Fui recebido com carinho e respeito em um ambiente leve e acolhedor. Aprendi xadrez, estou tendo aulas de violão e cada encontro é uma troca de aprendizado e empatia — somos como irmãos de dor, unidos por histórias e superação. A direção é atenciosa e faz todos se sentirem parte de algo maior. Esse espaço se tornou meu refúgio, um lugar de afeto, respeito e amizade.",
      foto: "src/assets/icons/perfil.png",
      name: "Xavier",
      idade: "35",
    },
    {
      id: 2,
      titulo: "titulo",
      depoimento:
        "DescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricao",
      foto: "src/assets/icons/perfil.png",
      nome: "Nome",
      idade: "Idade",
    },
    {
      id: 3,
      titulo: "titulo",
      depoimento:
        "DescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricao",
      foto: "src/assets/icons/perfil.png",
      name: "Nome",
      idade: "Idade",
    },
    {
      id: 4,
      titulo: "titulo",
      depoimento:
        "DescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricao",
      foto: "src/assets/icons/perfil.png",
      name: "Nome",
      idade: "Idade",
    },
    {
      id: 5,
      titulo: "titulo",
      depoimento:
        "DescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricao",
      foto: "src/assets/icons/perfil.png",
      nome: "Nome",
      idade: "Idade",
    },
    {
      id: 6,
      titulo: "titulo",
      depoimento:
        "DescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricao",
      foto: "src/assets/icons/perfil.png",
      name: "Nome",
      idade: "Idade",
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
  const limiteCarrossel = depoimentos.length - itemsVisiveis;
  const translateXValue = current * (100 / itemsVisiveis);

  const prev = () =>
    setCurrent((current) => (current === 0 ? limiteCarrossel : current - 1));

  const next = () =>
    setCurrent((current) => (current === limiteCarrossel ? 0 : current + 1));

  return (
    <section className="w-[80%] mt-8 m-auto">
      <h2 className="font-bold uppercase text-2xl text-[#4A755A] text-center ">
        Depoimentos
      </h2>

      <h3 className="text-center mt-4">
        Descubra como ajudamos pessoas a melhorar sua vida
      </h3>
      <div className="relative">
        <div className="relative overflow-hidden">
          <div
            className="flex mt-6 transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${translateXValue}%)` }}
          >
            {depoimentos.map((depoimento) => (
              <div
                className="bg-[#f3f1f1] shadow-lg flex-shrink-0 w-full md:w-1/3 p-2 md:p-3 flex flex-col min-h-[450px] gap-8"
                key={depoimento.id}
                id="depoimento"
              >
                <div className="font-bold italic">{depoimento.titulo}</div>
                <div className="italic mt-8 text-[0.8rem] break-words highcontrast:text-xl">
                  "{depoimento.depoimento}"
                </div>
                <div className="flex flex-row w-full p-1 justify-around mt-8 bottom-0">
                  <div>
                    <img
                      src={depoimento.foto}
                      alt="foto"
                      className="w-[32px] rounded-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{depoimento.nome}</div>
                    <div className="text-[0.8rem]">{depoimento.idade}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {depoimentos.length > itemsVisiveis ? (
          <div className="absolute inset-0 flex items-center justify-between p-8">
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
