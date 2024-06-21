import React from 'react';

const Sobre = () => {
  return (
    <div className="font-sans text-gray-900 leading-normal tracking-wider bg-cover">
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-5xl flex items-center h-auto  flex-wrap my-32 lg:my-0">
          <div id="profile" className="w-full rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-85 mx-6 lg:mx-0">
            <div className="p-4 md:p-20 text-center lg:text-left mt-10">
              <h1 className="text-3xl text-center font-bold pt-8 lg:pt-0">Sobre nós</h1>
              <div className="mx-auto lg:mx-0 w-full pt-3 border-b-2 border-green-500 opacity-25"></div>

              <h2 className="text-2xl text-center font-bold pt-8 lg:pt-0 mt-5">Objetivo</h2>
              <p className="pt-8 text-sm text-left">
                O projeto "As Casas Contam Histórias" visa se tornar uma ferramenta acessível de educação patrimonial arquitetônica no município de Timóteo,
                com foco no patrimônio arquitetônico industrial residencial. Busca-se documentar, catalogar e disponibilizar informações sobre as fachadas originais das casas
                construídas pela siderúrgica ACESITA (atualmente APERAM South America), facilitando o acesso do público às histórias e características dessas construções.
                O objetivo é promover a conscientização sobre a importância desse patrimônio, incentivando sua preservação e valorização pela comunidade.
              </p>

              <h2 className="text-2xl text-center font-bold pt-8 lg:pt-0 mt-4">Integrantes</h2>
              <ul className="pt-8 text-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-3">
                <li className="flex items-start">
                  <img src="img/sobre-nos/Larissa.png" alt="Larissa Sírio Coelho Penna" className="inline-block h-32 w-32 rounded-md mr-2" />
                  <div>
                    <strong>Larissa Sírio Coelho Penna</strong><br />
                    Aluna do curso Arquitetura e Urbanismo<br />
                    PETiana desde fevereiro de 2024
                  </div>
                </li>
                <li className="mt-2 flex items-start">
                  <img src="img/sobre-nos/maria.png" alt="Maria Júlia Loiola Vieira Cotta" className="inline-block h-36 w-32 rounded-md mr-2" />
                  <div>
                    <strong>Maria Júlia Loiola Vieira Cotta</strong><br />
                    Aluna do curso Arquitetura e Urbanismo<br />
                    PETiana desde fevereiro de 2024
                  </div>
                </li>
                <li className="mt-2 flex items-start">
                  <img src="img/sobre-nos/lara.png" alt="Lara" className="inline-block h-32 w-32 rounded-md mr-2" />
                  <div>
                    <strong>Lara</strong><br />
                    Aluna do curso Arquitetura e Urbanismo<br />
                  </div>
                </li>
                <li className="mt-2 flex items-start">
                  <img src="img/sobre-nos/marcio.png" alt="Márcio Gabriel" className="inline-block h-36 w-32 rounded-md mr-2" />
                  <div>
                    <strong>Márcio Gabriel</strong><br />
                    Aluno do curso Engenharia de Computação<br />
                    PETiano desde fevereiro de 2024
                  </div>
                </li>
                <li className="mt-2 flex items-start">
                  <img src="img/sobre-nos/felipe.png" alt="Felipe" className="inline-block h-32 w-32 rounded-md mr-2" />
                  <div>
                    <strong>Felipe</strong><br />
                    Aluno do curso Arquitetura e Urbanismo<br />
                  </div>
                </li>
                <li className="mt-2 flex items-start">
                  <img src="img/sobre-nos/fabio.png" alt="Prof. Fábio Azevedo Vasconcellos" className="inline-block h-32 w-32 rounded-md mr-2" />
                  <div>
                    <strong>Prof. Fábio Azevedo Vasconcellos</strong><br />
                    Coordenador do projeto e co-tutor do PETIT<br />
                    Arquiteto e Urbanista, doutor em Teoria e História da Arquitetura<br />
                    Departamento de Arquitetura e Construção Civil (DACTM)
                  </div>
                </li>
              </ul>

              <h2 className="text-2xl text-center font-bold pt-8 lg:pt-0">Sobre o PETIT</h2>
              <p className="pt-8 text-sm text-left">
                O Programa de Educação Tutorial (PET) é composto por grupos de aprendizagem, orientados, cada um, por um professor tutor, que buscam propiciar aos alunos condições para a realização de atividades extracurriculares que complementem a sua formação acadêmica, procurando atender mais plenamente às necessidades do próprio curso de graduação e/ou ampliar e aprofundar os objetivos e conteúdos programáticos que integram sua estrutura curricular. Desta forma, espera-se promover a formação ampla e de qualidade acadêmica dos alunos de graduação envolvidos direta ou indiretamente com o programa, estimulando a fixação de valores que reforcem a cidadania e a consciência social de todos os participantes para a melhoria dos cursos de graduação.

                O PET é um programa de longo prazo que visa realizar, dentro da universidade brasileira, o modelo de indissociabilidade do ensino, pesquisa e da extensão. Assim, além de um incentivo à melhoria da graduação, o PET pretende estimular a criação de um modelo pedagógico para a universidade, de acordo com os princípios estabelecidos na Constituição Brasileira e na Lei de Diretrizes e Bases da Educação (LDB).
              </p>

              <h2 className="text-2xl text-center font-bold pt-8 lg:pt-0 mt-5">Contato</h2>
              <section className="bg-white dark:bg-gray-900">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                  <form action="#" className="space-y-8">
                    <div>
                      <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nome</label>
                      <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Seu nome" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                      <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@example.com" required />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mensagem</label>
                      <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Sua mensagem ..." />
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Enviar</button>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
