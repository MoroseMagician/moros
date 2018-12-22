import React from 'react';
import { 
  ActivityIndicator,
  AsyncStorage,
  View,
  StyleSheet,
  Text,
} from 'react-native';

import MainContainer from '../components/MainContainer';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.fetchToken();
  }

  fetchToken = async () => {
    const token = await AsyncStorage.getItem('moros.usertoken');

    let that = this;
    this.props.navigation.navigate(token ? 'Main' : 'Auth');
  };

  render() {
    return (
      <MainContainer>
        <ActivityIndicator />
      </MainContainer>
    );
  }
}
