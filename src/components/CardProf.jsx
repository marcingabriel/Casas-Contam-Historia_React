
export function Prof({ nome, curso, funcao, foto, descricao }) {

  
    return (
        <a href="#" className="group relative block bg-black w-80">
        <img
            alt=""
            src="img/sobre-nos/fabio.png"
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div className="relative p-4 sm:p-6 lg:p-4 pt-4">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500 text-left">Coordenador do projeto </p>

            <p className="text-xl font-bold text-white text-left">Prof. Fábio Azevedo Vasconcellos</p>

            <div className="mt-32 ">
            <div
                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
            >
                <p className="text-sm text-white text-left">
                    <div>
                        <strong>Prof. Fábio Azevedo Vasconcellos</strong><br />
                        Coordenador do projeto e co-tutor do PETIT<br />
                        Arquiteto e Urbanista, doutor em Teoria e História da Arquitetura<br />
                         Departamento de Arquitetura e Construção Civil (DACTM)
                    </div>
 
                </p>
            </div>
            </div>
        </div>
        </a>
      
    );
  }
  