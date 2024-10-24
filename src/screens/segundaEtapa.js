import { TouchableOpacity, View } from 'react-native'
import styles from '../styles'
import { useContext } from 'react'
import { GlobalContext } from '../context'
import { Entypo } from '@expo/vector-icons'
import TituloTexto from '../components/tituloTexto'


export default function SegundaEtapa() {
    const { setTela, municipio } = useContext(GlobalContext)
    return <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center' }}>
        <View style={{ width: '98%', backgroundColor: 'black', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <TouchableOpacity
                onPress={() => setTela(0)}
            >
                <Entypo name={'home'} size={50} color='white' />
            </TouchableOpacity>
            <TouchableOpacity
            // onPress={() => setTela(5)}
            >
                <Entypo name={'list'} size={50} color='white' />
            </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'center', flex: 1, width: '100%', alignItems: 'center'}}>
            <View style={{ width: '80%', height: '60%', backgroundColor: 'white', borderRadius: 24, justifyContent: 'space-evenly', alignItems: 'center' }}>
                <TituloTexto titulo={'MUNICÍPIO'} texto={municipio} />
                {/* <TituloTexto titulo={'ESCOLA'} texto={escola} />
            <TituloTexto titulo={ano} />
            <TituloTexto titulo={'NOME'} texto={nome} />
            <TituloTexto titulo={'CÓDIGO'} texto={codigo} /> */}
            </View>
        </View>
    </View>
}