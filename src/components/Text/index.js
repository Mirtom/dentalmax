import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Normalize} from '../../utils/normalize';
import colors from '../../constants/colors';

const DMText = ({
  children,
  color,
  size = Normalize(18),
  numberOfLines = undefined,
  style,
  bold,
  medium,
  secondary,
}) => {
  const dynamicStyle = {
    color: color
      ? color
      : secondary
      ? colors.secondaryDark
      : colors.primaryDark,
    fontSize: size,
    fontFamily: bold
      ? 'DINPro-Bold'
      : medium
      ? 'DINPro-Medium'
      : 'DINPro-Regular',
  };

  return (
    <Text
      style={StyleSheet.flatten([dynamicStyle, style])}
      numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

export default DMText;
