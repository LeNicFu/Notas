import { useContext } from 'react'
import { GlobalContext } from '../context'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from '../styles'
import { Entypo } from '@expo/vector-icons'
import { ButtonList } from '../components/myButton'

export default function Listas() {
    const { listaDeAlunosNotas, setTela } = useContext(GlobalContext)
    console.log('Lista:', listaDeAlunosNotas)
    return <View style={styles.container}>
        <View style={{ width: '100%', backgroundColor: 'white', position: 'absolute', top: 0 }}>
            <Text style={styles.texto2}>
                LISTAS
            </Text>
        </View>
        <TouchableOpacity
            style={{ position: 'absolute', top: 50, right: 20 }}
            onPress={() => setTela(0)}
        >
            <Entypo name={'home'} size={50} color='green' />
        </TouchableOpacity>
        <View style={{height: '60%', width: '100%', justifyContent: 'space-evenly', alignItems: 'center', }}>
            <ButtonList text={'Ordem alfabética'} onPress={() => setTela(5.1)}/>
            <ButtonList text={'Mais recentes'} />
        </View>
    </View>
}