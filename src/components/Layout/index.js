import React from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './style';

const Layout = ({children}) => {
  return <SafeAreaView style={styles.wrapper}>{children}</SafeAreaView>;
};

export default Layout;
