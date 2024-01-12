import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const CountTodo = ({count}) => {
  return (
    <View style={styles.container}>
      <View style={styles.text_container}>
        <Text style={styles.text}>Yapılacaklar</Text>
      </View>
      <View style={styles.count_container}>
        <Text style={styles.count}>{count}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  text_container: {
    flex: 1,
  },
  text: {
    fontSize: 35,
    color: '#ffa500',
  },
  count: {
    fontSize: 35,
    color: '#ffa500',
  },
});

export default CountTodo;
