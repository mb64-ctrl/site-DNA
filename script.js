/* =====================================================
   VARIÁVEIS
===================================================== */

let paginaAtual = "inicio";

let paginaAnterior = "inicio";

let etapaAtual = 1;

const totalEtapas = 16;



/* =====================================================
   ELEMENTOS
===================================================== */

const inicio = document.getElementById("inicio");

const paginaDNA = document.getElementById("pagina-dna");

const paginaLaboratorio =
    document.getElementById("pagina-laboratorio");

const paginaExplorar =
    document.getElementById("pagina-explorar");

const leitor =
    document.getElementById("leitor-conteudo");

const conteudoEscolhido =
    document.getElementById("conteudo-escolhido");



/* =====================================================
   ABRIR UMA DAS 3 ÁREAS
===================================================== */

function abrirPagina(pagina) {

    inicio.style.display = "none";

    paginaDNA.style.display = "none";

    paginaLaboratorio.style.display = "none";

    paginaExplorar.style.display = "none";

    leitor.style.display = "none";


    if (pagina === "dna") {

        paginaDNA.style.display = "block";

        paginaAtual = "dna";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        atualizarEtapa();

    }


    if (pagina === "laboratorio") {

        paginaLaboratorio.style.display = "block";

        paginaAtual = "laboratorio";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    if (pagina === "explorar") {

        paginaExplorar.style.display = "block";

        paginaAtual = "explorar";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}



/* =====================================================
   VOLTAR PARA O INÍCIO
===================================================== */

function voltarInicio() {

    inicio.style.display = "block";

    paginaDNA.style.display = "none";

    paginaLaboratorio.style.display = "none";

    paginaExplorar.style.display = "none";

    leitor.style.display = "none";

    paginaAtual = "inicio";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



/* =====================================================
   ABRIR CONTEÚDO DE LABORATÓRIO / EXPLORAR
===================================================== */

function abrirConteudo(id, origem) {

    /*
        Guardamos de onde o usuário veio.

        Se veio do Laboratório, ao apertar voltar,
        retorna ao Laboratório.

        Se veio do Explorar, retorna ao Explorar.
    */

    paginaAnterior = origem;

    paginaAtual = "leitor";


    inicio.style.display = "none";

    paginaDNA.style.display = "none";

    paginaLaboratorio.style.display = "none";

    paginaExplorar.style.display = "none";

    leitor.style.display = "block";


    conteudoEscolhido.innerHTML =
        conteudos[id] || "<h2>Conteúdo não encontrado.</h2>";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



/* =====================================================
   FECHAR CONTEÚDO
===================================================== */

function fecharConteudo() {

    leitor.style.display = "none";


    /*
        O usuário volta exatamente para a área
        de onde abriu o conteúdo.
    */

    if (paginaAnterior === "laboratorio") {

        paginaLaboratorio.style.display = "block";

        paginaAtual = "laboratorio";

    }


    else if (paginaAnterior === "explorar") {

        paginaExplorar.style.display = "block";

        paginaAtual = "explorar";

    }


    else if (paginaAnterior === "dna") {

        paginaDNA.style.display = "block";

        paginaAtual = "dna";

        atualizarEtapa();

    }


    else {

        inicio.style.display = "block";

        paginaAtual = "inicio";

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



/* =====================================================
   NAVEGAÇÃO DO DNA
===================================================== */

function atualizarEtapa() {

    const etapas =
        document.querySelectorAll(".etapa-dna");


    etapas.forEach((etapa, index) => {

        etapa.classList.remove("ativa");

        if (index === etapaAtual - 1) {

            etapa.classList.add("ativa");

        }

    });


    const textoEtapa =
        document.getElementById("etapa-atual");

    const porcentagem =
        document.getElementById("porcentagem");

    const barra =
        document.getElementById("barra-progresso");


    textoEtapa.textContent =
        `Etapa ${etapaAtual} de ${totalEtapas}`;


    const porcentagemCalculada =
        Math.round(
            (etapaAtual / totalEtapas) * 100
        );


    porcentagem.textContent =
        `${porcentagemCalculada}%`;


    barra.style.width =
        `${porcentagemCalculada}%`;


    const botaoAnterior =
        document.getElementById("botao-anterior");

    const botaoProximo =
        document.getElementById("botao-proximo");


    botaoAnterior.disabled =
        etapaAtual === 1;


    if (etapaAtual === totalEtapas) {

        botaoProximo.textContent =
            "Finalizado ✓";

        botaoProximo.disabled = true;

    }

    else {

        botaoProximo.textContent =
            "Próximo →";

        botaoProximo.disabled = false;

    }

}



/* =====================================================
   PRÓXIMA ETAPA
===================================================== */

function proximaEtapa() {

    if (etapaAtual < totalEtapas) {

        etapaAtual++;

        atualizarEtapa();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}



/* =====================================================
   ETAPA ANTERIOR
===================================================== */

function etapaAnterior() {

    if (etapaAtual > 1) {

        etapaAtual--;

        atualizarEtapa();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}



/* =====================================================
   CONTEÚDOS DO LABORATÓRIO
===================================================== */

const conteudos = {


    /* =================================================
       LABORATÓRIO 1
    ================================================= */

    lab1: `

        <span class="mini-titulo">
            LABORATÓRIO • EXPERIMENTO 01
        </span>

        <h2>
            🍓 Extração de DNA do morango
        </h2>

        <p>
            Este é um dos experimentos escolares mais conhecidos
            para demonstrar que o DNA está presente nas células
            dos seres vivos.
        </p>


        <h3>
            🔬 O que vamos observar?
        </h3>

        <p>
            O objetivo é conseguir separar e concentrar parte
            do material celular do morango até que o DNA possa
            ser observado como uma substância esbranquiçada
            ou filamentosa.
        </p>


        <h3>
            🧰 Materiais
        </h3>

        <div class="materiais">

            <div>🍓 Morangos</div>
            <div>🧂 Sal</div>
            <div>🧪 Detergente</div>
            <div>💧 Água</div>
            <div>🥃 Álcool gelado</div>
            <div>🥛 Copo ou recipiente</div>
            <div>🧻 Filtro de café</div>
            <div>🥄 Colher</div>

        </div>


        <h3>
            🧪 Como fazer
        </h3>


        <div class="passo">
            <span class="passo-numero">1</span>
            <p>
                Amasse os morangos em um recipiente até formar
                uma mistura relativamente homogênea.
            </p>
        </div>


        <div class="passo">
            <span class="passo-numero">2</span>
            <p>
                Prepare uma solução com água, uma pequena
                quantidade de sal e detergente.
            </p>
        </div>


        <div class="passo">
            <span class="passo-numero">3</span>
            <p>
                Misture cuidadosamente essa solução ao
                morango amassado. O detergente ajuda a romper
                as membranas celulares.
            </p>
        </div>


        <div class="passo">
            <span class="passo-numero">4</span>
            <p>
                Filtre a mistura para retirar os pedaços
                maiores de tecido vegetal.
            </p>
        </div>


        <div class="passo">
            <span class="passo-numero">5</span>
            <p>
                Coloque cuidadosamente álcool gelado sobre
                o líquido filtrado, formando uma camada.
            </p>
        </div>


        <div class="passo">
            <span class="passo-numero">6</span>
            <p>
                Observe a região entre as duas camadas.
                Pode aparecer um material esbranquiçado
                e filamentoso.
            </p>
        </div>


        <h3>
            🧬 O que está acontecendo?
        </h3>

        <p>
            O detergente ajuda a romper as membranas celulares
            e as membranas de organelas. O sal contribui para
            condições que favorecem a agregação do DNA.
        </p>

        <p>
            Quando o álcool entra em contato com o extrato,
            o DNA apresenta baixa solubilidade nele e pode
            precipitar, tornando-se mais fácil de observar.
        </p>


        <div class="info-box">
            🧬 <strong>Resultado:</strong>
            o material branco observado é principalmente
            DNA precipitado, acompanhado por outros componentes
            celulares que podem permanecer na preparação.
        </div>

    `,



    /* =================================================
       LABORATÓRIO 2
    ================================================= */

    lab2: `

        <span class="mini-titulo">
            LABORATÓRIO • EXPERIMENTO 02
        </span>

        <h2>
            🧅 Extração de DNA da cebola
        </h2>

        <p>
            A cebola também pode ser utilizada em experiências
            escolares para demonstrar a presença de DNA nas
            células vegetais.
        </p>


        <h3>
            🧬 Por que utilizar cebola?
        </h3>

        <p>
            A cebola possui muitas células vegetais. Ao romper
            essas células e utilizar uma solução adequada,
            podemos liberar componentes celulares, incluindo
            o material genético.
        </p>


        <h3>
            🧰 Materiais
        </h3>

        <div class="materiais">

            <div>🧅 Cebola</div>
            <div>💧 Água</div>
            <div>🧂 Sal</div>
            <div>🧪 Detergente</div>
            <div>🥃 Álcool gelado</div>
            <div>🥛 Copo</div>
            <div>🧻 Filtro</div>

        </div>


        <h3>
            🧪 Como fazer
        </h3>


        <div class="passo">
            <span class="passo-numero">1</span>
            <p>
                Corte uma pequena quantidade de cebola em
                pedaços bem pequenos.
            </p>
        </div>


        <div class="passo">
            <span class="passo-numero">2</span>
            <p>
                Amasse ou triture os pedaços para romper
                parte das células.
            </p>
        </div>


        <div class="passo">
            <span class="passo-numero">3</span>
            <p>
                Adicione a solução de água, sal e detergente.
            </p>
        </div>


        <div class="passo">
            <span class="passo-numero">4</span>
            <p>
                Filtre a mistura para retirar os resíduos
                sólidos maiores.
            </p>
        </div>


        <div class="passo">
            <span class="passo-numero">5</span>
            <p>
                Adicione cuidadosamente álcool gelado
                sobre o filtrado.
            </p>
        </div>


        <div class="passo">
            <span class="passo-numero">6</span>
            <p>
                Observe se aparece material esbranquiçado
                na interface entre as camadas.
            </p>
        </div>


        <h3>
            🔬 Explicação científica
        </h3>

        <p>
            A etapa de rompimento celular libera o conteúdo
            das células. O detergente interfere nas membranas,
            enquanto o sal auxilia na preparação.
        </p>

        <p>
            O álcool gelado favorece a precipitação do DNA,
            fazendo com que ele possa ser visualizado mais
            facilmente.
        </p>

    `,



    /* =================================================
       LABORATÓRIO 3
    ================================================= */

    lab3: `

        <span class="mini-titulo">
            LABORATÓRIO • CONCEITO
        </span>

        <h2>
            🧪 Por que usamos detergente?
        </h2>

        <p>
            O detergente possui uma função muito importante
            em experiências simples de extração de DNA.
        </p>


        <h3>
            🧫 As membranas celulares
        </h3>

        <p>
            As células são envolvidas por membranas formadas
            principalmente por lipídios e proteínas.
            Essas membranas ajudam a controlar o que entra
            e sai da célula.
        </p>


        <p>
            Para conseguir estudar o DNA presente dentro
            da célula, primeiro precisamos liberar esse
            material.
        </p>


        <h3>
            🔬 O papel do detergente
        </h3>

        <p>
            O detergente interage com componentes lipídicos
            das membranas. Isso ajuda a romper as estruturas
            membranosas e liberar o conteúdo celular.
        </p>


        <div class="info-box">

            🧬 <strong>Em resumo:</strong>

            o detergente ajuda a abrir as "barreiras"
            que mantêm o conteúdo celular separado
            do ambiente.

        </div>


        <h3>
            🧠 Uma comparação
        </h3>

        <p>
            Imagine uma casa com várias portas e paredes.
            Se quisermos estudar o que existe dentro dela,
            primeiro precisamos conseguir entrar.
        </p>

        <p>
            Nas células, as membranas funcionam como
            algumas dessas barreiras. O detergente ajuda
            no processo de rompimento dessas estruturas.

        </p>

    `,



    /* =================================================
       LABORATÓRIO 4
    ================================================= */

    lab4: `

        <span class="mini-titulo">
            LABORATÓRIO • CONCEITO
        </span>

        <h2>
            🧂 Qual é a função do sal?
        </h2>

        <p>
            O sal também aparece em muitos protocolos simples
            de extração de DNA.
        </p>


        <h3>
            🔬 O que o sal faz?
        </h3>

        <p>
            O sal fornece íons que podem ajudar a reduzir
            algumas interações entre moléculas presentes
            no extrato e favorecer a agregação do DNA.
        </p>


        <p>
            Em protocolos escolares, o sal também ajuda
            a separar algumas proteínas e outros componentes
            celulares do material que queremos observar.
        </p>


        <h3>
            🧬 Por que isso é importante?
        </h3>

        <p>
            Quando fazemos uma extração, não estamos retirando
            apenas DNA. A célula possui proteínas, lipídios,
            açúcares, RNA e muitas outras moléculas.
        </p>

        <p>
            Por isso, cada etapa do experimento possui uma
            função específica para tentar concentrar e
            visualizar melhor o material genético.
        </p>


        <div class="info-box">

            🧂 <strong>Resumo:</strong>

            o sal ajuda a criar condições favoráveis
            para a separação e agregação do DNA no
            procedimento.

        </div>

    `,



    /* =================================================
       LABORATÓRIO 5
    ================================================= */

    lab5: `

        <span class="mini-titulo">
            LABORATÓRIO • CONCEITO
        </span>

        <h2>
            ❄️ Por que o álcool deve estar gelado?
        </h2>

        <p>
            O álcool possui um papel fundamental na etapa
            final de muitos experimentos escolares de
            extração de DNA.
        </p>


        <h3>
            🧬 O que acontece com o DNA?
        </h3>

        <p>
            O DNA apresenta baixa solubilidade em álcool,
            especialmente em determinadas condições.
            Quando o álcool é adicionado ao extrato,
            o DNA pode deixar de permanecer dissolvido.
        </p>


        <h3>
            ❄️ E por que gelado?
        </h3>

        <p>
            O uso do álcool frio ajuda a favorecer a
            precipitação do DNA e também pode diminuir
            a atividade de algumas enzimas que poderiam
            degradar o material genético.
        </p>


        <div class="info-box">

            🔬 <strong>Resultado:</strong>

            o DNA precipitado pode aparecer como uma
            substância branca, filamentosa ou semelhante
            a uma nuvem.

        </div>


        <h3>
            👀 O que estamos realmente vendo?
        </h3>

        <p>
            O material observado não é uma molécula de DNA
            individual. São muitas moléculas de DNA agrupadas,
            além de outros componentes que podem estar
            presentes no extrato.
        </p>

    `,



    /* =================================================
       LABORATÓRIO 6
    ================================================= */

    lab6: `

        <span class="mini-titulo">
            LABORATÓRIO • CIÊNCIA
        </span>

        <h2>
            🔬 DNA no laboratório científico
        </h2>

        <p>
            Nos laboratórios profissionais, os cientistas
            utilizam técnicas muito mais sofisticadas
            para estudar o DNA.
        </p>


        <h3>
            🧬 PCR
        </h3>

        <p>
            A PCR, ou reação em cadeia da polimerase,
            permite produzir muitas cópias de uma região
            específica de DNA.
        </p>


        <h3>
            ⚡ Eletroforese
        </h3>

        <p>
            A eletroforese em gel pode ser utilizada
            para separar fragmentos de DNA de acordo
            principalmente com seu tamanho e permitir
            sua análise.
        </p>


        <h3>
            🧪 Sequenciamento
        </h3>

        <p>
            O sequenciamento permite determinar a ordem
            das bases presentes em uma molécula ou região
            de DNA.
        </p>


        <h3>
            🔍 Microscopia e análise celular
        </h3>

        <p>
            Técnicas de microscopia e marcação molecular
            também podem ajudar pesquisadores a investigar
            onde determinados componentes estão localizados
            dentro das células.
        </p>


        <div class="info-box">

            🔬 A diferença entre o experimento escolar
            e o laboratório profissional está principalmente
            no nível de precisão, equipamentos, reagentes
            e métodos utilizados.

        </div>

    `,



    /* =================================================
       EXPLORAR 1
    ================================================= */

    exp1: `

        <span class="mini-titulo">
            EXPLORAR • GENÉTICA MOLECULAR
        </span>

        <h2>
            🧬 DNA × RNA
        </h2>

        <p>
            DNA e RNA são moléculas fundamentais para
            o funcionamento das células, mas possuem
            diferenças importantes em sua estrutura e função.
        </p>


        <h3>
            🧬 DNA
        </h3>

        <p>
            O DNA possui normalmente duas fitas formando
            uma dupla hélice. Seu açúcar é a desoxirribose
            e suas bases são adenina, timina, citosina
            e guanina.
        </p>


        <h3>
            🧪 RNA
        </h3>

        <p>
            O RNA geralmente é formado por uma única fita.
            Seu açúcar é a ribose e, em vez da timina,
            utiliza a base uracila.
        </p>


        <h3>
            📊 Principais diferenças
        </h3>

        <div class="materiais">

            <div>
                <strong>DNA</strong><br>
                Duas fitas normalmente
            </div>

            <div>
                <strong>RNA</strong><br>
                Uma fita normalmente
            </div>

            <div>
                <strong>DNA</strong><br>
                Desoxirribose
            </div>

            <div>
                <strong>RNA</strong><br>
                Ribose
            </div>

            <div>
                <strong>DNA</strong><br>
                Possui timina
            </div>

            <div>
                <strong>RNA</strong><br>
                Possui uracila
            </div>

        </div>


        <h3>
            🔬 Funções
        </h3>

        <p>
            O DNA é especialmente importante para o
            armazenamento e transmissão da informação
            genética.
        </p>

        <p>
            O RNA participa de diversos processos celulares,
            incluindo a expressão da informação genética
            e a produção de proteínas.
        </p>


        <div class="info-box">

            🧠 <strong>Resumo:</strong>

            DNA e RNA trabalham juntos em muitos processos
            celulares, mas não são a mesma molécula.

        </div>

    `,



    /* =================================================
       EXPLORAR 2
    ================================================= */

    exp2: `

        <span class="mini-titulo">
            EXPLORAR • GENÉTICA
        </span>

        <h2>
            🧪 Genética
        </h2>

        <p>
            A genética é a área da biologia que estuda
            a hereditariedade e a variação dos organismos.
        </p>


        <h3>
            🧬 Genes
        </h3>

        <p>
            Genes são regiões do DNA que contêm informações
            funcionais. Muitos genes participam da produção
            de proteínas ou de RNAs funcionais.
        </p>


        <h3>
            🔤 Alelos
        </h3>

        <p>
            Alelos são versões diferentes de um mesmo gene.
            Eles podem apresentar diferenças na sequência
            de DNA.
        </p>


        <h3>
            👨‍👩‍👧 Hereditariedade
        </h3>

        <p>
            A hereditariedade explica como características
            e informações genéticas podem ser transmitidas
            dos progenitores para os descendentes.
        </p>


        <h3>
            🌎 Genética e ambiente
        </h3>

        <p>
            Nem todas as características dependem apenas
            dos genes. Muitas características resultam
            da interação entre fatores genéticos e ambientais.
        </p>


        <div class="info-box">

            🧠 A genética moderna mostra que a relação
            entre genes e características pode ser muito
            mais complexa do que simplesmente "um gene
            para uma característica".

        </div>

    `,



    /* =================================================
       EXPLORAR 3
    ================================================= */

    exp3: `

        <span class="mini-titulo">
            EXPLORAR • HEREDITARIEDADE
        </span>

        <h2>
            👨‍👩‍👧 Hereditariedade
        </h2>

        <p>
            Hereditariedade é o processo pelo qual informações
            genéticas são transmitidas de uma geração
            para outra.
        </p>


        <h3>
            🧬 Cromossomos
        </h3>

        <p>
            Nos seres humanos, as células somáticas normalmente
            possuem 46 cromossomos, organizados em 23 pares.
        </p>


        <h3>
            🧫 Gametas
        </h3>

        <p>
            Óvulos e espermatozoides possuem normalmente
            23 cromossomos. Quando ocorre a fecundação,
            os conjuntos se unem.
        </p>


        <h3>
            🔄 Combinação genética
        </h3>

        <p>
            O descendente recebe material genético de
            ambos os progenitores. Essa combinação contribui
            para a diversidade genética.
        </p>


        <h3>
            🌎 Por que irmãos são diferentes?
        </h3>

        <p>
            Irmãos podem compartilhar muitos genes, mas
            recebem combinações genéticas diferentes.
            Além disso, fatores ambientais também podem
            influenciar características.
        </p>


        <div class="info-box">

            🧬 A hereditariedade é uma das razões pelas quais
            as características podem ser transmitidas entre
            gerações.

        </div>

    `,



    /* =================================================
       EXPLORAR 4
    ================================================= */

    exp4: `

        <span class="mini-titulo">
            EXPLORAR • BIOTECNOLOGIA
        </span>

        <h2>
            🧫 Biotecnologia
        </h2>

        <p>
            Biotecnologia é o uso de organismos, células,
            moléculas ou processos biológicos para desenvolver
            produtos e tecnologias.
        </p>


        <h3>
            🧬 Engenharia genética
        </h3>

        <p>
            Técnicas de engenharia genética permitem estudar
            e modificar material genético em determinadas
            situações científicas.
        </p>


        <h3>
            🌱 Agricultura
        </h3>

        <p>
            A biotecnologia pode ser utilizada para desenvolver
            variedades de plantas com características específicas,
            como resistência a determinadas condições.
        </p>


        <h3>
            💊 Medicina
        </h3>

        <p>
            A biotecnologia também participa da produção
            de medicamentos, vacinas, diagnósticos e outras
            ferramentas utilizadas na medicina.
        </p>


        <h3>
            🧪 Produção de substâncias
        </h3>

        <p>
            Microrganismos modificados ou selecionados podem
            ser utilizados para produzir determinadas substâncias
            de interesse industrial ou médico.
        </p>


        <div class="info-box">

            🔬 A biotecnologia conecta conhecimentos de
            genética, biologia molecular, microbiologia,
            química e diversas outras áreas.

        </div>

    `,



    /* =================================================
       EXPLORAR 5
    ================================================= */

    exp5: `

        <span class="mini-titulo">
            EXPLORAR • MEDICINA
        </span>

        <h2>
            💉 DNA e medicina
        </h2>

        <p>
            O estudo do DNA transformou diversas áreas
            da medicina e da pesquisa biomédica.
        </p>


        <h3>
            🔍 Diagnóstico genético
        </h3>

        <p>
            Algumas doenças possuem componentes genéticos.
            Análises do DNA podem ajudar profissionais
            a investigar determinadas alterações.
        </p>


        <h3>
            🧬 Medicina de precisão
        </h3>

        <p>
            Informações genéticas podem, em algumas situações,
            ajudar pesquisadores e médicos a compreender
            diferenças entre pessoas e doenças.
        </p>


        <h3>
            🧪 Pesquisa de doenças
        </h3>

        <p>
            Cientistas podem comparar sequências genéticas
            para estudar alterações relacionadas a determinadas
            condições.
        </p>


        <h3>
            💊 Desenvolvimento de tratamentos
        </h3>

        <p>
            O conhecimento molecular pode ajudar no desenvolvimento
            de medicamentos e outras estratégias terapêuticas.
        </p>


        <div class="info-box">

            ⚠️ Testes genéticos devem ser interpretados
            por profissionais qualificados. Ter uma alteração
            genética não significa necessariamente desenvolver
            uma doença.

        </div>

    `,



    /* =================================================
       EXPLORAR 6
    ================================================= */

    exp6: `

        <span class="mini-titulo">
            EXPLORAR • HISTÓRIA DA CIÊNCIA
        </span>

        <h2>
            🌎 Projeto Genoma Humano
        </h2>

        <p>
            O Projeto Genoma Humano foi uma grande iniciativa
            científica internacional destinada a mapear e
            determinar a sequência do DNA humano.
        </p>


        <h3>
            🎯 Objetivo
        </h3>

        <p>
            Um dos principais objetivos era produzir uma
            referência da sequência do genoma humano e
            identificar genes presentes no material genético.
        </p>


        <h3>
            🌎 Participação internacional
        </h3>

        <p>
            O projeto envolveu pesquisadores e instituições
            de diversos países.
        </p>


        <h3>
            🔬 Importância
        </h3>

        <p>
            O projeto ajudou a acelerar o desenvolvimento
            da genômica e criou uma enorme quantidade de
            dados que passou a ser utilizada por pesquisadores
            em diferentes áreas.
        </p>


        <h3>
            🚀 Consequências
        </h3>

        <p>
            O conhecimento obtido contribuiu para pesquisas
            sobre doenças, evolução, genética humana e
            desenvolvimento de novas tecnologias.
        </p>


        <div class="info-box">

            🧬 O Projeto Genoma Humano foi um marco histórico
            para a biologia molecular e para a genética.

        </div>

    `,



    /* =================================================
       EXPLORAR 7
    ================================================= */

    exp7: `

        <span class="mini-titulo">
            EXPLORAR • ANÁLISE GENÉTICA
        </span>

        <h2>
            🔍 Testes de DNA
        </h2>

        <p>
            Testes de DNA analisam determinadas regiões
            do material genético para responder perguntas
            específicas.
        </p>


        <h3>
            👨‍👩‍👧 Testes de parentesco
        </h3>

        <p>
            Comparações de determinadas regiões do DNA
            podem ser utilizadas para investigar relações
            biológicas entre pessoas.
        </p>


        <h3>
            🕵️ Identificação
        </h3>

        <p>
            Perfis genéticos podem ser utilizados em
            determinadas investigações científicas e
            forenses, seguindo procedimentos técnicos
            e legais.
        </p>


        <h3>
            🌎 Ancestralidade
        </h3>

        <p>
            Alguns testes comerciais analisam variantes
            genéticas e fazem estimativas sobre ancestralidade.
            Os resultados dependem das bases de dados utilizadas
            e devem ser interpretados com cuidado.
        </p>


        <h3>
            ⚠️ Privacidade
        </h3>

        <p>
            Dados genéticos são informações extremamente
            importantes. Por isso, é necessário prestar atenção
            às políticas de privacidade de empresas que
            realizam testes.
        </p>


        <div class="info-box">

            🔐 DNA contém informações biológicas.
            A proteção e o uso responsável desses dados
            são questões importantes na ciência moderna.

        </div>

    `,



    /* =================================================
       EXPLORAR 8
    ================================================= */

    exp8: `

        <span class="mini-titulo">
            EXPLORAR • CURIOSIDADES
        </span>

        <h2>
            🤯 Curiosidades sobre DNA
        </h2>


        <h3>
            🧬 1. O DNA é extremamente longo
        </h3>

        <p>
            Se o DNA presente em uma única célula humana
            fosse esticado, ele teria um comprimento muito
            maior do que o tamanho da própria célula.
            Ele consegue caber porque é organizado e compactado.
        </p>


        <h3>
            🧬 2. O DNA não está apenas no núcleo
        </h3>

        <p>
            Em células humanas, além do DNA nuclear, existe
            DNA nas mitocôndrias.
        </p>


        <h3>
            🧬 3. Existem apenas quatro bases principais
        </h3>

        <p>
            Adenina, timina, citosina e guanina são utilizadas
            para formar enormes sequências de informação genética.
        </p>


        <h3>
            🔬 4. O DNA pode ser estudado de várias maneiras
        </h3>

        <p>
            Cientistas utilizam PCR, sequenciamento,
            eletroforese, microscopia e diversas outras
            técnicas para estudar o material genético.
        </p>


        <h3>
            🌎 5. O DNA ajuda a estudar a evolução
        </h3>

        <p>
            Comparando sequências de DNA entre organismos,
            pesquisadores conseguem investigar relações
            evolutivas e diferenças entre espécies.
        </p>


        <h3>
            🧠 6. DNA não é sinônimo de "destino"
        </h3>

        <p>
            Os genes são importantes, mas muitas características
            dependem também do ambiente, desenvolvimento,
            alimentação, comportamento e outros fatores.
        </p>


        <div class="info-box">

            🧬 <strong>Conclusão:</strong>

            o DNA é uma das moléculas mais importantes
            para compreender a vida e continua sendo
            estudado por cientistas no mundo inteiro.

        </div>

    `

};



/* =====================================================
   FONTES — ÁREA PERSONALIZADA
===================================================== */

function mostrarFontes() {

    /*
        Guardamos de onde o usuário abriu as fontes.

        Assim, quando clicar em "Voltar", ele retorna
        para a página anterior.
    */

    paginaAnterior = paginaAtual;

    paginaAtual = "leitor";


    inicio.style.display = "none";

    paginaDNA.style.display = "none";

    paginaLaboratorio.style.display = "none";

    paginaExplorar.style.display = "none";

    leitor.style.display = "block";


    conteudoEscolhido.innerHTML = `

        <span class="mini-titulo">
            REFERÊNCIAS • FONTES
        </span>


        <h2>
            📚 Fontes e referências
        </h2>


        <p>
            As informações apresentadas neste site foram
            organizadas com finalidade educativa e baseadas
            em fontes científicas e materiais didáticos.
        </p>


        <h3>
            🧬 Genoma e genética
        </h3>

        <div class="fonte">

            <strong>
                National Human Genome Research Institute
            </strong>

            <p>
                Conteúdos científicos sobre genoma humano,
                genética e pesquisas relacionadas ao DNA.
            </p>

        </div>


        <h3>
            🔬 Biologia molecular
        </h3>

        <div class="fonte">

            <strong>
                National Center for Biotechnology Information (NCBI)
            </strong>

            <p>
                Banco de dados e informações científicas
                sobre genética, DNA, RNA e biologia molecular.
            </p>

        </div>


        <h3>
            📖 Biologia
        </h3>

        <div class="fonte">

            <strong>
                OpenStax Biology
            </strong>

            <p>
                Material didático de biologia utilizado
                para conceitos fundamentais de genética,
                células e biologia molecular.
            </p>

        </div>


        <h3>
            🌎 Enciclopédia científica
        </h3>

        <div class="fonte">

            <strong>
                Encyclopaedia Britannica
            </strong>

            <p>
                Material de referência para conceitos
                relacionados à genética, DNA e biologia.
            </p>

        </div>


        <h3>
            📚 Materiais didáticos
        </h3>

        <div class="fonte">

            <strong>
                Materiais didáticos de Biologia e Genética
            </strong>

            <p>
                Conteúdos utilizados como apoio para a
                organização e explicação dos conceitos
                apresentados no site.
            </p>

        </div>


        <div class="info-box">

            🔬 <strong>Observação:</strong>

            este site possui finalidade educativa.
            As informações foram organizadas para facilitar
            o estudo de DNA, genética e biologia molecular.

        </div>


        <button
            class="botao-voltar"
            onclick="fecharConteudo()"
        >
            ← Voltar
        </button>

    `;


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



/* =====================================================
   INICIALIZAÇÃO
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        atualizarEtapa();

    }
);