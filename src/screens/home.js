import { useContext } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { GlobalContext } from '../context'
import styles from '../style'

console.log('------------------- HOME -------------------')

export default function Home() {
    const { setTela } = useContext(GlobalContext)

    return <View style={styles.container}>
        <TouchableOpacity
            onPress={() => setTela(1)}
            style={{backgroundColor: 'white', borderRadius: 24}}
        >
            <Image
                style={{ width: 200, height: 200 }}
                source={require('../../assets/icons8-barcode-scanner-100.png')} />
        </TouchableOpacity>
    </View>
}
