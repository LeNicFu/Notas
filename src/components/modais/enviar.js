import { useContext, useEffect, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { GlobalContext } from '../../context'
import styles from '../../styles'
import MyButton from '../myButton'
import { colors } from '../../colors'
import * as MailComposer from 'expo-mail-composer'
import { senhaDeAcesso } from '../../../password'

export const ActionModalEnviar = () => {
    const { setVisibleModalEnviar, listaDeAlunosNotas, setVisibleModalAbrindoEmail } = useContext(GlobalContext)
    const [alunos, setAlunos] = useState(listaDeAlunosNotas)
    const [senha, setSenha] = useState('')
    const passWord = senhaDeAcesso


    useEffect(() => {
        OrdenadarNotas()
    }, [])

    function OrdenadarNotas() {
        alunos.sort(function (a, b) {
            if (a.nota > b.nota) {
                return -1
            }
            if (a.nota < b.nota) {
                return 1
            }
            if (a.nota = b.nota) {
                return 0
            }
        })
    }

    const enviarEmail = async () => {
        const lista = JSON.stringify(alunos)

        const email = {
            recipients: ['olimat@uesc.br', 'rrsilva@uesc.br'],
            subject: `Lista com ${alunos.length} alunos`,
            body: `${lista}`,
        }

        await MailComposer.composeAsync(email)
    }

    const enviando = () => {
        setTimeout(() => setVisibleModalAbrindoEmail(false), 2000)
    }

    const confirmar = (senha) => {
        if (senha == passWord) {
            setVisibleModalEnviar(false)
            enviarEmail()
            setVisibleModalAbrindoEmail(true)
            enviando()
        } else {
            alert('Senha incorreta!')
        }
    }

    return <TouchableOpacity
        style={styles.modal}
        onPress={() => setVisibleModalEnviar(false)}
    >
        <TouchableOpacity
            style={styles.containerModal}
            activeOpacity={1}
        >
            <View style={{ alignItems: 'center', width: '100%', justifyContent: 'space-evenly', height: '100%' }}>
                <Text style={styles.texto2}>
                    Enviar a lista por e-mail
                </Text>
                <TextInput
                    style={styles.nota}
                    placeholder='Digite a senha'
                    onChangeText={newSenha => setSenha(newSenha.toUpperCase())}
                />
                <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-around' }}>
                    <MyButton icon={'circle-with-cross'} color={colors.cancelar} onPress={() => setVisibleModalEnviar(false)} />
                    <MyButton icon={'mail'} onPress={() => confirmar(senha)} />
                </View>
            </View>
        </TouchableOpacity>
    </TouchableOpacity>
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

export const ActionModalEnviarSE = () => {
    const { setVisibleModalEnviarSE, listasSegundaEtapa, setVisibleModalAbrindoEmail } = useContext(GlobalContext)
    const [senha, setSenha] = useState('')
    const passWord = senhaDeAcesso
    
    const enviarEmail = async () => {
        const lista = JSON.stringify(listasSegundaEtapa)

        const email = {
            recipients: ['olimat@uesc.br', 'rrsilva@uesc.br'],
            subject: `Lista com ${listasSegundaEtapa.length} notas`,
            body: `${lista}`
        }

        await MailComposer.composeAsync(email)
    }

    const enviando = () => {
        setTimeout(() => setVisibleModalAbrindoEmail(false), 2000)
    }

    const confirmar = (senha) => {
        if (senha == passWord) {
            setVisibleModalEnviarSE(false)
            enviarEmail()
            setVisibleModalAbrindoEmail(true)
            enviando()
        } else {
            alert('Senha incorreta!')
        }
    }

    return <TouchableOpacity
        style={styles.modal}
        onPress={() => setVisibleModalEnviarSE(false)}
    >
        <TouchableOpacity
            style={styles.containerModal}
            activeOpacity={1}
        >
            <View style={{ alignItems: 'center', width: '100%', justifyContent: 'space-evenly', height: '100%', borderWidth: 4, borderColor: 'blue', borderRadius: 20 }}>
                <Text style={styles.texto2}>
                    Enviar a lista por e-mail
                </Text>
                <TextInput
                    style={styles.nota}
                    placeholder='Digite a senha'
                    onChangeText={newSenha => setSenha(newSenha.toUpperCase())}
                />
                <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-around' }}>
                    <MyButton icon={'circle-with-cross'} color={colors.cancelar} onPress={() => setVisibleModalEnviarSE(false)} />
                    <MyButton icon={'mail'} onPress={() => confirmar(senha)} />
                </View>
            </View>
        </TouchableOpacity>
    </TouchableOpacity>
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

export const ActionModalAbrindoEmail = () => {
    const { visibleModalAbrindoEmail, setVisibleModalAbrindoEmail } = useContext(GlobalContext)

    return <TouchableOpacity
        style={styles.modal}
        onPress={() => setVisibleModalAbrindoEmail(false)}
    >
        <TouchableOpacity
            style={[styles.containerModal, {height: 100}]}
            activeOpacity={1}
        >
            <View style={{ alignItems: 'center', width: '100%', justifyContent: 'space-evenly', height: '100%', borderWidth: 3, borderColor: 'blue', borderRadius: 20 }}>
                <Text style={styles.texto2}>
                    Abrindo o app de e-mail...
                </Text>
            </View>
        </TouchableOpacity>
    </TouchableOpacity>
}