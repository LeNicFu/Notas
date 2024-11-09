import { GetListSE, InserirSE } from '../../data/dataSegundaEtapa'

const listaSegundaEtapa = require('../../data/listaParaPresenca.json')

export function ListasSE() {
    if (GetListSE().length === 0) {
        listaSegundaEtapa.forEach(item => {
            const centro = item.centro
            for (let i = 0; i < item.ano6.length; i++) {
                InserirSE(centro, 6, item.ano6[i].codigo, item.ano6[i].nome, '')
            }
            for (let i = 0; i < item.ano7.length; i++) {
                InserirSE(centro, 7, item.ano7[i].codigo, item.ano7[i].nome, '')
            }
            for (let i = 0; i < item.ano8.length; i++) {
                InserirSE(centro, 8, item.ano8[i].codigo, item.ano8[i].nome, '')
            }
            for (let i = 0; i < item.ano9.length; i++) {
                InserirSE(centro, 9, item.ano9[i].codigo, item.ano9[i].nome, '')
            }
        })
    }
}

export function ListaEnviarSE(lista) {
    const listaEnviar = []
    lista.forEach(item => {
        const nota = item.nota
        nota.length > 0 ? listaEnviar.push(item) : null
    })
    return listaEnviar
}