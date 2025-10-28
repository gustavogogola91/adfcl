import instagram from "../assets/Icons/instagram.png"
import facebook from "../assets/icons/facebook.png"

export default function Contato() {
  return (
    <section className="w-[80%] md:w-[90%] flex flex-col gap-4 m-auto text-center my-20">
      <h2 className=" font-bold uppercase text-2xl text-[#4A755A] text-center ">Nossas redes sociais</h2>
      <h3>Entre em contato conosco</h3>
      <ul className="flex flex-col lg:flex-row w-full gap-8 justify-center items-center">
        <li className="w-fit">
          <a
            href="https://www.instagram.com/adfcl_2005/"
            target="_blank"
            className="flex flex-row gap-4 items-center w-fit border-2 px-4 py-2 text-white bg-dark-green text-1xl font-bold rounded-[5px] transition hover:bg-[#3d5f4a]"
          >
            <img src={instagram} alt="Logo Instagram" className="w-10" />{" "}
            Instagram
          </a>
        </li>
        <li className="w-fit">
          <a
            href="https://www.facebook.com/adfclcampolargo/"
            target="_blank"
            className="flex flex-row gap-4 items-center w-fit border-2 px-4 py-2 text-white bg-dark-green rounded-[5px] text-1xl font-bold transition hover:bg-[#3d5f4a]"
          >
            <img src={facebook} alt="Logo Facebook" className="w-10" />{" "}
            Facebook
          </a>
        </li>
      </ul>
    </section>
  );
}
