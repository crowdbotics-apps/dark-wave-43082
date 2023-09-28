import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, View, Text, TouchableOpacity, CheckBox } from 'react-native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setSelection] = useState(false);
  return <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} onChangeText={setUsername} value={username} placeholder="Username" />
      <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="Password" secureTextEntry />
      <Pressable><View style={styles.checkboxContainer}>
        <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />
        <Text style={styles.label}>I agree to the </Text>
        <TouchableOpacity onPress={() => {
          navigation.navigate("LegalAgreement");
        }}>
          <Text style={styles.link}>Terms and Conditions</Text>
        </TouchableOpacity>
        <Text style={styles.label}> and </Text>
        <TouchableOpacity onPress={() => {
          navigation.navigate("PrivacyPolicy");
        }}>
          <Text style={styles.link}>Privacy Policy</Text>
        </TouchableOpacity>
      </View></Pressable>
      <Button title="Sign Up" onPress={() => alert('Sign Up Button Pressed')} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center'
  },
  checkbox: {
    alignSelf: 'center'
  },
  label: {
    margin: 8
  },
  link: {
    color: 'blue'
  }
});
export default SignUpScreen;