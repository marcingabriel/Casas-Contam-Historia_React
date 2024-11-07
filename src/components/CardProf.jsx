
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

            <div className="mt-32 sm:mt-40 lg:mt-40 ">
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


  export function Prof2({ nome, curso, funcao, foto, descricao }) {

  
    return (
        <a href="#" className="group relative block bg-black w-80">
        <img
            alt=""
            src="img/sobre-nos/roberto.jpeg"
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div className="relative p-4 sm:p-6 lg:p-4 pt-4">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500 text-left">Coordenador Adjunto </p>

            <p className="text-xl font-bold text-white text-left">Prof. Roberto Paiva</p>

            <div className="mt-32 sm:mt-40 lg:mt-40 ">
            <div
                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
            >
                <p className="text-sm text-white text-left ">
                    <div>
                        <strong>Prof. Roberto Paiva</strong><br />
                        Graduado em História ICHS/UFOP<br />
                        Especialista em História do Brasil e Estudos Sociais<br />
                        Gerente de Cultura de Timóteo<br />
                        Professor do CEFET através de convênio  CEFET/ PMT
                    </div>
 
                </p>
            </div>
            </div>
        </div>
        </a>
      
    );
  }
  