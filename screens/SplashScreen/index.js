import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, StatusBar } from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Pressable onPress={() => {
      navigation.navigate("OnboardingSlides");
    }}><View style={styles.content}>
        <Image style={styles.logo} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
        <Text style={styles.title}>Welcome to Our App</Text>
        <Text style={styles.subtitle}>We're preparing everything for you...</Text>
      </View></Pressable>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center'
  }
});
export default SplashScreen;