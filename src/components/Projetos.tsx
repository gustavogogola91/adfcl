import projetoEsporte from "../assets/projetos/projetoEsportivo.jpg";
import projetoEquoterapia from "../assets/projetos/projetoEquoterapia.png";
import projetoBaile from "../assets/projetos/projetoBaile.png";


export default function Projetos() {
  const projetos = [
    {
      id: 1,
      titulo: "Projeto Esportivo",
      descricao: "Iniciativa voltada para incentivar a prática do esporte entre os jovens.",
      imagem: projetoEsporte,
      imageSpotlight: "center",
    },
    {
      id: 2,
      titulo: "Equoterapia",
      descricao: "Recurso terapêutico que utiliza o cavalo dentro de uma abordagem interdisciplinar nas áres da saúde, educação e equitação.",
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
  ];

  return (
    <section className="w-[80%] md:w-[90%] flex flex-col gap-8 m-auto text-center mt-4">
      <h2 className="font-bold uppercase text-2xl text-[#4A755A] text-center">Projetos</h2>
      <h3 className="text-center mt-4" >Conheça alguns projetos que já realizamos</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-2">
        {projetos.map((projeto) => (
          <div className="flex flex-col shadow-lg items-center hover:scale-105 duration-200 bg-dark-green min-h-[350px]">
            <img
              src={projeto.imagem}
              alt={projeto.titulo}
              className={`w-full object-cover h-[280px] object-${projeto.imageSpotlight}`}
            />
            <div className="p-4">
              <h4 className="text-[24px] text-white font-bold mb-4">{projeto.titulo}</h4>
              <p className="text-sm text-justify text-white">{projeto.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
