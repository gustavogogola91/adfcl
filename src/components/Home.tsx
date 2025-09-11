import imgFachada from "../assets/imgFachada.png";

export default function Home() {
  return (
    <>
    <section className="flex justify-center gap-10">
        <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold">BEM VINDO A ASSOCIAÇÃO</h1>
    <p className="w-1/2" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum, diam in egestas tristique, risus augue iaculis tellus, a vestibulum nisi libero at lectus. Proin id lectus eget justo aliquet tempus. Ut interdum porttitor orci, vitae commodo neque suscipit vel. Nunc eget pellentesque nulla. In id blandit nisi. Nullam non suscipit lacus. Praesent in ultrices elit. Vestibulum tortor nulla, porttitor sollicitudin augue vitae, egestas lobortis felis.</p>

        </div>
    

        <img src={imgFachada} alt="Imagem" 
        className="rounded-xl w-[700px] h-[500px]"/>
    </section>
    </>
  );
}
