import React from 'react';
import { 
  AsyncStorage,
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

import MainContainer from '../components/MainContainer';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainContainer>
        <Text style={styles.text}>Hello, home!</Text>
        <Button title="Sign out" onPress={this.logoutAsync} />
      </MainContainer>
    );
  }

  logoutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }
}

const styles = StyleSheet.create({
  text: {
    alignItems: 'center',
    fontSize: 30,
    color: 'blue',
  }
});
