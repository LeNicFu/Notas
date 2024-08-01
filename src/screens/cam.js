import { CameraView, useCameraPermissions } from 'expo-camera'
import { useContext, useEffect } from 'react'
import { View } from 'react-native'
import MyButton from '../components/myButton'
import { GlobalContext } from '../context'

export default function MyCam() {
  const { setTela, setCodigo } = useContext(GlobalContext)
  const handleCodeScanned = (code) => {

    if (code.data.length > 0) {
      [
        setCodigo(code.data),
        setTela(2)
      ]
    }
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
      <View style={{ height: 200, width: 300 }}>
        <CameraView style={{ flex: 1 }} barcodeScannerSettings={{ barCodeTypes: ['code128'] }} onBarcodeScanned={handleCodeScanned} />
      </View>
      <MyButton icon={'home'} onPress={() => setTela(0)} />
    </View>
  )
}