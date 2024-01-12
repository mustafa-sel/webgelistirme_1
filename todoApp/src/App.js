import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, Text, FlatList, View} from 'react-native';
import CountTodo from './components/countTodo/CountTodo';
import AddTodo from './components/addTodo';
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperContainer}>
        <CountTodo count={count} />
      </View>

      <View style={styles.lowerContainer}>
        <AddTodo setCount={setCount} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#112027',
  },
  upperContainer: {
    
    padding: 20,
  },
  lowerContainer: {
    marginBottom: 15,
    padding: 20,
    flex:1,
  },
});

export default App;
