import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  StatusBar,
} from 'react-native';
import {
  createMaterialTopTabNavigator,
  createAppContainer,
} from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.app}>
        <StatusBar hidden />
        <AppContainer />
      </View>
    );
  }
}

// TODO: move these into discrete files
// TODO: figure out how to handle styles
//       Inline or use something like LESS?
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello, home!</Text>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello, details!</Text>
      </View>
    );
  }
}

const AppNavigator = createMaterialTopTabNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      animationEnabled: true,
      swipeEnabled: true
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    alignItems: 'center',
    fontSize: 30,
    color: '#fff',
  }
});
