import {StyleSheet} from 'react-native';
import {Normalize} from '../../../../utils/normalize';

export default StyleSheet.create({
  formWrapper: {
    marginTop: Normalize(52),
    alignItems: 'center',
  },
  subText: {
    marginTop: Normalize(8),
  },
  errorText: {
    marginTop: Normalize(10),
    marginBottom: Normalize(-16),
  },
});
