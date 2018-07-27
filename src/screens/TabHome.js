import React from 'react';
import { View, Text } from 'react-native';

export default class TabHome extends React.PureComponent {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#F5FCFF',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>Tab Home</Text>
      </View>
    );
  }
}
