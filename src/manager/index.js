import { useContext } from 'react'
import { GlobalContext } from '../context'
import MyScanner from '../screens/cam'
import Home from '../screens/home'
import Scanned from '../screens/scanned'
import Notas from '../screens/notas'

export default function Manager() {
    const { tela } = useContext(GlobalContext)
    if (tela === 0) {
        return <Home />
    } else if (tela === 1) {
        return <MyScanner />
    } else if (tela === 2) {
        return <Scanned />
    } else if (tela === 3) {
        return <Notas />
    }
}