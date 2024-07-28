import { StatusBar } from 'react-native'
import InfoProvider from './src/context'
import Manager from './src/manager'

export default function App() {
  return <InfoProvider>
    <Manager />
    <StatusBar />
  </InfoProvider>
}