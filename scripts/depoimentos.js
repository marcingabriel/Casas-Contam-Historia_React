
function exibirDepoimentos(depoimentos, containerId,containerModal) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Limpa o conteúdo do container

    let depoimentosHtml = ''; // Variável para armazenar o HTML dos depoimentos
    let modaisHtml = ''; // Variável para armazenar o HTML dos modais



    const modalContainer = document.getElementById(containerModal);
    modalContainer.innerHTML = ''; // Limpa o conteúdo do contêiner de modais

    




    depoimentos.forEach((depoimento, index) => {
        const depoimentoId = `depoimento-${index}`;
        const depoimentoIdImg = `depoimentoImg-${index}`;
        const modalId = `modal-${index}`;
        const modalTextId = `modal-text-${index}`;


        

        // Cria o HTML do depoimento
        depoimentosHtml += `
        <div class="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:m-2 m-5 lg:m-0 transition-transform transform hover:scale-105 hover:shadow-xl">
            <a href="#" id="${depoimentoIdImg}">
                <img class="rounded-t-lg object-cover object-center md:h-2/5 w-full" src="${depoimento.desenho}" alt="desenho" />
            </a>
            <div class="p-5">
                <h3 class="text-center font-playfair-display font-bold text-2xl mb-2">
                    <span class="block font-bold">${depoimento.bairro}</span>
                </h3>
                <h4 class="text-center font-medium text-gray-500 text-sm mb-4">${depoimento.endereço}</h4>
                <p class="text-justify leading-relaxed text-gray-600 mb-4 text-sm md:text-base">${depoimento.texto}</p>
                <div class="flex justify-center items-center text-center mb-4">
                    <a href="#" id="${depoimentoId}" class="mr-6 inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-800 rounded-lg hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Ler mais
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                    <button id="music-button-${index}" onclick="toggleMusic(${index})">
                        <div class="relative group inline-block">
                            <!-- Ícone de música -->
                            <img id="music-icon-${index}" class="w-8 h-8 cursor-pointer" src="midia/mute.png" alt="Play music">
                            
                            <!-- Tooltip -->
                            <div class="absolute left-10 top-1/2 transform -translate-y-1/2 px-2 py-2 text-sm text-white bg-gray-800 rounded-lg opacity-0 transition-opacity duration-200 group-hover:opacity-80 w-40">
                                Clique para reproduzir ou pausar.
                            </div>
                        </div>
                    </button>
                </div>
                <div id="audio-controls-${index}" class="hidden w-full">
                    <audio id="audio-${index}" src="${depoimento.audio}" class="w-full" controls></audio>
                </div>
            </div>
        </div>
        `;

        // Cria o HTML do modal correspondente
        modaisHtml += `
        <div id="${modalId}" class="text-left modal hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50 ">
            <div class="modalz bg-white p-8 rounded-lg shadow-lg w-10/12 md:w-3/4 lg:w-2/3 relative " style="max-height: calc(90%); overflow-y: auto; margin-top: 70px; ">
                <button class="absolute top-2 right-2 text-gray-600 hover:text-blue-800 close-modal text-2xl">
                    &times;
                </button>
                <h3 class="text-center font-serif font-bold text-3xl mb-6 text-gray-800">Depoimento Completo</h3>
                

                <p id="${modalTextId}" class="text-gray-700 leading-relaxed mb-6">${depoimento.entrevista}</p>
                <button class="block mx-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 close-button">Fechar</button>
            </div>
        </div>
    `;
    
    });




    

    // Adiciona o HTML dos depoimentos ao container original
    container.innerHTML = depoimentosHtml;

    // Adiciona o HTML dos modais ao novo contêiner
    modalContainer.innerHTML = modaisHtml;

    // Adiciona eventos de clique para abrir e fechar os modais
    depoimentos.forEach((depoimento, index) => {
        const depoimentoId = `depoimento-${index}`;
        const depoimentoIdImg = `depoimentoImg-${index}`;
        const modalId = `modal-${index}`;
    
        const modal = document.getElementById(modalId);
        const modalContent = modal.querySelector('.modalz');
    
        document.getElementById(depoimentoIdImg).addEventListener('click', function(event) {
            event.preventDefault();
            modal.classList.remove('hidden');
        });

        document.getElementById(depoimentoId).addEventListener('click', function(event) {
            event.preventDefault();
            modal.classList.remove('hidden');
        });
    
        modal.querySelector('.close-modal').addEventListener('click', function() {
            modal.classList.add('hidden');
        });
    
        modal.querySelector('.close-button').addEventListener('click', function() {
            modal.classList.add('hidden');
        });
    
        // Adicionando evento para fechar o modal ao clicar fora dele
        document.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.classList.add('hidden');
            }
        });
    
        // Impedir que o clique no conteúdo do modal feche o modal
        modalContent.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
    
  
} export default exibirDepoimentos;

const entrevista1 = `
<div class="space-y-6 pr-12 pl-12 mb-4">
    <div>
        <h4 class="font-semibold text-xl">Funcionários</h4>
    </div>
    <div>
        <p class="text-justify leading-relaxed ">
          Meu marido, que chegou antes de mim, mora de locação na casa desde 2017, por aí. Os primeiros moradores daqui, eu sei o nome da senhora, dona Alzira, são os pais do Geraldo Cruz, o proprietário da contabilidade Soares e Cruz, eles é que são os proprietários desta casa. A casa passou por intervenções simples como acrescentar portas onde era espaço de passagem, uma varandinha no quintal. Na fachada absolutamente nada, ela está intacta. As portas são as portas que foram colocadas e adquiridas desde o início da construção, as grades, o telhado, tudo, portas internas, portas externas tudo é da construção. Esse forro é um forro da época também, logo em seguida quando vieram as questões dos forros antigos, tanto é que a madeira dele, se observarem é até mais grossa, hoje em dia não existe mais forro de madeira desse material, então à intervenção esse forro foi pintado porque ele era de madeira mesmo. Foram intervenções mínimas que foram feitas porque a gente precisou de pintar porque a gente aplicou um material por causa de cupim, aí a gente aplicou o material e trouxe uma tinta de proteção para que houvesse essa conservação. Não existem dificuldades para a preservação e manutenção, já tem mais de 60 anos e como foi feita de madeiras muito nobres, aqui tem peroba rosa e outros tipos de madeira que meu marido saberia identificar para vocês. É manutenção simples, simples mesmo, temos dificuldade nenhuma não. A história da casa é muito importante para mim, na verdade, principalmente pela família né? É uma família muito querida por nós. Os proprietários, um dos filhos, são amigos do meu marido há mais de 20 anos, então realmente essa casa aqui é importante. E eu acho muito importante para a cidade também. Eu estava falando disso outro dia com meu marido. Eu acredito que daqui a no máximo 10 anos talvez a gente não tenha mais nenhuma casa em Timóteo da época da fundação de Timóteo. Eu acho que o patrimônio histórico da cidade está pecando muito com os proprietários. Porque o quê que acontece, essa conscientização, é claro, os proprietários tem que ter um pouquinho também, mas essa conscientização de patrimônio histórico ela é pública, tem que partir da gestão pública. Se não vier da gestão pública a tendência é derrubar, a casa aí da frente foi toda derrubada semana passada, eu fui vendo ela desmontando pedacinho por pedacinho e falei “Ai meu Deus, que dó!”. 

        </p>
        <p class="text-justify leading-relaxed ">
           Eu acho que todo mundo fala de vários lugares como patrimônio histórico de Timóteo, né? A Igreja do Timirim, o Forno Hoffman, só que, eu tenho um pouquinho de 
           entendimento de gestão pública, eu acho que as casas são o maior patrimônio histórico de uma cidade, porque são essas casas que contam as histórias das pessoas que fizeram a cidade. De dentro dessa casa aqui, nasceu, cresceu, foi criado e se formou um dos maiores contadores do Vale do Aço que é o Geraldo Cruz, e ninguém sabe disso. Aí, olha só, ele construiu uma contabilidade tão grande, de tamanha credibilidade e referência, que a filha dele hoje segue os caminhos do pai, o filho é contador e segue os caminhos do pai, a outra filha também é prestadora de serviços na área financeira. Então assim, é o que eu falo dessa linha de referência histórica, a referência histórica vai muito além dos imóveis assim. E eu estou falando só do Geraldo mas tem outros irmãos também que construíram histórias no ramo da imobiliária, e que são pessoas muito queridas e conhecidas na cidade. A mãe dele, a dona Alzira era uma pessoa muito que todo mundo admirava muito, faleceu no ano passado. Então assim, quem são essas pessoas que moraram nessas casas? A gente tem sim, igual eu falei, o Coliseu ali, tem muitos espaços bacanas, a praça de Acesita aqui em cima, lá em cima na sede com certeza a igreja, lá em cima também tem história. 
           Mas eu acho que as casas de Timóteo, dentro das possibilidades, deveriam ser conservadas o máximo possível por causa da história delas, as pessoas que começaram Timóteo, moraram nessas casas. Eu sei que depois de tombado os recursos que vem pro proprietário são poucos e mínimos, para valer a pena para a pessoa preservar esse patrimônio histórico, a gestão pública tinha que fazer um trabalho de conscientização muito grande. Essa casa aqui, para valer a pena para o proprietário, tinha que trazer um movimento aqui para dentro, um museu ou um lugar de visitação, algo assim que aí o poder público ia poder ressarcir o proprietário sem que ele se sentisse lesado. Porque por exemplo, se não me engano a casa da frente aqui os proprietários estão pedindo dois milhões de reais nela, e o patrimônio não paga isso, a gente sabe disso, a pontuação não garante esse valor para a pessoa. Mas em compensação, talvez com conscientização eles se dessem por satisfeitos. Mas é igual estou falando, eu estou colocando de 5 a 10 anos mas no ritmo que está indo eu acho que em 5 anos a gente não vai ter nenhuma casa mais. E para conscientizar isso, a melhor forma é o trabalho com marketing, né? E vocês são reis do celular, a geração do celular, vocês tem que ir pra internet, gravar vídeo, viralizar vídeo, fazer vídeo na porta das casas, buscando saber essas histórias que eu acabei de falar, quem morou aqui, quem é a pessoa, faz homenagem a elas, posta no Tiktok, no Instagram, no Facebook, coloca no Whatsapp, vai na rádio, pede o pessoal da rádio para contar a história das pessoas, entendeu? Sabe porque? As pessoas é que movimentam as pessoas, então assim, eu trabalharia dessa forma, com a internet, vai na porta das casas e pede autorização para os proprietários, entendeu? 
           Eu se fosse vocês iria lá no Geraldo Cruz e falaria assim: “Geraldo, posso contar a história da sua casa, há quanto tempo ela existe, gravar um vídeo na porta da sua casa lá só para a gente poder registrar?” E vai para essas portas das casas, e fala que a gente só quer contar a história, encontra mais uns 3, que aí o que acontece, quando vocês colocam 1 história, é só uma história, quando vocês contam 3 histórias todo mundo vai querer que conte a história do outro, é uma coisa do mineiro, o mineiro quer saber mais e o mineiro gosta de saber da história do outro, e do outro, e do outro e quer contar a dele também, e aí vocês vão contaminar, e aí eu tenho certeza que a cidade vai se sensibilizar. E aí ao invés da gente ver uma Araújo, aonde ela está, a gente estaria vendo uma casa belíssima de mais de 60 anos, preservada, talvez com um centro cultural lá dentro, um espaço interativo contando a história.

        </p>
        <p class="text-justify leading-relaxed ">
         Mas eu acho que as casas de Timóteo, dentro das possibilidades, deveriam ser conservadas o máximo possível por causa da história delas, as pessoas que começaram Timóteo, moraram nessas casas. Eu sei que depois de tombado os recursos que vem pro proprietário são poucos e mínimos, para valer a pena para a pessoa preservar esse patrimônio histórico, a gestão pública tinha que fazer um trabalho de conscientização muito grande. Essa casa aqui, para valer a pena para o proprietário, tinha que trazer um movimento aqui para dentro, um museu ou um lugar de visitação, algo assim que aí o poder público ia poder ressarcir o proprietário sem que ele se sentisse lesado. Porque por exemplo, se não me engano a casa da frente aqui os proprietários estão pedindo dois milhões de reais nela, e o patrimônio não paga isso, a gente sabe disso, a pontuação não garante esse valor para a pessoa. Mas em compensação, talvez com conscientização eles se dessem por satisfeitos. Mas é igual estou falando, eu estou colocando de 5 a 10 anos mas no ritmo que está indo eu acho que em 5 anos a gente não vai ter nenhuma casa mais. E para conscientizar isso, a melhor forma é o trabalho com marketing, né? E vocês são reis do celular, a geração do celular, vocês tem que ir pra internet, gravar vídeo, viralizar vídeo, fazer vídeo na porta das casas, buscando saber essas histórias que eu acabei de falar, quem morou aqui, quem é a pessoa, faz homenagem a elas, posta no Tiktok, no Instagram, no Facebook, coloca no Whatsapp, vai na rádio, pede o pessoal da rádio para contar a história das pessoas, entendeu? Sabe porque? As pessoas é que movimentam as pessoas, então assim, eu trabalharia dessa forma, com a internet, vai na porta das casas e pede autorização para os proprietários, entendeu? 
         Eu se fosse vocês iria lá no Geraldo Cruz e falaria assim: “Geraldo, posso contar a história da sua casa, há quanto tempo ela existe, gravar um vídeo na porta da sua casa lá só para a gente poder registrar?” E vai para essas portas das casas, e fala que a gente só quer contar a história, encontra mais uns 3, que aí o que acontece, quando vocês colocam 1 história, é só uma história, quando vocês contam 3 histórias todo mundo vai querer que conte a história do outro, é uma coisa do mineiro, o mineiro quer saber mais e o mineiro gosta de saber da história do outro, e do outro, e do outro e quer contar a dele também, e aí vocês vão contaminar, e aí eu tenho certeza que a cidade vai se sensibilizar. E aí ao invés da gente ver uma Araújo, aonde ela está, a gente estaria vendo uma casa belíssima de mais de 60 anos, preservada, talvez com um centro cultural lá dentro, um espaço interativo contando a história.
        </p>
    </div>
</div>

`;

const entrevista2 = `
<div class="space-y-6 pr-12 pl-12 mb-4">
    <div>
        <h4 class="font-semibold text-xl">Funcionários</h4>
    </div>
    <div>
        <p class="text-justify leading-relaxed ">
          Eu moro aqui desde 1962, sou proprietária. Antes teve um morador, não sei quem foi, tem tantos anos, era seu Antônio mas não sei o sobrenome dele. Não passou por reforma, na fachada não, só limpeza e lá no fundo, acrescentou um anexo na garagem. É muito grande e velha né, isso que dificulta na manutenção? A história da casa é muito importante né, os filhos foram criados aqui, viveram aí no quintal, o pai criava galinhas, e muitas galinhas, então era muito bonito, muito interessante, eu trabalhei aqui no grupo Getúlio Vargas, é tudo perto, pra mim foi ótimo. A história da casa é importante né, construída a muitos anos, eu conheci o construtor daqui, ele morou nessa casa, ela precisa de manutenções, você tem que manter, tubulações, parte elétrica, tem que mudar todas essas coisas, mas tem uma estrutura forte. E quando for vender algum dia, com certeza ela terá imenso valor, não saberemos se vai continuar casinha aí ou se algum prédio. Tem um quintal muito grande, aqui são 1200 metros.

        </p>
        <p class="text-justify leading-relaxed ">
          Patrimônio é o que pertence à prefeitura, em Timóteo tem o grupo Getúlio Vargas, que foi onde trabalhei 27 anos, a igreja, a fundação Aperam. A siderúrgica é muito importante, e como desenvolveu. Para aprender sobre tem que frequentar a escola, o colégio, principalmente os alunos.

        </p>
    </div>
</div>
`;

const entrevista3 = ` 
   <div class="space-y-6 pr-12 pl-12 mb-4">
    <div>
        <h4 class="font-semibold text-xl">Funcionários</h4>
    </div>
    <div>
        <p class="text-justify leading-relaxed ">
          	Que eu moro mesmo? Eu estive fora aqui uns anos… uns oito anos fora. Então, você vai somar aí, subtrair… já tem uns 60 anos que eu moro aqui, eu já tenho 70. Sou proprietário. Meus pais foram os primeiros donos, ficaram mais de 70 anos. Ele é dentista, ele veio para trabalhar, né? Como dentista, atendendo os funcionários da Acesita. Boas lembranças, né? Cresci aqui. Casei, fiquei com uma parte da casa.

        </p>
        <p class="text-justify leading-relaxed ">
         O que eu entendo de patrimônio é que justamente é uma história de vida da gente, né? Então, a gente conservar o patrimônio é conservar a nossa história, não é? Nós temos aqui grandes histórias para conservar, para contar. Olha, primeiro essas três casas da rua todas eram antigas. Inclusive aqui no Quintal, né? Era vizinho, lá morava um médico que veio com a mesma finalidade que o meu pai, né? O patrimônio é a igreja, a Aperam né? Que hoje tem a Fundação. A gente vai ver, mas não existe mais…. onde o supermercado do Brasil era Elite Club. Não sei se vocês já viram falar, né? Mas não estou me lembrando….. o Getúlio Vargas. O Getúlio Vargas é um patrimônio. Foi a Siderúrgica que cedeu a casa, né? Essas moradias todas para a gente, que meu pai comprou da Siderúrgica. Ela que fez a gente, a cidade, se desenvolver. Empregou várias pessoas, né? Vivemos por causa da siderúrgica. Aliás, todos nós viemos por causa da siderúrgica, né? Porque tem a cidade Timóteo. Aí, vieram e implantaram a Acesita. E então que vieram as pessoas para trabalhar na Acesita. Até hoje, nós temos aquela separação de Timôtenses, a Acesitanos. E não existe, né? São todos Timotênses, mas até hoje tem. Aqui em casa ainda tem essa discriminação. Nós não somos Timotênses, nós somos Acesitanos. Mas é porque, inclusive, os bairros são separados, né? Aqui são os Funcionários. Ali são a vila dos Técnicos… Então, separou. Eu acredito que pra conscientizar é justamente fazendo esse trabalho que vocês estão fazendo, vocês vão mostrar para eles, né? Que a importância do desenvolvimento está toda aqui.  E eu acho que é bom conscientizar os jovens, né? Que isso daqui teve uma melhoria muito grande. Quantas escolas abriram por causa da Acesita? Não era só Getúlio Vargas, né? O desenvolvimento aqui foi...como se diz? Pipocou, né? Que vocês falam. (Risadas). 

        </p>
    </div>
</div>
`

    const entrevista4= ` 
       <div class="space-y-6 pr-12 pl-12 mb-4">
    <div>
        <h4 class="font-semibold text-xl">Bromélias</h4>
    </div>
    <div>
        <p class="text-justify leading-relaxed ">
          	Moro aqui em torno de 50 anos. Minha mãe é a proprietária, meu pai faleceu recentemente, ele comprou a casa da Acesita na época, trabalhou lá 40 anos, na época que nasceu o bairro, Bromélias. Não passou por reforma, é original mesmo. Muito importante a história da casa, é uma história de vida né, nascemos e fomos criados aqui, meu pai e minha mãe chegaram a morar na rua de baixo mas eu não era nascido não e depois mudaram pra cá, não sei quanto tempo mas essa casa deve ter uns 50 anos mais ou menos. Eu lembro quando eu era criança, era piso vermelhão, fazia com xadrez, não tinha cerâmica. Era uma casa muito simples então, aquele vermelhão cimentado, passava o xadrez aí tinha vermelho, amarelo, verde, o nosso era vermelho, aí vinha e encerava, com a enceradeira que nem usa isso mais, passava cera pastosa. 

        </p>
        <p class="text-justify leading-relaxed ">
         Tenho uma noção mais ou menos sobre patrimônio histórico. Tem um patrimônio que recentemente foi vendido né, o hotel Acesita aqui, o restaurante, aí demoliu todo, agora é drogaria Araújo, então é um patrimônio que na época que eles venderam criou alguma polêmica pela população, mas quem tá vendendo é a família. Nós vivemos nisso aí, compra e venda, compra e venda, quem comprou poderia ter preservado? Sim, mas não era o objetivo, a drogaria Araújo é uma rede de drogaria famosa né, que montou a farmácia aí. A cidade vai mudando né, então por exemplo esse era um patrimônio histórico da cidade, o hotel Acesita. Isso é importante pela memória, mas conforme eu falei aí a memória foi apagada né, então não tem mais, aí fica as fotos. Funcionou ali muitos anos. 
         Ainda preserva lá, ainda bem, a fundação Aperam, que aquilo ali também é um patrimônio da cidade, que tá lá quietinho, que é da Aperam né então eles não vão mexer. Que eu me lembre assim, à princípio, tenho outra recordação que é o Carnaval. Eu era criança e o Carnaval vinha pessoal de fora, de Ipatinga, Fabriciano e cidades vizinhas. E isso foi se perdendo, provavelmente por falta de verba, talvez, creio que a prefeitura ajudava na época, eu era criança então não sei falar ao certo. Mas certamente, porque era atração, turismo, movimentava a cidade, na época não tinha muito hotel mas tinha alguma coisa. Vai mudando a configuração, aqui por exemplo a tendência é virar prédio. É natural, a população tá crescendo, e não tem lugar então tem que crescer pra cima. O terreiro por ali, cimentado, meu pai construiu uma casa lá nos fundos, de dois andares e a gente mora lá desde 97, esse terreiro é uma qualidade de vida que hoje está se perdendo. As crianças que nascem hoje é tudo dentro de apartamento, aquele cubículo igual uma caixa de fósforo, mas é a realidade né? Quando eu me casei em 2010 eu senti muita diferença, que morar em apartamento é loucura, quem não tem a experiência acha que é legal, eu achava que era legal, mas legal é isso aqui, espaço, sair pro terreiro, tomar um sol. Aí tem gente hoje em dia, por exemplo, pessoa mais velha que os filhos já casaram, um casal, tá lá, aí o filho já casou, mora fora, aí mora em uma casa e quer ir para um apartamento, “Aí que a casa é muito grande”, às vezes nunca morou né? Não tem a experiência, fica quietinho, eu falo isso, fica quieto. Aí vem o outro lado da moeda né, que a moeda tem a cara e a coroa, quem mora em casa fala que é grande, muita coisa pra arrumar, e realmente é mais, mas é muito melhor.

        </p>
    </div>
</div>
`
    const entrevista5 = `
          <div class="space-y-6 pr-12 pl-12 mb-4">
    <div>
        <h4 class="font-semibold text-xl">Bromélias</h4>
    </div>
    <div>
        <p class="text-justify leading-relaxed ">
          	Moro na casa há 7 anos. Não sou proprietário da casa, eu falo que eu sou um merecedor de ter essa casa, esse quintal, foi um desejo e ela aconteceu pra mim, apareceu essa casa, e eu cuido dela há 7 anos. Ela é alugada e os donos são uma construtora, o objetivo deles é construir um prédio, porém o plano diretor atual da cidade não permite uma construção tão grande, então eles esperam para ter essa oportunidade de fazer um projeto maior aqui. A primeira família a morar era a família de um engenheiro italiano que veio trabalhar na construção da Acesita, então a casa é da época de 60 para 70. O engenheiro se chamava Giovanni Moro. Eu acho que a fachada mesmo, ela conserva, o próprio símbolo da Acesita está gravado na frente, os triângulos invertidos. Então eu acredito que a fachada não passou por reformas, a única coisa foi o forro, que foi colocado um forro de PVC nela, no mais, a fachada continua, alpendre e o ladrilho também são originais, eu acredito. As telhas são telhas francesas e a madeira é muito antiga, então dá muito cupim. O peso do telhado também é uma coisa muito forte, então dá goteiras na casa, isso é uma dificuldade. Eu acredito que a história da casa é importante sim, mas acredito também na energia que eu trago para as casas que eu vou morar sempre, como eu estou aqui hoje, amanhã eu posso não estar então eu tenho certeza que qualquer lugar que eu for vai ter a minha energia, as minhas características vão estar implantadas na casa, então eu posso dar vida a qualquer ambiente em que eu estiver. E com certeza é importante para a cidade, hoje, atualmente então como esse espaço cultural de receber artistas, de trazer conhecimento de obras e de jardinagem e paisagismo, nesse contexto hoje, ela se torna mais importante do que só uma fachada, então com certeza é importantíssimo. Todos os acontecimentos nela são marcantes, a visita do Tizumba, as folias, os boi bumbás, as cantorias que a gente faz de rodas de violas, tudo isso é marcante pra mim em cada ocasião. Se não fosse por esse espaço, seria mais difícil realizar essas atividades, elas só acontecem por causa do espaço. Acaba sendo uma locação para vários artistas fazerem seus clipes, então com certeza.
        </p>
        <p class="text-justify leading-relaxed ">
         Patrimônio histórico pode ser material ou imaterial. Eu acredito que essa casa poderia facilmente ser tombada se os donos quisessem isso, como patrimônio é uma coisa que traga alguma referência para a cidade, o contexto da implementação siderúrgica, essa história de ter o símbolo da Acesita. Então tem essa importância o patrimônio material do espaço físico. Como uma casa de patrimônio material a gente recebe guardas de Congado, por exemplo,  que são patrimônios imateriais da cidade de Timóteo. A guarda de Congo de São Sebastião de Timóteo é uma parceira nossa, da casa, a gente faz estandartes da folia, do congado, e depois eles vem, tem a feijoada, a fogueira, tem o hasteamento da bandeira. Esse é o nosso patrimônio imaterial que está sendo preservado a partir dessa dinâmica da casa. A igreja eu acredito que já é um patrimônio né, a igreja de São José do Operário, a fundação Aperam é também. A gente perdeu a pouco tempo o hotel que era o restaurante Monte Alto, que foi demolido. Mas casas como essa, existem várias por aí, esse muro de cobogó, toda essa fachada é muito comum, é só reparar mais que você vai encontrar nessas fachadas. E o patrimônio é importante para deixar esse legado, deixar essas informações, isso é o patrimônio histórico, levar essas informações e não deixar isso guardado. O papel da siderúrgica com certeza é importante, mas nem sempre é benéfico. Acho que é uma questão de mais valia, de exploração do serviço e de concessão de áreas, o tanto de território que a indústria possui no nosso redor, nesse contexto de Timóteo, para expansão por exemplo, essas áreas poderiam ser mais bem estruturadas. E aí fica em uma coisa meio de áreas de preservação ambientais que são importantíssimas, aí eles plantam eucalipto, que é uma coisa que prejudica, aqui por exemplo os cupins, aqui atrás tem uma mata de eucalipto da Aperam, então essa preservação não é a preservação que a gente quer. Agora financeiramente para o desenvolvimento da cidade a aperam é super rentável. 
        </p>
         <p class="text-justify leading-relaxed ">
         O patrimônio não está sendo preservado, de forma alguma. Os únicos bens que são realmente preservados é a Igrejinha de São José e a fundação Aperam, no mais nenhum dos outros bens tem algum incentivo ou alguma coisa para se preservar. Por exemplo, o Quintal Café com Arte, é uma fachada que está sendo preservada, e de uma forma muito elegante e consciente de ser, então mais iniciativas como essa deveriam ser tomadas. A conscientização pode vir participando, convivendo com esse tipo de estruturas, então estou citando mais uma vez o Quintal Café com Arte, porque é um lugar que você pode ver a beleza na arquitetura daquela forma que era na década de 60, 70, e mesmo assim enxergar o belo da coisa, o olhar estético da coisa.

          </p>
    </div>
</div>
     
    `



    const entrevista6 = `
    <div class="space-y-6 pr-12 pl-12 mb-4">
        <div>
            <h4 class="font-semibold text-xl">Vila dos Técnicos</h4>
        </div>
        <div>
            <p class="text-justify leading-relaxed ">
                    
                Trabalho aqui tem 6 anos. Não sou proprietário, também não sei quem foi o primeiro morador. A casa é original, não passou por intervenção. Já sabia que a casa é da Aperam, é, da Acesita antigamente. A história dela com certeza é importante, meu pai aposentou lá na Aperam. Top demais pra cidade também, eu tenho uma aqui embaixo, nessa mesma rua, lá desde novo eu moro. Acontecimentos aqui que eu lembro não. Mas toda minha família cresceu aí, na minha casa, todo mundo, 50 anos aí.

            </p>
            <p class="text-justify leading-relaxed ">
                Não entendo sobre patrimônio. Mas sei que do Aperam aqui tem um, essa Maria Fumaça ali, ali é top. Diz que a casa é patrimônio né, o pessoal fala mesmo um negócio assim, isso aí é antigo. Eu acho que eles vão vender isso tudo, a minha mesmo eu não vou vender não, minha família foi criada lá, todo mundo.

            </p>
        </div>
    </div>

`

const entrevista7 = `
<div class="space-y-6 pr-12 pl-12 mb-4">
    <div>
        <h4 class="font-semibold text-xl">Vila dos Técnicos</h4>
    </div>
    <div>
        <p class="text-justify leading-relaxed ">
                
            Moro aqui desde que eu nasci, 33 anos. , somos proprietários. Meu pai morou aqui antes, foi uma república de recém contratados da Acesita. Essa república, não sei quanto tempo depois, ela se desfez, porque cada um comprou uma casa, e meu pai que ficou com a república. Passou por reforma, essa parte da garagem foi adicionada. Talvez essa parte das janelas, eu não sei se é padrão essas janelas. Fácil de cuidar não é não, porque casa diferente de apartamento dá um trabalho. Jardim, a gente tem animal aqui aí tem uns três cachorros e os cachorros fazem muita bagunça, aí dá um trabalhinho. Eu acho bem legal a história da casa, acho que tem importância. Morei aqui esses 33 anos, mas aconteceu muita coisa legal, minha infância.

        </p>
        <p class="text-justify leading-relaxed ">
            Entendo um pouco de patrimônio histórico. Eu acho que tem na parte nova e tem a parte antiga. Na parte nova a praça ali tem algumas coisas. A parte antiga não sei se a prefeitura, que eu não conheço lá muito bem, eu acho que mais isso. Eu acho que as casas antigas igual vocês estão falando entra também. Acho legal ficar registrado, muita gente que tem interesse pela história, de saber como tudo chegou ao ponto que é hoje. Acho que vale a pena. Sabia sim que é da época da Acesita. Acho difícil dizer se está sendo o patrimônio histórico está sendo preservado em Timóteo, mas eu acho que não e ao mesmo tempo sim. Acho que entra o conceito de propriedade privada porque muitos desses patrimônios estão na mão de indivíduos, famílias, e que cabe a cada um deles preservar, a maioria. Tem gente que prefere mudar completamente, tem gente que prefere manter, tem gente que reforma mas mantendo os traços antigos. Eu acho que para aprenderem sobre depende do interesse, porque muita gente às vezes não tem interesse por história, por saber como as coisas chegaram ao estado atual. Eu acho que depende disso, porque não dá para forçar muito o interesse das pessoas, as pessoas têm que ter esse interesse genuíno. Às vezes incentivando quem entende desse assunto a falar mais sobre, porque eu acho que botando em evidência, quem às vezes não sabe que gosta disso vai acabar se descobrindo e a coisa vai andando.

        </p>
    </div>
</div>

`

const entrevista8 = `
<div class="space-y-6 pr-12 pl-12 mb-4">
    <div>
        <h4 class="font-semibold text-xl">Quitandinha</h4>
    </div>
    <div>
        <p class="text-justify leading-relaxed ">
                
            Moro há mais de 50 anos aqui. Sou proprietária sim, foi do meu pai né, trabalhava na Aperam, antiga Acesita né, a maioria do pessoal aqui, da cidade, adquiriu pela Acesita. Foi só o telhado que teve reforma, as janelas continuam a mesma, adicionou só uma varandinha aqui só. Tem dificuldade pra cuidar, pelo fato com o fundo de eucalipto, dá muito cupim. É muito importante a história da casa pra mim, meu pai que adquiriu, criou todo mundo aqui, nós somos 5 irmãos, todos foram criados aqui, nascemos aqui, e além de tudo é um bairro muito bom, tranquilo. Muito importante para a cidade também, porque a maioria, se hoje nós temos casa, foi por causa da Aperam né, porque a maioria vieram trabalhar pra Aperam e ficaram aqui, criaram raízes e constituíram família, tudo é isso.

        </p>
        <p class="text-justify leading-relaxed ">
           
            Entendo mais ou menos sobre patrimônio histórico. Aqui tem a praça, alguns monumentos que tem na praça, a igreja, não pode esquecer né. A siderúrgica foi muito importante, a maioria, nós dependíamos muito da siderúrgica. No entanto tinha um apito, não sei se já ouviram falar, que era da Acesita, ele apita 6 horas, 11 horas, aí todo mundo se orientava por ele, então dava mais ou menos a hora do almoço, apita “Ó tá na hora do almoço”, todo mundo, e 11 horas da noite também, não ficava ninguém na rua, então assim, é até interessante isso. E dependíamos tudo, praticamente tudo dependia da usina, da siderúrgica, tinha o armazém, que hoje é a Consul né, antes Associa, então todos os funcionários compravam lá. A siderúrgica foi uma mãe, tinha plano de saúde, hospital. A maioria das pessoas valoriza o patrimônio sim, outros por não conhecer né, falta de conhecimento. Iam valorizar mais se conhecessem, eu acho que assim, as escolas fazendo um turismo na própria cidade para conhecer isso e estar sempre divulgando né, divulgando pra mídia, “Vamos conhecer tal lugar”. No entanto a gente costuma morar no lugar e não conhecer, tem tanto lugar bonito, igual o Parque Florestal mesmo, a lagoa aqui do parque mesmo. Por exemplo a ponte queimada, não sei se estão reestruturando, mas foi uma questão histórica, tem outras coisas também mas agora não estou lembrando muito.

        </p>
    </div>
</div>

`

const entrevista9 = `
<div class="space-y-6 pr-12 pl-12 mb-4">
    <div>
        <h4 class="font-semibold text-xl">Quitandinha</h4>
    </div>
    <div>
        <p class="text-justify leading-relaxed ">
                
           Moro aqui há 64 anos, por enquanto sou proprietário. Veio de pai né, pai trabalhava na companhia, comprou a casa, ele faleceu né e ficou pros filhos. Não teve reforma, nunca mexeu nela não. Tem dificuldade porque negócio de herdeiro né, alguns quer que mexe, outros quer vender, outros não quer, aí fica naquela novela. Pra mim, não é porque eu tô morando aqui não, reformava. aumentava, e alugava e tal, mas não quer (os irmãos), então, tem que deixar do jeito que a maioria quer né. É ué, a companhia que construiu essas casas tudo aí, pra mim é importante né, que eu fui nascido e criado aqui, pra mim é tudo.

        </p>
        <p class="text-justify leading-relaxed ">
           
            Não sei sobre patrimônio histórico. Se eu falar com você a verdade eu nem sei onde tem lugar turístico, eu só fico viajando e trabalhando, agora cheguei mas pra você ver eu vou ter que voltar daqui a pouco. Não tem tempo pra nada. Ter tem né, só que eu nunca participei de nada, não tenho tempo pra nada, é chegar e sair, chegar e sair. E tá sendo preservado, não dá pra resolver tudo de uma vez que a gente precisa, mas vai devagarinho né. Tem muito significado a siderúrgica ué, que sem ela a cidade não é nada, depende dela né. 

        </p>
    </div>
</div>

`

const entrevista10 = `
<div class="space-y-6 pr-12 pl-12 mb-4">
    <div>
        <h4 class="font-semibold text-xl">Quitandinha</h4>
    </div>
    <div>
        <p class="text-justify leading-relaxed ">
                
          Moro na casa há vinte anos, proprietária. O dono anterior foi Vicente Bibiano, não sei quanta história tem, só sei o nome dele. Vicente Bibiano. De reforma foi o que eles fizeram já, né? A casa trocou janela, era uma porta na frente da casa. O fundo mandou, não tinha assim... Nós tiramos o barracão. Pra mim é importante a história, né? Sabe, já tem 20 anos aqui, praticamente criei meus filhos aqui, entendeu? O pequeno veio pra cá, tava pequeno. Tava com 7 anos. Eu acho que tem sim importância para a cidade, mas é valor sentimental, né? O pessoal hoje não dá valor, se não for valor sentimental, histórico mesmo, o pessoal não se importa. Tem importância, mas pro pessoal mais antigo, esse pessoal mais novo não pensa assim. É da época da implantação, tanto que ela não tem nem coluna. Foi batido de baixo acima com tijolinho refratado, aquele tijolo caipira, ela tem coluna daqui pra trás que nós mexemos, né? Mas dessa porta pra dentro é original, dá pra perceber. A cidade cresceu. Quando era estatizada, tudo que poderia fazer para o desenvolvimento da comunidade, ela fez.  Era orgulho para os meus irmãos, para os meus pais, como o meu pai aposentou na Acesita, meu sogro aposentou na Acesita. Então, era orgulho de ter um filho fichado na Acesita antigamente. Hoje, não faz muita questão. Na época em que a Acesita era estatizada, ela ajudou muito a comunidade a crescer, a cidade em si, a Acesita. Tanto que quando o hospital era da Acesita, ninguém pagava nada. Chegava lá, consultava, era atendido. Era como se fosse público. 

        </p>
        <p class="text-justify leading-relaxed ">
           
           A casa, pra mim, igual essa aqui, não tem como julgar como patrimônio histórico. Porque ela passou por uma família, já passou por outra. Amanhã ou depois, se eu resolver vender, ela vai passar por outra família. Então, não tem como. Eu acho que patrimônio histórico é uma coisa que marca a cidade. Nós temos o Forno Hoffman do Novo Horizonte, que está jogado as traças, faz dó. Infelizmente, né? Tem a Igreja da Praça. Tínhamos o Hotel Acesita que foi jogado no chão, que também poderia ser dado como patrimônio histórico. E a Fundação Acesita, que hoje é a Fundação Aperam. E tem as casas antigas, as primeiras casas da Vila dos Técnicos. Também tem algumas coisas lá que é mantendo o mesmo estilo.Hoje está tão difícil isso. Porque essa juventude não quer saber de muita história, não. O negócio deles é na internet, que lá gente consegue chamar a atenção dos jovens, dessa turma. É contando as histórias mesmo, você entendeu? Porque se eu te perguntar a um aluno hoje que está estudando, fazendo de 1ª, 4ª série, ou de 5ª, 8ª série, como que surgiu a Acesita? Como que surgiu Timóteo? Muitos não sabe, não sabe responder. Eles não entram tão em detalhe, como antigamente a gente fazia trabalho de escola, fazia pesquisa, entrevistava as pessoas. Hoje não, manda fazer uma pesquisa lá,  faz com o que tem na internet, cola, copia, põe na boca, é por isso mesmo.
        
        </p>
    </div>
</div>

`


const entrevista11 = `
<div class="space-y-6 pr-12 pl-12 mb-4">
    <div>
        <h4 class="font-semibold text-xl">Olaria</h4>
    </div>
    <div>
        <p class="text-justify leading-relaxed ">
                
          Moro aqui desde 2018, somos netos do dono, ele foi o primeiro morador em 1930 alguma coisa, morou aqui 82 anos. Só passou por pintura, meu vô comprou o lote e foi ele que fez a casa, então não teve reforma não só pintura mesmo que ele dava. Cê tá doido, dá vontade de chorar, isso aqui é patrimônio, isso aqui não tem preço. Isso aqui é a casa do vô, da vó, família, né. São quatro irmãos, aqui é o encontro, aqui não tem preço pra gente. São muitos acontecimentos, aniversário dele, festa, nascimento de neto, muita coisa né.

        </p>
        <p class="text-justify leading-relaxed ">
           
          Pra ser sincero com você, eu saio pouco aqui, se fosse pra apreciar alguma construção na parte de arquitetura, a igreja do Timirim eu acho muito bacana, muito bonita sabe, muito bem feita. Na nossa época tinha era o Zé Izidio, onde é o espaço Alecrim aqui no final da avenida, lá era o Zé Izidio onde tinha uma biquinha, a gente ia pra lá, isso aí que era nossa infância. Tem assim, a parte negativa, o Alfa, tinha um clube muito bacana ali, que acabou. Era pra ter mais né papel a siderúrgica, teve muito agora, como privatizou, eu mesmo trabalhei lá 17 anos, de 97 a 2014 eu trabalhei na Aperam, aí eu fui pra outra Acelor. Outra coisa também, aquele museu deles lá né, fundação muito bacana no natal ali. Mas eu acho que timóteo poderia ter muito mais coisa. Se for olhar a cidade, a maioria é mais antigo, e muita gente não valoriza isso aí.
       
        </p>

        <p class="text-justify leading-relaxed ">
           
          Uma coisa que eu acho bacana culturalmente falando aqui em Timóteo é o seguinte, o pessoal do Olaria gosta do Olaria, o pessoal do Timirim é Timirim, eles são fanático. Eu falo assim, a gente procura, por exemplo, eu não saio daqui pra ir no Timirim comprar um, eu vou ali, eu vou no depósito daqui. Entendeu, eu procuro ajudar as pessoas daqui, como eu tenho certeza que nós vamos fazer um projeto aqui e eles vão ajudar a gente também. Pra conscientizar é mais conversando mesmo, principalmente com os idosos, que tem valor né? Porque hoje, por exemplo, pessoas, não todos, eu tenho filha tá, de 21 anos, essa faixa etária, 25 anos pra baixo, não estão preocupadas com nada não, assim, no geral né. No geral, eu vejo eles muito egoístas, eles não estão nem aí pro passado, talvez por causa da idade também, talvez eu era assim também quando eu tinha essa idade, entendeu? Não estou julgando, a pessoa começa a dar valor depois dos 30, depois que amadurece mais, esse negócio de raiz, essas coisas. Falta a geração mais jovem querer absorver esse conhecimento, a geração jovem não quer saber disso, depois de velho que comecei a dar valor pra essas coisas né, nós temos muita coisa bacana aqui, não precisa de ir longe.

        </p>
    </div>
</div>

`

const entrevista12 = `
<div class="space-y-6 pr-12 pl-12 mb-4">
    <div>
        <h4 class="font-semibold text-xl">Olaria</h4>
    </div>
    <div>
        <p class="text-justify leading-relaxed ">
                
          Ai, quer ver ó, eu moro aqui, eu já frequento aqui desde menino, uma base de 60 anos. A minha irmã é a proprietária, a casa agora tá repartida por dois filhos, aqui nós tem direito de morar enquanto viver. Não fui o primeiro morador não, não sei, nessa época nós morava na Garapinha. Ah é, a primeira reforma foi nossa, o telhado era o mesmo ainda, o ripamento, os cabo tava tudo podre. É, 1 reforma. Lá atrás aumentou um cômodo, que o tamanho é menos, o tamanho é o tamanho daquela da esquina lá, mais curta, essa do lado também já teve aumento, aquela mudou estilo, quase todas mudou, a nossa que tá. E aquelas ali também é antiga também, é menor do que a nossa, da esquina de cima. É boa demais da conta, 100%, moradia muito boa, sossego, vizinho, todo mundo amigo, é muito bom. Tem muita importância a casa né, tem porque, qualquer um que passa, eu já vi muita gente que passa e fala: “Ali ó. Essa daí é uma das casas antigas”, muita gente quer comprar a casa. A gente sente com a demolição né, é igual aquele forno antigo do Olaria, aquele é um, que era pra ser um patrimônio muito bem cuidado e não é, tá todo cheio de buraco, cheio de mato.

        </p>
        <p class="text-justify leading-relaxed ">
           
          A Acesita que construiu, essa época eu tava novo ainda e morava na Garapinha, a gente via, todos os funcionários era empregado, fixado diretamente na Acesita, não era empreiteira não. Têm lugar antigo e preservado aquela casa lá que eles faz teatro, que também é a Acesita que construiu, ali é lugar antigo. E esse grupo, esse lugar de estudante aí, esse grupo chama Carlos Drummond de Andrade, construiu na época da Acesita, o grupo Getúlio Vargas no Funcionários, muita coisa antiga. É muito importante isso, toda vida foi, inclusive ali, eu cheguei a estudar à noite, eu trabalhava na companhia Acesita e estudava à noite ali, eu trabalhava de três horários, 7 às 15, 15 às 23 e 0 horas. Aí todo horário dava pra eu estudar ali. Deveriam aprender mais sobre história mas não quer. Hoje as ideias de vocês, com a licença da palavra, não é igual a nossa mais. Na nossa época de estudo, a gente não tinha isso de celular, tudo fazia, a conta fazia na cabeça, no lápis.
        
        </p>
    </div>
</div>

`

const entrevista13 = `
<div class="space-y-6 pr-12 pl-12 mb-4">
    <div>
        <h4 class="font-semibold text-xl">Timirim</h4>
    </div>
    <div>
        <p class="text-justify leading-relaxed ">
                
         Moro há 20 anos nessa casa. A gente morava na casa do lado aqui por 3 anos e depois a gente mudou pra cá. Foram os meus avós que compraram aqui, já são falecidos, tem mais de 10 anos. Aqui foi o lugar onde os meus pais cresceram, meu pai na verdade, a família dele. Os meus avós moravam em um vilarejo chamado Mata do Garajau, próximo de Guanhães, e compraram essa casa justamente pros filhos poderem estudar aqui na cidade, então quando eles atingiam cerca de 7, 8 anos, eles vinham pra cá, e nos quatro quartos moravam 11 irmãos. Meus avós continuavam lá na fazenda, e os meus tios vieram pra cá, depois construíram suas casas. A história daqui tem muita importância para a cidade, traz a história da sociedade mesmo, um aspecto antropológico, sociológico.

        </p>
        <p class="text-justify leading-relaxed ">
           
          
            Entendo sobre a importância do patrimônio ser preservado né, não muitas coisas sobre isso. Conheço a fundação Aperam, né, difícil pensar assim, igreja aqui do alto do Timirim, né, também, acredito que as igrejas, igual aquela Igreja Católica do Centro também. Não sabia que era da época da implantação da siderúrgica, mas a cidade de Timóteo é basicamente por base da siderúrgica né, assim os bairros mesmo. Acho que a comunidade não valoriza o patrimônio histórico, assim, é muito difícil as pessoas trazerem essa história da própria siderúrgica, às vezes trazem no sentido de trabalhavam, mas não pelo quesito casa, quesito bairro, quesito comunidade, é muito difícil, os vizinhos, a família também perceberem nesse sentido. O senso de comunidade foi se perdendo, com certeza. À medida que foi aumentando né, a internet, o acesso ao externo as pessoas não ficaram tanto, com um senso de comunidade mesmo, construir a comunidade. As pessoas podem se conscientizar fazendo esse trabalho que vocês estão fazendo! Levando as pessoas a refletir as origem e ver porque é importante olhar pras origens, e cuidar delas, de preservar os patrimônios. Porque contam histórias, eu achei muito bacana que vocês falaram, porque realmente essa casa conta a história de muitas famílias que se construíram aqui dentro, de relações que deram aqui dentro, justamente por causa da usina, então era por causa do trabalho dos meus tios mais velhos, eles vinham pra trabalhar, já os meus tios mais novos ficavam por conta de estudar, as minhas tias estudavam no colégio Angélica, depois no Monsenhor Rafael. Então a siderúrgica proporcionou para os funcionários, um crescimento populacional e também no sentido de comunidade, que às vezes é apagado e esquecido aqui. então esse trabalho de perguntas, de valorização de memória é muito importante para isso.

        </p>
    </div>
</div>

`

const entrevista14 = `
<div class="space-y-6 pr-12 pl-12 mb-4">
    <div>
        <h4 class="font-semibold text-xl">Timirim</h4>
    </div>
    <div>
        <p class="text-justify leading-relaxed ">
                
        Ai meu Deus, nossa mãe, nem calculo quanto tempo moro aqui. Deixa eu ver, se meu pai vai fazer 103 anos, minha mãe 93… Ai eu acho que mais de 60 anos, muito mais, foi logo no começo, que meu pai trabalhava na Acesita, naquele tempo ganhava né. Naquele tempo a companhia dava a casa. Nasci em Timotinha, antiga ali perto do Senai. Tinha aquelas casas de madeira lá em Timontinha. Aí morei primeiro lá em cima no Timirim lá, no Monsenhor Rafael, a primeira casa da esquina, aí de lá eles deram meu pai, mandaram meu pai escolher, aí viemos pra cá. A casa aumentou assim, fez uma copa né, os quartos continuam, os mesmos três quartos, sala, cozinha. A casa é importante né, porque, quantos anos né, marcante aqui foi a perda dos meus pais.
        
        </p>
        <p class="text-justify leading-relaxed ">
           
        De patrimônio histórico acho que a Acesita mesmo né? Ela ajudou muito meu pai né, meu irmão. Acho que sim, na minha época, agora não sei porque tá diferente. É meio triste né as demolições dessas casas, quando nós mudamos pra aqui, esse lado aí era tudo mato, não tinha essas casas, aí depois fizeram aquela casa ali que era a república das enfermeiras, do hospital. Ah, não sei se todo mundo valoriza o patrimônio, isso aí é complicado de falar pelas pessoas. eu pra mim valorizo, mas pelas pessoas eu não sei. Ai meu Deus, como que eu vou dizer de aprender sobre, os adolescentes que estão vindo agora né, para saber como que está, como que foi.
        
        </p>
    </div>
</div>

`

// Função para tocar/pausar o áudio
function toggleMusic(index) {
    const audioElement = document.getElementById(`audio-${index}`);
    const musicIcon = document.getElementById(`music-icon-${index}`);
    const controlsContainer = document.getElementById(`audio-controls-${index}`);

    if (audioElement.paused) {
        // Toca o áudio e exibe os controles abaixo do botão
        audioElement.play();
        musicIcon.src = 'midia/volume.png';
        controlsContainer.classList.remove('hidden');
    } else {
        // Pausa o áudio e oculta os controles
        audioElement.pause();
        musicIcon.src = 'midia/mute.png';
        controlsContainer.classList.add('hidden');
    }
}



// Tornar a função globalmente acessível
window.toggleMusic = toggleMusic;





// Exemplo de depoimentos
export const depoimentos = [
    {
        bairro: "Funcionários ",
        texto: "A Igreja do Timirim, o Forno Hoffman, só que, eu tenho um pouquinho de entendimento de gestão pública, eu acho que as casas são o maior patrimônio histórico de uma cidade, porque são essas casas que contam as histórias das pessoas que fizeram a cidade. De dentro dessa casa aqui, nasceu, cresceu ...", 
        entrevista: entrevista1,
        endereço: "",
        desenho: "img/desenhos/2.jpg",
        audio: "midia/testemusic.mp3"
        
    },
    {
        bairro: "Funcionários",
        texto: " Eu moro aqui desde 1962, sou proprietária. Antes teve um morador, não sei quem foi, tem tantos anos, era seu Antônio mas não sei o sobrenome dele. Não passou por reforma, na fachada não, só limpeza e lá no fundo , acrescentou um anexo na garagem.  É muito grande e velha né ...",
        entrevista: entrevista2,
        endereço: "",
        desenho: "img/desenhos/3.jpg",
        audio: "midia/testemusic.mp3"
    },
    {
        bairro: "Funcionários",
        texto: "Que eu moro mesmo? Eu estive fora aqui uns anos… uns oito anos fora. Então, você vai somar aí, subtrair… já tem uns 60 anos que eu moro aqui, eu já tenho 70. Sou proprietário. Meus pais foram os primeiros donos, ficaram mais de 70 anos. Ele é dentista, ele veio para trabalhar ...",
        entrevista: entrevista3,
        endereço: "",
        desenho: "img/desenhos/4.jpg",
        audio: "midia/testemusic.mp3"
    },
    {
        bairro: "Bromélias",
        texto: "Moro aqui em torno de 50 anos. Minha mãe é a proprietária, meu pai faleceu recentemente, ele comprou a casa da Acesita na época, trabalhou lá 40 anos, na época que nasceu o bairro, Bromélias. Não passou por reforma, é original mesmo. Muito importante a história da casa, é uma ...",
        entrevista: entrevista4,
        endereço: "",
        desenho: "img/desenhos/Bromelias/11.jpg",
        audio: "midia/testemusic.mp3"
    },

    {
        bairro: "Bromélias ",
        texto: "Moro na casa há 7 anos. Não sou proprietário da casa, eu falo que eu sou um merecedor de ter essa casa, esse quintal, foi um desejo e ela aconteceu pra mim, apareceu essa casa, e eu cuido dela há 7 anos. Ela é alugada e os donos são uma construtora, o objetivo deles é construir um  ...",
        entrevista: entrevista5,
        endereço: "",
        desenho: "img/desenhos/Bromelias/0.jpg",
        audio: "midia/testemusic.mp3"
    },

    {
        bairro: "Vila dos Técnicos ",
        texto: "Trabalho aqui tem 6 anos. Não sou proprietário, também não sei quem foi o primeiro morador. A casa é original, não passou por intervenção. Já sabia que a casa é da Aperam, é, da Acesita antigamente. A história dela com certeza é importante, meu pai aposentou lá na Aperam. Top demais ...",
        entrevista: entrevista6,
        endereço: "",
        desenho: "img/desenhos/tecnicos/11.jpg",
        audio: "midia/testemusic.mp3"
    },

    {
        bairro: "Vila dos Técnicos ",
        texto: "Moro aqui desde que eu nasci, 33 anos. , somos proprietários. Meu pai morou aqui antes, foi uma república de recém contratados da Acesita. Essa república, não sei quanto tempo depois, ela se desfez, porque cada um comprou uma casa, e meu pai que ficou com a república. Passou por ...",
        entrevista: entrevista7,
        endereço: "",
        desenho: "img/desenhos/7.jpg",
        audio: "midia/testemusic.mp3"
    },

    {
        bairro: "Quitandinha ",
        texto: "Moro há mais de 50 anos aqui. Sou proprietária sim, foi do meu pai né, trabalhava na Aperam, antiga Acesita né, a maioria do pessoal aqui, da cidade, adquiriu pela Acesita. Foi só o telhado que teve reforma, as janelas continuam a mesma, adicionou só uma varandinha aqui só ...",
        entrevista: entrevista8,
        endereço: "",
        desenho: "img/desenhos/Quintandinha/2.jpg",
        audio: "midia/testemusic.mp3"
    },

    {
        bairro: "Quitandinha ",
        texto: " Moro aqui há 64 anos, por enquanto sou proprietário. Veio de pai né, pai trabalhava na companhia, comprou a casa, ele faleceu né e ficou pros filhos. Não teve reforma, nunca mexeu nela não. Tem dificuldade porque negócio de herdeiro né, alguns quer que mexe, outros quer vender, outros não quer ...",
        entrevista: entrevista9,
        endereço: "",
        desenho: "img/desenhos/Quintandinha/24.jpg",
        audio: "midia/testemusic.mp3"
    },

    {
        bairro: "Quitandinha ",
        texto: "Moro na casa há vinte anos, proprietária. O dono anterior foi Vicente Bibiano, não sei quanta história tem, só sei o nome dele. Vicente Bibiano. De reforma foi o que eles fizeram já, né? A casa trocou janela, era uma porta na frente da casa. O fundo mandou, não tinha assim... Nós tiramos o barracão ...",
        entrevista: entrevista10,
        endereço: "",
        desenho: "img/desenhos/Quintandinha/15.jpg",
        audio: "midia/testemusic.mp3"
    },

    {
        bairro: "Olaria ",
        texto: "Moro aqui desde 2018, somos netos do dono, ele foi o primeiro morador em 1930 alguma coisa, morou aqui 82 anos. Só passou por pintura, meu vô comprou o lote e foi ele que fez a casa, então não teve reforma não só pintura mesmo que ele dava. Cê tá doido, dá vontade de chorar, isso aqui é patrimônio ...",
        entrevista: entrevista11,
        endereço: "",
        desenho: "img/desenhos/Olaria/0.jpg",
        audio: "midia/testemusic.mp3"
    },

    {
        bairro: "Olaria ",
        texto: "Ai, quer ver ó, eu moro aqui, eu já frequento aqui desde menino, uma base de 60 anos. A minha irmã é a proprietária, a casa agora tá repartida por dois filhos, aqui nós tem direito de morar enquanto viver. Não fui o primeiro morador não, não sei, nessa época nós morava na Garapinha. Ah é, a primeira reforma ...",
        entrevista: entrevista12,
        endereço: "",
        desenho: "img/desenhos/Olaria/155.jpg",
        audio: "midia/testemusic.mp3"
    },

    {
        bairro: "Timirim ",
        texto: " Moro há 20 anos nessa casa. A gente morava na casa do lado aqui por 3 anos e depois a gente mudou pra cá. Foram os meus avós que compraram aqui, já são falecidos, tem mais de 10 anos. Aqui foi o lugar onde os meus pais cresceram, meu pai na verdade, a família dele. Os meus avós moravam em um vilarejo chamado Mata do Garajau ...",
        entrevista: entrevista13,
        endereço: "",
        desenho: "img/desenhos/Timirim/25.jpg",
        audio: "midia/testemusic.mp3"
    },

    {
        bairro: "Timirim ",
        texto: "Ai meu Deus, nossa mãe, nem calculo quanto tempo moro aqui. Deixa eu ver, se meu pai vai fazer 103 anos, minha mãe 93… Ai eu acho que mais de 60 anos, muito mais, foi logo no começo, que meu pai trabalhava na Acesita, naquele tempo ganhava né. Naquele tempo a companhia dava a casa. Nasci em Timotinha, antiga ali perto do Senai ...",
        entrevista: entrevista14,
        endereço: "",
        desenho: "img/desenhos/Timirim/38.jpg",
        audio: "midia/testemusic.mp3"
    },
];




