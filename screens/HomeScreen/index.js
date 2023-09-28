import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <View style={styles.section1}>
        <Pressable onPress={() => {
        navigation.navigate("AccountInformation");
      }}><Text style={styles.title}>Welcome, John Doe</Text></Pressable>
        <Text style={styles.date}>Day 1 of 365</Text>
        <Image style={styles.icon} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Button title="Logout" onPress={() => {}} />
      </View>
      <View style={styles.section2}>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
      </View>
      <View style={styles.section3}>
        <Text style={styles.featuredTitle}>National Anthem Prayer</Text>
        <Text style={styles.description}>This is a brief description of the prayer.</Text>
        <Button title="Play Audio" onPress={() => {}} />
      </View>
      <View style={styles.section4}>
        <Button title="Fundraising" onPress={() => {}} />
        <Button title="Invite Friends" onPress={() => {}} />
        <Button title="Home" onPress={() => {}} />
        <Button title="Settings" onPress={() => {}} />
      </View>
    <Pressable onPress={() => {
      navigation.navigate("Fundraising");
    }}><Text style={styles.lfZPNBpo}>{"fundraising"}</Text></Pressable></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  section1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  date: {
    fontSize: 18,
    color: 'grey'
  },
  icon: {
    width: 50,
    height: 50
  },
  section2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  section3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  featuredTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 18,
    color: 'grey'
  },
  section4: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  lfZPNBpo: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default ScreenComponent;