import { createContext, useState } from 'react'

export const GlobalContext = createContext({})

const obj = require('../data/listaAlunos.json')

export default function InfoProvider({ children }) {
    const [tela, setTela] = useState(0)
    const [codigo, setCodigo] = useState(null)
    const [nome, setNome] = useState(null)
    const listaDeAlunos = obj

    return (
        <GlobalContext.Provider value={{
            tela,
            setTela,
            nome,
            setNome,
            codigo,
            setCodigo,
            listaDeAlunos
        }}>
            {children}
        </GlobalContext.Provider>
    )
}