import imgFachada from "/Fachada.jpeg";
import Depoimentos from "./Depoimentos";
import Contato from "./Contato";
import Projetos from "./Projetos";

export default function Home() {
  return (
    <>
      {/* Adiciona margem top para compensar o header fixo */}
      <div className="pt-[80px] md:pt-[100px]">
        <section
          id="main"
          className="relative flex flex-col md:flex-row justify-center items-center bg-[#4a755a] gap-0 md:gap-10 min-h-[400px] md:h-[500px] mx-auto overflow-hidden"
        >
          {/* MOBILE: Imagem de fundo com texto sobreposto */}
          <div className="relative w-full h-[500px] md:hidden">
            <img
              src={imgFachada}
              alt="Fachada ADFCL"
              className="absolute inset-0 w-full h-full object-cover"
              fetchPriority="high"
            />
            {/* Overlay escuro para melhorar legibilidade */}
            <div className="absolute inset-0 bg-black/70"></div>
            
            {/* Texto sobreposto */}
            <div className="absolute inset-0 flex flex-col justify-center items-center px-6 text-center z-10">
              <h1 className="font-bold uppercase text-[28px] text-white drop-shadow-lg mb-4">
                Bem-vindo ao nosso site!
              </h1>
              <p className="text-white text-sm leading-relaxed drop-shadow-md max-w-[90%]">
                Aqui você encontrará espaço para explorar conteúdos, ideias e
                novidades. Este é apenas um texto de demonstração para testar o
                estilo, o layout e as fontes da página. Sinta-se à vontade para
                navegar, ajustar e experimentar.
              </p>
            </div>
          </div>

          {/* DESKTOP: Layout lado a lado original */}
          <div className="hidden md:flex flex-col justify-center items-center px-8 text-center md:text-left md:w-1/2">
            <h1 className="font-bold uppercase text-[48px] text-white">
              Bem-vindo ao nosso site!
            </h1>
            <p className="w-full md:w-3/4 text-white text-center md:text-justify mt-4">
              Aqui você encontrará espaço para explorar conteúdos, ideias e
              novidades. Este é apenas um texto de demonstração para testar o
              estilo, o layout e as fontes da página. Sinta-se à vontade para
              navegar, ajustar e experimentar.
            </p>
          </div>
          <img
            src={imgFachada}
            alt="Fachada ADFCL"
            className="hidden md:block w-1/2 h-full object-cover"
            fetchPriority="high"
          />
        </section>

        <main className="mx-auto px-4">
          <div id="depoimentos">
            <Depoimentos />
          </div>
          <div id="projetos">
            <Projetos />
          </div>
          <div id="contato">
            <Contato />
          </div>
        </main>
      </div>
    </>
  );
}