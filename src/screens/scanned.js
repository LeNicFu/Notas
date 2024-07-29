import { View } from 'react-native'
import styles from '../styles'
import MyButton from '../components/myButton'
import { useContext } from 'react'
import { GlobalContext } from '../context'
import { EncontrarEscola, EncontrarNome } from '../components/functions'
import TituloTexto from '../components/tituloTexto'

export default function Scanned() {
    const { setTela, codigo, listaDeAlunos } = useContext(GlobalContext)
    return <View style={[styles.container, { paddingTop: 40 }]}>
        <View style={{ width: '80%', height: '60%', backgroundColor: 'white', borderRadius: 24, justifyContent: 'space-evenly', alignItems: 'center' }}>
            <TituloTexto titulo={'MUNICÍPIO'} texto={EncontrarEscola(codigo).Municipio}/>
            <TituloTexto titulo={'ESCOLA'} texto={EncontrarEscola(codigo).NomeDaEscola}/>
            <TituloTexto titulo={EncontrarEscola(codigo).Ano}/>
            <TituloTexto titulo={'NOME'} texto={EncontrarNome(listaDeAlunos, codigo)} />
            <TituloTexto titulo={'CÓDIGO'} texto={codigo} />
        </View>
        <View style={{ width: '40%', flexDirection: 'row', justifyContent: 'space-between' }}>
            <MyButton icon={'back'} color={`red`} onPress={() => setTela(1)} />
            <MyButton icon={'check'} onPress={() => setTela(3)} />
        </View>
        <View style={{ paddingTop: 20 }}>
            <MyButton icon={'home'} onPress={() => setTela(0)} />
        </View>
    </View>
}