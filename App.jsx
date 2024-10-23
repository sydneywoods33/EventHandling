import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ToDoForm from './src/components/ToDoForm'; 

const App = () => {
  const [tasks, setTasks] = useState([]);

  // add a new task to the task list
  const addTask = (taskText) => {
    setTasks([...tasks, taskText]); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDo List</Text>
      <ToDoForm addTask={addTask} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Text style={styles.taskItem}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
        style={styles.taskList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60, 
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center', 
    color: '#657092',
    marginBottom: 20,
  },
  taskList: {
    marginTop: 40, 
  },
  taskItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});

export default App;
