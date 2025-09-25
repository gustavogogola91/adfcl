export default function Doe() {

    return(
        <section className="w-[80%] md:w-[90%] flex flex-col gap-4 m-auto text-center mt-4">
            <h2 className="text-2xl">Doe</h2>
            <h3>Nos auxilie em nossa missão</h3>
            <div className="flex flex-col gap-8 mt-8">
                <img src="/qrcode.png" alt="Qrcode" className="w-50 m-auto"/>
                <p>Chave pix: 00.000.000/0000-00</p>
            </div>
            <div>
                <p>Também é possível nos auxiliar doando suas notas fiscais por meio do programa Nota Paraná</p>
            </div>
        </section>
    )
}