import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './components/auth/LoginScreen';
import TaskList from './components/TaskList';
import { fetchData, addTask, updateTask, deleteTask } from './firestore/TaskService';

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleLogin = (email, password) => {
    // TODO: Add Firebase authentication logic here
    setIsLoggedIn(true);
  };

  useEffect(() => {
    const fetchTasks = async () => {
      const taskData = await fetchData();
      setTasks(taskData);
    };

    fetchTasks();
  }, []);

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <TaskList tasks={tasks} /* other props */ />
      ) : (
        <LoginScreen onLogin={handleLogin} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
