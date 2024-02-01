import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';

import RootNavigator from './src/navigation';

export default function App() {
  return <RootNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
