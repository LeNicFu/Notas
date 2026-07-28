import { useContext, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { GlobalContext } from '../../context'
import styles from '../../styles'
import MyButton from '../myButton'
import { ApagarLista, CriarMyNotas, ExcluirNomeDb, GetList, Inserir } from '../../data'
import { ValorNota, ValorNotaSE } from '../functions'
import { colors } from '../../colors'
import TituloTexto from '../tituloTexto'
import { EditarNomeSE, EditarNotaSE } from '../../data/dataSegundaEtapa'
import { GetSenhaSE, InserirSenhaSE } from '../../data/senhaSegundaEtapa'
import EscolaEscolhida from '../escolaEscolhida'
import AnoEscolhido from '../anoEscolhido'

export const ActionModalEditarNome = () => {
    const { setVisibleModalEditarNome, nome, setNome } = useContext(GlobalContext)
    const [nomeEditado, setNomeEditado] = useState(null)
    return <TouchableOpacity
        style={styles.modal}
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
    const { setVisibleModalConfirmar, setTela, codigo, nome, nota, setVisibleModalDadosSalvos } = useContext(GlobalContext)
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
                    <MyButton icon={'check'} onPress={() => [setTela(0), setVisibleModalDadosSalvos(true), setVisibleModalConfirmar(false), Inserir(codigo, nome, nota)]} />
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

export const ActionModalEditarSE = () => {
    const { nome, setNome, nota, setVisibleModalEditarSE, setNota, id } = useContext(GlobalContext)
    const [nomeEditado, setNomeEditado] = useState(nome)

    return <TouchableOpacity
        style={styles.modal}
        onPress={() => setVisibleModalEditarSE(false)}
    >
        <TouchableOpacity
            style={[styles.containerModal, { borderWidth: 3 }]}
            activeOpacity={1}
        >
            <View style={{ alignItems: 'center', width: '100%', justifyContent: 'space-evenly', height: '100%' }}>
                <Text style={styles.texto2}>
                    NOME
                </Text>
                <TextInput
                    style={[styles.nota, { color: 'blue' }]}
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
                    onChangeText={newNota => setNota(ValorNotaSE(newNota.replace(',', '.').replace(/[^0-9.]/g, '')))}
                    keyboardType='number-pad'
                    defaultValue={nota}
                />

                <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-around' }}>
                    <MyButton icon={'circle-with-cross'} color={colors.cancelar} onPress={() => setVisibleModalEditarSE(false)} />
                    <MyButton icon={'check'} onPress={() => [EditarNomeSE(nomeEditado, id), EditarNotaSE(nota, id), setVisibleModalEditarSE(false), nota.length === 0 ? alert('A nota NÃO foi registrada!') : null]} />
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
    const [confirmarEnvio, setConfirmarEnvio] = useState('')

    const Confirma = () => {
        if (confirmarEnvio.toUpperCase() === 'OLIMAT') {
            setVisibleModalExcluirLista(false)
            ApagarLista()
            CriarMyNotas()
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
                    style={{ width: '100%', textAlign: 'center', fontSize: 24 }}
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

/////////////////////////////////////////////////////////////////
export const ActionModalDadosSalvos = () => {
    const { setVisibleModalDadosSalvos, codigo, municipio, escola, ano, nome, nota } = useContext(GlobalContext)

    return <TouchableOpacity
        style={styles.modal}
        onPress={() => setVisibleModalDadosSalvos(false)}
    >
        <View style={{ width: '80%', height: '60%', backgroundColor: '#B1F793', borderRadius: 24, justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Text style={styles.texto2}>
                DADOS INSERIDOS
            </Text>
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
    </TouchableOpacity>
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

export const ActionModalSenhaSE = () => {
    const { setVisibleModalSenhaSE, setTela } = useContext(GlobalContext)
    const [senha, setSenha] = useState('')

    const confirmar = (senha) => {
        InserirSenhaSE(senha)
        if (GetSenhaSE().length === 1) {
            setVisibleModalSenhaSE(false)
            setTela(8)
        } else {
            alert('Senha incorreta!')
        }
    }

    return <TouchableOpacity
        style={styles.modal}
        onPress={() => setVisibleModalSenhaSE(false)}
    >
        <TouchableOpacity
            style={styles.containerModal}
            activeOpacity={1}
        >
            <View style={{ alignItems: 'center', width: '100%', justifyContent: 'space-evenly', height: '100%', borderWidth: 4, borderColor: 'blue', borderRadius: 20 }}>
                <Text style={styles.texto2}>
                    Digite a senha para ter acesso aos dados da segunda etapa. Esse processo será feito apenas no primeiro acesso.
                </Text>
                <TextInput
                    style={styles.nota}
                    placeholder='Digite a senha'
                    onChangeText={newSenha => setSenha(newSenha.toUpperCase())}
                />
                <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-around' }}>
                    <MyButton icon={'circle-with-cross'} color={colors.cancelar} onPress={() => setVisibleModalSenhaSE(false)} />
                    <MyButton icon={'check'} onPress={() => confirmar(senha)} />
                </View>
            </View>
        </TouchableOpacity>
    </TouchableOpacity>
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

export const ActionModalEscolherEscola = () => {
    const { setVisibleModalEscolherEscola,  } = useContext(GlobalContext)

    return <TouchableOpacity
        style={styles.modal}
        onPress={() => setVisibleModalEscolherEscola(false)}
    >
        <TouchableOpacity
            style={styles.containerModalEscolas}
            activeOpacity={1}
        >
            <EscolaEscolhida />
        </TouchableOpacity>
    </TouchableOpacity>
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

export const ActionModalEscolherAno = () => {
    const { setVisibleModalEscolherAno } = useContext(GlobalContext)
    return <TouchableOpacity
        style={styles.modal}
        onPress={() => setVisibleModalEscolherAno(false)}
    >
        <TouchableOpacity
            style={styles.containerModalAno}
            activeOpacity={1}
        >
            <AnoEscolhido />
        </TouchableOpacity>
    </TouchableOpacity>
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

export const ActionModalToScan = () => {
    const { setVisibleModalToScan } = useContext(GlobalContext)
    return <TouchableOpacity
        style={styles.modal}
        onPress={() => setVisibleModalToScan(false)}
    >
        <TouchableOpacity
            style={styles.containerModal}
            activeOpacity={1}
            onPress={() => setVisibleModalToScan(false)}
        >
            <View style={{ alignItems: 'center', width: '100%', justifyContent: 'space-evenly', height: '100%' }}>
                <Text style={styles.texto2}>
                    É preciso escolher a escola e o ano!
                </Text>
            </View>
        </TouchableOpacity>
    </TouchableOpacity>
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
