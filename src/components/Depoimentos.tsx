import israelXavier from "../assets/Icons/israelXavier.jpeg"
import alcidesMiguel from "../assets/Icons/alcidesMiguel.jpeg"
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Depoimentos() {
  const depoimentos = [
    {
      id: 1,
      depoimento:
        "Faz seis meses que frequento a associação, e foi uma das melhores decisões que tomei. Fui recebido com carinho e respeito em um ambiente leve e acolhedor. Aprendi xadrez, estou tendo aulas de violão e cada encontro é uma troca de aprendizado e empatia — somos como irmãos de dor, unidos por histórias e superação. A direção é atenciosa e faz todos se sentirem parte de algo maior. Esse espaço se tornou meu refúgio, um lugar de afeto, respeito e amizade.",
      foto: israelXavier,
      nome: "Israel Xavier",
      idade: "47 anos",
    },
    {
      id: 2,
      depoimento:
        "Participo da associação há quatro anos, e minha vida mudou muito desde então. Sou atleta de bocha e participo das atividades de fisioterapia, equoterapia e música. Estar com outras pessoas é especial — trocamos histórias e criamos amizades verdadeiras. A equipe é carinhosa e acolhedora, e até as refeições refletem esse cuidado. Sou muito grato à associação por tudo o que representa na minha vida.",
      foto: alcidesMiguel,
      nome: "Alcides Miguel",
      idade: "55 anos",
    }
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
                className={`bg-[#f3f1f1] shadow-lg flex-shrink-0 w-full  p-2 md:p-3 flex flex-col min-h-[450px] sm:gap-1 
                  ${ depoimentos.length <= 2 ? "md:w-1/2"  : "md:w-1/3 " }
                  `}
                
                key={depoimento.id}
                id="depoimento"
              >
                <div className="italic mt-4 text-[1rem] break-words highcontrast:text-xl">
                "{depoimento.depoimento}"
                </div>
                <div className="flex flex-row w-full p-1 justify-around mt-8 bottom-0">
                  <div className="">
                    <img
                      src={depoimento.foto}
                      alt="foto"
                      className="w-[55px] h-[55px] rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-[1.2rem] text-[#4a755a]">{depoimento.nome}</div>
                    <div className="text-[0.8rem] text-center">{depoimento.idade}</div>
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
