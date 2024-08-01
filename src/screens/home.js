import { useContext, useEffect } from 'react'
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native'
import { GlobalContext } from '../context'
import styles from '../styles'
import { CriarMyNotas, GetList } from '../data'
import { Entypo } from '@expo/vector-icons'
import { ActionModalCodigoRepetido, ActionModalExcluirLista } from '../components/modais'
import { ActionModalAbrindoEmail, ActionModalEnviar } from '../components/modais/enviar'

console.log('------------------- HOME -------------------')

export default function Home() {
    const { setTela, setListaDeAlunosNotas, visibleModalEnviar, setVisibleModalEnviar, visibleModalExcluirLista, setVisibleModalExcluirLista, visibleModalAbrindoEmail, listaDeAlunosNotas, visibleModalCodigoRepetido } = useContext(GlobalContext)

    useEffect(() => {
        CriarMyNotas()
        setListaDeAlunosNotas(GetList())
    }, [])

    return <View style={styles.container}>
        <View style={{position: 'absolute', top: 50, center: 0}}>
            <Text style={[styles.texto2, { color: 'white' }]}>
                Total{'\n'}
                {listaDeAlunosNotas.length}
            </Text>
        </View>
        <TouchableOpacity
            onPress={() => setTela(1)}
            style={{ backgroundColor: 'white', borderRadius: 24 }}
        >
            <Image
                style={{ width: 200, height: 200 }}
                source={require('../../assets/icons8-barcode-scanner-100.png')} />
        </TouchableOpacity>
        <TouchableOpacity
            style={{ position: 'absolute', top: 50, right: 20 }}
            onPress={() => setTela(5)}
        >
            <Entypo name={'list'} size={60} color='white' />
        </TouchableOpacity>
        <TouchableOpacity
            style={{ position: 'absolute', top: 50, left: 20 }}
            onPress={() => setVisibleModalEnviar(true)}
        >
            <Entypo name={'mail'} size={60} color='white' />
        </TouchableOpacity>
        <TouchableOpacity
            style={{ position: 'absolute', bottom: 30, center: 0 }}
            onPress={() => [setVisibleModalExcluirLista(true), setListaDeAlunosNotas([])]}
        >
            <Entypo name={'trash'} size={60} color='red' />
        </TouchableOpacity>
        <Modal
            visible={visibleModalEnviar}
            transparent={true}
        >
            <ActionModalEnviar />
        </Modal>
        <Modal
            visible={visibleModalExcluirLista}
            transparent={true}
        >
            <ActionModalExcluirLista />
        </Modal>
        <Modal
            visible={visibleModalAbrindoEmail}
            transparent={true}
        >
            <ActionModalAbrindoEmail />
        </Modal>
        <Modal
            visible={visibleModalCodigoRepetido}
            transparent={true}
        >
            <ActionModalCodigoRepetido />
        </Modal>
    </View>
}
