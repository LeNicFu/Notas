import { TouchableOpacity, Text, FlatList } from 'react-native'
import styles from '../styles'
import TituloTexto from './tituloTexto'
import { useContext } from 'react'
import { GlobalContext } from '../context'
import { Entypo } from '@expo/vector-icons'

const paginaAno = require('../data/paginaAno.json')

export default function EscolaEscolhida() {
    const { setVisibleModalEscolherEscola, setEscolaEscolhida, ano6a, setAno6a, ano6b, setAno6b, ano7a, setAno7a, ano7b, setAno7b, ano8a, setAno8a, ano8b, setAno8b, ano9a, setAno9a, ano9b, setAno9b } = useContext(GlobalContext)

    const escolas = [...paginaAno]

    escolas.sort(function (a, b) {
        return a.NomeDaEscola.localeCompare(b.NomeDaEscola, 'pt', { sensitivity: 'base' })
    })

    const Escolha = (escola) => {
        for(let i = 0; i < paginaAno.length; i++) {
            const item = paginaAno[i]
            if(item.NomeDaEscola == escola) {
                setAno6a(item.Ano6a)
                setAno6b(item.Ano6b)
                setAno7a(item.Ano7a)
                setAno7b(item.Ano7b)
                setAno8a(item.Ano8a)
                setAno8b(item.Ano8b)
                setAno9a(item.Ano9a)
                setAno9b(item.Ano9b)
                break
            }
        }
    }

    const EstiloLista = (escola) => {
        return <TouchableOpacity style={styles.containerListas}
            onPress={() => [setVisibleModalEscolherEscola(false), setEscolaEscolhida(escola), Escolha(escola)]}
        >
            <Text style={[styles.texto1, { alignContent: 'center' }]}>
                {escola}
            </Text>
        </TouchableOpacity>
    }

    return <>
        <TituloTexto titulo={'ESCOLAS'} />
        <FlatList
            style={{ width: '100%', backgroundColor: 'black' }}
            data={escolas}
            keyExtractor={(item) => escolas.indexOf(item)}
            renderItem={({ item }) => EstiloLista(item.NomeDaEscola)}

        />
        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}
            onPress={() => setVisibleModalEscolherEscola(false)}
        >
            <Entypo name={'back'} size={50} color='black' />
        </TouchableOpacity>
    </>
}