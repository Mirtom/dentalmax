import React from 'react';
import {View} from 'react-native';
import styles from './style';

const Layout = ({children}) => {
  return <View style={styles.wrapper}>{children}</View>;
};

export default Layout;
