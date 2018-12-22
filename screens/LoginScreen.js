import React from 'react';
import { 
  ActivityIndicator,
  AsyncStorage,
  Button,
  View,
  StyleSheet,
} from 'react-native';

import MainContainer from '../components/MainContainer';

export default class AuthLoadingScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign in!',
  }
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainContainer>
        <Button title="Sign in" onPress={this.loginAsync} />
      </MainContainer>
    );
  }

  loginAsync = async () => {
    await AsyncStorage.setItem('moros.usertoken', 'blah');
    this.props.navigation.navigate('Main');
  }
}
