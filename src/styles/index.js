import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    containerConfirmacao: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#555555'
    },
    containerModal: {
        width: '86%',
        height: '40%',
        backgroundColor: '#BBBBBB',
        borderRadius: 24
    },
    containerListas: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        minHeight: 65,
        backgroundColor: '#BCB9BA',
        marginHorizontal: 4,
        marginVertical: 2,
        borderRadius: 8,
        // flexWrap: 'wrap'
    },
    texto1: {
        fontSize: 24,
        textAlign: 'center',
    },
    texto2: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    texto3: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    nota: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        width: '80%'
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    anoContainer: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 7,
        justifyContent: 'center',
    },
    anoTexto: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})