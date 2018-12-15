import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MainContainer from '../components/MainContainer';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainContainer>
        <Text style={styles.text}>Hello, home!</Text>
      </MainContainer>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    alignItems: 'center',
    fontSize: 30,
    color: 'blue',
  }
});
