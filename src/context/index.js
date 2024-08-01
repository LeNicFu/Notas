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
    const [municipio, setMunicipio] = useState(null)
    const [fatorDeOrdenacao, setFatorDeOrdenacao] = useState(null)
    const [listaDeAlunosNotas, setListaDeAlunosNotas] = useState([])
    const [visibleModalEditar, setVisibleModalEditar] = useState(false)
    const [visibleModalEnviar, setVisibleModalEnviar] = useState(false)
    const [visibleModalConfirmar, setVisibleModalConfirmar] = useState(false)
    const [visibleModalEditarNome, setVisibleModalEditarNome] = useState(false)
    const [visibleModalExcluirNome, setVisibleModalExcluirNome] = useState(false)
    const [visibleModalExcluirLista, setVisibleModalExcluirLista] = useState(false)
    const [visibleModalAbrindoEmail, setVisibleModalAbrindoEmail] = useState(false)
    const [visibleModalCodigoRepetido, setVisibleModalCodigoRepetido] = useState(false)
    
    const listaDeAlunos = obj

    return (
        <GlobalContext.Provider value={{
            id, setId,
            ano, setAno,
            tela, setTela,
            nome, setNome,
            nota, setNota,
            codigo, setCodigo,
            escola, setEscola,
            municipio, setMunicipio,
            fatorDeOrdenacao, setFatorDeOrdenacao,
            listaDeAlunosNotas, setListaDeAlunosNotas,
            visibleModalEditar, setVisibleModalEditar,
            visibleModalEnviar, setVisibleModalEnviar,
            visibleModalConfirmar, setVisibleModalConfirmar,
            visibleModalEditarNome, setVisibleModalEditarNome,
            visibleModalExcluirNome, setVisibleModalExcluirNome,
            visibleModalExcluirLista, setVisibleModalExcluirLista,
            visibleModalAbrindoEmail, setVisibleModalAbrindoEmail,
            visibleModalCodigoRepetido, setVisibleModalCodigoRepetido,
            listaDeAlunos,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}