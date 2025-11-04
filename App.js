import { StatusBar } from 'react-native'
import InfoProvider from './src/context'
import Manager from './src/manager'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  return <SafeAreaProvider>
    <InfoProvider>
      <Manager />
      {/* <StatusBar barStyle={'light-content'} /> */}
      <StatusBar barStyle={'dark-content'} />
    </InfoProvider>
  </SafeAreaProvider>
}