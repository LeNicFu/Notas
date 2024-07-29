export function EncontrarNome(lista, codigo) {
    const itemComOCodigo = lista.find(item => item.codigo == codigo)
    if (itemComOCodigo) {
        return itemComOCodigo.nome
    } else {
        return 'Código não encontrado!'
    }
}

const codigoEscolaAno = require('../data/paginaAno.json')

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