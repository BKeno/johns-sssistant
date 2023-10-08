import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TaskList from './components/TaskList';
import { db } from './firestore/FirebaseConfig';
import { fetchData, addTask, updateTask, deleteTask } from './firestore/TaskService';

export default function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const taskData = await fetchData();
      setTasks(taskData);
    };

    fetchTasks();
  }, []);

  return (
    <View style={styles.container}>
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
