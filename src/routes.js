import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

import TabHome from './screens/TabHome';
import TabMap from './screens/TabMap';
import TabGallery from './screens/TabGallery';

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
    TabMap: TabMap,
    TabGallery: createStackNavigator({
      Gallery: {
        screen: TabGallery,
        navigationOptions: {
          title: 'Gallery'
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
