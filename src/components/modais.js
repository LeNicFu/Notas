import { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { GlobalContext } from '../context'
import styles from '../styles'

export const ActionModalEditarNome = () => {
    const { visibleModalEditarNome, setVisibleModalEditarNome } = useContext(GlobalContext)
    return <TouchableOpacity
        style={styles.modal}
        onPress={() => setVisibleModalEditarNome(false)}
    >
        <TouchableOpacity
            style={styles.containerModal}
            activeOpacity={1}
        >
            <View style={{ alignItems: 'center', width: '100%', justifyContent: 'space-evenly', height: '60%', }}>
                <Text style={styles.texto2}>
                    Editar nome
                </Text>
                <Text style={styles.texto1}>
                    Apagar este produto da lista?
                </Text>
            </View>
        </TouchableOpacity>
    </TouchableOpacity>
}