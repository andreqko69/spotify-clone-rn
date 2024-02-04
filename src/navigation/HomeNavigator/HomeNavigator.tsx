import { createStackNavigator } from '@react-navigation/stack';

import { ScreenName } from '../screens';
import { HomeStackParamList } from './HomeNavigator.types';
import HomeScreen from '../../screens/App/Home/HomeScreen';

const Stack = createStackNavigator<HomeStackParamList>();

const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name={ScreenName.Home} component={HomeScreen} />
  </Stack.Navigator>
);

export default HomeNavigator;
