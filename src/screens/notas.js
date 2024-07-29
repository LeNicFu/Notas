import { Modal, TextInput, View } from 'react-native'
import styles from '../styles'
import MyButton from '../components/myButton'
import { useContext, useState } from 'react'
import { GlobalContext } from '../context'
import { ValorNota } from '../components/functions'
import TituloTexto from '../components/tituloTexto'
import { ActionModalEditarNome } from '../components/modais'

export default function Notas() {
    const { setTela, setNota, municipio, escola, ano, nome, codigo, nota,visibleModalEditarNome, setVisibleModalEditarNome} = useContext(GlobalContext)

    return <View style={[styles.container, { paddingTop: 20 }]}>
        <View style={{ width: '80%', height: '70%', backgroundColor: 'white', borderRadius: 24, justifyContent: 'space-evenly', alignItems: 'center' }}>
            <TituloTexto titulo={'MUNICÍPIO'} texto={municipio} />
            <TituloTexto titulo={'ESCOLA'} texto={escola} />
            <TituloTexto titulo={ano} />
            <TituloTexto titulo={'NOME'} texto={nome} />
            <TituloTexto titulo={'CÓDIGO'} texto={codigo} />
            <TituloTexto titulo={'NOTA'} />
            <TextInput
                style={styles.nota}
                placeholder='Digite a nota'
                onChangeText={newNota => setNota(ValorNota(newNota.replace(/[^0-9]/g, '')))}
                keyboardType='numeric'
                defaultValue={nota}
            />
        </View>
        <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-around', paddingTop: '15%' }}>
            <MyButton icon={'circle-with-cross'} color={'red'} onPress={() => setTela(0)} />
            <MyButton icon={'edit'} color={`white`} onPress={() => [setVisibleModalEditarNome(true), console.log('Modal visível')]}/>
            <MyButton icon={'check'} onPress={() => setTela(3)} />
        </View>
        <Modal
            visible={visibleModalEditarNome}
            transparent={true}
        >
            <ActionModalEditarNome />
        </Modal>
    </View>
}