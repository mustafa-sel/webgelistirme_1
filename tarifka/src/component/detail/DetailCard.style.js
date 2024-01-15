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
    resizeMode:'cover'
  },
  text_container: {},

  line: {
    borderTopWidth: 1,
    borderColor: 'gray',
  },

  text_header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#a5292a',
    textAlign: 'left',
    marginTop: 10,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#a5292a',
    textAlign: 'left',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  descriptions: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: '#ff0000',
    width: '90%',
    borderRadius: 5,
    margin: 10,
    padding: 5,
  },
});

export default styles;
