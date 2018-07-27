import React from 'react';
import { View, Text } from 'react-native';
import MapView from '../components/MapView';

export default class TabMap extends React.PureComponent {
  static navigationOptions = {
    title: 'TabMap'
  };

  render() {
    return <MapView style={{ flex: 1 }} />;
  }
}
