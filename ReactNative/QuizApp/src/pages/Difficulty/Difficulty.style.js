import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent:'center',
    },
    buttonContainer: {
        
    },
    easyButton: {
        borderWidth:1,
        borderColor:'white',
        shadowColor:'white',
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },
    normalButton: {
        borderWidth:1,
        borderColor:'white',
        shadowColor:'white',
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,

    },
    hardButton: {
        borderWidth:1,
        borderColor:'#fff',
        shadowColor:'white',
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },
    text: {
        color: '#fff',
        fontSize:23,
        margin:15,
        fontStyle:'italic',
        fontWeight:'bold'
    },
    easy:{
        alignItems:'center',
        marginBottom:75
    },
    normal:{
        alignItems:'center',
        marginBottom:75,

    },
    hard:{
        alignItems:'center'
    },
})

export default styles;
