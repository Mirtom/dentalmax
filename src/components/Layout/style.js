import React from 'react';
import {StyleSheet} from 'react-native';
import {DEVICE_HEIGHT, DEVICE_WIDTH, Normalize} from '../../utils/normalize';
import colors from '../../constants/colors';
import {Navigation} from 'react-native-navigation';
const {statusBarHeight, topBarHeight} = Navigation.constantsSync();

export default StyleSheet.create({
  wrapper: {
    paddingTop: statusBarHeight,
    height: DEVICE_HEIGHT,
    width: DEVICE_WIDTH,
    backgroundColor: colors.backgroundColor,
  },
});
