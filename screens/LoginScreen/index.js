import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Text, TouchableOpacity, Image } from 'react-native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TextInput style={styles.input} onChangeText={setUsername} value={username} placeholder="Username" />
      <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="Password" secureTextEntry />
      <Button title="Log In" onPress={() => console.log('Log In pressed')} />
      <TouchableOpacity onPress={() => {
      navigation.navigate("ForgotPasswordScreen");
    }}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      
        <Text style={styles.signUp}>Don't have an account? Sign Up</Text>
      
    <Pressable onPress={() => {
      navigation.navigate("HomeScreen");
    }}><Text style={styles.VaiRlBEL}>{"Login"}</Text></Pressable></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
    marginBottom: 10
  },
  forgotPassword: {
    color: 'blue',
    marginTop: 15
  },
  signUp: {
    color: 'blue',
    marginTop: 15
  },
  VaiRlBEL: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default LoginScreen;