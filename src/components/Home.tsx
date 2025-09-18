import imgFachada from "../assets/imgFachada.png";

export default function Home() {
  return (
    <>
      <section className="flex justify-center gap-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold uppercase text-[48px] text-[#4A755A]">Bem-vindo ao nosso site!</h1>
          <p className="w-1/2 text-[#1E1E1E] text-justify" >Aqui você encontrará espaço para explorar conteúdos, ideias e novidades.  Este é apenas um texto de demonstração para testar o estilo, o layout e as fontes da página.
Sinta-se à vontade para navegar, ajustar e experimentar.</p>

        </div>


        <img src={imgFachada} alt="Imagem"
          className="rounded-xl w-[700px] h-[500px]" />
      </section>
    </>
  );
}
