export const codigoEscolaAno = require('../data/paginaAno.json')
export const lista = require('../data/listaAlunos.json')

export function EncontrarEscola(codigo) {
    let dadosCodigo = {}
    for (let i = 0; i < codigoEscolaAno.length; i++) {
        if (codigo >= codigoEscolaAno[i].Ano6a && codigo <= codigoEscolaAno[i].Ano9b) {
            dadosCodigo.NomeDaEscola = codigoEscolaAno[i].NomeDaEscola,
                dadosCodigo.Municipio = codigoEscolaAno[i].Municipio
            if (codigo <= codigoEscolaAno[i].Ano6b) {
                dadosCodigo.Ano = '6º ANO'
            } else if (codigo <= codigoEscolaAno[i].Ano7b) {
                dadosCodigo.Ano = '7º ANO'
            } else if (codigo <= codigoEscolaAno[i].Ano8b) {
                dadosCodigo.Ano = '8º ANO'
            } else {
                dadosCodigo.Ano = '9º ANO'
            }
        }
    }
    return dadosCodigo
}

export function ValorNota(nota) {
    if (nota >= 0 && nota <= 16) {
        return nota
    }
}

export function ValorNotaSE(nota) {
    if (nota >= 0 && nota <= 10) {
        return nota
    }
}

export function EliminaZero(nota) {
    let novaNota = nota
    if (novaNota.length > 1) {
        if (novaNota[0] == 0) {
            novaNota = novaNota.slice(1)
        }
    }
    return novaNota
}

export function EncontrarCodigo(codigo, listaDeAlunosNotas) {
    const itemComOCodigo = listaDeAlunosNotas.find(item => item.codigo == codigo)
    if (itemComOCodigo) {
        return true
    } else {
        return false
    }
}