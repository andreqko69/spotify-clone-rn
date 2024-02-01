import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import useStore from '../../../zustand/useStore';
import { ScreenName } from '../../../navigation/screens';
import { AuthStackParamList } from '../../../navigation/AuthNavigator/AuthNavigator.types';

type Props = StackNavigationProp<AuthStackParamList, ScreenName.Login>;

const LoginScreen = () => {
  const store = useStore();
  const { navigate } = useNavigation<Props>();

  const setIsAuthenticated = store.use.setIsAuthenticated();

  const redirectToSignup = () => {
    navigate(ScreenName.Signup);
  };

  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => setIsAuthenticated(true)}>
        <Text>Execute login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={redirectToSignup}>
        <Text>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
