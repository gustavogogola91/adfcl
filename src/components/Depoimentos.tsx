export default function Depoimentos() {
  return (
    <section>
      <h2 className="font-bold uppercase text-2xl text-[#4A755A]">
        Depoimentos
      </h2>
      <h3>Descubra como ajudamos pessoas a melhorar sua vida</h3>
      <div className="flex flex-row justify-">
        <div className="bg-[#f3f1f1] shadow-lg w-[20%] p-4">
          <div className="font-bold">Frase</div>
          <div className="italic mt-8">"Descricao"</div>
          <div className="flex flex-row w-full justify-around mt-8">
            <div>
              <img src="./perfil.png" alt="foto" className="w-[32px] rounded-full"/>
            </div>

            <div>nome</div>
          </div>
        </div>
        <div className="bg-[#f3f1f1] shadow-lg w-[20%] p-4">
          <div className="font-bold">Frase</div>
          <div className="italic mt-8">"Descricao"</div>
          <div className="flex flex-row w-full justify-around mt-8">
            <div>
              <img src="./perfil.png" alt="foto" className="w-[32px] rounded-full"/>
            </div>

            <div>nome</div>
          </div>
        </div>
        <div className="bg-[#f3f1f1] shadow-lg w-[20%] p-4">
          <div className="font-bold">Frase</div>
          <div className="italic mt-8">"Descricao"</div>
          <div className="flex flex-row w-full justify-around mt-8">
            <div>
              <img src="./perfil.png" alt="foto" className="w-[32px] rounded-full"/>
            </div>
            <div>nome</div>
          </div>
        </div>
      </div>
    </section>
  );
}
