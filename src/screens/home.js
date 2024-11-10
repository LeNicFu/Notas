import { useContext, useEffect } from 'react'
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native'
import { GlobalContext } from '../context'
import styles from '../styles'
import { CriarMyNotas, CriarMySenha, GetList, GetSenha } from '../data'
import { Entypo } from '@expo/vector-icons'
import { ActionModalCodigoRepetido, ActionModalDadosSalvos, ActionModalExcluirLista, ActionModalSenhaSE } from '../components/modais'
import { ActionModalAbrindoEmail, ActionModalEnviar } from '../components/modais/enviar'
import { GetSenhaSE, SenhaSE } from '../data/senhaSegundaEtapa'
// import { ActionModalSenha } from '../components/modais/senha'

console.log('------------------- HOME -------------------')

export default function Home() {
    const { setTela, setListaDeAlunosNotas, visibleModalEnviar, setVisibleModalEnviar, visibleModalExcluirLista, setVisibleModalExcluirLista, visibleModalAbrindoEmail, listaDeAlunosNotas, visibleModalCodigoRepetido, visibleModalSenha, visibleModalDadosSalvos, setVisibleModalDadosSalvos, visibleModalSenhaSE, setVisibleModalSenhaSE } = useContext(GlobalContext)

    useEffect(() => {
        const initialize = async () => {
            await CriarMyNotas();
            const lista = await GetList();
            setListaDeAlunosNotas(lista);
        };

        initialize();
    }, []);

    const totais = () => {
        const total = listaDeAlunosNotas.length
        let classificados = 0
        listaDeAlunosNotas.forEach(item => classificados += item.classificado)
        return { total: total, classificados: classificados, naoClassificados: total - classificados }
    }

    return <View style={styles.container}>
        <View style={{ position: 'absolute', top: 50, center: 0 }}>
            <Text style={[styles.texto2, { color: 'white' }]}>
                Total: {totais().total}
            </Text>
            <Text style={[styles.texto2, { color: 'white', fontSize: 18 }]}>
                C: {totais().classificados}
            </Text>
            <Text style={[styles.texto2, { color: 'white', fontSize: 18 }]}>
                NC: {totais().naoClassificados}
            </Text>
        </View>
        <TouchableOpacity
            onPress={() => setTela(1)}
            style={{ backgroundColor: 'white', borderRadius: 24 }}
        >
            <Image
                style={{ width: 200, height: 200 }}
                source={require('../../assets/icons8-barcode-scanner-100.png')} />
        </TouchableOpacity>
        <TouchableOpacity
            style={{ position: 'absolute', top: 50, right: 20 }}
            onPress={() => setTela(5)}
        >
            <Entypo name={'list'} size={60} color='white' />
        </TouchableOpacity>
        <TouchableOpacity
            style={{ position: 'absolute', top: 50, left: 20 }}
            onPress={() => setVisibleModalEnviar(true)}
        >
            <Entypo name={'mail'} size={60} color='white' />
        </TouchableOpacity>

        <TouchableOpacity
            style={{ height: 40, width: '50%', justifyContent: 'center', alignItems: 'center', borderRadius: 12, backgroundColor: 'white', position: 'absolute', center: 0, bottom: 150 }}
            onPress={() => GetSenhaSE().length > 0 ? setTela(8) : setVisibleModalSenhaSE(true)}
            >
            <Text style={{ fontWeight: 'bold', fontSize: 24 }}>
                SEGUNDA ETAPA
            </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={{ position: 'absolute', bottom: 10, center: 0 }}
            onPress={() => setVisibleModalExcluirLista(true)}
        >
            <Entypo name={'trash'} size={60} color='red' />
        </TouchableOpacity>
        <Modal
            visible={visibleModalEnviar}
            transparent={true}
        >
            <ActionModalEnviar />
        </Modal>
        <Modal
            visible={visibleModalExcluirLista}
            transparent={true}
        >
            <ActionModalExcluirLista />
        </Modal>
        <Modal
            visible={visibleModalAbrindoEmail}
            transparent={true}
        >
            <ActionModalAbrindoEmail />
        </Modal>
        <Modal
            visible={visibleModalCodigoRepetido}
            transparent={true}
        >
            <ActionModalCodigoRepetido />
        </Modal>
        <Modal
            visible={visibleModalDadosSalvos}
            transparent={true}
        >
            <ActionModalDadosSalvos />
        </Modal>
        <Modal
            visible={visibleModalSenhaSE}
            transparent={true}
        >
            <ActionModalSenhaSE />
        </Modal>
    </View>
}
