const getCSS = (variavel) => {
    const bodyStyles = getComputedStyle(document.body)
    return bodyStyles.getPropertyValue(variavel)
}

const tickConfig = {
    family: getCSS('--font'),
    size: 16,
    color: getCSS('--primary-color')
}

export {getCSS, tickConfig}
</footer>
<script type="module" src="graficos/common.js"></script>
<script type="module" src="graficos/informacoesGlobais.js"></script>
<script type="module" src="graficos/quantidadeUsuarios.js"></script>
</body>
</html>
