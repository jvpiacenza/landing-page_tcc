import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-[#ccdeed]">
      <div className="flex flex-col bg-[#b0cfe8] w-full h-100 px-24 justify-center">

        <h1 className="text-4xl font-bold text-[#000000] leading-tight p-4">
          Encontre seu caminho profissional
        </h1>
        <h3 className=" font-bold text-[#667785] leading-tight p-4">
          Descubra qual curso tecnico combina com seu perfil e veja as oportunidades de carreira
        </h3>


        <div className="flex gap-4 mt-6">
          <button className="flex items-center gap-2 bg-blue-800 text-white px-5 py-2.5 rounded-md font-medium hover:bg-blue-900 transition">
            Fazer Teste Vocacional
          </button>

          <button className="flex items-center gap-2 border border-gray-400 text-gray-800 px-5 py-2.5 rounded-md font-medium hover:bg-gray-100 transition">
            Ver Cursos
          </button>
        </div>

      </div>

      <div className="text-center py-10">
        <h2 className="text-3xl font-bold text-gray-900">
          Cursos Técnicos Disponíveis
        </h2>
        <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-blue-600" />
        <p className="text-gray-900 py-2">Conheça os cursos</p>

        <div className=" w-470 flex p-5 gap-4">

          <div className="bg-white w-90 h-110 rounded-lg">
            <div className="bg-yellow-500 rounded-lg h-">
              <h2 className="text-2xl font-bold text-gray-900">
                Desenvolvimento de sistemas
              </h2>
            </div>
          </div>

          <div className="bg-white w-90 h-110 rounded-lg">
            <div className="bg-blue-500 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900">
                Química
              </h2>
            </div>
          </div>

          <div className="bg-white w-90 h-110 rounded-lg">
            <div className="bg-orange-500 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900">
                Logística
              </h2>
            </div>
          </div>

          <div className="bg-white w-90 h-110 rounded-lg">
            <div className="bg-purple-500 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900">
                Administração
              </h2>
            </div>
          </div>

          <div className="bg-white w-90 h-110 rounded-lg">
            <div className="bg-red-500 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900">
                Eletroeletrônica
              </h2>
            </div>
          </div>

        </div>
      </div>



=======
    <div>
      <h1>
        
      </h1>
>>>>>>> da5d487e8eb68e36279a73cab8001a45ceace149
    </div>
  );
}
