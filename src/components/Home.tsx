import imgFachada from "/Fachada.jpeg";
import Depoimentos from "./Depoimentos";
import Contato from "./Contato";
import Projetos from "./Projetos";
import Doe from "./Doe";

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
                Bem-vindo a Associação!
              </h1>
              <p className="text-white text-sm leading-relaxed drop-shadow-md max-w-[90%]">
                Conheça a nossa história de superação e solidariedade!
              </p>
              <br />
              <p className="text-white text-sm leading-relaxed drop-shadow-md max-w-[90%]">
                Desde 2005, unimos pessoas com deficiência e voluntários para
                promover igualdade, dignidade e qualidade de vida. Com esforço e
                amor, crescemos, acolhemos centenas de pessoas e construímos
                nossa sede — símbolo de luta e esperança.
              </p>
              <br />
              <p className="text-white text-sm leading-relaxed drop-shadow-md max-w-[90%]">
                Seguimos firmes, espalhando empatia e inspiração.
              </p>
            </div>
          </div>

          {/* DESKTOP: Layout lado a lado original */}
          <div className="hidden md:flex flex-col justify-center items-center px-8 text-center md:text-left md:w-1/2">
            <h1 className="font-bold uppercase text-[48px] text-white">
              Bem-vindo a Associação!
            </h1>
            <p className="w-full md:w-3/4 text-white text-center md:text-justify mt-4">
              Conheça a nossa história de superação e solidariedade!
            </p>
            <p className="w-full md:w-3/4 text-white text-center md:text-justify mt-4">
              Desde 2005, unimos pessoas com deficiência e voluntários para
              promover igualdade, dignidade e qualidade de vida. Com esforço e
              amor, crescemos, acolhemos centenas de pessoas e construímos nossa
              sede — símbolo de luta e esperança.
            </p>
            <p className="w-full md:w-3/4 font-bold text-white text-center md:text-justify mt-4">
              Seguimos firmes, espalhando empatia e inspiração.
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
          <div id="doe">
            <Doe />
          </div>
        </main>
      </div>
    </>
  );
}
