import { useContext, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { GlobalContext } from '../context'
import styles from '../styles'
import MyButton from './myButton'

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
                <View style={{flexDirection: 'row', width: '90%', justifyContent: 'space-around'}}>
                    <MyButton icon={'circle-with-cross'} color={'red'} onPress={() => setVisibleModalEditarNome(false)}/>
                    <MyButton icon={'check'} onPress={() => [setNome(nomeEditado), setVisibleModalEditarNome(false)]} />
                </View>
            </View>
        </TouchableOpacity>
    </TouchableOpacity>
}

/////////////////////////////////////////////////////////////////

export const ActionModalConfirmar = () => {
    const { setVisibleModalConfirmar, setTela } = useContext(GlobalContext)
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
                <View style={{flexDirection: 'row', width: '90%', justifyContent: 'space-around'}}>
                    <MyButton icon={'circle-with-cross'} color={'red'} onPress={() => [setTela(3), setVisibleModalConfirmar(false)]}/>
                    <MyButton icon={'check'} onPress={() => [setTela(0), alert('Aluno e nota inseridos!'), setVisibleModalConfirmar(false)]} />
                </View>
            </View>
        </TouchableOpacity>
    </TouchableOpacity>
}