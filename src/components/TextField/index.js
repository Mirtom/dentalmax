import React from 'react';
import style from './style';
import {TextInput, View} from 'react-native';

const DMTextField = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  small,
  icon,
  styles = {},
  keyboardType = 'default',
}) => {
  return (
    <View
      style={[
        styles,
        style.wrapper,
        small ? style.smallWidth : style.largeWidth,
      ]}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <TextInput
        style={style.input}
        onChangeText={onChangeText}
        value={value}
        autoCapitalize="none"
        placeholder={placeholder}
        keyboardType={keyboardType}
        placeholderTextColor="#BFBDC1"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default DMTextField;
