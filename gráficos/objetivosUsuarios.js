<html lang "pt-br">
<body>
<! -- código omitido --> 
    <footer>
        <p>Desenvolvido por Gabrielle Cristino Bento de Souza</p>
    </footer>
    <script type="module" src="graficos/informacoesGlobais.js"></script>
    <script type="module" src="graficos/quantidadeUsuarios.js"></script>
    <script type="module" src="graficos/objetivosUsuarios.js"></script>
</body>
</html>
async function objetivosUsuarios() {
    const url = 'https://raw.githubusercontent.com/Gabrielle923/api/main/razoes-globais.json'
    const res = await fetch(url)
    const dados = await res.json()
    const objetivosUsuarios = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)
  
  const data = [
    {
      labels: objetivosUso,
      values: quantidadeUsuarios,
      type: 'pie'
    }
  ]
  
  const layout = 
    {
      height: 600,
      width: 870,
    }
  
  const grafico = document.createElement('div')
  grafico.className = 'grafico'
  document.getElementById('graficos-container').appendChild(grafico)
  Plotly.newPlot(grafico, data, layout)
  
  }
  
  objetivosUsuarios()
