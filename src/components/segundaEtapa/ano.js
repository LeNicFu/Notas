import { Text, TouchableOpacity, View } from 'react-native'
import TituloTexto from '../tituloTexto'
import styles from '../../styles'
import { useContext } from 'react'
import { GlobalContext } from '../../context'

const estiloAnoTexto = (n, ano) => {
    if (n === ano) {
        return { fontSize: 24 }
    } else {
        return {}
    }
}

const estiloAnoContainer = (n, ano) => {
    if (n === ano) {
        return { borderWidth: 3, borderRadius: 10 }
    } else {
        return {}
    }
}

export default function Ano({ centro }) {
    const { anoSegundaEtapa, setAnoSegundaEtapa } = useContext(GlobalContext)

    return <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>
        <View style={{ backgroundColor: 'white', width: '100%', minHeight: 40, justifyContent: 'center' }}>
            <TituloTexto titulo={centro} />
        </View>
        <View style={{ backgroundColor: 'lightblue', width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', minHeight: 40, alignItems: 'center' }}>
            <TouchableOpacity
            style={[styles.anoContainer, estiloAnoContainer(6, anoSegundaEtapa)]}
            onPress={() => setAnoSegundaEtapa(6)}
            >
                <Text style={[styles.anoTexto, estiloAnoTexto(6, anoSegundaEtapa)]}>
                    {' '}6º ano{' '}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.anoContainer, estiloAnoContainer(7, anoSegundaEtapa)]}
            onPress={() => setAnoSegundaEtapa(7)}
            >
                <Text style={[styles.anoTexto, estiloAnoTexto(7, anoSegundaEtapa)]}>
                    {' '}7º ano{' '}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.anoContainer, estiloAnoContainer(8, anoSegundaEtapa)]}
            onPress={() => setAnoSegundaEtapa(8)}
            >
                <Text style={[styles.anoTexto, estiloAnoTexto(8, anoSegundaEtapa)]}>
                    {' '}8º ano{' '}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.anoContainer, estiloAnoContainer(9, anoSegundaEtapa)]}
            onPress={() => setAnoSegundaEtapa(9)}
            >
                <Text style={[styles.anoTexto, estiloAnoTexto(9, anoSegundaEtapa)]}>
                    {' '}9º ano{' '}
                </Text>
            </TouchableOpacity>
        </View>
    </View>
}
