const lista = require('../data/listaAlunos.json')

// console.log(lista[0])
// console.log(lista.length)

// const listaSegundaEtapa = require('../data/listaParaPresenca.json')

// console.log(listaSegundaEtapa[0])
// console.log(listaSegundaEtapa.length)
// console.log(Object.keys(listaSegundaEtapa[0]))
// console.log(listaSegundaEtapa[0].centro)

const [listaSegundaEtapa, centros] = [require('../data/listaParaPresenca.json'), []]
// const centros = []

listaSegundaEtapa.forEach(item => centros.push({ id: listaSegundaEtapa.indexOf(item), centro: item.centro }))

centros.sort(function (a, b) {
  return a.centro.localeCompare(b.centro, 'pt', { sensitivity: 'base' });
})

console.log(centros)
