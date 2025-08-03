import { useContext } from 'react'
import { GlobalContext } from '../context'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from '../styles'
import { Entypo } from '@expo/vector-icons'
import { ButtonList } from '../components/myButton'
import { distanceTop } from '../settings'

export default function Listas() {
    const { listaDeAlunosNotas, setTela, setFatorDeOrdenacao } = useContext(GlobalContext)

    return <View style={styles.container}>
        <View style={{position: 'absolute', top: distanceTop}}>
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
        <View style={{ height: '60%', width: '100%', justifyContent: 'space-evenly', alignItems: 'center', }}>
            <ButtonList text={'Ordem alfabética'} onPress={() => [setFatorDeOrdenacao('nome'), setTela(6)]} />
            <ButtonList text={'Mais recentes'} onPress={() => [setFatorDeOrdenacao('id'), setTela(6)]} />
            <ButtonList text={'Nota'} onPress={() => [setFatorDeOrdenacao('nota'), setTela(6)]} />
            <ButtonList text={'Código'} onPress={() => [setFatorDeOrdenacao('codigo'), setTela(6)]} />
        </View>
    </View>
}