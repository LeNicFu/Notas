import { View } from 'react-native'
import styles from '../styles'
import MyButton from '../components/myButton'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../context'
import { EncontrarEscola, EncontrarNome } from '../components/functions'
import TituloTexto from '../components/tituloTexto'

export default function Scanned() {
    const { setTela, codigo, nome, setNome, ano, setAno, municipio, setMunicipio, escola, setEscola, setNota } = useContext(GlobalContext)

    useEffect(() => {
        setNota(null)
        setNome(EncontrarNome(codigo))
        setAno(EncontrarEscola(codigo).Ano)
        setMunicipio(EncontrarEscola(codigo).Municipio)
        setEscola(EncontrarEscola(codigo).NomeDaEscola)
    }, [])

    return <View style={[styles.container, { paddingTop: 40 }]}>
        <View style={{ width: '80%', height: '60%', backgroundColor: 'white', borderRadius: 24, justifyContent: 'space-evenly', alignItems: 'center' }}>
            <TituloTexto titulo={'MUNICÍPIO'} texto={municipio}/>
            <TituloTexto titulo={'ESCOLA'} texto={escola}/>
            <TituloTexto titulo={ano}/>
            <TituloTexto titulo={'NOME'} texto={nome} />
            <TituloTexto titulo={'CÓDIGO'} texto={codigo} />
        </View>
        <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'space-between', paddingTop: '10%' }}>
            <MyButton icon={'back'} color={`white`} onPress={() => setTela(1)} />
            <MyButton icon={'check'} onPress={() => setTela(3)} />
        </View>
        <View style={{ paddingTop: 20 }}>
            <MyButton icon={'home'} onPress={() => setTela(0)} />
        </View>
    </View>
}