import React, { useState } from 'react';
import { SafeAreaView, TextInput, Button, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const PasswordScreen = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hideCurrentPassword, setHideCurrentPassword] = useState(true);
  const [hideNewPassword, setHideNewPassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [error, setError] = useState('');

  const verifyPassword = password => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleChangePassword = () => {
    if (currentPassword !== 'correctPassword') {
      setError('Current password is incorrect');
    } else if (!verifyPassword(newPassword)) {
      setError('New password does not meet the requirements');
    } else if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      alert('Password changed successfully');
    }
  };

  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TextInput style={styles.input} secureTextEntry={hideCurrentPassword} value={currentPassword} onChangeText={setCurrentPassword} placeholder="Current Password" />
      <TouchableOpacity onPress={() => setHideCurrentPassword(!hideCurrentPassword)}>
        <Text>{hideCurrentPassword ? 'View' : 'Hide'} Password</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} secureTextEntry={hideNewPassword} value={newPassword} onChangeText={setNewPassword} placeholder="New Password" />
      <TouchableOpacity onPress={() => setHideNewPassword(!hideNewPassword)}>
        <Text>{hideNewPassword ? 'View' : 'Hide'} Password</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} secureTextEntry={hideConfirmPassword} value={confirmPassword} onChangeText={setConfirmPassword} placeholder="Confirm Password" />
      <TouchableOpacity onPress={() => setHideConfirmPassword(!hideConfirmPassword)}>
        <Text>{hideConfirmPassword ? 'View' : 'Hide'} Password</Text>
      </TouchableOpacity>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Change Password" onPress={handleChangePassword} />
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
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 10,
    padding: 10
  },
  error: {
    color: 'red',
    marginBottom: 10
  }
});
export default PasswordScreen;