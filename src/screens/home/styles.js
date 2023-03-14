import {StyleSheet} from 'react-native';
import {DEVICE_HEIGHT, Normalize} from '../../utils/normalize';
import colors from '../../constants/colors';

export default StyleSheet.create({
  floatingBtn: {
    width: Normalize(130),
    position: 'absolute',
    bottom: Normalize(30),
    right: Normalize(20),
    shadowColor: colors.primaryGreen,
    shadowOffset: {
      width: 0,
      height: Normalize(5),
    },
    shadowOpacity: 0.5,
    shadowRadius: Normalize(10),
    elevation: 5,
  },
  mrg20: {
    marginHorizontal: Normalize(20),
  },
  wrapper: {
    marginTop: Normalize(2),
  },
  heading: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: Normalize(28),
    marginBottom: Normalize(28),
  },
});
