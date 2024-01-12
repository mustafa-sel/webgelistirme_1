import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';

const AddTodo = ({setCount}) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    Alert.alert('Eklendi');
    if (newTodo.trim() === '') {
      return;
    }

    setTodos([
      ...todos,
      {id: todos.length.toString(), text: newTodo, line: false},
    ]);
    setCount(todos.length + 1);
    setNewTodo('');
  };

  const chooseText = id => {
    const findLine = todos.find(item => item.id === id);
    const findText = todos.findIndex(item => item.id === id);
    if (findLine.line) {
      todos[findText].line = false;
    } else {
      todos[findText].line = true;
    }
    setTodos([...todos]);
  };

  removeText = id => {
    const newTodos = todos.filter(item => item.id !== id);

    setTodos([...newTodos]);
    setCount(newTodos.length);
  };

  return (
    <View>
      <View style={styles.todo_container}>
        <FlatList
          data={todos}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => chooseText(item.id)}
              onLongPress={() => removeText(item.id)}>
              <Text
                style={{
                  color: '#fcfdfa',
                  padding: 10,
                  margin: 5,
                  backgroundColor:'#7da453',
                  
                  textDecorationLine: item.line ? 'line-through' : 'none',
                }}>
                {item.text}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={text => setNewTodo(text)}
            value={newTodo}
            placeholder="Yapılacak..."
            placeholderTextColor="#797a7b"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={handleAddTodo} title="Kaydet" color="white" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#36474f',
    padding: 10,
    borderRadius: 10,
    
  },
  todo_container:{
   
  },
  input: {
    height: 40,
    fontSize: 25,
    borderRadius: 5,
    padding: 10,
    marginBottom: 12,
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    margin: 12,
  },
  buttonContainer: {
    backgroundColor: '#808080',
    borderRadius: 10,
    padding: 5,
    marginHorizontal: 30,
  },
});

export default AddTodo;
