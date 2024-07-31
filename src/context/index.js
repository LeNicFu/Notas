import { createContext, useState } from 'react'

export const GlobalContext = createContext({})

const obj = require('../data/listaAlunos.json')

export default function InfoProvider({ children }) {
    const [tela, setTela] = useState(0)
    const [codigo, setCodigo] = useState(null)
    const [nome, setNome] = useState(null)
    const [ano, setAno] = useState(null)
    const [nota, setNota] = useState(null)
    const [municipio, setMunicipio] = useState(null)
    const [escola, setEscola] = useState(null)
    const [visibleModalEditarNome, setVisibleModalEditarNome] = useState(false)
    const [visibleModalConfirmar, setVisibleModalConfirmar] = useState(false)
    const [listaDeAlunosNotas, setListaDeAlunosNotas] = useState([])
    const [fatorDeOrdenacao, setFatorDeOrdenacao] = useState(null)
    const [id, setId] = useState(null)
    const [visibleModalEditar, setVisibleModalEditar] = useState(false)
    const [visibleModalExcluirNome, setVisibleModalExcluirNome] = useState(false)
    
    
    const listaDeAlunos = obj

    return (
        <GlobalContext.Provider value={{
            id, setId,
            ano, setAno,
            tela, setTela,
            // upDate, setUpDate,
            nome, setNome,
            nota, setNota,
            codigo, setCodigo,
            escola, setEscola,
            municipio, setMunicipio,
            fatorDeOrdenacao, setFatorDeOrdenacao,
            listaDeAlunosNotas, setListaDeAlunosNotas,
            visibleModalEditar, setVisibleModalEditar,
            visibleModalConfirmar, setVisibleModalConfirmar,
            visibleModalEditarNome, setVisibleModalEditarNome,
            visibleModalExcluirNome, setVisibleModalExcluirNome,
            listaDeAlunos,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}