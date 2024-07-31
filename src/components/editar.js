import { Modal, Text, TouchableOpacity, View } from 'react-native'
import styles from '../styles'
import MyButton from './myButton'
import { useContext } from 'react'
import { GlobalContext } from '../context'
import TituloTexto from './tituloTexto'
import { ActionModalEditar, ActionModalExcluirNome } from '../components/modais'
import { Entypo } from '@expo/vector-icons'
import { EditarNomeDb, EditarNotaDb, GetList } from '../data'
import { colors } from '../colors'

export default function Editar() {
    const { setTela, setNota, municipio, escola, ano, nome, codigo, nota, id, visibleModalEditar, setVisibleModalEditar, setListaDeAlunosNotas, visibleModalExcluirNome, setVisibleModalExcluirNome } = useContext(GlobalContext)

    return <View style={[styles.container, { paddingTop: 20 }]}>
        <View style={{ width: '80%', height: '70%', backgroundColor: 'white', borderRadius: 24, justifyContent: 'space-evenly', alignItems: 'center' }}>
            <TituloTexto titulo={'MUNICÍPIO'} texto={municipio} />
            <TituloTexto titulo={'ESCOLA'} texto={escola} />
            <TituloTexto titulo={ano} />
            <TituloTexto titulo={'NOME'} texto={nome} />
            <TituloTexto titulo={'CÓDIGO'} texto={codigo} />
            <View>
                <Text style={styles.texto2}>NOTA</Text>
                <Text
                    style={[styles.texto1, { fontSize: 32, fontWeight: 'bold', color: nota >= 8 ? 'blue' : 'red' }]}>{nota}
                </Text>
            </View>
        </View>
        <TouchableOpacity
            style={{ position: 'absolute', top: 50, left: 20 }}
            onPress={() => setVisibleModalEditar(true)}
        >
            <Entypo name={'edit'} size={50} color='white' />
        </TouchableOpacity>
        <TouchableOpacity
            style={{ position: 'absolute', top: 50, right: 20 }}
            onPress={() => setTela(6)}
        >
            <Entypo name={'back'} size={50} color='white' />
        </TouchableOpacity>
        <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-around', paddingTop: '10%' }}>
            <MyButton icon={'trash'} color={`red`} onPress={() => setVisibleModalExcluirNome(true)} />
            <MyButton icon={'circle-with-cross'} color={colors.cancelar} onPress={() => setTela(6)} />
            <MyButton icon={'check'} onPress={() => nota ? [EditarNomeDb(nome, id), EditarNotaDb(nota, id), setTela(6), setListaDeAlunosNotas(GetList())] : alert('É necessário digitar a nota!')} />
        </View>
        <Modal
            visible={visibleModalEditar}
            transparent={true}
        >
            <ActionModalEditar />
        </Modal>
        <Modal
            visible={visibleModalExcluirNome}
            transparent={true}
        >
            <ActionModalExcluirNome />
        </Modal>
    </View>
}