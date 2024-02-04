import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

import { ScreenName } from '../../../navigation/screens';
import { AuthStackParamList } from '../../../navigation/AuthNavigator/AuthNavigator.types';

type Props = StackNavigationProp<AuthStackParamList, ScreenName.Signup>;

const SignupScreen = (props: any) => {
  const { navigate } = useNavigation<Props>();
  const redirectToLogin = () => {
    navigate(ScreenName.Login);
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Signup</Text>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;
