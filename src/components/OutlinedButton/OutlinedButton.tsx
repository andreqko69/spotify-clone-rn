import React from 'react';
import { Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface ButtonProps {
  text: string;
  onPress: () => void;
}

const OutlinedButton = ({ text, onPress }: ButtonProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Text style={{ color: 'red' }}>{text}</Text>
    </TouchableWithoutFeedback>
  );
};

export default OutlinedButton;
