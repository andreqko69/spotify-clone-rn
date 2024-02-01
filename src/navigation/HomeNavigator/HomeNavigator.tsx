import { createStackNavigator } from '@react-navigation/stack';

import { ScreenName } from '../screens';
import HomeScreen from '../../screens/App/HomeScreen/HomeScreen';
import { HomeStackParamList } from './types';

const Stack = createStackNavigator<HomeStackParamList>();

const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={ScreenName.Home} component={HomeScreen} />
  </Stack.Navigator>
);

export default HomeNavigator;
