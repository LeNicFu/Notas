import { createContext, useState } from 'react'

export const GlobalContext = createContext({})

const obj = require('../data/listaAlunos.json')

export default function InfoProvider({ children }) {
    const [id, setId] = useState(null)
    const [tela, setTela] = useState(0)
    const [ano, setAno] = useState(null)
    const [nome, setNome] = useState(null)
    const [nota, setNota] = useState(null)
    const [codigo, setCodigo] = useState(null)
    const [escola, setEscola] = useState(null)
    const [centro, setCentro] = useState(null)
    const [municipio, setMunicipio] = useState(null)
    const [ano6a, setAno6a] = useState(null)
    const [ano6b, setAno6b] = useState(null)
    const [ano7a, setAno7a] = useState(null)
    const [ano7b, setAno7b] = useState(null)
    const [ano8a, setAno8a] = useState(null)
    const [ano8b, setAno8b] = useState(null)
    const [ano9a, setAno9a] = useState(null)
    const [ano9b, setAno9b] = useState(null)
    const [anoSegundaEtapa, setAnoSegundaEtapa] = useState(null)
    const [fatorDeOrdenacao, setFatorDeOrdenacao] = useState(null)
    const [listaDeAlunosNotas, setListaDeAlunosNotas] = useState([])
    const [anoEscolhido, setAnoEscolhido] = useState('Escolha o ano')
    const [listasSegundaEtapa, setListasSegundaEtapa] = useState(null)
    const [visibleModalEditar, setVisibleModalEditar] = useState(false)
    const [visibleModalEnviar, setVisibleModalEnviar] = useState(false)
    const [visibleModalToScan, setVisibleModalToScan] = useState(false)
    const [visibleModalSenhaSE, setVisibleModalSenhaSE] = useState(false)
    const [visibleModalEditarSE, setVisibleModalEditarSE] = useState(false)
    const [visibleModalEnviarSE, setVisibleModalEnviarSE] = useState(false)
    const [visibleModalConfirmar, setVisibleModalConfirmar] = useState(false)
    const [escolaEscolhida, setEscolaEscolhida] = useState('Escolha a escola')
    const [visibleModalEditarNome, setVisibleModalEditarNome] = useState(false)
    const [visibleModalExcluirNome, setVisibleModalExcluirNome] = useState(false)
    const [visibleModalDadosSalvos, setVisibleModalDadosSalvos] = useState(false)
    const [visibleModalEscolherAno, setVisibleModalEscolherAno] = useState(false)
    const [visibleModalExcluirLista, setVisibleModalExcluirLista] = useState(false)
    const [visibleModalAbrindoEmail, setVisibleModalAbrindoEmail] = useState(false)
    const [visibleModalCodigoRepetido, setVisibleModalCodigoRepetido] = useState(false)
    const [visibleModalEscolherEscola, setVisibleModalEscolherEscola] = useState(false)


    const listaDeAlunos = obj

    return (
        <GlobalContext.Provider value={{
            id, setId,
            ano, setAno,
            tela, setTela,
            nome, setNome,
            nota, setNota,
            ano6a, setAno6a,
            ano6b, setAno6b,
            ano7a, setAno7a,
            ano7b, setAno7b,
            ano8a, setAno8a,
            ano8b, setAno8b,
            ano9a, setAno9a,
            ano9b, setAno9b,
            codigo, setCodigo,
            escola, setEscola,
            centro, setCentro,
            municipio, setMunicipio,
            anoEscolhido, setAnoEscolhido,
            anoSegundaEtapa, setAnoSegundaEtapa,
            escolaEscolhida, setEscolaEscolhida,
            fatorDeOrdenacao, setFatorDeOrdenacao,
            listaDeAlunosNotas, setListaDeAlunosNotas,
            visibleModalEditar, setVisibleModalEditar,
            visibleModalEnviar, setVisibleModalEnviar,
            listasSegundaEtapa, setListasSegundaEtapa,
            visibleModalToScan, setVisibleModalToScan,
            visibleModalSenhaSE, setVisibleModalSenhaSE,
            visibleModalEditarSE, setVisibleModalEditarSE,
            visibleModalEnviarSE, setVisibleModalEnviarSE,
            visibleModalConfirmar, setVisibleModalConfirmar,
            visibleModalEditarNome, setVisibleModalEditarNome,
            visibleModalExcluirNome, setVisibleModalExcluirNome,
            visibleModalDadosSalvos, setVisibleModalDadosSalvos,
            visibleModalEscolherAno, setVisibleModalEscolherAno,
            visibleModalExcluirLista, setVisibleModalExcluirLista,
            visibleModalAbrindoEmail, setVisibleModalAbrindoEmail,
            visibleModalCodigoRepetido, setVisibleModalCodigoRepetido,
            visibleModalEscolherEscola, setVisibleModalEscolherEscola,
            listaDeAlunos
        }}>
            {children}
        </GlobalContext.Provider>
    )
}