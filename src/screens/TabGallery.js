import React from 'react';
import { View, Text } from 'react-native';
import MapView from '../components/MapView';

export default class TabGallery extends React.PureComponent {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView style={{ flex: 1 }} />
        <View
          style={{
            backgroundColor: '#e5e5e5',
            height: 300,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            elevation: 5,
            shadowColor: '#999',
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.7,
            shadowRadius: 5
          }}
        >
          <Text>This is Native MapView mixed with React Native</Text>
        </View>
      </View>
    );
  }
}
