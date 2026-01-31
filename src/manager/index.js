import { useContext } from 'react'
import { GlobalContext } from '../context'
import ViewBars from './viewBars'
import MyScanner from '../screens/cam'
import Home from '../screens/home'
import Scanned from '../screens/scanned'
import Notas from '../screens/notas'
import Confirmacao from '../screens/confirmacao'
import Listas from '../screens/listas'
import ListaOrdenada from '../screens/listaOrdenada'
import Editar from '../components/editar'
import SegundaEtapa from '../screens/segundaEtapa'

export default function Manager() {
    const { tela } = useContext(GlobalContext)
    const screens = {
        0: <Home />,
        1: <MyScanner />,
        2: <Scanned />,
        3: <Notas />,
        4: <Confirmacao />,
        5: <Listas />,
        6: <ListaOrdenada />,
        7: <Editar />,
        8: <SegundaEtapa />,
    }

    return <ViewBars
        component={screens[tela]}
    />
}