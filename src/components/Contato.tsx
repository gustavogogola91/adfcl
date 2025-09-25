export default function Contato() {
  return (
    <section className="w-[80%] md:w-[90%] flex flex-col gap-4 m-auto text-center mt-4">
      <h2 className="text-2xl text-[#4A755A] uppercase">Nossas redes sociais</h2>
      <h3>Entre em contato conosco</h3>
      <ul className="flex flex-col lg:flex-row w-full gap-8 justify-center items-center">
        <li className="w-fit">
          <a
            href="https://www.instagram.com/adfcl_2005/"
            target="_blank"
            className="flex flex-row gap-4 items-center w-fit border-2 p-4 text-white bg-dark-green rounded-[5px] hover:bg-[#3d5f4a]"
          >
            <img src="./instagram.png" alt="Logo Instagram" className="w-10" />{" "}
            Instagram
          </a>
        </li>
        <li className="w-fit">
          <a
            href="https://www.facebook.com/adfclcampolargo/"
            target="_blank"
            className="flex flex-row gap-4 items-center w-fit border-2 p-4 text-white bg-dark-green rounded-[5px] hover:bg-[#3d5f4a]"
          >
            <img src="./facebook.png" alt="Logo Facebook" className="w-10" />{" "}
            Facebook
          </a>
        </li>
      </ul>
    </section>
  );
}
