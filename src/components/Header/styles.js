import React from 'react';
import {StyleSheet} from 'react-native';
import {Normalize} from '../../utils/normalize';
import {Navigation} from 'react-native-navigation';
const {statusBarHeight} = Navigation.constantsSync();

export default StyleSheet.create({
  wrapper: {
    height: Normalize(100),
    paddingTop: statusBarHeight,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: Normalize(28),
    borderBottomRightRadius: Normalize(28),
    shadowColor: '#28242D1A',
    shadowOffset: {
      width: 0,
      height: Normalize(5),
    },
    shadowOpacity: 1,
    shadowRadius: Normalize(10),
    elevation: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Normalize(20),
  },
});
