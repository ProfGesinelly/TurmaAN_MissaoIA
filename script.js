const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "1- O racismo é o preconceito contra pessoas a partir do seu tom de pele e traços físicos que remetem a uma raça que é marginalizada, ou seja, vista como inferior e desvalorizada. Como você acredita que podemos combater o racismo na sociedade?",
        alternativas: [
            {
            texto:"A- Participando de campanhas de conscientização e educação sobre igualdade racial.",
            afirmacao: "Você tem conhecimento sobre a formação histórico cultural da sociedade brasileira. Possui empatia por seu próximo e também é conhecedor dos direitos humanos."
            },
            {
            texto:"B -Denunciando atos de discriminação e apoiando políticas públicas inclusivas.",
            afirmacao: "Acredita que as denuncias de atos discriminatórios e políticas públicas possam sanar o problema." 
            }   
        ]
    },
    {
        enunciado: "2- Como você pode ajudar a combater a disseminação de fake news, especialmente as que perpetuam o racismo?",
        alternativas: [
            {
            texto: "A- Verificando a veracidade das informações antes de compartilhar qualquer conteúdo, especialmente sobre temas sensíveis como racismo.",
            afirmacao: "Você é um cidadão consciente e deseja estar atento com a realidade do mundo em que está inserido."
            },
            {            
            texto: "B- Educando amigos e familiares sobre os perigos das fake news e incentivando-os a não compartilhar conteúdos falsos que perpetuam o racismo.",
            afirmacao: "Tome cuidado com as informações que são enviadas para você, nem tudo é verdadeiro."
            }
        ]
    },
    { 
        enunciado: "3- Como podemos incentivar o uso de energia solar e outras formas de energia limpa, especialmente em comunidades carentes?",
        alternativas: [
            {
            texto: "A - Promovendo a instalação de painéis solares em escolas e centros comunitários de comunidades marginalizadas.",
            afirmacao: "Sempre antenado você sabe o melhor caminho para a redução do impacto ambiental."
            },
            {
            texto: "B - Defendendo políticas públicas que subsidiem a energia solar para famílias de baixa renda.",
            afirmacao: "Talvez precise olhar um pouco mais a sua volta e identificar a necessidades daqueles que não possuem muitas condições."
            }
        ]
    
    }
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
   mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    //historiaFinal = historiaFinal + afirmacao + " ";
    atual++;
    mostraPergunta();
}

mostraPergunta(); 
function mostraResultado(){
    caixaPerguntas.textContent = "IA contra o racismo, mostra seu perfil!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas. textContent = "";
}