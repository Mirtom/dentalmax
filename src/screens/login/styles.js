import {StyleSheet} from 'react-native';
import {DEVICE_HEIGHT, Normalize} from '../../utils/normalize';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    marginHorizontal: Normalize(40),
  },
  logoWrapper: {
    paddingTop: Normalize(35),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: Normalize(35),
  },
  logoImage: {
    width: Normalize(225),
    height: Normalize(120),
  },
  formWrapper: {
    marginTop: Normalize(52),
    alignItems: 'center',
  },
  subText: {
    marginTop: Normalize(8),
  },
  SV: {
    paddingBottom: Normalize(32),
  },
});
