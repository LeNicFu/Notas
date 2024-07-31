import { useContext, useEffect } from 'react'
import { Image, Modal, TouchableOpacity, View } from 'react-native'
import { GlobalContext } from '../context'
import styles from '../styles'
import { CriarMyNotas, GetList } from '../data'
import { Entypo } from '@expo/vector-icons'
import { ActionModalExcluirLista } from '../components/modais'
import { ActionModalEnviar } from '../components/modais/enviar'

console.log('------------------- HOME -------------------')

CriarMyNotas()

export default function Home() {
    const { setTela, setListaDeAlunosNotas, visibleModalEnviar, setVisibleModalEnviar, visibleModalExcluirLista, setVisibleModalExcluirLista } = useContext(GlobalContext)

    useEffect(() => {
        setListaDeAlunosNotas(GetList())
    }, [])

    return <View style={styles.container}>
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
            onPress={() => setVisibleModalExcluirLista(true)}
        >
            <Entypo name={'trash'} size={60} color='red' />
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => setTela(1)}
            style={{ backgroundColor: 'white', borderRadius: 24 }}
        >
            <Image
                style={{ width: 200, height: 200 }}
                source={require('../../assets/icons8-barcode-scanner-100.png')} />
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
    </View>
}
