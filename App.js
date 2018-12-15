import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello, world!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
