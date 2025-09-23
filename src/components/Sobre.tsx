export default function Sobre() {
    return (
        <section className="w-[80%] md:w-[90%] flex flex-col gap-4 m-auto text-center mt-4">
            <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
                <h1 className="text-3xl font-bold mb-8 text-dark-green">Sobre a Associação</h1>

                <div className="w-full max-w-2xl space-y-6">
                    <div className="bg-dark-green text-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">História</h2>
                        <p>
                            Fundada em 2005, a associação atua no apoio e valorização das pessoas
                            com deficiência física em Campo Largo, promovendo atividades,
                            projetos e eventos de inclusão.
                        </p>
                    </div>

                    <div className="bg-dark-green text-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Missão</h2>
                        <p>
                            Promover a inclusão, acessibilidade e oportunidades iguais para todas
                            as pessoas com deficiência física, garantindo respeito e dignidade.
                        </p>
                    </div>

                    <div className="bg-dark-green text-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Valores</h2>
                        <p>
                            Respeito, solidariedade, diversidade e cidadania, sempre buscando
                            construir uma sociedade mais inclusiva.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}