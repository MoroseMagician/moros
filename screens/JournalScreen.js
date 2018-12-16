import React from 'react';
import { 
  Text,
  TextInput,
  ScrollView,
  Button,
  KeyboardAvoidingView,
  StyleSheet 
} from 'react-native';
import { Header } from 'react-navigation';

import MainContainer from '../components/MainContainer';

export default class JournalScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      submitted: [],
      key: 0
    };
  }

  saveText() {
    this.setState(previousState => ({
      submitted: [
        ...previousState.submitted,
        <Text key={this.state.key}>{this.state.text}</Text>
      ],
      key: previousState.key + 1
    }));
  }

  render() {
    return (
      <KeyboardAvoidingView 
        // Offset by the height of the navbar
        keyboardVerticalOffset={50}
        style={{ flex: 1 }} 
        behavior='padding'
      > 
        <TextInput
          style={styles.input}
          onChangeText={
            (text) => this.setState({text})
          }
          value={this.state.text}
          placeholder='Start typing!'
          multiline={true}
          textAlignVertical='top'
        />
        <Button onPress={this.saveText.bind(this)}
          title='Save'
        />
        <ScrollView style={styles.scroll}>
          {this.state.submitted}
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 5,
    height: 200,
    backgroundColor: '#fefefe',
  },
  scroll: {
    flex: 1,
    backgroundColor: '#eee',
  }
});
