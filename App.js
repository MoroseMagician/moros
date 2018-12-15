import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import TopTabNavigator from './navigation/TopTabNavigator';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.app}>
        <StatusBar hidden />
        <TopTabNavigator  />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
