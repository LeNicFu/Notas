import { CameraView, useCameraPermissions } from 'expo-camera'
import { useContext, useEffect } from 'react'
import { View } from 'react-native'
import MyButton from '../components/myButton'
import { GlobalContext} from '../context' 

export default function MyCam() {
  const { setTela, codigo, setCodigo, nome, setNome, listaDeNomes } = useContext(GlobalContext)
  const handleCodeScanned = (code) => {
    console.log(code)
  }
  const [permission, requestPermission] = useCameraPermissions()

  useEffect(() => {
    requestPermission()
  })

  if (!permission?.granted) {
    return null
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{height: 200, width: 300}}>
        <CameraView style={{ flex: 1 }} barcodeScannerSettings={{ barCodeTypes: ['code128'] }} onBarcodeScanned={handleCodeScanned} />
        {
        // console.log(handleCodeScanned(), handleCodeScanned() == 'undefined')
        }
      </View>
      <MyButton icon={'home'} onPress={() => setTela(0)} />
    </View>
  )
}