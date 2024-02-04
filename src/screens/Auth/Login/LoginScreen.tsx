import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import useStore from '../../../zustand/useStore';
import { ScreenName } from '../../../navigation/screens';
import { AuthStackParamList } from '../../../navigation/AuthNavigator/AuthNavigator.types';
import OutlinedButton from '../../../components/OutlinedButton/OutlinedButton';

type Props = StackNavigationProp<AuthStackParamList, ScreenName.Login>;

const LoginScreen = () => {
  const store = useStore();
  const { navigate } = useNavigation<Props>();

  const setIsAuthenticated = store.use.setIsAuthenticated();

  const redirectToSignup = () => {
    navigate(ScreenName.Signup);
  };

  return (
    <SafeAreaView>
      <View>
        <OutlinedButton text="Log in" onPress={() => console.log('hello')} />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
