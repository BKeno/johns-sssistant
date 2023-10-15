import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { auth } from '../firestore/firebaseConfig'; 

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);


  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("User signed out");
      onLogout();  // Update the application state
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };
  
  return (
    <View style={styles.container}>
      <Text>Email: {user ? user.email : 'Loading...'}</Text>
      {/* Add more user details here */}
      <Button title="Edit Profile" onPress={() => {/* Implement edit functionality */}} />
      <Button title="Logout" onPress={() => {/* Implement logout functionality */}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserProfile;
