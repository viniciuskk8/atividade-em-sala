const caixaPrincipal = document.querySelector(".principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        alternativas: [
            {
                texto: "Gosta de Voleibol?",
            },
            {
                texto: "Não gosta de Voleibol?",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Já parou para ver algum jogo de um time profissional?",
            },
            {
                texto: "Não parei para ver algum jogo de voleibol.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Já pesquisou sobre os fundamentos do voleibol?.",
            },
            {
                texto: "Já pesquisei, mas não consigo colocalos em prática. ",
            },
            {
                texto: "Não pesquisei sobre nada.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Procure professores de educação física para poderem te auxiliarem.",
            },
            {
                texto: "Já procurei professores, mas eles não conseguiram me auxiliar.",
            },
            {
                texto: "não procurei professores.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Já procurou um site para achar times de voleibol? ",
            },
            {
                texto: "Já procurei, mas não me encaixei em nenhum time. ",
            },
            {
                texto: "Não quero procurar estes sites.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Procurou alguém em sua família que ja jogou ou joga voleibol? .",
            },
            {
                texto: "Procurei, mas não tenho niguém em minha família que joga.",
            },
            {
                texto: "Não quero procurar.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Espero ter ajudado a encontrar meios para jogar voleibol.",
            },
            {
                texto: "Atualize a página se quer mais dicas de voleibol.",
            },
            {
                texto: "Não conseguiu me ajudar.",
            }
        ]
    },

];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraAlternativas(){
    perguntaAtual = perguntas[atual];
    caixaAlternativas.textContent = "";

    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    atual++;
    mostraAlternativas();
}


mostraAlternativas();