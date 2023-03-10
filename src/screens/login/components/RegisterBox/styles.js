import {StyleSheet} from 'react-native';
import {Normalize} from '../../../../utils/normalize';

export default StyleSheet.create({
  formWrapper: {
    marginTop: Normalize(60),
    alignItems: 'center',
  },
  contact: {
    marginTop: Normalize(32),
    width: '100%',
  },
  contactRow: {
    marginTop: Normalize(16),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
