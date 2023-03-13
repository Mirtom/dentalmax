import React from 'react';
import {View, StyleSheet} from 'react-native';
import styles from './styles';

const Header = ({children, header = false}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.shadow} />
    </View>
  );
};

export default Header;
