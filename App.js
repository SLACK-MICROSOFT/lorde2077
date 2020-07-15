import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import ActivityScreen from './screens/ActivityScreen';


export default class App extends React.Component {
  render(){
  return (
    
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <AppContainer />
   </View>
    
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const switchNavigator = createSwitchNavigator({
  HomeScreen:{screen: HomeScreen},
  ActivityScreen:{screen: ActivityScreen}
 
})

const AppContainer =  createAppContainer(switchNavigator);
