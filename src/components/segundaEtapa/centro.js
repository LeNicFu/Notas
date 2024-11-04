import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import TituloTexto from '../tituloTexto'
import styles from '../../styles'
import { useContext } from 'react'
import { GlobalContext } from '../../context'

const listaSegundaEtapa = require('../../data/listaParaPresenca.json')

export default function Centro() {
	const { setCentro } = useContext(GlobalContext)

	const centros = []

	listaSegundaEtapa.forEach(item => centros.push({ id: listaSegundaEtapa.indexOf(item), centro: item.centro }))

	centros.sort(function (a, b) {
		return a.centro.localeCompare(b.centro, 'pt', { sensitivity: 'base' });
	})

	const EstiloLista = (centro) => {
		return <TouchableOpacity style={styles.containerListas}
			onPress={() => setCentro(centro)}
		>
			<Text style={[styles.texto1, { alignContent: 'center' }]}>
				{centro}
			</Text>
		</TouchableOpacity>
	}

	return <>
		<TituloTexto titulo={'CENTRO DE APLICAÇÃO DE PROVAS'} />
		<FlatList
			style={{ width: '100%', backgroundColor: 'black' }}
			data={centros}
			keyExtractor={(item) => item.id.toString()}
			renderItem={({ item }) => EstiloLista(item.centro)}
		/>
	</>
}