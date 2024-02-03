import { createStackNavigator } from '@react-navigation/stack';

import { ScreenName } from '../screens';
import TabNavigator from '../TabNavigator/TabNavigator';
import { AppStackParamList } from './types';

const Stack = createStackNavigator<AppStackParamList>();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={ScreenName.TabNavigator} component={TabNavigator} />
  </Stack.Navigator>
);

export default AppNavigator;
