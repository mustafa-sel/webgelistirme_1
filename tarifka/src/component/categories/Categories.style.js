import React from 'react';
import {View, StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        margin:10,
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        flexDirection:'row',
        alignItems:'center',
        padding:20,
    },
    image: {
      width: 50,
      height: 50,
    },
   
   
    text: {
      fontSize:16,
      fontWeight:'400',
      marginLeft:15
    },
  });
export default styles;
