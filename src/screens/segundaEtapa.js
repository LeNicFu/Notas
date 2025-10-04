import { Modal, Text, TouchableOpacity, View } from 'react-native'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context'
import { Entypo } from '@expo/vector-icons'
import Centro from '../components/segundaEtapa/centro'
import Ano from '../components/segundaEtapa/ano'
import ListasSegundaEtapa from '../components/segundaEtapa/listasSegundaEtapa'
import { ApagarListaSE, CriarListaSE, GetListSE } from '../data/dataSegundaEtapa'
import { ListaEnviarSE, ListasSE } from '../components/segundaEtapa/functions'
import { ActionModalAbrindoEmail, ActionModalEnviar, ActionModalEnviarSE } from '../components/modais/enviar'
import * as Clipboard from 'expo-clipboard'


CriarListaSE()

console.log('--------------------------------------------------------------------')
console.log(GetListSE().length)

// ATUALIZAR LISTA DO ANO
// Logo abaixo, a lista será obrigatoriamente atualizada caso o app já tenha sido usado no ano anterior. É preciso que não ocorra a coincidência de o número de alunos ser o mesmo do ano anterior
const totalDeAlunos = require('../../atualizacaoApp.json')[0].totalDeAlunos
if (GetListSE().length != totalDeAlunos) {
    ApagarListaSE()
    CriarListaSE()
    console.log('Condição de atualização!', totalDeAlunos)
}

export default function SegundaEtapa() {
    const { setTela, centro, setCentro, anoSegundaEtapa, setAnoSegundaEtapa, setListasSegundaEtapa, visibleModalEnviarSE, setVisibleModalEnviarSE, visibleModalAbrindoEmail } = useContext(GlobalContext)
    const [reload, setReload] = useState(false)

    const copiarParaClipboard = async () => {
            // const lista = JSON.stringify(alunos)
            // const lista = JSON.stringify(GetListSE())
            const lista = JSON.stringify(ListaEnviarSE(GetListSE()))
            await Clipboard.setStringAsync(lista);
            Alert.alert('Copiado!', 'O texto foi copiado para a área de transferência.');
        };

    useEffect(() => {
        ListasSE()
    }, [])

    useEffect(() => {
        setCentro(null)
        setAnoSegundaEtapa(null)
    }, [reload])

    return <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center' }}>
        <View style={{ width: '98%', backgroundColor: 'black', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <TouchableOpacity
                onPress={() => setTela(0)}
            >
                <Entypo name={'home'} size={50} color='white' />
            </TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', paddingTop: 10 }}>
                SEGUNDA ETAPA
            </Text>
            <TouchableOpacity
                onPress={() => setReload(!reload)}
            >
                <Entypo name={'cw'} size={50} color='white' />
            </TouchableOpacity>
        </View>
        {centro ? null
            :
            <View style={{ width: '98%', backgroundColor: 'black', justifyContent: 'space-evenly', alignItems: 'center', paddingTop:20, flexDirection: 'row' }}>
                <TouchableOpacity
                    onPress={() => [setVisibleModalEnviarSE(true), setListasSegundaEtapa(ListaEnviarSE(GetListSE()))]}
                    >
                    <Entypo name={'mail'} size={60} color='white' />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => copiarParaClipboard()}
                >
                    <Entypo name={'copy'} size={50} color='white' />
                </TouchableOpacity>
            </View>

        }
        {centro ?
            <Ano centro={centro} /> :
            <View style={{ justifyContent: 'center', flex: 1, width: '100%', alignItems: 'center' }}>
                <View style={{ width: '90%', height: '80%', backgroundColor: 'white', borderRadius: 24, justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <Centro />
                </View>
            </View>
        }
        {anoSegundaEtapa != null ?
            <ListasSegundaEtapa /> : null
        }
        <Modal
            visible={visibleModalEnviarSE}
            transparent={true}
        >
            <ActionModalEnviarSE />
        </Modal>
        <Modal
            visible={visibleModalAbrindoEmail}
            transparent={true}
        >
            <ActionModalAbrindoEmail />
        </Modal>
    </View>
}