import { useContext, useEffect } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { GlobalContext } from '../context'
import styles from '../styles'
import { CriarMyNotas, GetList } from '../data'
import { Entypo } from '@expo/vector-icons'


console.log('------------------- HOME -------------------')

CriarMyNotas()

export default function Home() {
    const { setTela, setListaDeAlunosNotas } = useContext(GlobalContext)

    useEffect(() => {
        setListaDeAlunosNotas(GetList())
    }, [])

    return <View style={styles.container}>
        <TouchableOpacity
        style={{position: 'absolute', top: 30, right: 30}}
        onPress={() => setTela(5)}
        >
            <Entypo name={'list'} size={60} color='white'/>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => setTela(1)}
            style={{ backgroundColor: 'white', borderRadius: 24 }}
        >
            <Image
                style={{ width: 200, height: 200 }}
                source={require('../../assets/icons8-barcode-scanner-100.png')} />
        </TouchableOpacity>
    </View>
}
