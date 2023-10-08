import React from "react";
import { FlatList, StyleSheet, Text, View, Button } from "react-native";

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  const handleEdit = (taskId) => {
    // Simulated new data, replace this with real data from a form later
    const updatedFields = {
      TaskName: "New Task Name",
      Status: "Completed",
      // ... other fields
    };

    updateTask(taskId, updatedFields);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.TaskName}</Text>
      <Button title="Edit" onPress={() => handleEdit(item.id)} />
      <Button title="Delete" onPress={() => deleteTask(item.id)} />
    </View>
  );

  return (
    <FlatList
      data={tasks}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()} // Assuming each task has a unique 'id'
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    margin: 4,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
  },
});

export default TaskList;
