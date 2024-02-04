import React from 'react';
import { View, Text, Image } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

import { ScreenName } from '../../../navigation/screens';
import { AuthStackParamList } from '../../../navigation/AuthNavigator/AuthNavigator.types';
import TextButton from '../../../components/TextButton/TextButton';
import OutlinedButton from '../../../components/OutlinedButton/OutlinedButton';
import stylesheet from './WelcomeScreen.styles';

type Props = StackNavigationProp<AuthStackParamList, ScreenName.Signup>;

const ICON_SIZE = 70;

const WelcomeScreen = (props: any) => {
  const { styles } = useStyles(stylesheet);
  const { navigate } = useNavigation<Props>();
  const redirectToLogin = () => {
    navigate(ScreenName.Login);
  };

  return (
    <SafeAreaView>
      <View>
        <View style={styles.relativeContainer}>
          <Image
            source={require('../../../../assets/spotify-icon-white.png')}
            style={styles.icon}
          />
        </View>
        <Text>Million of songs.</Text>
        <Text>Free on Spotify.</Text>
      </View>
      <View>
        <OutlinedButton
          text="Sign up free"
          onPress={() => console.log('Outlined button click')}
        />
        <TextButton text="Log in" />
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
