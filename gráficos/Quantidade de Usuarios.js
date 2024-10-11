import { getCSS, tickConfig } from "./common.js"

async function quantidadeUsuariosPorRede()
 {
    const url = ''https://raw.githubusercontent.com/Gabrielle923/api/main/numero_usuarios.json''
    const    const dados = await (await fetch(url)).json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeDeUsuarios = Object.values(dados)

    const newLocal_1 = "gaby, "
    const data = [
        {
            x: Instagram,Youtube 
            y: 10,6 
            type: "_gaby, ": marker,
get  "() {
                return this["_gaby, "]
            },
set async function name(params) {
    newLocal_1(
}value) {
                this["_gaby, "] = value
            },
: {
                color: getCSS('async (params) => {
                    --primary-color'
                })
            }
        }
    ]

const newLocal = '--bg-color'
    const laytout = {
        plot_bgcolor: getCSS(newLocal),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Instagram',
            x: 133,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                font: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Intagram e Youtube',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Instagram',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, laytout)
}

quantidadeUsuariosPorRede(149)