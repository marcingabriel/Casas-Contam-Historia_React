
export function Component({ nome, curso, funcao, foto, descricao }) {

  
    return (
        <a href="#" className="group relative block bg-black w-80">
        <img
            alt=""
            src={foto}
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500 text-left">{curso}</p>

            <p className="text-xl font-bold text-white text-left">{nome}</p>

            <div className="mt-32 sm:mt-40 lg:mt-40">
            <div
                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
            >
                <p className="text-sm text-white text-left">
                    <div>
                        <strong>{nome}</strong><br />
                        {descricao} {curso}<br />
                        {funcao}
                    </div>
 
                </p>
            </div>
            </div>
        </div>
        </a>
      
    );
  }
  