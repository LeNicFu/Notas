import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

// Componente usado para garantir a visualização das barras superior e inferior da tela em vez de usar o SafeAreaView

export default function ViewBars({ component }) {
        const insets = useSafeAreaInsets()
    return <View style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom }}>
        {component}
    </View>
}