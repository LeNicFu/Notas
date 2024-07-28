export function EncontrarNome(lista, codigo) {
    const itemComOCodigo = lista.find(item => item.codigo == codigo)
    if (itemComOCodigo) {
        return itemComOCodigo.nome
    } else {
        return 'Código não encontrado!'
    }
}
