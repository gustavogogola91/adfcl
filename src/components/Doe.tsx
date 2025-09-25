export default function Doe() {
  return (
    <section className="w-[80%] md:w-[90%] flex flex-col gap-2 m-auto text-center mt-4">
      <h2 className="text-2xl text-[#4A755A] uppercase">Doe</h2>
      <h3>Nos auxilie em nossa missão</h3>
      <div className="flex flex-col gap-4 mt-4">
        <img src="/qrcode.png" alt="Qrcode" className="w-50 m-auto" />
        <p>Chave pix: 00.000.000/0000-00</p>
      </div>
      <div className="flex flex-col gap-8 mt-8">
        <h3>
          Também é possível nos auxiliar doando seu comprovane fiscal por meio
          do programa Nota Paraná.
        </h3>

        <h3 className="text-2xl text-[#4A755A] uppercase">Como Doar sua nota fiscal?</h3>
        <p>Assita o vídeo abaixo e descubra como fazer sua doação.</p>
        <iframe
         className="m-auto"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1D-V7rsIwk8?si=p8xXEQ_jSOtY53NQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        />
      </div>
    </section>
  );
}
