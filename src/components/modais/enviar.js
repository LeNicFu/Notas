import { useContext, useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { GlobalContext } from '../../context'
import styles from '../../styles'
import MyButton from '../myButton'
import { colors } from '../../colors'
import * as MailComposer from 'expo-mail-composer'

export const ActionModalEnviar = () => {
    const { setVisibleModalEnviar, listaDeAlunosNotas, setListaDeAlunosNotas, setVisibleModalAbrindoEmail } = useContext(GlobalContext)
    const [alunos, setAlunos] = useState(listaDeAlunosNotas)

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

    return <TouchableOpacity
        style={styles.modal}n
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
                <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-around' }}>
                    <MyButton icon={'circle-with-cross'} color={colors.cancelar} onPress={() => setVisibleModalEnviar(false)} />
                    <MyButton icon={'mail'} onPress={() => [setVisibleModalEnviar(false), enviarEmail(), setVisibleModalAbrindoEmail(true), enviando()]} />
                </View>
            </View>
        </TouchableOpacity>
    </TouchableOpacity>
}

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
            <View style={{ alignItems: 'center', width: '100%', justifyContent: 'space-evenly', height: '100%' }}>
                <Text style={styles.texto2}>
                    Abrindo o app de e-mail...
                </Text>
            </View>
        </TouchableOpacity>
    </TouchableOpacity>
}