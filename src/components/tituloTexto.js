import { Text, View } from 'react-native'
import styles from '../styles'

export default function TituloTexto({ titulo, texto }) {
    return <View>
        <Text style={styles.texto2}>
            {titulo}
        </Text>
        {texto? <Text style={styles.texto1}> {texto}</Text>: null}
    </View>
}