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
    <View style={styles.OLjAKkVM}><Pressable onPress={() => {
        navigation.navigate("LoginScreen");
      }}><Text style={styles.eXwZRtYe}>{"Login IN"}</Text></Pressable></View></SafeAreaView>;
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
  },
  OLjAKkVM: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  eXwZRtYe: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default SignUpScreen;