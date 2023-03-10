/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import styles from './styles';
import {TextInput, View} from 'react-native';
import {Checkbox} from 'react-native-ui-lib';
import colors from '../../constants/colors';

const DMCheckBox = ({
  color = colors.primaryGreen,
  value,
  onValueChange,
  children,
  style,
}) => {
  const [displayedColor, setDisplayedColor] = React.useState();

  React.useEffect(() => {
    setTimeout(
      () => {
        setDisplayedColor(value ? color : '#6E6B77');
      },
      !value ? 75 : 0,
    );
  }, [value]);

  return (
    <View style={[styles.wrapper, style]}>
      <Checkbox
        value={value}
        color={displayedColor}
        containerStyle={styles.checkbox}
        onValueChange={onValueChange}
      />
      {children}
    </View>
  );
};

export default DMCheckBox;
