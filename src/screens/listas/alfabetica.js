import { useContext, useState } from 'react'
import { GlobalContext } from '../../context'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import  styles from '../../styles'
import { Entypo } from '@expo/vector-icons'

export default function Alfabetica() {
    const { listaDeAlunosNotas, setTela } = useContext(GlobalContext)
    const [alunos, setAlunos] = useState(listaDeAlunosNotas)
    // console.log('Lista:', listaDeAlunosNotas)

    function ListaOrdemAlfabetica() {
              alunos.sort(function (a,b) {
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
            }
            
    ListaOrdemAlfabetica()
    
    // console.log(alunos)

    function EstiloLista(codigo, nome, id) {
              return<TouchableOpacity style={estilo.container}
            //   onPress={() =>( editar(codigo, nome, id) && navigation.navigate('Opções de edição'))}
              >
                  <Text style={styles.texto1}>
                      {nome}
                  </Text>
                  <Text style={styles.texto1}>
                      {codigo}
                  </Text>
              </TouchableOpacity> 
            }
          


    return <View style={styles.container}>
        <TouchableOpacity
        style={{position: 'absolute', top: 50, right: 20}}
        onPress={() => setTela(0)}
        >
            <Entypo name={'home'} size={50} color='green'/>
        </TouchableOpacity>

        <FlatList
        style={{backgroundColor: '#00AEE7'}}
        data={alunos}
        keyExtractor={(aluno) => aluno.id.toString()}
        renderItem={({ item }) => EstiloLista(item.codigo, item.nome, item.id)}
        ListHeaderComponent={() => {
          return <View style={{alignItems: 'center', paddingVertical: 10}}>
                  <Text style={styles.texto2}>
                    {`Total de alunos registrados:   ${alunos.length}`}
                  </Text>
            </View>
      }}
      />

    </View>
}


 
//     const { setCodigo, setNome, setId } = useContext(GlobalContext)
//     async function editar(c, n, i) {
//       await (setCodigo(c), setNome(n), setId(i))
//     }
  
//     function EstiloLista(codigo, nome, id) {
//       return<TouchableOpacity style={estilo.container}
//       onPress={() =>( editar(codigo, nome, id) && navigation.navigate('Opções de edição'))}
//       >
//           <Text style={estilo.textoNome}>
//               {nome}
//           </Text>
//           <Text style={estilo.textoCodigo}>
//               {codigo}
//           </Text>
//       </TouchableOpacity> 
//     }
  
//     return (
//       <FlatList
//         style={{backgroundColor: '#00AEE7'}}
//         data={alunos}
//         keyExtractor={(aluno) => aluno.id.toString()}
//         renderItem={({ item }) => EstiloLista(item.codigo, item.nome, item.id)}
//         ListHeaderComponent={() => {
//           return <View style={{alignItems: 'center', paddingVertical: 10}}>
//                   <Text style={estilo.textoNome}>
//                     {`Total de alunos registrados:   ${alunos.length}`}
//                   </Text>
//             </View>
//       }}
//       />
//     );
//   }
  
  export const estilo = StyleSheet.create({
      container: {
          alignItems:'center',
          justifyContent: 'center',
          height: 65,
          backgroundColor: '#BCB9BA',
          marginHorizontal: 4,
          marginVertical: 2,
          borderRadius: 8
      },
      textoNome: {
          fontSize: 20,
          lineHeight: 24,
          fontWeight: '500'
      },
      textoCodigo: {
          fontSize: 17,
          lineHeight: 23,
          fontWeight: '500'
      }
  })