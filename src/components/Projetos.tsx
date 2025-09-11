export default function Projetos() {
  const projetos = [
    {
      titulo: "Projeto 1",
      descricao:
        "Breve descrição do projeto 1. Aqui você pode falar sobre os objetivos e impacto do projeto.",
      imagem: "/assets/projeto1.jpg",
    },
    {
      titulo: "Projeto 2",
      descricao:
        "Breve descrição do projeto 2. Fale sobre quem participa e quais resultados já foram alcançados.",
      imagem: "/assets/projeto2.jpg",
    },
    {
      titulo: "Projeto 3",
      descricao:
        "Breve descrição do projeto 3. Destaque a importância para a comunidade e como ajudar.",
      imagem: "/assets/projeto3.jpg",
    },
  ];

  return (
    <section className="w-[80%] md:w-[90%] m-auto mt-6 flex flex-col gap-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-dark-green">Nossos Projetos</h2>
        <p className="text-gray-700">
          Conheça alguns dos projetos que desenvolvemos para apoiar a comunidade.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projetos.map((projeto, index) => (
          <div
            key={index}
            className="flex flex-col rounded-[10px] border shadow-lg overflow-hidden bg-white transition duration-200 hover:scale-105"
          >
            {/* Imagem do projeto */}
            <div className="h-[200px] w-full bg-gray-200 flex justify-center items-center">
              <img
                src={projeto.imagem}
                alt={projeto.titulo}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Conteúdo */}
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-xl font-bold text-dark-green">
                {projeto.titulo}
              </h3>
              <p className="text-gray-700 text-sm">{projeto.descricao}</p>

              <a
                href="#"
                className="mt-3 text-center w-full bg-dark-green text-white font-bold rounded-[5px] py-2 hover:bg-dark-green-alpha hover:text-dark-green transition"
              >
                Saiba Mais
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
