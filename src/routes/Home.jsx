import React from 'react';
import '../assets/style.css'
import '../assets/style1.css'
import useAnimateOnScroll from '../components/Animation';



const Home = () => {
  useAnimateOnScroll();

  return (
    <div>
      <div className="background-image filter brightness-75">
        <div className="text-center">
          <h1 className="custom-font text-6xl font-bold animate">
            As casas contam história
          </h1>
          <p className="text-2xl mt-10 animate animate-delay-500">
            Desde os anos 50, esses lares guardam as memórias e alegrias de diversas famílias.
          </p>
        </div>
      </div>

      <div className="content container mx-auto mt-custom px-4 lg:px-0">
        <div className="flex justify-center lg:justify-between items-center flex-col lg:flex-row">
          <img src="img/Logo-2.png" className="mx-auto mb-4 animate" alt="Logo" />
        </div>

        <section className="mb-8 mt-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div>
              <h2 className="roboto text-2xl font-semibold mb-2 text-gray-700 opacity-0 animate-up">Sobre o município de Timóteo.</h2>
              <p className="roboto text-lg text-gray-700 text-left opacity-0 animate-left">
                Timóteo é um município brasileiro localizado no estado de Minas Gerais, na região sudeste do país. Faz parte da Região Metropolitana do Vale do Aço, que é uma das regiões mais industrializadas do estado. O município tem suas origens no século XIX, surgindo inicialmente como um pequeno povoado. Em 1938, foi incorporado como distrito do município de Antônio Dias. A partir de 1942, Timóteo começou a tomar sua forma atual, iniciando a transição de um núcleo rural para um centro industrial. Foi nesse contexto que o engenheiro Alderico Rodrigues de Paula recebeu a missão de identificar um local para a implantação de uma siderúrgica. Ele encontrou o local ideal na região onde hoje se localiza a cidade de Timóteo, possibilitando a instalação da ACESITA (Aços Especiais Itabira), que mais tarde se transformaria na APERAM South América. Após a fundação da siderúrgica, iniciou-se um processo de planejamento urbano em seu entorno. Foram projetados, além de um traçado urbano setorizado, bairros residenciais para os seus funcionários, como também toda infraestrutura, para quem ali viesse trabalhar, composta por centro comercial, escolas, hospital e clubes de lazer. Essas primeiras casas foram projetadas e construídas de forma padronizada, de acordo com a sua localização na malha urbana. Fazem parte da setorização urbana definida de início os bairros Quitandinha e Vila dos Técnicos, para que nas décadas seguinte viessem São Cristóvão, Alvorada, Timotinho, Garapa, Serenata, Funcionários, Timirim, Santa Maria, Olaria e Novo Horizonte, divididos de acordo com as divisões socioeconômicas e cargos exercidos na siderúrgica. (Quecini, 2007, p. 154, 155) Hoje, tais casas são vistas em menor quantidade, das 2734 construídas em 1958, menos de 150 possuem suas fachadas preservadas, este número está em constante diminuição devido às reformas e demolições que são feitas. A falta de sensibilidade, por grande parte dos munícipes, de que estes edifícios fazem parte do patrimônio histórico da cidade, tem como consequência o seu desaparecimento cotidiano. Apesar da visível falta de políticas públicas para a preservação do patrimônio histórico da cidade, é possível ver como existe um sentimento de preservação que ainda perdura entre alguns cidadãos de Timóteo. Porém o falso entendimento de que somente edificações do período colonial ou que tenham alguma arquitetura singular, dificulta a preservação da arquitetura produzida no século 20. QUECINI, Vanda Maria. Timóteo: O Legado Urbano de um Projeto Industrial. Tese de Doutorado – Universidade de São Paulo, Faculdade de Arquitetura e Urbanismo - FAUUSP. São Paulo, 2007.
              </p>
            </div>
            <img src="img/MinasGerais_Municip_Timoteo.png" className="mb-4 lg:mb-0 lg:ml-4" alt="Mapa" />
          </div>

          <h2 className="roboto text-2xl font-semibold mb-2 text-gray-700 opacity-0 animate-up mt-8">O que é o Projeto “As Casas contam história”.</h2>
          <p className="roboto text-lg text-gray-700 text-left opacity-0 animate-left">
            O mapa "As casas contam história" é um projeto que visa mapear e catalogar as residências ainda existentes na cidade de Timóteo, que foram construídas durante a fase de implantação da siderúrgica ACESITA, hoje APERAM, para atender aos seus funcionários. Ele registra não apenas a localização física dessas casas, mas também informações relevantes sobre sua história, arquitetura e contexto social. Este mapa serve como um inventário artístico e histórico, contribuindo para sensibilizar a população sobre a importância de preservar o patrimônio histórico de Timóteo e proteger suas edificações antigas.
          </p>

          <h2 className="roboto text-2xl font-semibold mb-2 text-gray-700 opacity-0 animate-up mt-8">Objetivo.</h2>
          <p className="text-lg text-gray-700 text-left opacity-0 animate-left">
            O projeto tem como objetivo ser uma ferramenta, de fácil acesso, de educação patrimonial arquitetônica no município de Timóteo. Focado no patrimônio arquitetônico industrial residencial.
          </p>

          <h2 className="roboto text-2xl font-semibold mb-2 text-gray-700 opacity-0 animate-up mt-8">Acessando as informações.</h2>
          <p className="roboto text-lg text-gray-700 text-left opacity-0 animate-left">
            As casas mapeadas de Timóteo são identificadas com o ícone do mapa. Ao clicar nos ícones, o visitante terá acesso a um dossiê de informações da tipologia arquitetônica implantada no local, através de fotos atuais e um desenho da reconstituição original da fachada.
          </p>
        </section>
      </div>

      <h1 className="text-3xl font-bold text-center text-gray-700 mt-8 mb-2 underline opacity-0 animate">Mapa</h1>
      <div className="flex flex-col items-center justify-center">
        <iframe id="meuMapa" src="https://www.google.com/maps/d/u/0/embed?mid=1W8_QiOSp1uzTWyAPHwDGDDFahhPzCUo&ehbc=2E312F" width="95%" height="600" className="ml-10 opacity-0 animate"></iframe>
      </div>

      <div className="container mx-auto mt-24">
        <h1 className="text-3xl font-bold text-center text-gray-600 mt-5 animate opacity-0">Galeria</h1>
        <div id="root-index"></div>

        <div className="text-center mt-5">
          <a href="inventario.html">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Ver mais
              </span>
            </button>
          </a>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-center text-gray-700 mt-8 mb-2 opacity-0 animate">Depoimentos</h1>

      <div className="container mx-auto relative z-10 items-center-center">
        <div className="flex flex-col md:flex-row justify-center m-2 mt-8 space-y-8 md:space-y-0 md:space-x-8">
          <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg object-cover object-center md:h-2/5 w-full" src="img/desenhos/2.jpg" alt="Funcionários" />
            </a>
            <div className="p-5">
              <h3 className="text-center font-playfair-display font-bold text-2xl mb-2">
                <span className="block font-bold">Funcionários</span>
              </h3>
              <h4 className="text-center font-medium text-gray-500 text-sm mb-4">Avenida Alberto Batista Gallo</h4>
              <p className="text-center text-gray-600 mb-4 text-base">
                Existem dificuldades para a preservação ou manutenção da casa? R: Não, já tem mais de 60 anos e como foi feita de madeiras muito nobres, aqui tem peroba rosa e outros tipos de madeira que meu marido saberia identificar para vocês...
              </p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Ler mais
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg object-cover object-center md:h-2/5 w-full" src="img/desenhos/7.jpg" alt="Bromélias" />
            </a>
            <div className="p-5">
              <h3 className="text-center font-playfair-display font-bold text-2xl mb-2">
                <span className="block font-bold">Bromélias</span>
              </h3>
              <h4 className="text-center font-medium text-gray-500 text-sm mb-4">Bromélias - Irmãos</h4>
              <p className="text-center text-gray-600 mb-4 text-base">
                Houveram acontecimentos marcantes na casa? R: Eu lembro quando eu era criança, era piso vermelhão, fazia com xadrez, não tinha cerâmica. Era uma casa muito simples então, aquele vermelhão cimentado, passava o xadrez aí tinha vermelho, amarelo, verde...
              </p>
              <a href="#" className="mt-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Ler mais
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <a href="depoimentos.html">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Ver mais
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;