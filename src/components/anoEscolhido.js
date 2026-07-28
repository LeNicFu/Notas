import { TouchableOpacity, Text, FlatList } from 'react-native'
import styles from '../styles'
import TituloTexto from './tituloTexto'
import { useContext } from 'react'
import { GlobalContext } from '../context'
import { Entypo } from '@expo/vector-icons'

export default function AnoEscolhido() {
    const { setVisibleModalEscolherAno, setAnoEscolhido } = useContext(GlobalContext)

    const anoEscolar = [6, 7, 8, 9]

    const EstiloLista = (ano) => {
        return <TouchableOpacity style={styles.containerListas}
            onPress={() => [setVisibleModalEscolherAno(false), setAnoEscolhido(ano)]}
        >
            <Text style={[styles.texto1, { alignContent: 'center' }]}>
                {ano}º ano
            </Text>
        </TouchableOpacity>
    }

    return <>
        <TituloTexto titulo={'ANO'} />
        <FlatList
            style={{ width: '100%', backgroundColor: 'black' }}
            data={anoEscolar}
            keyExtractor={(item) => anoEscolar.indexOf(item)}
            renderItem={({ item }) => EstiloLista(item)}

        />
        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}
            onPress={() => setVisibleModalEscolherAno(false)}
        >
            <Entypo name={'back'} size={50} color='black' />
        </TouchableOpacity>
    </>
}