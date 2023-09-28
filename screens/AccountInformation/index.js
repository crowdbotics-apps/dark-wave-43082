import React, { useState } from 'react';
import { SafeAreaView, TextInput, Button, StyleSheet, Image, Picker } from 'react-native';

const ProfileScreen = () => {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [editMode, setEditMode] = useState(false);
  return <SafeAreaView style={styles.container}>
      <Button title="Back" onPress={() => {}} />
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} editable={editMode} />
      <TextInput style={styles.input} placeholder="Age" value={age} onChangeText={setAge} editable={editMode} />
      <Picker selectedValue={gender} onValueChange={setGender} enabled={editMode}>
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Prefer not to say" value="other" />
      </Picker>
      <TextInput style={styles.input} placeholder="Phone Number" value={phoneNumber} onChangeText={setPhoneNumber} editable={editMode} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} editable={editMode} />
      <Button title="Edit" onPress={() => setEditMode(true)} />
      <Button title="Save" onPress={() => setEditMode(false)} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    margin: 10,
    paddingLeft: 10
  }
});
export default ProfileScreen;