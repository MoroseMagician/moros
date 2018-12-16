import React from 'react';
import { createMaterialTopTabNavigator, createAppContainer, } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import JournalScreen from '../screens/JournalScreen';

const TopTabNavigator = createMaterialTopTabNavigator(
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

export default createAppContainer(TopTabNavigator);
