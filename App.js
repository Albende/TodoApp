import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,TextInput, Button, ScrollView} from 'react-native';
import Header from './src/components/Header';

export default function App() {
  const [todoItem, setTodoItem] =useState('');
  const [todoList, setTodoList] = useState([]);

  const addTodoList=()=>{
    setTodoList([...todoList, todoItem]);
    console.log(todoList);
  }
  return (
    <View>
      <Header title="Todo List" />

    <View style={styles.container}>
      <View>
        <TextInput style={styles.textInput}
        placeholder="Enter To Do Item"
        onChangeText={text => setTodoItem(text)}
        value = {todoItem}
        />
        <Button 
        title="Add Todo"
        onPress={addTodoList}
        />
      </View>
      <ScrollView>
        {todoList.map(todo => <View style={styles.todoItem}>
          <Text>{todo}</Text>
          </View>)}
      </ScrollView>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   padding: 30,
   backgroundColor: "gray"
  },
  textInput: {
    padding: 10,
    borderColor: "black",
    marginBottom: 10,
    borderWidth: 1,
    alignItems: "center"

  },
  todoItem: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "green"
  }
});