const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';

async function visualizarInformacoesGlobais() {

    const res = await fetch(url);
    const dados = res.json();
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container_texto');
    paragrafo.innerHTML = 'Você sabia que o mundo tem ${dados.total_pessoas_mundo} e que aproximadamente ${dados.total_pessoas_mundo} estão conectadas em alguma rede social e passam em média ${dados.tempo_medio} horas conectados.';

    const container = document.getElementById('graficos-container');
    container.appendChild(paragrafo);
}

visualizarInformacoesGlobais();

