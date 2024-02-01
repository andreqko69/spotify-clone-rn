import { createStackNavigator } from '@react-navigation/stack';

import { ScreenName } from '../screens';
import SearchScreen from '../../screens/App/Search/SearchScreen';

const Stack = createStackNavigator();

const SearchNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={ScreenName.Search} component={SearchScreen} />
  </Stack.Navigator>
);

export default SearchNavigator;
