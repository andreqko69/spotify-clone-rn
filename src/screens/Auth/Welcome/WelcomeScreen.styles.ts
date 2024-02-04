import { createStyleSheet } from 'react-native-unistyles';

const ICON_SIZE = 70;

const stylesheet = createStyleSheet({
  relativeContainer: {
    position: 'relative',
    height: '75%',
  },
  icon: {
    position: 'absolute',
    height: ICON_SIZE,
    width: ICON_SIZE,
    top: '50%',
    left: '50%',
    transform: [
      { translateX: -(ICON_SIZE / 2) },
      { translateY: -(ICON_SIZE / 2) },
    ],
  },
  mainText: {},
});

export default stylesheet;
