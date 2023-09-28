import React from 'react';
import { SafeAreaView, View, Text, Button, Image, ProgressBarAndroid, StyleSheet } from 'react-native';

const CampaignScreen = () => {
  const campaignTitle = "Campaign Title";
  const campaignDescription = "This is a description of the campaign.";
  const fundraisingGoal = 1000;
  const fundsRaised = 500;
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{campaignTitle}</Text>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.description}>{campaignDescription}</Text>
      <View style={styles.buttonContainer}>
        <Button title="About Us" onPress={() => {}} />
        <Button title="Donate" onPress={() => {}} />
      </View>
      <Text style={styles.progressTitle}>Fundraising Progress</Text>
      <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={fundsRaised / fundraisingGoal} />
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
    marginBottom: 10
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  progressTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  }
});
export default CampaignScreen;