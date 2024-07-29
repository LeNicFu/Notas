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

    const listaDeAlunos = obj

    return (
        <GlobalContext.Provider value={{
            ano,
            setAno,
            tela,
            setTela,
            nome,
            setNome,
            nota,
            setNota,
            codigo,
            setCodigo,
            escola,
            setEscola,
            municipio,
            setMunicipio,
            listaDeAlunos,
            visibleModalEditarNome,
            setVisibleModalEditarNome,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}