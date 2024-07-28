import { useContext } from 'react'
import { GlobalContext } from '../context'
import MyScanner from '../screens/cam'
import Home from '../screens/home'

export default function Manager() {
    const { tela } = useContext(GlobalContext)
    if (tela === 0) {
        return <Home />
    } else if (tela === 1) {
        return <MyScanner />
    }
}