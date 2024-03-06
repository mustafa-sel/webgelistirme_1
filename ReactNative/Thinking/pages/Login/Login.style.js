import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';


const styles = StyleSheet.create({
    loginContainer:{
        alignItems:'center',
        flex:1
    },
    image:{
        width:Dimensions.get('screen').width/1.2,
        height:Dimensions.get('screen').width/1.2,
        marginTop:50
    },
    
    textInput:{
        borderWidth:1,
        borderColor:'gray',
        borderRadius:5,
        width:250,
        padding:10,
        margin:10,
        height:50,
    },
    error:{
        color:'red',
        fontWeight:'bold',
        
    },
})

export default styles;
