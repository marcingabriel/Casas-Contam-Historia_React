import React, { useState } from 'react';
import {Component} from '../components/CardIntegrantes'
import { Prof } from '../components/CardProf';
import useAnimateOnScroll from '../components/Animation';
import emailjs from '@emailjs/browser'
import '../assets/nav.css'

const Sobre = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('');  // Novo estado para a mensagem de sucesso


  function sendEmail(event) {
    event.preventDefault();  // Previna o comportamento padrão do formulário

    const templateParams = {
        from_name: name,
        message: message,
        email: email
    };

    emailjs.send("service_3j6we7u", "template_67m4dey", templateParams, "Hjw4e3W9aJv7H3_UB")
        .then((response) => {
            console.log("Sucesso");
            setName('');
            setEmail('');
            setMessage('');
            setSuccessMessage("Mensagem enviada com sucesso! Obrigado pelo contato!! :) ");  // Define a mensagem de sucesso
        })
        .catch((error) => {
            console.error("Erro ao enviar mensagem: ", error);
            setSuccessMessage("Erro ao enviar a mensagem, por favor tente novamente.");  // Define uma mensagem de erro se necessário
        });
}



  useAnimateOnScroll();
  
  return (
    <div className="font-sans text-gray-900 leading-normal tracking-wider bg-cover">
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-6xl flex items-center h-auto  flex-wrap my-32 lg:my-0">
          <div id="profile" className="w-full rounded-lg lg:rounded-l-lg lg:rounded-r-none md:shadow-2xl bg-white mx-6 lg:mx-0">
            <div className="p-4 md:p-20 text-center lg:text-left mt-10">
              <h1 className="text-3xl text-center font-bold pt-8 lg:pt-0 animate">Sobre nós</h1>
              <div className="mx-auto lg:mx-0 w-full pt-3 border-b-2 border-green-500 opacity-25"></div>

              <h2 className="text-2xl text-center font-bold pt-8 lg:pt-0 mt-5 animate">Objetivo</h2>
              <p className="pt-8 text-md text-justify animate-left">
                O projeto "As Casas Contam Histórias" visa se tornar uma ferramenta acessível de educação patrimonial arquitetônica no município de Timóteo,
                com foco no patrimônio arquitetônico industrial residencial. Busca-se documentar, catalogar e disponibilizar informações sobre as fachadas originais das casas
                construídas pela siderúrgica ACESITA (atualmente APERAM South America), facilitando o acesso do público às histórias e características dessas construções.
                O objetivo é promover a conscientização sobre a importância desse patrimônio, incentivando sua preservação e valorização pela comunidade.
              </p>

              <h2 className="text-2xl text-center font-bold pt-8 lg:pt-0 mt-8 animate">Integrantes</h2>
              <ul className="pt-8 text-sm grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5 mb-3 justify-items-center mx-auto animate-up">
                <Prof></Prof>
                <Component nome= "Marcio Gabriel G. Soares" curso="Eng. Computação" funcao="Bolsista do grupo PET Interdisciplinar de Timóteo DIRGRAD/CEFET-MG" foto="img/sobre-nos/marcio.png" descricao="Aluno do curso" />
                <Component nome= "Maria Júlia Loiola Vieira Cotta" curso="Arquitetura e Urbanismo" funcao="Bolsista do grupo PET Interdisciplinar de Timóteo DIRGRAD/CEFET-MG" foto="img/sobre-nos/maria.png" descricao="Aluna do curso" />
                <Component nome= "Larissa Sírio Coelho Penna" curso="Arquitetura e Urbanismo" funcao=" Bolsista do grupo PET Interdisciplinar de Timóteo DIRGRAD/CEFET-MG" foto="img/sobre-nos/Larissa.png" descricao="Aluna do curso"/>
                <Component nome= "Felipe Freitas Moraes" curso="Arquitetura e Urbanismo - CEFET-MG" funcao="" foto="img/sobre-nos/felipe.png" descricao="Aluno do curso"/>
                <Component nome= "Lara Gabrielle" curso="Arquitetura e Urbanismo - CEFET-MG" funcao="" foto="img/sobre-nos/lara.jpeg" descricao="Aluna do curso"/>
              </ul>

              <h2 className="text-2xl text-center font-bold pt-8 lg:pt-0 animate mt-8">Sobre o PETIT</h2>
              <p className="pt-8 text-md text-justify animate-left">
                O Programa de Educação Tutorial (PET) é composto por grupos de aprendizagem, orientados, cada um, por um professor tutor, que buscam propiciar aos alunos condições para a realização de atividades extracurriculares que complementem a sua formação acadêmica, procurando atender mais plenamente às necessidades do próprio curso de graduação e/ou ampliar e aprofundar os objetivos e conteúdos programáticos que integram sua estrutura curricular. Desta forma, espera-se promover a formação ampla e de qualidade acadêmica dos alunos de graduação envolvidos direta ou indiretamente com o programa, estimulando a fixação de valores que reforcem a cidadania e a consciência social de todos os participantes para a melhoria dos cursos de graduação.

                O PET é um programa de longo prazo que visa realizar, dentro da universidade brasileira, o modelo de indissociabilidade do ensino, pesquisa e da extensão. Assim, além de um incentivo à melhoria da graduação, o PET pretende estimular a criação de um modelo pedagógico para a universidade, de acordo com os princípios estabelecidos na Constituição Brasileira e na Lei de Diretrizes e Bases da Educação (LDB).
              </p>

              <h2 className="text-2xl text-center font-bold pt-8 lg:pt-0 mt-8 animate">Contato</h2>
              <section className="bg-white dark:bg-gray-900 animate-up">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                  <form action="#" className="space-y-8" onSubmit={sendEmail}>
                    <div>
                      <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nome</label>
                      <input type="text" value={name} id="subject"  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" onChange={(e) => setName(e.target.value)} placeholder="Seu nome" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                      <input type="email" value={email} id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" required />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mensagem</label>
                      <textarea id="message" value={message} rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" onChange={(e) => setMessage(e.target.value)} placeholder="Sua mensagem ..." />
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Enviar</button>
                  </form>
                  {successMessage && (  // Exibe a mensagem de sucesso se ela existir
                  <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
                      {successMessage}
                  </div>   )}
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
