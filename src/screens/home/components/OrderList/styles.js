import {StyleSheet} from 'react-native';
import {Normalize} from '../../../../utils/normalize';
import colors from '../../../../constants/colors';

export default StyleSheet.create({
  wrapper: {
    paddingHorizontal: Normalize(20),
    marginVertical: Normalize(40),
  },
  orderCard: {
    borderRadius: Normalize(16),
    width: '100%',
    minHeight: Normalize(112),
    backgroundColor: '#FFF',
    shadowColor: '#28242D1A',
    paddingHorizontal: Normalize(20),
    paddingVertical: Normalize(16),
    marginBottom: Normalize(12),
    shadowOffset: {
      width: 0,
      height: Normalize(5),
    },
    shadowOpacity: 0.5,
    shadowRadius: Normalize(10),
    elevation: 5,
  },
  statusBadge: {
    marginTop: Normalize(8),
    width: Normalize(12),
    height: Normalize(12),
    borderRadius: Normalize(6),
  },
  orderHead: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  patientName: {
    flexWrap: 'wrap',
    maxWidth: Normalize(275),
  },
  orderDetails: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Normalize(12),
    justifyContent: 'space-between',
  },
});
