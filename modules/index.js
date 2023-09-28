import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, ScrollView, TextInput } from 'react-native';

const PaymentHistoryScreen = () => {
  const dummyData = [{
    payer: 'John Doe',
    date: '2021-09-01 10:00',
    amount: 100
  }, {
    payer: 'Jane Doe',
    date: '2021-09-02 11:00',
    amount: 200
  }, {
    payer: 'John Smith',
    date: '2021-09-03 12:00',
    amount: 300
  }];
  return <SafeAreaView style={_styles.uwMZbgZU}>
      <ScrollView style={_styles.egReeypZ}>
        <Text style={_styles.esMIBCaC}>Payment History</Text>

        <View style={_styles.ImEOAIJG}>
          <TextInput placeholder="From date" style={_styles.ACyKvRbv} />
          <TextInput placeholder="To date" style={_styles.ATruleAe} />
        </View>

        <Button title="Download" onPress={() => {}} />

        {dummyData.map((item, index) => <View key={index} style={_styles.UsBjvXSk}>
            <Text style={_styles.oEcLAbhq}>{item.payer}</Text>
            <Text style={_styles.AXsQhhEE}>{item.date}</Text>
            <Text style={_styles.VqQpfszd}>Amount: ${item.amount}</Text>
            <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.MQiQnPbf} />
            <Button title="Download Receipt" onPress={() => {}} />
            <Button title="Download Full Report" onPress={() => {}} style={_styles.WCZJGasE} />
          </View>)}
      </ScrollView>
    </SafeAreaView>;
};

export default PaymentHistoryScreen;

const _styles = StyleSheet.create({
  uwMZbgZU: {
    flex: 1,
    backgroundColor: "#fff"
  },
  egReeypZ: {
    padding: 20
  },
  esMIBCaC: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  ImEOAIJG: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  ACyKvRbv: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    flex: 1,
    marginRight: 10
  },
  ATruleAe: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    flex: 1
  },
  UsBjvXSk: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 20,
    marginTop: 20
  },
  oEcLAbhq: {
    fontSize: 18,
    fontWeight: "bold"
  },
  AXsQhhEE: {
    fontSize: 16,
    color: "#888",
    marginBottom: 10
  },
  VqQpfszd: {
    fontSize: 16,
    color: "#888",
    marginBottom: 10
  },
  MQiQnPbf: {
    width: "100%",
    height: 200,
    marginBottom: 10
  },
  WCZJGasE: {
    marginTop: 10
  }
});