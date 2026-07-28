import { EncontrarCodigo, EncontrarEscola, lista } from '../components/functions'
import { useContext, useEffect, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import TituloTexto from '../components/tituloTexto'
import MyButton from '../components/myButton'
import { Entypo } from '@expo/vector-icons'
import { GlobalContext } from '../context'
import styles from '../styles'

const codigoEscolaAno = require('../data/paginaAno.json')

export default function Scanned() {
    const { setTela, codigo, nome, setNome, ano, setAno, municipio, setMunicipio, escola, setEscola, setNota, listaDeAlunosNotas, setVisibleModalCodigoRepetido, escolaEscolhida, anoEscolhido, ano6a, ano6b, ano7a, ano7b, ano8a, ano8b, ano9a, ano9b } = useContext(GlobalContext)

    const [proximaTela, setProximaTela] = useState(true)
    const [erro, setErro] = useState(false)

    useEffect(() => {
        if (EncontrarCodigo(codigo, listaDeAlunosNotas)) {
            setTela(0)
            setVisibleModalCodigoRepetido(true)
        } else {
            setNota(null)
            setNome(EncontrarNome(codigo))
            setAno(EncontrarEscola(codigo).Ano)
            setMunicipio(EncontrarEscola(codigo).Municipio)
            setEscola(EncontrarEscola(codigo).NomeDaEscola)
        }
    }, [])

    const ErroMensagem = (mensagem) => {
        setProximaTela(false)
        setErro(true)
        return mensagem
    }

    const EncontrarNome = (codigo) => {
        if (codigo >= 1 && codigo <= codigoEscolaAno[codigoEscolaAno.length - 1].Ano9b) {
            if (EncontrarEscola(codigo).NomeDaEscola == escolaEscolhida) {
                const anoCheck = EncontrarEscola(codigo).Ano
                if (anoCheck == `${anoEscolhido}º ANO`) {
                    const itemComOCodigo = lista.find(item => item.codigo == codigo)
                    if (itemComOCodigo) {
                        return itemComOCodigo.nome
                    } else {
                        return ''
                    }
                } else {
                    return ErroMensagem(`O código pertence a uma prova do ${anoCheck} e não do ${anoEscolhido}º!`)
                }
            } else {
                return ErroMensagem('O código pertence a OUTRA ESCOLA!')
            }
        } else {
            return ErroMensagem('O código não pertence a nenhuma escola!')
        }
    }

    return <View style={[styles.container, { paddingTop: 40 }]}>
        <View style={{ width: '98%', backgroundColor: 'black', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'absolute', top: 10 }}>
            <TouchableOpacity
                onPress={() => setTela(0)}
            >
                <Entypo name={'home'} size={50} color='white' />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setTela(1)}
            >
                <Entypo name={'back'} size={50} color='white' />
            </TouchableOpacity>
        </View>
        {erro ?
            <View style={{ width: '80%', height: '60%', backgroundColor: '#f53016', borderRadius: 24, justifyContent: 'space-evenly', alignItems: 'center' }}>
                <TituloTexto titulo={'ERRO!'} texto={nome} />
                <TituloTexto titulo={'CÓDIGO'} texto={codigo} />
            </View>
            :
            <View style={{ width: '80%', height: '60%', backgroundColor: 'white', borderRadius: 24, justifyContent: 'space-evenly', alignItems: 'center' }}>
                <TituloTexto titulo={'MUNICÍPIO'} texto={municipio} />
                <TituloTexto titulo={'ESCOLA'} texto={escola} />
                <TituloTexto titulo={ano} />
                <TituloTexto titulo={'NOME'} texto={nome} />
                <TituloTexto titulo={'CÓDIGO'} texto={codigo} />
            </View>
        }
        <View style={{ paddingTop: '10%' }}>
            <MyButton icon={'check'} onPress={() => proximaTela === true ? setTela(3) : setTela(1)} />
        </View>
    </View>
}