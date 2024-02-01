import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

import { ScreenName } from '../../../navigation/screens';
import { AuthStackParamList } from '../../../navigation/AuthNavigator/types';

type Props = StackNavigationProp<AuthStackParamList, ScreenName.Signup>;

const SignupScreen = (props: any) => {
  const { navigate } = useNavigation<Props>();
  const redirectToLogin = () => {
    navigate(ScreenName.Login);
  };

  return (
    <View>
      <Text>Signup</Text>
      <TouchableOpacity onPress={redirectToLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;
