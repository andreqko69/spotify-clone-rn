import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ScreenName } from './screens';
import HomeNavigator from './HomeNavigator/HomeNavigator';
import SearchNavigator from './SearchNavigator/SearchNavigator';
import LibraryNavigator from './LibraryNavigator/LibraryNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name={ScreenName.HomeNavigator} component={HomeNavigator} />
    <Tab.Screen name={ScreenName.SearchNavigator} component={SearchNavigator} />
    <Tab.Screen
      name={ScreenName.LibraryNavigator}
      component={LibraryNavigator}
    />
  </Tab.Navigator>
);

export default TabNavigator;
