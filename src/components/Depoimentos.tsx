export default function Depoimentos() {
  const depoimentos = [
    {
      id: 1,
      titulo: "titulo",
      depoimento:
        "DescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricao",
      foto: "src/assets/icons/perfil.png",
      name: "Nome",
      idade: "Idade",
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
  ];

  return (
    <section className="w-full mt-8">
      <h2 className="font-bold uppercase text-2xl text-[#4A755A] text-center ">
        Depoimentos
      </h2>

      <h3 className="text-center mt-4">
        Descubra como ajudamos pessoas a melhorar sua vida
      </h3>
      <div className="flex flex-col md:flex-row md:justify-center gap-8 mt-4">
        {depoimentos.map((depoimento) => (
          <div className="bg-[#f3f1f1] shadow-lg w-[300px] mx-auto md:mx-0 md:h-full p-4 flex flex-col min-h-[350px]" key={depoimento.id} id="depoimento">
            <div className="font-bold italic">{depoimento.titulo}</div>
            <div className="italic mt-8 text-[0.8rem] break-words highcontrast:text-xl">
              {depoimento.depoimento}
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
    </section>
  );
}
