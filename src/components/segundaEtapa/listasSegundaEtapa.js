import { useContext } from 'react'
import { FlatList, Modal, Text, TouchableOpacity, View } from 'react-native'
import { GlobalContext } from '../../context'
import { GetListSE } from '../../data/dataSegundaEtapa'
import styles from '../../styles'
import { ActionModalEditar } from '../modais'

export default function ListasSegundaEtapa() {
    const { anoSegundaEtapa, centro, visibleModalEditar, setVisibleModalEditar, setNome, setNota, setId } = useContext(GlobalContext)

    const lista = []

    GetListSE().forEach(item => {
        item.centro === centro && item.ano === anoSegundaEtapa? lista.push(item) : null
    })

    lista.sort(function (a, b) {
        return a.nome.localeCompare(b.nome, 'pt', { sensitivity: 'base' });
      })


    function EstiloLista(codigo, nome, nota, id) {
        return <TouchableOpacity style={styles.containerListas}
          onPress={() => [setNome(nome), setNota(nota), setId(id), setVisibleModalEditar(true)]}
        >
            <View>
                <Text style={styles.texto1}>
                    {codigo}
                </Text>
                <Text style={[styles.texto1, { fontSize: 16 }]}>
                    {anoSegundaEtapa}º ano
                </Text>
            </View>
            <Text style={[styles.texto1, { alignContent: 'center', maxWidth: '70%' }]}>
                {nome}
            </Text>
            <Text style={[styles.texto2, { color: nota >= 8 ? 'blue' : 'red', marginRight: 10 }]}>
                {nota}
            </Text>
        </TouchableOpacity>
    }

    return <View style={{ flex: 1, width: '100%', alignItems: 'center', paddingTop: 10 }}>
        <FlatList
            style={{ width: '100%', backgroundColor: 'black' }}
            data={lista}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => EstiloLista(item.codigo, item.nome, item.nota, item.id)}
        />
        <Modal
            visible={visibleModalEditar}
            transparent={true}
        >
            <ActionModalEditar />
        </Modal>
    </View>
}