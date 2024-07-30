import { Modal, Text, View } from 'react-native'
import TituloTexto from '../components/tituloTexto'
import styles from '../styles'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../context'
import MyButton from '../components/myButton'
import { ActionModalConfirmar } from '../components/modais'
import { Inserir } from '../data'
import { EliminaZero } from '../components/functions'

export default function Confirmacao() {
    const { municipio, escola, ano, nome, codigo, nota, setTela, visibleModalConfirmar, setVisibleModalConfirmar, setNota } = useContext(GlobalContext)

    useEffect(() => {
        setNota(EliminaZero(nota))
    }, [])

    return <View style={[styles.containerConfirmacao, { paddingTop: 20 }]}>
        <View style={{ width: '80%', height: '70%', backgroundColor: 'white', borderRadius: 24, justifyContent: 'space-evenly', alignItems: 'center' }}>
            <TituloTexto titulo={'MUNICÍPIO'} texto={municipio} />
            <TituloTexto titulo={'ESCOLA'} texto={escola} />
            <TituloTexto titulo={ano} />
            <TituloTexto titulo={'NOME'} texto={nome} />
            <TituloTexto titulo={'CÓDIGO'} texto={codigo} />
            <View>
                <Text style={styles.texto2}>NOTA</Text>
                <Text
                    style={[styles.texto1, { fontSize: 32, fontWeight: 'bold', color: nota >= 8 ? 'blue' : 'red' }]}>{nota}
                </Text>
            </View>
        </View>
        <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-around', paddingTop: '15%' }}>
            <View style={{ backgroundColor: 'white', borderRadius: 12 }}>
                <MyButton icon={'back'} color={'red'} onPress={() => setTela(3)} />
            </View>
            <View style={{ backgroundColor: 'white', borderRadius: 12 }}>
                <MyButton icon={'check'} onPress={() =>
                    nome ?
                        [setTela(0), alert('Aluno e nota inseridos!'), Inserir(codigo, nome, nota)]
                        : setVisibleModalConfirmar(true)
                } />
            </View>
        </View>
        <Modal
            visible={visibleModalConfirmar}
            transparent={true}
        >
            <ActionModalConfirmar />
        </Modal>
    </View>
}