import {StyleSheet} from 'react-native';
import {Normalize} from '../../utils/normalize';

export default StyleSheet.create({
  wrapper: {
    paddingVertical: Normalize(12),
    paddingHorizontal: Normalize(16),
    borderColor: '#E9EBE7',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: Normalize(8),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  smallWidth: {
    width: Normalize(295),
  },
  largeWidth: {
    width: Normalize(335),
  },
  input: {
    height: Normalize(21),
    fontSize: Normalize(16),
    width: Normalize(225),
  },
});
