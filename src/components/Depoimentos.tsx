export default function Depoimentos() {
  const depoimentos = [
    {
      id: 1,
      frase: "Frase",
      descricao:
        "DescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricao",
      srcImg: "./perfil.png",
      nome: "Nome",
      idade: "Idade",
    },
    {
      id: 2,
      frase: "Frase",
      descricao:
        "DescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricao",
      srcImg: "./perfil.png",
      nome: "Nome",
      idade: "Idade",
    },
    {
      id: 3,
      frase: "Frase",
      descricao:
        "DescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricaoDescricao",
      srcImg: "./perfil.png",
      nome: "Nome",
      idade: "Idade",
    }
  ];

  return (
    <section className="w-full mt-8">
      <h2 className="font-bold uppercase text-2xl text-[#4A755A] text-center ">
        Depoimentos
      </h2>
      <h3 className="text-center mt-4">
        Descubra como ajudamos pessoas a melhorar sua vida
      </h3>
      <div className="flex flex-row justify-center gap-8 mt-4">
        {depoimentos.map((depoimento) => (
          <div className="bg-[#f3f1f1] shadow-lg w-[300px] h-full p-4 flex flex-col  min-h-[350px]" key={depoimento.id}>
            <div className="font-bold italic">{depoimento.frase}</div>
            <div className="italic mt-8 text-[0.8rem] break-words">
              "{depoimento.descricao}"
            </div>
            <div className="flex flex-row w-full p-1 justify-around mt-8 bottom-0">
              <div>
                <img
                  src={depoimento.srcImg}
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
