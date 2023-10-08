import { db } from './FirebaseConfig';
import { addDoc, updateDoc, getDocs, deleteDoc, doc, collection } from 'firebase/firestore';

 // READ
 export const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "tasks"));
    const tasks = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    console.log("Tasks:", tasks);
    return tasks;
  };

  // CREATE
export const addTask = async (task) => { // task is an object that contains all the fields for a task
  try {
    const docRef = await addDoc(collection(db, "tasks"), task);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// UPDATE
export const updateTask = async (taskId, updatedFields) => {
    try {
      const taskRef = doc(db, "tasks", taskId);
      await updateDoc(taskRef, updatedFields);
      console.log(`Task ${taskId} updated`);
    } catch (e) {
      console.error("Error updating task: ", e);
    }
  };

  // DELETE
  export const deleteTask = async (taskId) => {
    try {
      const taskRef = doc(db, "tasks", taskId);
      await deleteDoc(taskRef);
      console.log(`Task ${taskId} deleted`);
    } catch (e) {
      console.error("Error deleting task: ", e);
    }
  };