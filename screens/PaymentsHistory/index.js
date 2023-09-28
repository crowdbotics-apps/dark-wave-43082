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
  return <SafeAreaView style={_styles.aGFmnPdf}>
      <ScrollView style={_styles.VxWulNMM}>
        <Text style={_styles.JzvfzeYp}>Payment History</Text>

        <View style={_styles.PWkcQfwB}>
          <TextInput placeholder="From date" style={_styles.QWkAmsJM} />
          <TextInput placeholder="To date" style={_styles.mtKvJqFr} />
        </View>

        <Button title="Download" onPress={() => {}} />

        {dummyData.map((item, index) => <View key={index} style={_styles.DwjrJWkE}>
            <Text style={_styles.AQGTzzOn}>{item.payer}</Text>
            <Text style={_styles.QEYjEYkb}>{item.date}</Text>
            <Text style={_styles.ABMcyyBQ}>Amount: ${item.amount}</Text>
            <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.SAZBPahu} />
            <Button title="Download Receipt" onPress={() => {}} />
            <Button title="Download Full Report" onPress={() => {}} style={_styles.GamdpxRB} />
          </View>)}
      </ScrollView>
    </SafeAreaView>;
};

export default PaymentHistoryScreen;

const _styles = StyleSheet.create({
  aGFmnPdf: {
    flex: 1,
    backgroundColor: "#fff"
  },
  VxWulNMM: {
    padding: 20
  },
  JzvfzeYp: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  PWkcQfwB: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  QWkAmsJM: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    flex: 1,
    marginRight: 10
  },
  mtKvJqFr: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    flex: 1
  },
  DwjrJWkE: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 20,
    marginTop: 20
  },
  AQGTzzOn: {
    fontSize: 18,
    fontWeight: "bold"
  },
  QEYjEYkb: {
    fontSize: 16,
    color: "#888",
    marginBottom: 10
  },
  ABMcyyBQ: {
    fontSize: 16,
    color: "#888",
    marginBottom: 10
  },
  SAZBPahu: {
    width: "100%",
    height: 200,
    marginBottom: 10
  },
  GamdpxRB: {
    marginTop: 10
  }
});