import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, Switch, StyleSheet } from 'react-native';

const NotificationScreen = () => {
  const [inApp, setInApp] = useState(false);
  const [push, setPush] = useState(false);
  const [email, setEmail] = useState(false);
  const [frequency, setFrequency] = useState('daily');
  return <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Image style={styles.backIcon} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleText}>In-app Notifications</Text>
        <Switch value={inApp} onValueChange={setInApp} />
      </View>
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleText}>Push Notifications</Text>
        <Switch value={push} onValueChange={setPush} />
      </View>
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleText}>Email Notifications</Text>
        <Switch value={email} onValueChange={setEmail} />
      </View>
      <View style={styles.frequencyContainer}>
        <TouchableOpacity style={frequency === 'daily' ? styles.frequencyButtonActive : styles.frequencyButton} onPress={() => setFrequency('daily')}>
          <Text style={styles.frequencyText}>Daily</Text>
        </TouchableOpacity>
        <TouchableOpacity style={frequency === 'weekly' ? styles.frequencyButtonActive : styles.frequencyButton} onPress={() => setFrequency('weekly')}>
          <Text style={styles.frequencyText}>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={frequency === 'monthly' ? styles.frequencyButtonActive : styles.frequencyButton} onPress={() => setFrequency('monthly')}>
          <Text style={styles.frequencyText}>Monthly</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  backIcon: {
    width: 20,
    height: 20
  },
  backText: {
    marginLeft: 10,
    fontSize: 18
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  toggleText: {
    fontSize: 16
  },
  frequencyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  frequencyButton: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5
  },
  frequencyButtonActive: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5
  },
  frequencyText: {
    color: '#fff'
  }
});
export default NotificationScreen;