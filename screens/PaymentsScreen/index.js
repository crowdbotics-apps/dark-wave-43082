import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';

const PaymentScreen = ({
  navigation
}) => {
  const [amount, setAmount] = useState('');
  const [selectedCard, setSelectedCard] = useState('');
  const cards = ['Card 1', 'Card 2', 'Card 3'];
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Payment</Text>
      <TextInput style={styles.input} onChangeText={setAmount} value={amount} placeholder="Payment Amount" keyboardType="numeric" />
      <Text style={styles.label}>Choose a payment option from the dropdown menu:</Text>
      <Picker selectedValue={selectedCard} style={styles.picker} onValueChange={itemValue => setSelectedCard(itemValue)}>
        {cards.map((card, index) => <Picker.Item key={index} label={card} value={card} />)}
      </Picker>
      <Button title="Add a new card" onPress={() => navigation.navigate('AddCard')} />
      <View style={styles.buttonContainer}>
        <Button title="Pay" onPress={() => console.log('Pay')} />
        <Button title="Cancel" onPress={() => console.log('Cancel')} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10
  },
  label: {
    fontSize: 18,
    marginBottom: 10
  },
  picker: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
export default PaymentScreen;