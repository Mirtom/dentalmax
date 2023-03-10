import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Normalize} from '../../utils/normalize';
import colors from '../../constants/colors';

const DMText = ({
  children,
  color,
  size = Normalize(16),
  numberOfLines = undefined,
  style,
  bold,
  medium,
  secondary,
  alignCenter,
  onPress,
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
    textDecorationLine: onPress && 'underline',
    textAlign: alignCenter && 'center',
  };

  return !onPress ? (
    <Text
      style={StyleSheet.flatten([dynamicStyle, style])}
      numberOfLines={numberOfLines}>
      {children}
    </Text>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={StyleSheet.flatten([dynamicStyle, style])}
        numberOfLines={numberOfLines}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default DMText;
