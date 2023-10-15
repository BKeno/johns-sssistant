import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import Register from "./Register";

const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = () => {
    onLogin(email, password);
  };

  const handleLogout = () => {
    setShowRegister(false);
  };

  const toggleRegister = () => {
    setShowRegister(!showRegister);
  };

  return (
    <View style={styles.container}>
      {showRegister ? (
        <Register onLogout={handleLogout} />
      ) : (
        <>
          <Text>Email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
          />
          <Text>Password:</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonWrapper}>
              <Button title="Login" onPress={handleLogin} />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                title={showRegister ? "Go to Login" : "Sign up"}
                onPress={toggleRegister}
              />
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    margin: 10,
    width: 200,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonWrapper: {
    width: 80, 
    margin: 5,
  },
});

export default LoginScreen;
