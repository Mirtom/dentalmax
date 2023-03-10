import {StyleSheet} from 'react-native';
import {Normalize} from '../../utils/normalize';

export default StyleSheet.create({
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: Normalize(12),
    borderRadius: 4,
  },
});
