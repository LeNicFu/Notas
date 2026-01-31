import { useContext, useState } from 'react'
import { GlobalContext } from '../../context'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from '../../styles'
import MyButton from '../myButton'
import { InserirSenha } from '../../data'
import {senhaDeAcesso} from '../../../password'

export const ActionModalSenha = () => {

    const verificaSenha = () => {
        if (senhaDigitada ===  senhaDeAcesso) {
            setVisibleModalSenha(false)
            InserirSenha('Acesso concedido')
        } else {
            alert('Senha incorreta!')
        }
    }

    return <View
        style={styles.modal}
    >
        <TouchableOpacity
            style={styles.containerModal}
            activeOpacity={1}
        >
            <View style={{ alignItems: 'center', width: '100%', justifyContent: 'space-evenly', height: '100%' }}>
                <Text style={styles.texto2}>
                    Digite a senha para ter acesso ao app
                </Text>
                <TextInput
                    style={{ width: '100%', textAlign: 'center', fontSize: 24 }}
                    placeholder='Digite a senha'
                    onChangeText={newSenha => setSenhaDigitada(newSenha.toUpperCase())}
                    multiline={true}
                />
                <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-around' }}>
                    <MyButton icon={'check'} onPress={() => verificaSenha()} />
                </View>
            </View>
        </TouchableOpacity>
    </View>
}