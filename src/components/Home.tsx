import imgFachada from "../assets/Fachada.jpeg";
import Depoimentos from "./Depoimentos";
import Contato from "./Contato";
import Projetos from "./Projetos";

export default function Home() {
  return (
    <>
      <section id="main" className="flex justify-center bg-dark-green gap-10 h-[500px] ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold uppercase text-[48px] text-white">
            Bem-vindo ao nosso site!
          </h1>
          <p className="w-1/2 text-white text-justify">
            Aqui você encontrará espaço para explorar conteúdos, ideias e
            novidades. Este é apenas um texto de demonstração para testar o
            estilo, o layout e as fontes da página. Sinta-se à vontade para
            navegar, ajustar e experimentar.
          </p>
        </div>
        <img
          src={imgFachada}
          alt="Imagem"
          className="w-full h-full object-cover"
        />
      </section>
      <main>
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
    </>
  );
}
