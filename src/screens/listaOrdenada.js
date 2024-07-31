import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import styles from '../styles'
import { Entypo } from '@expo/vector-icons'
import { EncontrarEscola } from '../components/functions'

export default function ListaOrdenada() {
  const { listaDeAlunosNotas, setTela, fatorDeOrdenacao, setMunicipio, setEscola, setAno, setNome, setCodigo, setNota, setId } = useContext(GlobalContext)
  const [alunos, setAlunos] = useState(listaDeAlunosNotas)

  useEffect(() => {
    Ordenadar()
  }, [])

  function Ordenadar() {
    if (fatorDeOrdenacao === 'nome') {
      alunos.sort(function (a, b) {
        if (a.nome > b.nome) {
          return 1
        }
        if (a.nome < b.nome) {
          return -1
        }
        if (a.nome = b.nome) {
          return 0
        }
      })
    } else if (fatorDeOrdenacao === 'nota') {
      alunos.sort(function (a, b) {
        if (a.nota > b.nota) {
          return -1
        }
        if (a.nota < b.nota) {
          return 1
        }
        if (a.nota = b.nota) {
          return 0
        }
      })
    } else if (fatorDeOrdenacao === 'id') {
      alunos.sort(function (a, b) {
        if (a.id > b.id) {
          return -1
        }
        if (a.id < b.id) {
          return 1
        }
        if (a.id = b.id) {
          return 0
        }
      })
    }
  }



  ///////////////////////////////////////////////////////////
  function EstiloLista(codigo, nome, nota, id) {
    return <TouchableOpacity style={styles.containerListas}
      onPress={() => [setMunicipio(EncontrarEscola(codigo).Municipio), setEscola(EncontrarEscola(codigo).NomeDaEscola), setAno(EncontrarEscola(codigo).Ano), setNome(nome), setCodigo(codigo), setNota(nota), setId(id), setTela(7)]}
    >
      <Text style={styles.texto1}>
        {codigo}
      </Text>
      <Text style={[styles.texto1, { alignContent: 'center', maxWidth: '70%' }]}>
        {nome}
      </Text>
      <Text style={[styles.texto2, { color: nota >= 8 ? 'blue' : 'red', marginRight: 10 }]}>
        {nota}
      </Text>
    </TouchableOpacity>
  }
  ///////////////////////////////////////////////////////////

  return <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center' }}>
    <View style={{ width: '98%', backgroundColor: 'black', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={() => setTela(0)}
      >
        <Entypo name={'home'} size={50} color='white' />
      </TouchableOpacity>
      <Text style={[styles.texto3, { maxWidth: '70%' }]}>
        {`Total de alunos:   ${alunos.length}`}
      </Text>
      {/* <TouchableOpacity
        onPress={() => setTela(5)}
      >
        <Entypo name={'back'} size={50} color='white' />
      </TouchableOpacity> */}
    </View>

    <FlatList
      style={{ width: '100%', backgroundColor: 'black' }}
      data={alunos}
      keyExtractor={(aluno) => aluno.id.toString()}
      renderItem={({ item }) => EstiloLista(item.codigo, item.nome, item.nota, item.id)}
    />
  </View>

}