import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import styles from './styles';
import {LogoTopbar} from '../../assets';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../constants/colors';
import {Normalize} from '../../utils/normalize';

const Header = ({children, header = false}) => {
  return (
    <View style={styles.wrapper}>
      <Image source={LogoTopbar} style={{width: Normalize(130)}} />
      <MaterialIcons name="person" color={'#6E6B77'} size={Normalize(28)} />
    </View>
  );
};

export default Header;
