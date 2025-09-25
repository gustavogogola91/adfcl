export default function Projetos() {
  const projetos = [
    {
      id: 1,
      titulo: "Projeto Esportivo 2022",
      descricao: "Iniciativa voltada para incentivar a prática do esporte entre os jovens.",
      imagem: "/projetos/esporte2022.jpg",
    },
    {
      id: 2,
      titulo: "Campanha Solidária 2023",
      descricao: "Arrecadação de alimentos e roupas para famílias em situação de vulnerabilidade.",
      imagem: "/",
    },
    {
      id: 3,
      titulo: "Oficina Cultural",
      descricao: "Oficinas de música, teatro e artes visuais para a comunidade.",
      imagem: "/",
    },
  ];

  return (
    <section className="w-[80%] md:w-[90%] flex flex-col gap-8 m-auto text-center mt-4">
      <h2 className="text-2xl">Projetos</h2>
      <h3>Conheça alguns projetos que já realizamos</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {projetos.map((projeto) => (
          <div
            key={projeto.id}
            className="flex flex-col gap-4 items-center bg-white border shadow-lg rounded-xl p-4 hover:scale-105 duration-200"
          >
            <img
              src={projeto.imagem}
              alt={projeto.titulo}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h4 className="text-lg font-bold text-dark-green">{projeto.titulo}</h4>
            <p className="text-sm text-justify">{projeto.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
