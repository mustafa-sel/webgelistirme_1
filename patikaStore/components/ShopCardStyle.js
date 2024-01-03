import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';


const styles = StyleSheet.create({
    imgContainer:{
        flex:1,
        backgroundColor:'#f5f5f5',
        margin:5,
        borderRadius:10,
    },
    image:{
        height: Dimensions.get('window').height /4,
        margin:10,
        borderRadius:10,
    },
    title:{
        margin:5,
        fontWeight:'bold'
    },
    price:{     
        margin:5,
        color:'gray'
    },
    stok:{
        paddingLeft:10,
        paddingBottom:10,
    }
})

export default styles;
