import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

import TabHome from './screens/TabHome';
import TabMap from './screens/TabMap';

const Tabs = createBottomTabNavigator(
  {
    TabHome: createStackNavigator({
      Home: {
        screen: TabHome,
        navigationOptions: {
          title: 'Home'
        }
      }
    }),
    TabMap: createStackNavigator({
      Map: {
        screen: TabMap,
        navigationOptions: {
          title: 'TabMap'
        }
      }
    })
  },
  {
    tabBarOptions: {
      activeTintColor: 'red'
    },
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

export default createStackNavigator(
  {
    Root: Tabs
  },
  {
    headerMode: 'none'
  }
);
