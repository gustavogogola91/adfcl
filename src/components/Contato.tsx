export default function Contato() {
  return (
    <section className="w-[80%] md:w-[90%] flex flex-col gap-4 m-auto text-center mt-4">
      <h2 className="text-2xl">Contato</h2>
      <h3>Como entrar em contato conosco</h3>
      <ul className="flex flex-col lg:flex-row gap-8 w-full">
        <li className="w-full">
          <a href="https://www.instagram.com/adfcl_2005/" target="_blank">
            <div className="w-full text-white bg-dark-green transition rounded-[5px] p-4 hover:bg-dark-green-alpha hover:text-dark-green border shadow-lg duration-200 hover:scale-105 ">
              Instagram: @adfcl_2005
            </div>
          </a>
        </li>
        <li className="w-full">
          <a href="https://www.facebook.com/adfclcampolargo/" target="_blank">
            <div className="w-full text-white bg-dark-green transition rounded-[5px] p-4 hover:bg-dark-green-alpha hover:text-dark-green border shadow-lg duration-200 hover:scale-105">
              Facebook: ADFCL Campo Largo
            </div>
          </a>
        </li>
        <li className="w-full">
          <a href="https://wa.me/" target="_blank">
            <div className="w-full text-white bg-dark-green transition rounded-[5px] p-4 hover:bg-dark-green-alpha hover:text-dark-green border shadow-lg duration-200 hover:scale-105">
              Whatsapp: (41) 99999-9999
              {/* TODO: Adicionar o numero */}
            </div>
          </a>
        </li>

        <li className="w-full">
          <a href="mailto:@gmail.com" target="_blank">
            <div className="w-full text-white bg-dark-green transition rounded-[5px] p-4 hover:bg-dark-green-alpha hover:text-dark-green border shadow-lg duration-200 hover:scale-105">Email: adfcl</div>
          </a>
        </li>
      </ul>
    </section>
  );
}
