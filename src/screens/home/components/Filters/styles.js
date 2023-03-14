import {StyleSheet} from 'react-native';
import {Normalize} from '../../../../utils/normalize';

export default StyleSheet.create({
  chip: {
    height: Normalize(32),
    paddingVertical: Normalize(8),
    paddingHorizontal: Normalize(12),
    marginRight: Normalize(8),
    borderRadius: Normalize(16),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  mrg20: {
    marginHorizontal: Normalize(20),
  },
  chipWrapper: {
    marginTop: Normalize(16),
    paddingLeft: Normalize(20),
  },
});
