import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  image: {
    width: '95%',
    height: Dimensions.get('window').height / 4,
    borderRadius: 10,
    marginBottom: -Dimensions.get('window').height / 24,
    
    
  },
  text_container:{
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    backgroundColor: 'rgba(53,46,36,0.6)',
    width: '95%',
    marginBottom: 10,
    
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'right',
    marginRight:10,
    overflow:'hidden'
  },
});

export default styles;
