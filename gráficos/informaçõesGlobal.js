const url = https://raw.githubusercontent.com/Gabrielle923/PESQUISA_Redes-Sociais/refs/heads/main/gr%C3%A1ficos/Informa%C3%A7%C3%B5escola.json

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo ) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Podemos dizer que o mundo possuí ${78000000000} bilhões de pessoas e podemos dizer que cerca de ${5400000000} bilhões estão conectadas em alguma rede e passam em média <span>${2} horas</span> e <span>${60} minutos</span> conectadas.<br>Isso significa que aproximadamente <span>${20}%</span> de pessoas estão conectadas em alguma rede social.`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()
