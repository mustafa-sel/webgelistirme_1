
import { View, StyleSheet } from 'react-native';



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F2F2',
        padding: 10
    },
    header: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#37474F'
    },
    text: {
        color: '#EF5F5C',
        marginVertical: 5,
        marginTop: 3
    },
    locations: {
        color: '#000000'
    },
    levels: {
        color: '#000000'
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#37474F',
        marginTop: 8,

    },
    content: {
        padding: 5,
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: '#E0E0E0',
    },
    button:{
        flexDirection:'row',
        justifyContent:'space-around',
        margin:30,
        marginTop:10,
        flex:1,
    },
    buttonSubmit: {
        flexDirection: 'row',
        width:150,
        padding:5,
        borderRadius:10,
      },
      buttonFavori: {
        flexDirection: 'row',
        width:170,
        padding:5,
        borderRadius:10,
    },
      

})

export default styles;
