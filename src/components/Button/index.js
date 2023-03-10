import React from 'react';
import styles from './styles';
import {View} from 'react-native';
import {Button} from 'react-native-ui-lib';
import colors from '../../constants/colors';
import DMText from '../Text';

const DMButton = ({secondary, style, small, label}) => {
  const buttonColor = secondary ? colors.primaryDark : colors.primaryGreen;

  return (
    <Button
      label={
        <DMText color={'#FFF'} bold>
          {label}
        </DMText>
      }
      style={[
        styles.button,
        style,
        small ? styles.smallWidth : styles.largeWidth,
      ]}
      size={Button.sizes.medium}
      backgroundColor={buttonColor}
    />
  );
};

export default DMButton;
