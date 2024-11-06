import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import styles from '../styles'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context'
import { Entypo } from '@expo/vector-icons'
import Centro from '../components/segundaEtapa/centro'
import Ano from '../components/segundaEtapa/ano'
import ListasSegundaEtapa from '../components/segundaEtapa/listasSegundaEtapa'
import { ApagarListaSE, CriarListaSE, GetListSE } from '../data/dataSegundaEtapa'
import { ListasSE } from '../components/segundaEtapa/functions'

// ApagarListaSE()
CriarListaSE()

console.log('--------------------------------------------------------------------')
console.log(GetListSE()[0])
// console.log(GetListSE().length)
console.log(Object.keys(GetListSE()[0]))

export default function SegundaEtapa() {
    const { setTela, centro, setCentro, anoSegundaEtapa, setAnoSegundaEtapa, listasSegundaEtapa, setListasSegundaEtapa } = useContext(GlobalContext)
    const [reload, setReload] = useState(false)

    useEffect(() => {
        ListasSE()
    }, [])

    // console.log(listasSegundaEtapa)

    useEffect(() => {
        setCentro(null)
        // setCentro('Centro Teste')
        setAnoSegundaEtapa(null)
        // setAnoSegundaEtapa(7)
    }, [reload])

    return <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center' }}>
        <View style={{ width: '98%', backgroundColor: 'black', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <TouchableOpacity
                onPress={() => setTela(0)}
            >
                <Entypo name={'home'} size={50} color='white' />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setReload(!reload)}
            >
                <Entypo name={'cw'} size={50} color='white' />
            </TouchableOpacity>
        </View>
        {centro ?
            <Ano centro={centro} /> :
            <View style={{ justifyContent: 'center', flex: 1, width: '100%', alignItems: 'center' }}>
                <View style={{ width: '80%', height: '60%', backgroundColor: 'white', borderRadius: 24, justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <Centro />
                </View>
            </View>
        }
        {anoSegundaEtapa != null ?
            <ListasSegundaEtapa /> : null
        }
    </View>
}