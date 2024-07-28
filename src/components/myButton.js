import { StyleSheet, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'

export default function MyButton({ onPress, icon, color }) {
    return <TouchableOpacity style={styles.button}
        onPress={onPress}
    >
        <Entypo name={icon} size={50} color={color? color: 'green'} />
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
        marginLeft: 10
    }
})