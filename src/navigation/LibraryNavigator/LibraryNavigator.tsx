import { createStackNavigator } from '@react-navigation/stack';

import { ScreenName } from '../screens';
import LibraryScreen from '../../screens/App/Library/LibraryScreen';

const Stack = createStackNavigator();

const LibraryNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name={ScreenName.Library} component={LibraryScreen} />
  </Stack.Navigator>
);

export default LibraryNavigator;
