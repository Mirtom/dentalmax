import React from 'react';
import styles from './styles';
import {View} from 'react-native';
import {Button} from 'react-native-ui-lib';
import colors from '../../constants/colors';
import DMText from '../Text';
import {Normalize} from '../../utils/normalize';

const DMButton = ({secondary, style, small, label, icon, onPress}) => {
  const buttonColor = secondary ? colors.primaryDark : colors.primaryGreen;

  return (
    <Button
      iconSource={icon}
      label={
        <DMText color={'#FFF'} bold>
          {label}
        </DMText>
      }
      onPress={onPress}
      style={[
        styles.button,
        small ? styles.smallWidth : styles.largeWidth,
        style,
      ]}
      size={Button.sizes.medium}
      backgroundColor={buttonColor}
    />
  );
};

export default DMButton;
