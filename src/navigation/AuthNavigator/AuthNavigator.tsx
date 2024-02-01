import { createStackNavigator } from '@react-navigation/stack';

import { ScreenName } from '../screens';
import LoginScreen from '../../screens/Auth/Login/LoginScreen';
import SignupScreen from '../../screens/Auth/Signup/SignupScreen';
import { AuthStackParamList } from './types';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={ScreenName.Login} component={LoginScreen} />
    <Stack.Screen name={ScreenName.Signup} component={SignupScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
