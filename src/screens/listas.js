import { useContext, useState } from 'react'
import { GlobalContext } from '../context'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from '../styles'
import { Entypo } from '@expo/vector-icons'
import { ButtonList } from '../components/myButton'
import { distanceTop } from '../settings'
import * as Clipboard from 'expo-clipboard'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Listas() {
    const { listaDeAlunosNotas, setTela, setFatorDeOrdenacao } = useContext(GlobalContext)
    const [alunos, setAlunos] = useState(listaDeAlunosNotas)

    const copiarParaClipboard = async () => {
        const lista = JSON.stringify(alunos)
        await Clipboard.setStringAsync(lista);
        Alert.alert('Copiado!', 'O texto foi copiado para a área de transferência.');
    };

    return <SafeAreaView style={styles.container}>
        <View style={{ position: 'absolute', top: distanceTop }}>
            <Text style={styles.texto3}>
                {`LISTAS`}
            </Text>
        </View>
        <TouchableOpacity
            style={{ position: 'absolute', top: distanceTop, left: 20 }}
            onPress={() => setTela(0)}
        >
            <Entypo name={'home'} size={50} color='white' />
        </TouchableOpacity>
        <TouchableOpacity
            style={{ position: 'absolute', top: distanceTop, right: 20 }}
            onPress={() => copiarParaClipboard()}
        >
            <Entypo name={'copy'} size={50} color='white' />
        </TouchableOpacity>
        <View style={{ height: '60%', width: '100%', justifyContent: 'space-evenly', alignItems: 'center', }}>
            <ButtonList text={'Ordem alfabética'} onPress={() => [setFatorDeOrdenacao('nome'), setTela(6)]} />
            <ButtonList text={'Mais recentes'} onPress={() => [setFatorDeOrdenacao('id'), setTela(6)]} />
            <ButtonList text={'Nota'} onPress={() => [setFatorDeOrdenacao('nota'), setTela(6)]} />
            <ButtonList text={'Código'} onPress={() => [setFatorDeOrdenacao('codigo'), setTela(6)]} />
        </View>
    </SafeAreaView>
}