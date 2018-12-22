import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import JournalScreen from '../screens/JournalScreen';

export default createMaterialTopTabNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Journal: JournalScreen,
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      animationEnabled: true,
      swipeEnabled: true
    }
  }
);
