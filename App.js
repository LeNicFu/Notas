import { StatusBar } from 'expo-status-bar'
import InfoProvider from './src/context'
import Manager from './src/manager'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  return <SafeAreaProvider>
    <InfoProvider>
      <StatusBar style='auto'/>
      <Manager />
    </InfoProvider>
  </SafeAreaProvider>
}