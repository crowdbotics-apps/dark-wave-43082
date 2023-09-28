import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, ImageBackground, FlatList } from 'react-native';
const dummyData = [{
  id: '1',
  name: 'John Doe'
}, {
  id: '2',
  name: 'Jane Doe'
}, {
  id: '3',
  name: 'Jim Doe'
} // Add more dummy data here
];

const FriendsScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ImageBackground source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.backgroundImage}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Friends List</Text>
        </View>
        <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
        item
      }) => <View style={styles.listItem}>
              <Text style={styles.listItemText}>{item.name}</Text>
            </View>} />
      </ImageBackground>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  listItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)'
  },
  listItemText: {
    fontSize: 18
  }
});
export default FriendsScreen;