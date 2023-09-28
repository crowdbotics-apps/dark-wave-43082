import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, Button } from 'react-native';

const ScreenComponent = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.text}>Are you sure you want to perform the chosen action?</Text>
        <View style={styles.buttonContainer}>
          <Button title="Yes" onPress={() => {}} />
          <Button title="Cancel" onPress={() => {}} />
        </View>
      <Pressable onPress={() => {
        navigation.navigate("PaymentsScreen");
      }}><Text style={styles.JjYcumer}>{"payment screen"}</Text></Pressable></View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 16
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  JjYcumer: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default ScreenComponent;