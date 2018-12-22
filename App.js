import React from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
} from 'react-native';

import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.app}>
        <StatusBar hidden />
        <AppNavigator />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
