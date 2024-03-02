import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'contain'
    },
    headerContainer: {
        alignItems: 'center',
        marginTop: '40%',
        fontFamily:'Cursive'
    },
    header: {
        color: '#fff',
        fontSize: 50,
        fontStyle:'italic'
    },
    contentContainer: {
        alignItems: 'center',
        marginTop: '30%'
    },
    contentA: {
        color: '#fff',
        fontSize: 25
    },
    contentB: {
        color: '#fff',

    },
    buttonContainer: {
        marginTop: '10%',
        alignItems: 'center'
    },
    startButton: {
        backgroundColor: '#5200FF',
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        height: 50
    },
    aboutButton: {
        backgroundColor: '#E50487',
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginTop: 25,
        height: 30,

    },
    start: {
        color: '#fff',
        fontSize:20
    },
    about: {
        color: '#fff',
        fontSize:15

    },
})

export default styles;
