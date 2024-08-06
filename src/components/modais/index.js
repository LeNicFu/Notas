import { useContext, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { GlobalContext } from '../../context'
import styles from '../../styles'
import MyButton from '../myButton'
import { ApagarLista, ExcluirNomeDb, GetList, Inserir } from '../../data'
import { ValorNota } from '../functions'
import { colors } from '../../colors'


export const ActionModalEditarNome = () => {
    const { setVisibleModalEditarNome, nome, setNome } = useContext(GlobalContext)
    const [nomeEditado, setNomeEditado] = useState(null)
    return <TouchableOpacity
        style={styles.modal}
        onPress={() => setVisibleModalEditarNome(false)}
    >
        <TouchableOpacity
            style={styles.containerModal}
            activeOpacity={1}
        >
            <View style={{ alignItems: 'center', width: '100%', justifyContent: 'space-evenly', height: '100%' }}>
                <Text style={styles.texto2}>
                    Editar nome
                </Text>
                <TextInput
                    style={styles.nota}
                    placeholder='Digite o nome'
                    onChangeText={newName => setNomeEditado(newName.toUpperCase())}
                    // keyboardType='default'
                    defaultValue={nome}
                    multiline={true}
                />
                <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-around' }}>
                    <MyButton icon={'circle-with-cross'} color={colors.cancelar} onPress={() => setVisibleModalEditarNome(false)} />
                    <MyButton icon={'check'} onPress={() => [setNome(nomeEditado), setVisibleModalEditarNome(false)]} />
                </View>
            </View>
        </TouchableOpacity>
    </TouchableOpacity>
}

/////////////////////////////////////////////////////////////////

export const ActionModalConfirmar = () => {
    const { setVisibleModalConfirmar, setTela, codigo, nome, nota } = useContext(GlobalContext)
    return <TouchableOpacity
        style={styles.modal}
        onPress={() => setVisibleModalConfirmar(false)}
    >
        <TouchableOpacity
            style={styles.containerModal}
            activeOpacity={1}
        >
            <View style={{ alignItems: 'center', width: '100%', justifyContent: 'space-evenly', height: '100%', }}>
                <Text style={styles.texto2}>
                    Deseja inserir o aluno sem nome?
                </Text>
                <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-around' }}>
                    <MyButton icon={'circle-with-cross'} color={colors.cancelar} onPress={() => [setTela(3), setVisibleModalConfirmar(false)]} />
                    <MyButton icon={'check'} onPress={() => [setTela(0), alert('Aluno e nota inseridos!'), setVisibleModalConfirmar(false), Inserir(codigo, nome, nota)]} />
                </View>
            </View>
        </TouchableOpacity>
    </TouchableOpacity>
}

/////////////////////////////////////////////////////////////////

export const ActionModalEditar = () => {
    const { nome, setNome, nota, setVisibleModalEditar, setNota } = useContext(GlobalContext)
    const [nomeEditado, setNomeEditado] = useState(nome)

    return <TouchableOpacity
        style={styles.modal}
        onPress={() => setVisibleModalEditar(false)}
    >
        <TouchableOpacity
            style={styles.containerModal}
            activeOpacity={1}
        >
            <View style={{ alignItems: 'center', width: '100%', justifyContent: 'space-evenly', height: '100%' }}>
                <Text style={styles.texto2}>
                    NOME
                </Text>
                <TextInput
                    style={styles.nota}
                    placeholder='Digite o nome'
                    onChangeText={newName => setNomeEditado(newName.toUpperCase())}
                    defaultValue={nome}
                    multiline={true}
                />
                <Text style={styles.texto2}>
                    NOTA
                </Text>
                <TextInput
                    style={[styles.nota, { fontSize: 28 }]}
                    placeholder='Nova nota'
                    onChangeText={newNota => setNota(ValorNota(newNota.replace(/[^0-9]/g, '')))}
                    keyboardType='number-pad'
                    defaultValue={nota}
                />

                <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-around' }}>
                    {/* <MyButton icon={'circle-with-cross'} color={colors.cancelar} onPress={() => setVisibleModalEditar(false)} /> */}
                    <MyButton icon={'check'} onPress={() => [setNome(nomeEditado), setVisibleModalEditar(false)]} />
                </View>
            </View>
        </TouchableOpacity>
    </TouchableOpacity>
}

/////////////////////////////////////////////////////////////////
export const ActionModalExcluirNome = () => {
    const { nome, setVisibleModalExcluirNome, id, setListaDeAlunosNotas, setTela } = useContext(GlobalContext)

    return <TouchableOpacity
        style={styles.modal}
        onPress={() => setVisibleModalExcluirNome(false)}
    >
        <TouchableOpacity
            style={styles.containerModal}
            activeOpacity={1}
        >
            <View style={{ alignItems: 'center', width: '100%', justifyContent: 'space-evenly', height: '100%' }}>
                <Text style={styles.texto2}>
                    Ao confirmar você excluirá
                </Text>
                <Text style={styles.texto2}>
                    {nome}
                </Text>
                <Text style={styles.texto2}>
                    da lista
                </Text>
                <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-around' }}>
                    <MyButton icon={'circle-with-cross'} color={colors.cancelar} onPress={() => setVisibleModalExcluirNome(false)} />
                    <MyButton icon={'trash'} color={'red'} onPress={() => [ExcluirNomeDb(id), setTela(6), setListaDeAlunosNotas(GetList()), setVisibleModalExcluirNome(false)]} />
                </View>
            </View>
        </TouchableOpacity>
    </TouchableOpacity>
}

/////////////////////////////////////////////////////////////////
export const ActionModalExcluirLista = () => {
    const { setVisibleModalExcluirLista, setListaDeAlunosNotas } = useContext(GlobalContext)
    const [confirmarEnvio, setConfirmarEnvio] =useState('')

    const Confirma = () => {
        if(confirmarEnvio.toUpperCase() === 'OLIMAT'){
            setVisibleModalExcluirLista(false)
            ApagarLista()
            setListaDeAlunosNotas([])
            alert('A lista foi apagada!')
        } else {
            alert('É preciso digitar OLIMAT para confirmar.')
        }
    }


    return <TouchableOpacity
        style={styles.modal}
        onPress={() => setVisibleModalExcluirLista(false)}
    >
        <TouchableOpacity
            style={styles.containerModal}
            activeOpacity={1}
        >
            <View style={{ alignItems: 'center', width: '100%', justifyContent: 'space-evenly', height: '100%' }}>
                <Text style={styles.texto2}>
                    Ao confirmar, você excluirá toda a lista.{'\n'}
                    Digite OLIMAT para confirmar
                </Text>
                <TextInput
                    style={{width: '100%', textAlign: 'center', fontSize: 24}}
                    placeholder='OLIMAT'
                    onChangeText={newName => setConfirmarEnvio(newName.toUpperCase())}
                    multiline={true}
                />
                <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-around' }}>
                    <MyButton icon={'circle-with-cross'} color={colors.cancelar} onPress={() => setVisibleModalExcluirLista(false)} />
                    <MyButton icon={'trash'} color={'red'} onPress={() => Confirma()} />
                </View>
            </View>
        </TouchableOpacity>
    </TouchableOpacity>
}

/////////////////////////////////////////////////////////////////
export const ActionModalCodigoRepetido = () => {
    const { setVisibleModalCodigoRepetido, codigo } = useContext(GlobalContext)

    return <TouchableOpacity
        style={styles.modal}
        onPress={() => setVisibleModalCodigoRepetido(false)}
    >
        <TouchableOpacity
            style={styles.containerModal}
            activeOpacity={1}
        >
            <View style={{ alignItems: 'center', width: '100%', justifyContent: 'space-evenly', height: '100%' }}>
                <Text style={styles.texto2}>
                   O código {codigo} já foi registrado anteriormente!
                </Text>
                <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-around' }}>
                    <MyButton icon={'check'} onPress={() => setVisibleModalCodigoRepetido(false)} />
                </View>
            </View>
        </TouchableOpacity>
    </TouchableOpacity>
}